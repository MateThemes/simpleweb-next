'use server'

import { Resend } from 'resend'
import ContactEmail from '@/emails/ContactEmail'
import { render } from '@react-email/render'
import { headers } from 'next/headers'
import { createHash } from 'crypto'
import dns from 'dns/promises'
import { appendFile } from 'fs/promises'
import path from 'path'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ErrorLog {
  timestamp: string;
  ip: string;
  error: string;
  formData?: {
    projectType?: string;
    budget?: string;
    timeline?: string;
  };
}

// Rate limiting with IP hashing for GDPR compliance
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_DURATION = 3600000 // 1 hour in milliseconds
const MAX_REQUESTS = 5 // Maximum requests per hour

// Hash IP addresses for GDPR compliance
function hashIP(ip: string): string {
  const salt = process.env.IP_SALT || crypto.randomUUID()
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
        projectType: formData.projectType as string | undefined,
        budget: formData.budget as string | undefined,
        timeline: formData.timeline as string | undefined,
      }
    })
  }

  try {
    const logDir = path.join(process.cwd(), 'logs')
    const today = new Date().toISOString().split('T')[0]
    const logFile = path.join(logDir, `form-errors-${today}.log`)
    
    await appendFile(
      logFile,
      JSON.stringify(log) + '\n',
      { flag: 'a' }
    )
    
    console.error('Form submission error:', log)
  } catch (err) {
    console.error('Failed to write to error log:', err instanceof Error ? err.message : String(err))
  }
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

export async function sendEmail(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  projectType: 'website' | 'shop' | 'seo' | 'marketing' | 'other'
  budget: '' | 'small' | 'medium' | 'large' | 'xlarge'
  timeline: '' | 'urgent' | 'month' | 'quarter' | 'flexible'
  description: string
  _honeypot: string
}) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    await logError('unknown', 'RESEND_API_KEY is not configured')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    // Get client IP
    const headersList = await headers()
    const forwardedFor = headersList.get('x-forwarded-for')
    const ip = forwardedFor?.split(',')[0].trim() || 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      await logError(ip, 'Rate limit exceeded')
      return { success: false, error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' }
    }

    // Check honeypot
    if (formData._honeypot) {
      await logError(ip, 'Honeypot detected', formData)
      return { success: false, error: 'Spam detected' }
    }

    // Check for spam patterns
    if (isSpam(formData.description) || 
        isSpam(formData.firstName) || 
        isSpam(formData.lastName) || 
        isSpam(formData.company)) {
      await logError(ip, 'Spam detected', formData)
      return { success: false, error: 'Spam detected' }
    }

    // Email domain validation
    const emailDomain = formData.email.split('@')[1]
    try {
      const addresses = await dns.resolveMx(emailDomain)
      if (!addresses || addresses.length === 0) {
        await logError(ip, 'Invalid email domain', formData)
        return { success: false, error: 'Ungültige E-Mail-Adresse' }
      }
    } catch {
      await logError(ip, 'Invalid email domain', formData)
      return { success: false, error: 'Ungültige E-Mail-Adresse' }
    }

    const emailHtml = await render(ContactEmail(formData))
    await resend.emails.send({
      from: 'SimpleWebDesign <no-reply@simplewebdesign.at>',
      to: ['info@simplewebdesign.at'],
      subject: `Neue Projektanfrage von ${formData.firstName} ${formData.lastName}`,
      html: emailHtml,
      text: `
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Telefon: ${formData.phone}
        Firma: ${formData.company}
        Projektart: ${formData.projectType}
        Budget: ${formData.budget}
        Zeitrahmen: ${formData.timeline}
        Beschreibung: ${formData.description}
      `,
    })

    return { success: true }
  } catch (error) {
    await logError('unknown', 'Failed to send email', formData)
    console.error('Failed to send email:', error)
    return { success: false, error: 'Failed to send email' }
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