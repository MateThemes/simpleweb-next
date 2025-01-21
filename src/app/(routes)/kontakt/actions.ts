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
  try {
    const emailHtml = await render(ContactEmail(formData))

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
    return { success: true, data }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}