import { NextRequest, NextResponse } from 'next/server';

// Server-side password validation (secure)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
const EMERGENCY_PASSWORDS = [
  process.env.EMERGENCY_PASSWORD_1,
  process.env.EMERGENCY_PASSWORD_2,
  process.env.EMERGENCY_PASSWORD_3
].filter(Boolean);

// Session management
const sessions = new Map<string, { expires: number; password: string }>();
const SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours


// Clean up expired sessions
function cleanupSessions() {
  const now = Date.now();
  for (const [token, session] of sessions.entries()) {
    if (session.expires < now) {
      sessions.delete(token);
    }
  }
}

// Validate session token
export function validateSession(request: NextRequest): boolean {
  cleanupSessions();
  
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  
  const sessionToken = authHeader.substring(7);
  const session = sessions.get(sessionToken);
  
  if (!session || session.expires < Date.now()) {
    sessions.delete(sessionToken);
    return false;
  }
  
  return true;
}

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
      // Generate secure session token
      const sessionToken = crypto.randomUUID();
      const expires = Date.now() + SESSION_DURATION;
      
      sessions.set(sessionToken, { expires, password });
      
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
      // Generate secure session token
      const sessionToken = crypto.randomUUID();
      const expires = Date.now() + SESSION_DURATION;
      
      sessions.set(sessionToken, { expires, password });
      
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
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
