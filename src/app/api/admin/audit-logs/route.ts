import { NextRequest, NextResponse } from 'next/server';
import { readFile, readdir } from 'fs/promises';
import path from 'path';
import { validateSession } from '../auth/route';

export async function GET(request: NextRequest) {
  try {
    // Validate session token
    if (!validateSession(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const logDir = path.join(process.cwd(), 'logs');
    
    try {
      // Read all audit log files
      const files = await readdir(logDir);
      const auditFiles = files.filter(f => f.startsWith('seo-audit-') && f.endsWith('.log'));
      
      const allLogs: Array<{ timestamp: string; [key: string]: unknown }> = [];
      
      for (const file of auditFiles) {
        try {
          const content = await readFile(path.join(logDir, file), 'utf-8');
          const logs = content.split('\n')
            .filter(line => line.trim())
            .map(line => {
              try {
                return JSON.parse(line);
              } catch {
                return null;
              }
            })
            .filter(Boolean);
          
          allLogs.push(...logs);
        } catch (fileError) {
          console.error(`Error reading file ${file}:`, fileError);
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
      
    } catch (dirError) {
      // If logs directory doesn't exist, return empty array
      return NextResponse.json({ 
        logs: [],
        total: 0,
        filtered: 0
      });
    }
    
  } catch (error) {
    console.error('Error in audit logs API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
