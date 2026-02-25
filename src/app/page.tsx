import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ProblemSignalsGrid from '@/components/sections/ProblemSignalsGrid'
import ApproachComparison from '@/components/sections/ApproachComparison'
import Outcomes from '@/components/sections/Outcomes'
import ProcessSteps from '@/components/sections/ProcessSteps'
import FitChecklist from '@/components/sections/FitChecklist'
import Testimonials from '@/components/sections/Testimonials'
import FinalCta from '@/components/sections/FinalCta'
import FaqSection from '@/components/sections/FaqSection'
import { getWebPageDC } from '@/lib/dublinCore'

const HOMEPAGE_FAQ_SCHEMA: Array<{ question: string; answer: string }> = [
  { question: 'Warum bringt meine Website keine Anfragen?', answer: 'Oft fehlt Klarheit: Besucher verstehen nicht sofort, wofür du da bist. Eine conversion-optimierte Website gibt Orientierung und führt zu Anfragen oder Terminen – nicht nur Information.' },
  { question: 'Was kostet eine Website erstellen lassen?', answer: 'Abhängig vom Umfang. Wir geben eine Einschätzung erst nach dem Kennenlernen deines Ziels – unverbindlich. Webdesign für KMU in Österreich und Deutschland.' },
  { question: 'Wie lange dauert ein Website-Projekt oder Website Relaunch?', answer: 'In der Regel 3–8 Wochen. Wichtiger als Tempo: dass die Website am Ende mehr Anfragen oder Termine bringt.' },
  { question: 'Arbeitet ihr nur vor Ort oder auch remote?', answer: 'Wir arbeiten mit KMU in Österreich (z.B. Niederösterreich) und Deutschland – remote ist Standard. Kein Standort-Nachteil.' },
  { question: 'Website Optimierung oder kompletter Relaunch – was ist sinnvoll?', answer: 'Oft reicht eine strukturierte Website-Optimierung; manchmal ist ein Website Relaunch sinnvoller. Wir schauen uns deine Website an und sagen ehrlich, was mehr bringt.' },
  { question: 'Was unterscheidet euch von einer klassischen Agentur?', answer: 'Wir starten mit Strategie und Einordnung: Was soll die Website leisten? Dann folgen Struktur und Umsetzung – für messbare Wirkung (mehr Anfragen, Termine).' },
]

const PAGE_TITLE = 'Webdesign für KMU in Österreich & Deutschland | Conversion-optimierte Websites'
const PAGE_DESCRIPTION =
  'Website erstellen lassen für KMU in Österreich & Deutschland: strukturierte, conversion-optimierte Websites. Mehr Anfragen und Termine. Kostenlose Analyse & unverbindliches Strategiegespräch.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: 'https://simplewebdesign.at/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/',
    type: 'website',
    locale: 'de_AT',
    alternateLocale: ['de_DE'],
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWebDesign – Webdesign für KMU in Österreich und Deutschland, conversion-optimierte Websites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    description: PAGE_DESCRIPTION,
    images: ['/img/og-image.jpg'],
  },
  other: {
    ...getWebPageDC({
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: 'https://simplewebdesign.at',
    }),
  },
}

const UnifiedSchema = (faqData: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://simplewebdesign.at/#organization',
      name: 'SimpleWebDesign',
      description: 'Webdesign für KMU in Österreich und Deutschland – Website erstellen lassen, Website Relaunch und Website Optimierung. Conversion-optimierte Websites für mehr Anfragen und Termine.',
      url: 'https://simplewebdesign.at',
      logo: { '@type': 'ImageObject', url: 'https://simplewebdesign.at/img/logo.png' },
      telephone: '+436645182696',
      email: 'info@simplewebdesign.at',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sonnleite 20',
        addressLocality: 'Vitis',
        postalCode: '3902',
        addressRegion: 'Niederösterreich',
        addressCountry: 'AT',
      },
      areaServed: [{ '@type': 'Country', name: 'Austria' }, { '@type': 'Country', name: 'Germany' }],
      foundingDate: '2016',
      numberOfEmployees: '1-10',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://simplewebdesign.at/#localbusiness',
      name: 'SimpleWebDesign',
      description: 'Webdesign für KMU in Österreich und Deutschland – Professionelle Websites mit Fokus auf Conversion, Struktur und messbare Wirkung.',
      url: 'https://simplewebdesign.at',
      telephone: '+436645182696',
      email: 'info@simplewebdesign.at',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sonnleite 20',
        addressLocality: 'Vitis',
        postalCode: '3902',
        addressRegion: 'Niederösterreich',
        addressCountry: 'AT',
      },
      parentOrganization: { '@id': 'https://simplewebdesign.at/#organization' },
      areaServed: [{ '@type': 'Country', name: 'Austria' }, { '@type': 'Country', name: 'Germany' }],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Webdesign Services für KMU',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Responsive Webdesign', description: 'Moderne, responsive Websites für kleine und mittlere Unternehmen' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO-Optimierung', description: 'Suchmaschinenoptimierung für mehr Sichtbarkeit und organischen Traffic' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce mit Shopify', description: 'Online-Shops für KMU mit Shopify und maßgeschneiderten E-Commerce-Lösungen' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Redesign', description: 'Optimierung und Neugestaltung bestehender Websites für bessere Performance' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://simplewebdesign.at/#website',
      name: 'SimpleWebDesign',
      description: 'Webdesign für KMU in Österreich und Deutschland – conversion-optimierte Websites für mehr Anfragen und Termine.',
      url: 'https://simplewebdesign.at',
      publisher: { '@id': 'https://simplewebdesign.at/#organization' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://simplewebdesign.at/#webpage',
      url: 'https://simplewebdesign.at',
      name: 'Webdesign für KMU in Österreich & Deutschland',
      description: 'Website erstellen lassen oder Website Optimierung: strukturierte, conversion-optimierte Websites für mehr Anfragen und Termine. Österreich & Deutschland.',
      isPartOf: { '@id': 'https://simplewebdesign.at/#website' },
      about: { '@id': 'https://simplewebdesign.at/#organization' },
      publisher: { '@id': 'https://simplewebdesign.at/#organization' },
      inLanguage: 'de-AT',
      image: { '@type': 'ImageObject', url: 'https://simplewebdesign.at/img/og-image.jpg' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://simplewebdesign.at/#breadcrumb',
      itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://simplewebdesign.at' }],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://simplewebdesign.at/#faq',
      mainEntity: faqData.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
})

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(UnifiedSchema(HOMEPAGE_FAQ_SCHEMA)) }}
      />
      <div>
        <Hero />
        <ProblemSignalsGrid />
        <Outcomes />
        <ApproachComparison />
        <ProcessSteps />
        <FitChecklist />
        <Testimonials />
        <FinalCta />
        <FaqSection />
      </div>
    </div>
  )
}
