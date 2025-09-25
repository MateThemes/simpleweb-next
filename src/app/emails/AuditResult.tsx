import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
// EmailData type is defined inline below

interface AuditResultProps {
  hostname: string;
  summary: {
    overall: number;
    performance: number;
    seo: number;
    accessibility: number;
    bestPractices: number;
  };
  recommendations: string[];
  auditUrl: string;
  newsletterSubscribed?: boolean;
  leadId?: string;
  shareableUrl?: string;
}

export default function AuditResult({
  hostname,
  summary,
  recommendations,
  newsletterSubscribed,
  shareableUrl,
}: AuditResultProps) {
  const previewText = `Dein SEO-Audit für ${hostname} ist fertig!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Dein SEO-Audit für {hostname}</Heading>
            <Text style={subtitle}>
              Hier sind deine Ergebnisse und Empfehlungen für eine bessere Suchmaschinenoptimierung.
            </Text>
          </Section>

          <Section style={scoreSection}>
            <Heading style={h2}>📊 Deine SEO-Bewertung</Heading>
            <table style={scoreTable}>
              <tbody>
                <tr>
                  <td style={scoreLabel}>Gesamtbewertung</td>
                  <td style={scoreValue}>{summary.overall}/100</td>
                </tr>
                <tr>
                  <td style={scoreLabel}>Performance</td>
                  <td style={scoreValue}>{summary.performance}/100</td>
                </tr>
                <tr>
                  <td style={scoreLabel}>SEO</td>
                  <td style={scoreValue}>{summary.seo}/100</td>
                </tr>
                <tr>
                  <td style={scoreLabel}>Barrierefreiheit</td>
                  <td style={scoreValue}>{summary.accessibility}/100</td>
                </tr>
                <tr>
                  <td style={scoreLabel}>Best Practices</td>
                  <td style={scoreValue}>{summary.bestPractices}/100</td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section style={recommendationsSection}>
            <Heading style={h2}>🎯 Top-Empfehlungen</Heading>
            <Text style={recommendationsText}>
              Hier sind die wichtigsten Verbesserungen für deine Website:
            </Text>
            <ul style={recommendationsList}>
              {recommendations.map((recommendation, index) => (
                <li key={index} style={recommendationItem}>
                  {recommendation}
                </li>
              ))}
            </ul>
          </Section>

          <Section style={ctaSection}>
            <Button style={button} href="https://simplewebdesign.at/kontakt">
              Kostenlose 20-Minuten-Beratung buchen
            </Button>
            <Text style={ctaText}>
              Unsere SEO-Experten helfen dir gerne bei der Umsetzung dieser Empfehlungen.
            </Text>
            
            {newsletterSubscribed && (
              <div style={newsletterBox}>
                <Text style={newsletterTitle}>🎯 Willkommen im Newsletter!</Text>
                <Text style={newsletterText}>
                  Du erhältst jetzt regelmäßig unsere besten SEO-Tipps und Webdesign-Trends. 
                  Erste E-Mail kommt in den nächsten Tagen!
                </Text>
              </div>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={footerText}>
              {shareableUrl && (
                <>
                  <Link href={shareableUrl} style={footerLink}>
                    Vollständiger Audit-Bericht
                  </Link>
                  {' • '}
                </>
              )}
              <Link href="https://simplewebdesign.at/seo-audit" style={footerLink}>
                Neues SEO-Audit starten
              </Link>
            </Text>
            <Text style={footerNote}>
              Diese Mail ist transaktional. Keine Newsletter-Zustellung.
            </Text>
            <Text style={footerNote}>
              Du erhältst diese E-Mail, weil du ein SEO-Audit angefordert hast. 
              Falls du keine weiteren E-Mails erhalten möchtest, antworte einfach mit &ldquo;Abmelden&rdquo;.
            </Text>
            <Text style={footerNote}>
              <strong>Wichtig:</strong> Dein Audit-Bericht wird 7 Tage lang gespeichert und ist dann nicht mehr abrufbar. 
              Speichere wichtige Informationen rechtzeitig!
            </Text>
            <Text style={footerNote}>
              <Link href="https://simplewebdesign.at/datenschutz" style={footerLink}>
                Datenschutzerklärung
              </Link>
              {' • '}
              <Link href="https://simplewebdesign.at/impressum" style={footerLink}>
                Impressum
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const header = {
  padding: '32px 24px 0',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const h2 = {
  color: '#333',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '24px 0 16px',
  padding: '0',
};

const subtitle = {
  color: '#666',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 32px',
};

const scoreSection = {
  padding: '0 24px',
};

const scoreTable = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  margin: '16px 0',
};

const scoreLabel = {
  padding: '8px 12px',
  backgroundColor: '#f8f9fa',
  border: '1px solid #e9ecef',
  fontSize: '14px',
  fontWeight: '500',
};

const scoreValue = {
  padding: '8px 12px',
  border: '1px solid #e9ecef',
  fontSize: '14px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
};

const recommendationsSection = {
  padding: '0 24px',
};

const recommendationsText = {
  color: '#666',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 16px',
};

const recommendationsList = {
  margin: '0',
  padding: '0 0 0 20px',
};

const recommendationItem = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 8px',
};

const ctaSection = {
  padding: '32px 24px',
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#007bff',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '0 0 16px',
};

const ctaText = {
  color: '#666',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '32px 0',
};

const footer = {
  padding: '0 24px',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#666',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '0 0 8px',
};

const footerLink = {
  color: '#007bff',
  textDecoration: 'underline',
};

const footerNote = {
  color: '#999',
  fontSize: '11px',
  lineHeight: '14px',
  margin: '0',
};

const newsletterBox = {
  backgroundColor: '#f0f9ff',
  border: '1px solid #0ea5e9',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px 0',
};

const newsletterTitle = {
  color: '#0369a1',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 8px',
};

const newsletterText = {
  color: '#0369a1',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};
