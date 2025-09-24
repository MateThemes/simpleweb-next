import { readFile, writeFile, mkdir, readdir, stat, unlink } from 'fs/promises';
import path from 'path';
import { Redis } from '@upstash/redis';

// Initialize Redis client (only if credentials are available)
let redis: Redis | null = null;
if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  } catch (error) {
    console.log('Failed to initialize Redis client:', error);
  }
}

// In-memory cache for audit results (fallback for local development)
const auditCache = new Map<string, unknown>();

export async function getAuditResult(auditId: string) {
  try {
    // Try to get from Upstash Redis first (production)
    let auditData: unknown = null;
    
    if (redis) {
      try {
        auditData = await redis.get(`audit:${auditId}`);
        if (auditData) {
          console.log(`Audit ${auditId} found in Redis`);
          return auditData;
        }
      } catch (error) {
        console.log(`Upstash Redis not available, trying local cache: ${error}`);
      }
    }
    
    // If not in Redis, try local cache (development)
    if (!auditData) {
      auditData = auditCache.get(auditId);
      if (auditData) {
        console.log(`Audit ${auditId} found in local cache`);
        return auditData;
      }
    }
    
    // If not in cache, try to read from file (works in both dev and production)
    if (!auditData) {
      try {
        const auditDir = path.join(process.cwd(), 'audit-results');
        const auditFile = path.join(auditDir, `${auditId}.json`);
        const fileContent = await readFile(auditFile, 'utf-8');
        auditData = JSON.parse(fileContent);
        
        // Cache it for faster access
        auditCache.set(auditId, auditData);
        console.log(`Audit ${auditId} found in file system`);
        return auditData;
      } catch (error) {
        console.log(`Could not read audit file for ${auditId}:`, error);
        return null;
      }
    }
    
    // Check if audit is older than 7 days
    if (auditData && (auditData as { timestamp: string }).timestamp) {
      const auditDate = new Date((auditData as { timestamp: string }).timestamp);
      const now = new Date();
      const daysDiff = (now.getTime() - auditDate.getTime()) / (1000 * 60 * 60 * 24);
      
      if (daysDiff > 7) {
        // Clean up expired audit
        auditCache.delete(auditId);
        if (redis) {
          try {
            await redis.del(`audit:${auditId}`);
          } catch (error) {
            console.log(`Could not delete expired audit from Redis: ${error}`);
          }
        }
        return null;
      }
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
    // Store in Upstash Redis (production) with 7-day expiration
    if (redis) {
      try {
        await redis.setex(`audit:${auditId}`, 7 * 24 * 60 * 60, JSON.stringify(auditData)); // 7 days in seconds
        console.log(`Audit ${auditId} stored in Upstash Redis`);
      } catch (error) {
        console.log(`Upstash Redis not available, using local storage: ${error}`);
      }
    }
    
    // Store in local cache (always)
    auditCache.set(auditId, auditData);
    
    // Store in file for persistence (works in both dev and production)
    try {
      const auditDir = path.join(process.cwd(), 'audit-results');
      await mkdir(auditDir, { recursive: true });
      
      const auditFile = path.join(auditDir, `${auditId}.json`);
      await writeFile(auditFile, JSON.stringify(auditData, null, 2));
      console.log(`Audit ${auditId} stored in file system`);
      
      // Clean up old files (older than 7 days) - run in background
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
                console.log(`Cleaned up old audit file: ${file}`);
              }
            }
          }
        } catch (error) {
          console.error('Error cleaning up old audit files:', error);
        }
      }, 1000);
    } catch (error) {
      console.log('Could not write audit file:', error);
    }
    
  } catch (error) {
    console.error('Error storing audit result:', error);
  }
}
