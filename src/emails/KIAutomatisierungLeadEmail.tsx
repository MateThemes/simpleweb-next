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

interface KIAutomatisierungLeadEmailProps {
  name: string
  email: string
  company: string
  phone?: string
  message: string
}

export default function KIAutomatisierungLeadEmail({
  name,
  email,
  company,
  phone,
  message,
}: KIAutomatisierungLeadEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Neue KI-Automatisierung Anfrage von {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Neue KI-Automatisierung Anfrage</Heading>
          
          <Section style={section}>
            <Heading style={h2}>Kontaktinformationen</Heading>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>E-Mail:</strong> {email}
            </Text>
            {phone && (
              <Text style={text}>
                <strong>Telefon:</strong> {phone}
              </Text>
            )}
            <Text style={text}>
              <strong>Unternehmen:</strong> {company}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading style={h2}>Automatisierungspotenzial</Heading>
            <Text style={text}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={footerText}>
              Quelle: KI-Automatisierung Landingpage
              <br />
              Timestamp: {new Date().toLocaleString('de-AT', { timeZone: 'Europe/Vienna' })}
            </Text>
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

const footerText = {
  color: '#6b7280',
  fontSize: '12px',
  lineHeight: '20px',
  margin: '8px 0',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '0',
}

