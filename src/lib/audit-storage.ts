import { readFile, writeFile, mkdir, readdir, stat, unlink } from 'fs/promises';
import path from 'path';
import { Redis } from '@upstash/redis';

// Initialize Redis client (only if credentials are available)
let redis: Redis | null = null;
let redisAvailable = false;

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  try {
    redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
    
    // Test Redis connection
    redis.ping().then(() => {
      redisAvailable = true;
      console.log('[DEBUG] Redis client initialized and tested successfully');
    }).catch((error) => {
      console.log('[DEBUG] Redis connection test failed:', error);
      redisAvailable = false;
    });
  } catch (error) {
    console.log('[DEBUG] Failed to initialize Redis client:', error);
    redisAvailable = false;
  }
} else {
  console.log('[DEBUG] Redis credentials not available');
  console.log('[DEBUG] UPSTASH_REDIS_REST_URL:', process.env.UPSTASH_REDIS_REST_URL ? 'SET' : 'NOT SET');
  console.log('[DEBUG] UPSTASH_REDIS_REST_TOKEN:', process.env.UPSTASH_REDIS_REST_TOKEN ? 'SET' : 'NOT SET');
}

// In-memory cache for audit results (fallback for local development)
const auditCache = new Map<string, unknown>();

// Global audit storage for production (when Redis is not available)
// This will persist for the lifetime of the server instance
const globalAuditStorage = new Map<string, unknown>();

export async function getAuditResult(auditId: string) {
  console.log(`[DEBUG] getAuditResult called for: ${auditId}`);
  console.log(`[DEBUG] Environment: ${process.env.NODE_ENV}`);
  console.log(`[DEBUG] Redis available: ${redis ? 'YES' : 'NO'}`);
  console.log(`[DEBUG] Cache size: ${auditCache.size}`);
  
  try {
    // Try to get from local cache first (fastest)
    let auditData: unknown = null;
    
    auditData = auditCache.get(auditId);
    if (auditData) {
      console.log(`[DEBUG] Audit ${auditId} found in local cache`);
      return auditData;
    }
    console.log(`[DEBUG] Audit ${auditId} NOT found in local cache`);
    
    // Try to get from Upstash Redis (production) - only if Redis is available
    if (redis && redisAvailable) {
      try {
        console.log(`[DEBUG] Trying to get ${auditId} from Redis...`);
        auditData = await redis.get(`audit:${auditId}`);
        if (auditData) {
          console.log(`[DEBUG] Audit ${auditId} found in Redis`);
          // Cache it locally for faster access
          auditCache.set(auditId, auditData);
          return auditData;
        }
        console.log(`[DEBUG] Audit ${auditId} NOT found in Redis`);
      } catch (error) {
        console.log(`[DEBUG] Redis error: ${error}`);
        redisAvailable = false; // Mark Redis as unavailable
      }
    } else {
      console.log(`[DEBUG] Redis not available or not tested`);
    }
    
    // If not in cache or Redis, try global storage
    if (!auditData) {
      auditData = globalAuditStorage.get(auditId);
      if (auditData) {
        console.log(`[DEBUG] Audit ${auditId} found in global storage`);
        // Cache it for faster access
        auditCache.set(auditId, auditData);
        return auditData;
      }
      console.log(`[DEBUG] Audit ${auditId} not found in Redis, cache, or global storage`);
      return null;
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
  console.log(`[DEBUG] storeAuditResult called for: ${auditId}`);
  console.log(`[DEBUG] Environment: ${process.env.NODE_ENV}`);
  console.log(`[DEBUG] Redis available: ${redis ? 'YES' : 'NO'}`);
  
  try {
    // Store in local cache first (always available)
    auditCache.set(auditId, auditData);
    console.log(`[DEBUG] Audit ${auditId} stored in local cache`);
    
    // Store in global storage (always available)
    globalAuditStorage.set(auditId, auditData);
    console.log(`[DEBUG] Audit ${auditId} stored in global storage`);
    
    // Clean up old entries from global storage (keep only last 100)
    if (globalAuditStorage.size > 100) {
      const entries = Array.from(globalAuditStorage.entries());
      // Sort by timestamp and keep only the 100 most recent
      const sortedEntries = entries.sort((a, b) => {
        const aTime = new Date((a[1] as { timestamp: string }).timestamp).getTime();
        const bTime = new Date((b[1] as { timestamp: string }).timestamp).getTime();
        return bTime - aTime;
      });
      
      globalAuditStorage.clear();
      sortedEntries.slice(0, 100).forEach(([key, value]) => {
        globalAuditStorage.set(key, value);
      });
      console.log(`[DEBUG] Cleaned up global storage, kept ${globalAuditStorage.size} entries`);
    }
    
    // Store in Upstash Redis (production) with 7-day expiration - only if Redis is available
    if (redis && redisAvailable) {
      try {
        console.log(`[DEBUG] Storing ${auditId} in Redis...`);
        await redis.setex(`audit:${auditId}`, 7 * 24 * 60 * 60, JSON.stringify(auditData)); // 7 days in seconds
        console.log(`[DEBUG] Audit ${auditId} stored in Upstash Redis`);
      } catch (error) {
        console.log(`[DEBUG] Redis storage error: ${error}`);
        redisAvailable = false; // Mark Redis as unavailable
      }
    } else {
      console.log(`[DEBUG] Redis not available or not tested, using global storage only`);
    }
    
    // Store in file for persistence (only in development)
    if (process.env.NODE_ENV === 'development') {
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
    }
    
  } catch (error) {
    console.error('Error storing audit result:', error);
  }
}
