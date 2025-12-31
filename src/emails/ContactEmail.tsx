import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface ContactEmailProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  projectType: 'website' | 'shop' | 'seo' | 'marketing' | 'other'
  budget: '' | 'unclear' | 'small' | 'medium' | 'large' | 'xlarge'
  timeline: '' | 'urgent' | 'month' | 'quarter' | 'flexible'
  description: string
}

const budgetMap: Record<Exclude<ContactEmailProps['budget'], ''>, string> = {
  unclear: 'Noch unklar',
  small: 'Bis 2.000 €',
  medium: '2.000 € - 5.000 €',
  large: '5.000 € - 10.000 €',
  xlarge: 'Über 10.000 €',
}

const timelineMap: Record<Exclude<ContactEmailProps['timeline'], ''>, string> = {
  urgent: 'So schnell wie möglich',
  month: 'Innerhalb eines Monats',
  quarter: 'Innerhalb von 3 Monaten',
  flexible: 'Flexibel',
}

const projectTypeMap: Record<ContactEmailProps['projectType'], string> = {
  website: 'Webseite',
  shop: 'Online-Shop',
  seo: 'SEO-Optimierung',
  marketing: 'Online-Marketing',
  other: 'Sonstiges',
}

export default function ContactEmail({
  firstName,
  lastName,
  email,
  phone,
  company,
  projectType,
  budget,
  timeline,
  description,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Neue Projektanfrage von {firstName} {lastName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Neue Projektanfrage</Heading>
          
          <Section style={section}>
            <Heading style={h2}>Kontaktinformationen</Heading>
            <Text style={text}>
              <strong>Name:</strong> {firstName} {lastName}
            </Text>
            <Text style={text}>
              <strong>E-Mail:</strong> {email}
            </Text>
            {phone && (
              <Text style={text}>
                <strong>Telefon:</strong> {phone}
              </Text>
            )}
            {company && (
              <Text style={text}>
                <strong>Firma:</strong> {company}
              </Text>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading style={h2}>Projektdetails</Heading>
            <Text style={text}>
              <strong>Projektart:</strong> {projectTypeMap[projectType]}
            </Text>
            {budget && (
              <Text style={text}>
                <strong>Budget:</strong> {budget ? budgetMap[budget] : ''}
              </Text>
            )}
            {timeline && (
              <Text style={text}>
                <strong>Zeitrahmen:</strong> {timeline ? timelineMap[timeline] : ''}
              </Text>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading style={h2}>Projektbeschreibung</Heading>
            <Text style={text}>{description}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const section = {
  padding: '24px',
}

const h1 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.25',
  margin: '16px 0',
  padding: '0 24px',
}

const h2 = {
  color: '#374151',
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.25',
  margin: '16px 0 8px',
}

const text = {
  color: '#4b5563',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '8px 0',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '0',
}

export type { ContactEmailProps }