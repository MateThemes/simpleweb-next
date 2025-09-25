import { writeFile, mkdir, readdir, stat, unlink } from 'fs/promises';
import path from 'path';
import { Redis } from '@upstash/redis';

// Initialize Redis client (only if credentials are available)
let redis: Redis | null = null;
let redisAvailable = false;

// Try Vercel Upstash integration variables first, then fallback to manual ones
const redisUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

if (redisUrl && redisToken) {
  try {
    redis = new Redis({
      url: redisUrl,
      token: redisToken,
    });
    
    // Test Redis connection synchron
    try {
      await redis.ping();
      redisAvailable = true;
      console.log('[DEBUG] Redis client initialized and tested successfully');
    } catch (error) {
      console.log('[DEBUG] Redis connection test failed:', error);
      redisAvailable = false;
    }
  } catch (error) {
    console.log('[DEBUG] Failed to initialize Redis client:', error);
    redisAvailable = false;
  }
} else {
  console.log('[DEBUG] Redis credentials not available');
  console.log('[DEBUG] KV_REST_API_URL:', process.env.KV_REST_API_URL ? 'SET' : 'NOT SET');
  console.log('[DEBUG] KV_REST_API_TOKEN:', process.env.KV_REST_API_TOKEN ? 'SET' : 'NOT SET');
  console.log('[DEBUG] UPSTASH_REDIS_REST_URL:', process.env.UPSTASH_REDIS_REST_URL ? 'SET' : 'NOT SET');
  console.log('[DEBUG] UPSTASH_REDIS_REST_TOKEN:', process.env.UPSTASH_REDIS_REST_TOKEN ? 'SET' : 'NOT SET');
}

// In-memory cache for audit results (fallback for local development)
const auditCache = new Map<string, unknown>();

// Simple file-based storage for Vercel (works in production)
const AUDIT_STORAGE_FILE = '/tmp/audit-storage.json';

async function loadAuditStorage(): Promise<Map<string, unknown>> {
  try {
    const fs = await import('fs/promises');
    const data = await fs.readFile(AUDIT_STORAGE_FILE, 'utf-8');
    const parsed = JSON.parse(data);
    return new Map(Object.entries(parsed));
  } catch {
    return new Map();
  }
}

async function saveAuditStorage(storage: Map<string, unknown>): Promise<void> {
  try {
    const fs = await import('fs/promises');
    const data = Object.fromEntries(storage);
    await fs.writeFile(AUDIT_STORAGE_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.warn('Failed to save audit storage:', error);
  }
}

// Get all audit IDs from storage
export async function getAllAuditIds(): Promise<string[]> {
  const auditIds: string[] = [];
  
  try {
    // Try Redis first
    if (redis && redisAvailable) {
      try {
        const keys = await redis.keys('audit:*');
        const ids = keys.map(key => key.replace('audit:', ''));
        auditIds.push(...ids);
        console.log(`[DEBUG] Found ${ids.length} audit IDs in Redis`);
      } catch (error) {
        console.log(`[DEBUG] Error getting Redis keys:`, error);
      }
    }
    
    // Try file storage
    try {
      const fileData = await loadAuditStorage();
      const fileIds = Object.keys(fileData);
      auditIds.push(...fileIds);
      console.log(`[DEBUG] Found ${fileIds.length} audit IDs in file storage`);
    } catch (error) {
      console.log(`[DEBUG] Error loading file storage:`, error);
    }
    
    // Remove duplicates and return
    const uniqueIds = [...new Set(auditIds)];
    console.log(`[DEBUG] Total unique audit IDs: ${uniqueIds.length}`);
    return uniqueIds;
    
  } catch (error) {
    console.error(`[DEBUG] Error getting all audit IDs:`, error);
    return [];
  }
}

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
    
    // If not in cache or Redis, try file-based storage
    if (!auditData) {
      try {
        const fileStorage = await loadAuditStorage();
        auditData = fileStorage.get(auditId);
        if (auditData) {
          console.log(`[DEBUG] Audit ${auditId} found in file storage`);
          // Cache it for faster access
          auditCache.set(auditId, auditData);
          return auditData;
        }
      } catch (error) {
        console.warn(`[DEBUG] Failed to load file storage:`, error);
      }
      
      console.log(`[DEBUG] Audit ${auditId} not found in Redis, cache, or file storage`);
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
    
    // Store in file-based storage (works in Vercel)
    try {
      const fileStorage = await loadAuditStorage();
      fileStorage.set(auditId, auditData);
      await saveAuditStorage(fileStorage);
      console.log(`[DEBUG] Audit ${auditId} stored in file storage`);
    } catch (error) {
      console.warn(`[DEBUG] Failed to store in file storage:`, error);
    }
    
    // Clean up old entries from file storage (keep only last 100)
    try {
      const fileStorage = await loadAuditStorage();
      if (fileStorage.size > 100) {
        const entries = Array.from(fileStorage.entries());
        // Sort by timestamp and keep only the 100 most recent
        const sortedEntries = entries.sort((a, b) => {
          const aTime = new Date((a[1] as { timestamp: string }).timestamp).getTime();
          const bTime = new Date((b[1] as { timestamp: string }).timestamp).getTime();
          return bTime - aTime;
        });
        
        const cleanedStorage = new Map(sortedEntries.slice(0, 100));
        await saveAuditStorage(cleanedStorage);
        console.log(`[DEBUG] Cleaned up file storage, kept ${cleanedStorage.size} entries`);
      }
    } catch (error) {
      console.warn(`[DEBUG] Failed to cleanup file storage:`, error);
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
      console.log(`[DEBUG] Redis not available (redis: ${!!redis}, redisAvailable: ${redisAvailable}), using file storage only`);
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
