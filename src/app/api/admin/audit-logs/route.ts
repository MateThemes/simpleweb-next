import { NextRequest, NextResponse } from 'next/server';
import { validateSession } from '@/lib/admin-auth';
import { getAuditResult } from '@/lib/audit-storage';

export async function GET(request: NextRequest) {
  try {
    // Validate session token (temporarily disabled for debugging)
    // if (!validateSession(request)) {
    //   return NextResponse.json(
    //     { error: 'Unauthorized' },
    //     { status: 401 }
    //   );
    // }

    // Get all audit IDs from Redis/file storage
    const { getAllAuditIds } = await import('@/lib/audit-storage');
    const auditIds = await getAllAuditIds();
    
    console.log(`[DEBUG] Found ${auditIds.length} audit IDs in storage`);
    
    const allLogs: Array<{ timestamp: string; [key: string]: unknown }> = [];
    
    // Fetch each audit result
    for (const auditId of auditIds) {
      try {
        const auditData = await getAuditResult(auditId);
        if (auditData) {
          // Transform audit data to log format
          const logEntry = {
            timestamp: auditData.timestamp,
            email: auditData.email,
            url: auditData.auditUrl,
            score: auditData.psiResults?.performanceScore || 0,
            newsletter: auditData.newsletter || false,
            leadId: auditId,
            // Add more fields as needed
            mobileScore: auditData.psiResults?.mobileScore || 0,
            desktopScore: auditData.psiResults?.desktopScore || 0,
            seoScore: auditData.pageAnalysis?.seoScore || 0,
            accessibilityScore: auditData.pageAnalysis?.accessibilityScore || 0,
            bestPracticesScore: auditData.pageAnalysis?.bestPracticesScore || 0
          };
          allLogs.push(logEntry);
        }
      } catch (error) {
        console.error(`Error fetching audit ${auditId}:`, error);
      }
    }
    
    // Sort by timestamp descending (newest first)
    allLogs.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
      
    // Parse query parameters for filtering
    const searchParams = request.nextUrl.searchParams;
    const email = searchParams.get('email');
    const url = searchParams.get('url');
    const score = searchParams.get('score');
    const newsletter = searchParams.get('newsletter');
    const limit = searchParams.get('limit');
    
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
      const limitNum = parseInt(limit);
      filteredLogs = filteredLogs.slice(0, limitNum);
    }
    
    return NextResponse.json({ 
      logs: filteredLogs,
      total: allLogs.length,
      filtered: filteredLogs.length
    });
    
  } catch (error) {
    console.error('Error in audit logs API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
