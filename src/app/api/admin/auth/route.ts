import { NextRequest, NextResponse } from 'next/server';
import { createSession } from '@/lib/admin-auth';

// Server-side password validation (secure)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const EMERGENCY_PASSWORDS = [
  process.env.EMERGENCY_PASSWORD_1,
  process.env.EMERGENCY_PASSWORD_2,
  process.env.EMERGENCY_PASSWORD_3
].filter(Boolean);

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    if (!password) {
      return NextResponse.json(
        { error: 'Password required' },
        { status: 400 }
      );
    }
    
    // Check main password
    if (password === ADMIN_PASSWORD) {
      const { sessionToken, expires } = createSession(password);
      
      return NextResponse.json({ 
        success: true, 
        type: 'main',
        sessionToken,
        expires,
        message: 'Authentication successful' 
      });
    }
    
    // Check emergency passwords
    if (EMERGENCY_PASSWORDS.includes(password)) {
      const { sessionToken, expires } = createSession(password);
      
      return NextResponse.json({ 
        success: true, 
        type: 'emergency',
        sessionToken,
        expires,
        message: 'Emergency access granted - please change password' 
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 }
    );
    
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
