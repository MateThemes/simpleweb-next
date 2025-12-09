import { NextRequest, NextResponse } from 'next/server'
import { getAuditResult } from '@/lib/audit-storage'
import { validateSession } from '@/lib/admin-auth'

// Type definition for audit data
interface AuditData {
  timestamp?: string
  email?: string
  auditUrl?: string
  newsletter?: boolean
  psiResults?: {
    performanceScore?: number
    mobileScore?: number
    desktopScore?: number
  }
  pageAnalysis?: {
    seoScore?: number
    accessibilityScore?: number
    bestPracticesScore?: number
  }
}

// Simple rate limit to avoid abuse of the listing endpoint
const auditRate = new Map<string, { count: number; ts: number }>()
const AUDIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const AUDIT_MAX = 60

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  return forwardedFor?.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown'
}

function checkAuditRateLimit(ip: string): boolean {
  const now = Date.now()
  const rec = auditRate.get(ip)
  if (!rec || now - rec.ts > AUDIT_WINDOW_MS) {
    auditRate.set(ip, { count: 1, ts: now })
    return true
  }
  if (rec.count >= AUDIT_MAX) return false
  rec.count += 1
  return true
}

export async function GET(request: NextRequest) {
  try {
    // Validate session token
    if (!validateSession(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 },
      )
    }

    // Rate limit
    const ip = getClientIp(request)
    if (!checkAuditRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests' },
        { status: 429 },
      )
    }

    // Get all audit IDs from Redis/file storage
    const { getAllAuditIds } = await import('@/lib/audit-storage')
    const auditIds = await getAllAuditIds()
    
    console.log(`[DEBUG] Found ${auditIds.length} audit IDs in storage`)
    
    const allLogs: Array<{ timestamp: string; [key: string]: unknown }> = []
    
    // Fetch each audit result
    for (const auditId of auditIds) {
      try {
        const auditData = await getAuditResult(auditId)
        if (auditData) {
          // Transform audit data to log format
          const audit = auditData as AuditData
          const logEntry = {
            timestamp: audit.timestamp || new Date().toISOString(),
            email: audit.email || '',
            url: audit.auditUrl || '',
            score: audit.psiResults?.performanceScore || 0,
            newsletter: audit.newsletter || false,
            leadId: auditId,
            // Add more fields as needed
            mobileScore: audit.psiResults?.mobileScore || 0,
            desktopScore: audit.psiResults?.desktopScore || 0,
            seoScore: audit.pageAnalysis?.seoScore || 0,
            accessibilityScore: audit.pageAnalysis?.accessibilityScore || 0,
            bestPracticesScore: audit.pageAnalysis?.bestPracticesScore || 0,
          }
          allLogs.push(logEntry)
        }
      } catch (error) {
        console.error(`Error fetching audit ${auditId}:`, error)
      }
    }
    
    // Sort by timestamp descending (newest first)
    allLogs.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    )
      
    // Parse query parameters for filtering
    const searchParams = request.nextUrl.searchParams
    const email = searchParams.get('email')
    const url = searchParams.get('url')
    const score = searchParams.get('score')
    const newsletter = searchParams.get('newsletter')
    const limit = searchParams.get('limit')
    
    let filteredLogs = allLogs;
    
    // Filter by email
    if (email) {
      filteredLogs = filteredLogs.filter(log => 
        log.email && typeof log.email === 'string' && log.email.toLowerCase().includes(email.toLowerCase())
      );
    }
    
    // Filter by URL
    if (url) {
      filteredLogs = filteredLogs.filter(log => 
        log.url && typeof log.url === 'string' && log.url.toLowerCase().includes(url.toLowerCase())
      );
    }
    
    // Filter by score
    if (score) {
      const scoreNum = parseInt(score);
      filteredLogs = filteredLogs.filter(log => 
        typeof log.score === 'number' && log.score >= scoreNum
      );
    }
    
    // Filter by newsletter
    if (newsletter !== null) {
      const newsletterBool = newsletter === 'true';
      filteredLogs = filteredLogs.filter(log => 
        typeof log.newsletter === 'boolean' && log.newsletter === newsletterBool
      );
    }
    
    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit)
      filteredLogs = filteredLogs.slice(0, limitNum)
    }
    
    return NextResponse.json({ 
      logs: filteredLogs,
      total: allLogs.length,
      filtered: filteredLogs.length,
    })
    
  } catch (error) {
    console.error('Error in audit logs API:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
