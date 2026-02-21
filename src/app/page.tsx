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
  { question: 'Warum bringt meine Website keine Anfragen?', answer: 'Meist fehlt Klarheit: Besucher verstehen nicht sofort, wer hier richtig ist und warum. Eine Website muss Orientierung geben, nicht nur informieren.' },
  { question: 'Was unterscheidet SimpleWebDesign von klassischen Agenturen?', answer: 'Wir beginnen nicht mit Design oder Technik, sondern mit Einordnung: Was soll die Website leisten? Erst dann folgen Struktur, Design und Umsetzung.' },
  { question: 'Wie lange dauert ein Website-Projekt?', answer: 'Je nach Umfang 3–8 Wochen. Wichtiger als Geschwindigkeit ist, dass die Website am Ende das tut, wofür sie gebaut wurde.' },
  { question: 'Arbeitet ihr nur mit KMU in Österreich?', answer: 'Nein, wir arbeiten mit KMU in ganz Österreich und Deutschland. Remote-Projekte sind für uns Standard.' },
  { question: 'Was kostet eine professionelle Website?', answer: 'Das hängt vom Umfang ab. Wir geben erst eine Einschätzung, nachdem wir dein Projekt verstanden haben – ohne Verpflichtung.' },
  { question: 'Kann ich meine bestehende Website optimieren lassen?', answer: 'Ja. Oft bringt eine klare Struktur-Überarbeitung mehr als ein kompletter Relaunch. Wir schauen uns deine Website an und sagen ehrlich, was Sinn macht.' },
]

const PAGE_TITLE = 'Webdesign für KMU in Österreich & Deutschland | Entscheidungsarchitektur'
const PAGE_DESCRIPTION =
  'Webdesign für KMU in Österreich & Deutschland. Strategische Websites mit klarer Struktur, Entscheidungsarchitektur und messbarer Wirkung. Kostenlose Analyse & unverbindliches Gespräch.'

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
        alt: 'SimpleWebDesign - Strategic Partner für entscheidungsorientierte Websites',
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
      description: 'Webdesign Agentur für KMU in Österreich und Deutschland - Spezialisiert auf moderne Websites, SEO und E-Commerce für kleine und mittlere Unternehmen.',
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
      description: 'Webdesign Agentur für KMU in Österreich und Deutschland - Professionelle Websites mit Fokus auf SEO, Performance und Nutzerfreundlichkeit.',
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
      description: 'Professionelles Webdesign mit Fokus auf SEO, Performance und Nutzerfreundlichkeit.',
      url: 'https://simplewebdesign.at',
      publisher: { '@id': 'https://simplewebdesign.at/#organization' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://simplewebdesign.at/#webpage',
      url: 'https://simplewebdesign.at',
      name: 'Strategic Partner für entscheidungsorientierte Websites',
      description: 'Websites, die Entscheidungen führen. Wir bauen Entscheidungsarchitektur für KMU in Österreich & Deutschland – Klarheit, Struktur, messbare Wirkung.',
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
