import { readFile, writeFile, mkdir, readdir, stat, unlink } from 'fs/promises';
import path from 'path';
import { kv } from '@vercel/kv';

// In-memory cache for audit results (fallback for local development)
const auditCache = new Map<string, unknown>();

export async function getAuditResult(auditId: string) {
  try {
    // Try to get from Vercel KV first (production)
    let auditData: unknown = null;
    
    try {
      auditData = await kv.get(`audit:${auditId}`);
    } catch (error) {
      console.log(`Vercel KV not available, trying local cache: ${error}`);
    }
    
    // If not in KV, try local cache (development)
    if (!auditData) {
      auditData = auditCache.get(auditId);
    }
    
    // If not in cache, try to read from file (only works locally)
    if (!auditData) {
      try {
        // Only try file system on local development
        if (process.env.NODE_ENV === 'development') {
          const auditDir = path.join(process.cwd(), 'audit-results');
          const auditFile = path.join(auditDir, `${auditId}.json`);
          const fileContent = await readFile(auditFile, 'utf-8');
          auditData = JSON.parse(fileContent);
          
          // Cache it for faster access
          auditCache.set(auditId, auditData);
        } else {
          console.log(`Audit ${auditId} not found in KV or cache`);
          return null;
        }
      } catch (error) {
        console.log(`Could not read audit file for ${auditId}:`, error);
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
      try {
        await kv.del(`audit:${auditId}`);
      } catch (error) {
        console.log(`Could not delete expired audit from KV: ${error}`);
      }
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
    // Store in Vercel KV (production) with 7-day expiration
    try {
      await kv.setex(`audit:${auditId}`, 7 * 24 * 60 * 60, auditData); // 7 days in seconds
      console.log(`Audit ${auditId} stored in Vercel KV`);
    } catch (error) {
      console.log(`Vercel KV not available, using local cache: ${error}`);
    }
    
    // Store in local cache (development fallback)
    auditCache.set(auditId, auditData);
    
    // Store in file for persistence (only works locally)
    if (process.env.NODE_ENV === 'development') {
      try {
        const auditDir = path.join(process.cwd(), 'audit-results');
        await mkdir(auditDir, { recursive: true });
        
        const auditFile = path.join(auditDir, `${auditId}.json`);
        await writeFile(auditFile, JSON.stringify(auditData, null, 2));
        
        // Clean up old files (older than 7 days)
        setTimeout(async () => {
          try {
            const files = await readdir(auditDir);
            const now = new Date();
            
            for (const file of files) {
              if (file.endsWith('.json')) {
                const filePath = path.join(auditDir, file);
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
        }, 1000);
      } catch (error) {
        console.log('Could not write audit file (development only):', error);
      }
    }
    
  } catch (error) {
    console.error('Error storing audit result:', error);
  }
}
