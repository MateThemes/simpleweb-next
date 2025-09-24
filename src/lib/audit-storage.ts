import { readFile, writeFile, mkdir, readdir, stat, unlink } from 'fs/promises';
import path from 'path';

// In-memory cache for audit results (in production, use Redis or database)
const auditCache = new Map<string, unknown>();

export async function getAuditResult(auditId: string) {
  try {
    // Try to get from cache first
    let auditData = auditCache.get(auditId);
    
    // If not in cache, try to read from file
    if (!auditData) {
      try {
        const logDir = path.join(process.cwd(), 'logs');
        const auditFile = path.join(logDir, `audit-${auditId}.json`);
        const fileContent = await readFile(auditFile, 'utf-8');
        auditData = JSON.parse(fileContent);
        
        // Cache it for faster access
        auditCache.set(auditId, auditData);
      } catch (error) {
        return null;
      }
    }
    
    // Check if audit is older than 7 days
    const auditDate = new Date((auditData as { timestamp: string }).timestamp);
    const now = new Date();
    const daysDiff = (now.getTime() - auditDate.getTime()) / (1000 * 60 * 60 * 24);
    
    if (daysDiff > 7) {
      // Clean up expired audit
      auditCache.delete(auditId);
      return null;
    }
    
    return auditData;
  } catch (error) {
    console.error('Error fetching audit result:', error);
    return null;
  }
}

// Store audit result
export async function storeAuditResult(auditId: string, auditData: unknown) {
  try {
    // Store in cache
    auditCache.set(auditId, auditData);
    
    // Store in file for persistence
    const logDir = path.join(process.cwd(), 'logs');
    await mkdir(logDir, { recursive: true });
    
    const auditFile = path.join(logDir, `audit-${auditId}.json`);
    await writeFile(auditFile, JSON.stringify(auditData, null, 2));
    
    // Clean up old files (older than 7 days)
    setTimeout(async () => {
      try {
        const files = await readdir(logDir);
        const now = new Date();
        
        for (const file of files) {
          if (file.startsWith('audit-') && file.endsWith('.json')) {
            const filePath = path.join(logDir, file);
            const stats = await stat(filePath);
            const fileAge = (now.getTime() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);
            
            if (fileAge > 7) {
              await unlink(filePath);
            }
          }
        }
      } catch (error) {
        console.error('Error cleaning up old audit files:', error);
      }
    }, 0);
    
  } catch (error) {
    console.error('Error storing audit result:', error);
  }
}
