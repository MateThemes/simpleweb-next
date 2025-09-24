import { NextRequest } from 'next/server';

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

// Create session
export function createSession(password: string): { sessionToken: string; expires: number } {
  const sessionToken = crypto.randomUUID();
  const expires = Date.now() + SESSION_DURATION;
  
  sessions.set(sessionToken, { expires, password });
  
  return { sessionToken, expires };
}
