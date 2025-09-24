import { NextRequest, NextResponse } from 'next/server';
import { getAuditResult } from '@/lib/audit-storage';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: auditId } = await params;
    const auditData = await getAuditResult(auditId);
    
    if (!auditData) {
      return NextResponse.json(
        { error: 'Audit result not found or expired' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(auditData);
  } catch (error) {
    console.error('Error fetching audit result:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
