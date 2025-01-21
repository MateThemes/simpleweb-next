'use server'

import { Resend } from 'resend'
import ContactEmail from '@/emails/ContactEmail'
import { render } from '@react-email/render'

const resend = new Resend(process.env.RESEND_API_KEY)

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
}) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured')
    return { success: false, error: 'Email service not configured' }
  }

  try {
    console.log('Rendering email template...')
    const emailHtml = await render(ContactEmail(formData))

    console.log('Sending email via Resend...')
    const data = await resend.emails.send({
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

    console.log('Email sent successfully:', data)
    return { success: true, data }
  } catch (error) {
    // Log the full error object for debugging
    console.error('Detailed error sending email:', {
      error,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      errorStack: error instanceof Error ? error.stack : undefined,
    })

    // Return a more specific error message
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email'
    }
  }
}