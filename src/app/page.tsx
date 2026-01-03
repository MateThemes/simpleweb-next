import { Metadata } from 'next'
import ModernHero from '@/components/sections/ModernHero'
import Klarheit from '@/components/sections/Klarheit'
import ParallaxBreak from '@/components/sections/ParallaxBreak'
import Ansatz from '@/components/sections/Ansatz'
import WasDarausEntsteht from '@/components/sections/WasDarausEntsteht'
import WieWirHelfen from '@/components/sections/WieWirHelfen'
import Zusammenarbeit from '@/components/sections/Zusammenarbeit'
import Einordnung from '@/components/sections/Einordnung'
import Erfahrungen from '@/components/sections/Erfahrungen'
import HomeFaq from '@/components/sections/HomeFaq'
// Alte Sections - nur von Startseite entfernt, Components bleiben im Projekt erhalten
// import Banner from '@/components/sections/Banner'
// import Services from '@/components/sections/Services'
// import KIAutomatisierung from '@/components/sections/KIAutomatisierung'
// import Features from '@/components/sections/Features'
// import Process from '@/components/sections/Process'
// import WorkingPrinciples from '@/components/sections/WorkingPrinciples'
// import Faq from '@/components/sections/Faq'
// import CtaV1 from '@/components/sections/CtaV1'
import { breadcrumbSchema, webPageSchema, faqSchema } from '@/app/schema'
import { getWebPageDC } from '@/lib/dublinCore'

export const metadata: Metadata = {
  title: 'Webdesign für KMU in Österreich & Deutschland | SimpleWebDesign',
  description: 'Viele Websites sehen gut aus, bringen aber keine Anfragen. Wir schaffen Klarheit, Struktur und messbare Wirkung – für KMU in Österreich & Deutschland.',
  alternates: {
    canonical: 'https://simplewebdesign.at/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Webdesign für KMU in Österreich & Deutschland | SimpleWebDesign',
    description: 'Viele Websites sehen gut aus, bringen aber keine Anfragen. Wir schaffen Klarheit, Struktur und messbare Wirkung – für KMU in Österreich & Deutschland.',
    url: 'https://simplewebdesign.at/',
    siteName: 'SimpleWebDesign',
    type: 'website',
    locale: 'de_AT',
    alternateLocale: ['de_DE'],
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWebDesign - Webdesign für KMU',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign für KMU in Österreich & Deutschland | SimpleWebDesign',
    description: 'Viele Websites sehen gut aus, bringen aber keine Anfragen. Wir schaffen Klarheit, Struktur und messbare Wirkung – für KMU in Österreich & Deutschland.',
    images: ['/img/og-image.jpg'],
  },
  // Dublin Core Metadata
  other: {
    ...getWebPageDC({
      title: 'Webdesign für KMU in Österreich & Deutschland | SimpleWebDesign',
      description: 'Viele Websites sehen gut aus, bringen aber keine Anfragen. Wir schaffen Klarheit, Struktur und messbare Wirkung – für KMU in Österreich & Deutschland.',
      url: 'https://simplewebdesign.at',
    }),
  },
}

// JSON-LD Script components
const WebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SimpleWebDesign',
  description: 'Professionelles Webdesign mit Fokus auf SEO, Performance und Nutzerfreundlichkeit.',
  url: 'https://simplewebdesign.at',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://simplewebdesign.at/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
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
    addressCountry: 'AT'
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Austria'
    },
    {
      '@type': 'Country',
      name: 'Germany'
    }
  ],
  serviceType: ['Webdesign', 'SEO', 'Online Marketing'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Webdesign Services für KMU',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Responsive Webdesign für KMU',
          description: 'Moderne, responsive Websites speziell für kleine und mittlere Unternehmen'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Lokale SEO für Handwerker',
          description: 'Suchmaschinenoptimierung für lokale Suchergebnisse und Google My Business'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Online Marketing für KMU',
          description: 'Digitales Marketing und Social Media Management für kleine Unternehmen'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Commerce mit Shopify',
          description: 'Online-Shops für KMU mit Shopify und individuellen E-Commerce-Lösungen'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'KI-Automatisierung für KMU',
          description: 'Automatisierung von Routineaufgaben für Handwerker & lokale Dienstleister'
        }
      }
    ]
  },
  sameAs: [
    'https://simplewebdesign.at'
  ]
}

const OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SimpleWebDesign',
  description: 'Webdesign Agentur für KMU in Österreich und Deutschland - Spezialisiert auf moderne Websites, SEO und Online-Marketing für kleine und mittlere Unternehmen.',
  url: 'https://simplewebdesign.at',
  logo: 'https://simplewebdesign.at/img/logo.png',
  telephone: '+436645182696',
  email: 'info@simplewebdesign.at',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sonnleite 20',
    addressLocality: 'Vitis',
    postalCode: '3902',
    addressRegion: 'Niederösterreich',
    addressCountry: 'AT'
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Austria'
    },
    {
      '@type': 'Country',
      name: 'Germany'
    }
  ],
  knowsAbout: [
    'Webdesign',
    'SEO-Optimierung',
    'Online Marketing',
    'E-Commerce',
    'Shopify',
    'Next.js',
    'Strapi CMS',
    'Lokale SEO',
    'Google My Business',
    'Responsive Design',
    'KI-Automatisierung',
    'Workflow-Automatisierung'
  ],
  serviceType: 'Webdesign Agentur',
  foundingDate: '2016',
  numberOfEmployees: '1-10',
  sameAs: [
    'https://simplewebdesign.at'
  ]
}

export default function Home() {
  // FAQ data for schema
  const faqData = [
    {
      question: 'Warum bringt meine Website keine Anfragen?',
      answer: 'Meist fehlt Klarheit: Besucher verstehen nicht sofort, wer hier richtig ist und warum. Eine Website muss Orientierung geben, nicht nur informieren.'
    },
    {
      question: 'Was unterscheidet SimpleWebDesign von klassischen Agenturen?',
      answer: 'Wir beginnen nicht mit Design oder Technik, sondern mit Einordnung: Was soll die Website leisten? Erst dann folgen Struktur, Design und Umsetzung.'
    },
    {
      question: 'Wie lange dauert ein Website-Projekt?',
      answer: 'Je nach Umfang 3–8 Wochen. Wichtiger als Geschwindigkeit ist, dass die Website am Ende das tut, wofür sie gebaut wurde.'
    },
    {
      question: 'Arbeitet ihr nur mit KMU in Österreich?',
      answer: 'Nein, wir arbeiten mit KMU in ganz Österreich und Deutschland. Remote-Projekte sind für uns Standard.'
    },
    {
      question: 'Was kostet eine professionelle Website?',
      answer: 'Das hängt vom Umfang ab. Wir geben erst eine Einschätzung, nachdem wir dein Projekt verstanden haben – ohne Verpflichtung.'
    },
    {
      question: 'Kann ich meine bestehende Website optimieren lassen?',
      answer: 'Ja. Oft bringt eine klare Struktur-Überarbeitung mehr als ein kompletter Relaunch. Wir schauen uns deine Website an und sagen ehrlich, was Sinn macht.'
    }
  ];

  // Erweiterte Schemas
  const additionalSchemas = [
    // WebPage Schema
    webPageSchema({
      name: 'Webdesign für KMU in Österreich & Deutschland | SimpleWebDesign',
      description: 'Viele Websites sehen gut aus, bringen aber keine Anfragen. Wir schaffen Klarheit, Struktur und messbare Wirkung – für KMU in Österreich & Deutschland.',
      url: 'https://simplewebdesign.at',
      image: 'https://simplewebdesign.at/img/og-image.jpg',
    }),
    // Breadcrumb Schema
    breadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://simplewebdesign.at' },
      ],
    }),
    // FAQ Schema
    faqSchema({
      faqs: faqData,
    }),
  ];

  return (
    <div>
      {/* Add JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WebsiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
      />
      {/* Additional Schemas */}
      {additionalSchemas.map((schema, index) => (
        <script
          key={`additional-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      
      {/* Main content sections - problemorientierter Flow */}
      <div>
        <ModernHero />
        <Klarheit />
        <ParallaxBreak />
        <Ansatz />
        <WasDarausEntsteht />
        <WieWirHelfen />
        <Zusammenarbeit />
        <Einordnung />
        <Erfahrungen />
        <HomeFaq />
        {/* Alte Sections - nur von Startseite entfernt, Components bleiben im Projekt erhalten */}
        {/* <Banner /> */}
        {/* <Services /> */}
        {/* <KIAutomatisierung /> */}
        {/* <Features /> */}
        {/* <Process /> */}
        {/* <WorkingPrinciples /> */}
        {/* <Faq /> */}
        {/* <CtaV1 /> */}
      </div>
    </div>
  )
}
