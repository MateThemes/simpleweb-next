import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { render } from '@react-email/render'
import { headers } from 'next/headers'
import { createHash, randomUUID } from 'crypto'
import dns from 'dns/promises'
import { appendFile } from 'fs/promises'
import path from 'path'
import KIAutomatisierungLeadEmail from '@/emails/KIAutomatisierungLeadEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

interface LeadFormData {
  name: string
  email: string
  company: string
  phone?: string
  message: string
  _honeypot?: string
}

interface ErrorLog {
  timestamp: string
  ip: string
  error: string
  formData?: {
    name?: string
    email?: string
    company?: string
  }
}

// Rate limiting with IP hashing for GDPR compliance
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_DURATION = 3600000 // 1 hour in milliseconds
const MAX_REQUESTS = 5 // Maximum requests per hour

// Hash IP addresses for GDPR compliance
function hashIP(ip: string): string {
  const salt = process.env.IP_SALT || randomUUID()
  return createHash('sha256').update(ip + salt).digest('hex')
}

async function logError(ip: string, error: string, formData?: Record<string, unknown>) {
  const hashedIp = hashIP(ip)
  const log: ErrorLog = {
    timestamp: new Date().toISOString(),
    ip: hashedIp,
    error,
    ...(formData && {
      formData: {
        name: formData.name as string | undefined,
        email: formData.email as string | undefined,
        company: formData.company as string | undefined,
      },
    }),
  }

  try {
    const logDir = path.join(process.cwd(), 'logs')
    const today = new Date().toISOString().split('T')[0]
    const logFile = path.join(logDir, `ki-automatisierung-errors-${today}.log`)
    
    await appendFile(
      logFile,
      JSON.stringify(log) + '\n',
      { flag: 'a' }
    )
    
    console.error('KI-Automatisierung form submission error:', log)
  } catch (err) {
    console.error('Failed to write to error log:', err instanceof Error ? err.message : String(err))
  }
}

function checkRateLimit(ip: string): boolean {
  const hashedIP = hashIP(ip)
  const now = Date.now()
  const userLimit = rateLimitMap.get(hashedIP)

  if (!userLimit) {
    rateLimitMap.set(hashedIP, { count: 1, timestamp: now })
    return true
  }

  if (now - userLimit.timestamp > RATE_LIMIT_DURATION) {
    rateLimitMap.set(hashedIP, { count: 1, timestamp: now })
    return true
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return false
  }

  userLimit.count++
  return true
}

// Spam detection patterns
const spamPatterns = [
  /^(?=.*[A-Z].*[A-Z].*[A-Z].*[A-Z])[^a-z]*$/, // All caps
  /\b(?:viagra|casino|porn|xxx)\b/i,            // Spam keywords
  /<[^>]*>|\[url\]|\[link\]/i,                  // HTML or BBCode
  /(?:https?:\/\/[^\s]+){2,}/                   // Multiple URLs
]

function isSpam(text: string): boolean {
  return spamPatterns.some(pattern => pattern.test(text))
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.company || !body.message) {
      return NextResponse.json(
        { error: 'Name, E-Mail, Unternehmen und Nachricht sind erforderlich.' },
        { status: 400 }
      )
    }

    // Get client IP
    const headersList = await headers()
    const forwardedFor = headersList.get('x-forwarded-for')
    const ip = forwardedFor?.split(',')[0].trim() || request.headers.get('x-real-ip') || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      await logError(ip, 'Rate limit exceeded')
      return NextResponse.json(
        { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
        { status: 429 }
      )
    }

    // Check honeypot
    if (body._honeypot) {
      await logError(ip, 'Honeypot detected', body as unknown as Record<string, unknown>)
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }

    // Check for spam patterns
    if (
      isSpam(body.message) ||
      isSpam(body.name) ||
      isSpam(body.company)
    ) {
      await logError(ip, 'Spam detected', body as unknown as Record<string, unknown>)
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      await logError(ip, 'Invalid email format', body as unknown as Record<string, unknown>)
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse.' },
        { status: 400 }
      )
    }

    // Email domain validation
    const emailDomain = body.email.split('@')[1]
    try {
      const addresses = await dns.resolveMx(emailDomain)
      if (!addresses || addresses.length === 0) {
        await logError(ip, 'Invalid email domain', body as unknown as Record<string, unknown>)
        return NextResponse.json(
          { error: 'Ungültige E-Mail-Adresse.' },
          { status: 400 }
        )
      }
    } catch {
      await logError(ip, 'Invalid email domain', body as unknown as Record<string, unknown>)
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse.' },
        { status: 400 }
      )
    }

    // Prepare lead data for Make.com webhook and email
    const leadData = {
      name: body.name,
      email: body.email,
      company: body.company,
      phone: body.phone || '',
      message: body.message,
      timestamp: new Date().toISOString(),
      source: 'ki-automatisierung',
      ip: hashIP(ip), // Hashed IP for GDPR compliance
    }

    // Send to Make.com webhook if configured
    if (process.env.MAKE_WEBHOOK_URL) {
      try {
        const webhookResponse = await fetch(process.env.MAKE_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        })

        if (!webhookResponse.ok) {
          console.error('Make.com webhook error:', webhookResponse.status, await webhookResponse.text())
          await logError(ip, `Make.com webhook failed: ${webhookResponse.status}`, body as unknown as Record<string, unknown>)
        } else {
          console.log('KI-Automatisierung Lead sent to Make.com:', {
            name: body.name,
            email: body.email,
            timestamp: leadData.timestamp,
          })
        }
      } catch (webhookError) {
        console.error('Failed to send to Make.com webhook:', webhookError)
        await logError(ip, 'Make.com webhook error', body as unknown as Record<string, unknown>)
        // Continue even if webhook fails - try email fallback
      }
    }

    // Send email if RESEND_API_KEY is configured (fallback if Make.com handles email)
    // You can disable this if Make.com sends all emails
    if (process.env.RESEND_API_KEY && !process.env.MAKE_WEBHOOK_URL) {
      try {
        const emailHtml = await render(
          KIAutomatisierungLeadEmail({
            name: body.name,
            email: body.email,
            company: body.company,
            phone: body.phone,
            message: body.message,
          })
        )

        await resend.emails.send({
          from: 'SimpleWebDesign <no-reply@simplewebdesign.at>',
          to: ['gerald@simplewebdesign.at'],
          subject: `Neue KI-Automatisierung Anfrage von ${body.name}`,
          html: emailHtml,
          text: `
            Neue KI-Automatisierung Anfrage
            
            Name: ${body.name}
            E-Mail: ${body.email}
            ${body.phone ? `Telefon: ${body.phone}` : ''}
            Unternehmen: ${body.company}
            
            Automatisierungspotenzial:
            ${body.message}
          `,
        })

        console.log('KI-Automatisierung Lead email sent:', {
          name: body.name,
          email: body.email,
          company: body.company,
          timestamp: new Date().toISOString(),
        })
      } catch (emailError) {
        console.error('Failed to send KI-Automatisierung lead email:', emailError)
        await logError(ip, 'Email send failed', body as unknown as Record<string, unknown>)
      }
    } else if (!process.env.MAKE_WEBHOOK_URL) {
      // Log lead even if email is not configured
      console.log('KI-Automatisierung Lead (no webhook/email configured):', leadData)
    }

    // Return success response
    return NextResponse.json(
      { ok: true, message: 'Vielen Dank für Ihr Interesse. Wir melden uns in Kürze.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing KI-Automatisierung lead:', error)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}
