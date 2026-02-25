import { Metadata } from 'next'
import { KIAutomatisierungContent } from './_components/KIAutomatisierungContent'
import {
  faqSchema,
  breadcrumbSchema,
  professionalServiceSchema,
} from '@/app/schema'

const PAGE_TITLE = 'KI-Automatisierung für KMU | Prozess- & Workflow-Automatisierung'
const PAGE_DESCRIPTION =
  'KI-Automatisierung für KMU in Österreich & Deutschland: Prozessautomatisierung, Angebotsautomatisierung und Workflows für Handwerker & Dienstleister.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/ki-automatisierung',
    type: 'website',
    images: [
      {
        url: '/og/ki-automatisierung.png',
        width: 1200,
        height: 630,
        alt: 'KI-Automatisierung für KMU - SimpleWebDesign',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/og/ki-automatisierung.png'],
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/ki-automatisierung',
  },
}

export default function KIAutomatisierungPage() {
  // JSON-LD Schemas
  const faqJsonLd = faqSchema({
    faqs: [
      {
        question: 'Ersetzt KI meinen Fachverstand?',
        answer:
          'Nein. KI erstellt lediglich Rohentwürfe für Angebote oder Antworten. Sie als Fachkraft prüfen, korrigieren und entscheiden. Die KI ist Ihr Assistent, nicht Ihr Ersatz.',
      },
      {
        question: 'DSGVO & Hosting – wo liegen die Daten?',
        answer:
          'Wir können EU-Hosting (z. B. Hetzner) nutzen. Wir arbeiten datensparsam und können auf Wunsch eine Auftragsverarbeitungsvereinbarung (AVV) erstellen.',
      },
      {
        question: 'Welche Tools nutzt ihr?',
        answer:
          'Wir arbeiten mit n8n/Make für Workflows, OpenAI/Claude für KI-Textgenerierung, Mautic für E-Mail-Marketing, Resend für Transaktions-E-Mails und Google-Integrationen (Sheets, Drive, Calendar).',
      },
      {
        question: 'Wie schnell starten wir?',
        answer:
          'Nach dem Kick-off haben Sie in der Regel innerhalb von 7–14 Werktagen erste funktionierende Automatisierungen. Komplexere Workflows benötigen 3–4 Wochen.',
      },
    ],
  })

  const breadcrumbJsonLd = breadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://simplewebdesign.at' },
      { name: 'Leistungen', url: 'https://simplewebdesign.at/services' },
      {
        name: 'KI-Automatisierung',
        url: 'https://simplewebdesign.at/ki-automatisierung',
      },
    ],
  })

  const   serviceJsonLd = professionalServiceSchema({
    name: 'KI-Automatisierung für KMU',
    description:
      'KI-Automatisierung für KMU in Österreich & Deutschland: Prozessautomatisierung, Angebotsautomatisierung und Workflow-Automatisierung für Handwerker & Dienstleister.',
    url: 'https://simplewebdesign.at/ki-automatisierung',
    image: 'https://simplewebdesign.at/og/ki-automatisierung.png',
    priceRange: '490€ - 1490€',
    areaServed: ['Austria', 'Germany'],
  })

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <KIAutomatisierungContent />
    </>
  )
}

export const revalidate = 3600
