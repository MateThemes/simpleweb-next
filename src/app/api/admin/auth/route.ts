import { NextRequest, NextResponse } from 'next/server'
import { createSession } from '@/lib/admin-auth'

// Fail closed if admin password is not configured
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
const EMERGENCY_PASSWORDS = [
  process.env.EMERGENCY_PASSWORD_1,
  process.env.EMERGENCY_PASSWORD_2,
  process.env.EMERGENCY_PASSWORD_3,
].filter(Boolean) as string[]

// Very small in-memory rate limiter (per IP) to slow brute force
const loginAttempts = new Map<string, { count: number; ts: number }>()
const LOGIN_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const LOGIN_MAX_ATTEMPTS = 20

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  return forwardedFor?.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown'
}

function checkLoginRateLimit(ip: string): boolean {
  const now = Date.now()
  const rec = loginAttempts.get(ip)
  if (!rec || now - rec.ts > LOGIN_WINDOW_MS) {
    loginAttempts.set(ip, { count: 1, ts: now })
    return true
  }
  if (rec.count >= LOGIN_MAX_ATTEMPTS) return false
  rec.count += 1
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)
    if (!checkLoginRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many attempts. Try later.' }, { status: 429 })
    }

    if (!ADMIN_PASSWORD) {
      return NextResponse.json(
        { error: 'Admin password not configured' },
        { status: 500 },
      )
    }

    const { password } = await request.json()

    if (!password) {
      return NextResponse.json({ error: 'Password required' }, { status: 400 })
    }

    // Check main password
    if (password === ADMIN_PASSWORD) {
      const { sessionToken, expires } = createSession(password)

      return NextResponse.json({
        success: true,
        type: 'main',
        sessionToken,
        expires,
        message: 'Authentication successful',
      })
    }

    // Check emergency passwords
    if (EMERGENCY_PASSWORDS.includes(password)) {
      const { sessionToken, expires } = createSession(password)

      return NextResponse.json({
        success: true,
        type: 'emergency',
        sessionToken,
        expires,
        message: 'Emergency access granted - please change password',
      })
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
