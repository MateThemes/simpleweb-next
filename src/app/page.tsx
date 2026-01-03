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

// Unified JSON-LD Schema with @graph
const UnifiedSchema = (faqData: Array<{question: string; answer: string}>) => ({
  '@context': 'https://schema.org',
  '@graph': [
    // Organization
    {
      '@type': 'Organization',
      '@id': 'https://simplewebdesign.at/#organization',
      name: 'SimpleWebDesign',
      description: 'Webdesign Agentur für KMU in Österreich und Deutschland - Spezialisiert auf moderne Websites, SEO und E-Commerce für kleine und mittlere Unternehmen.',
      url: 'https://simplewebdesign.at',
      logo: {
        '@type': 'ImageObject',
        url: 'https://simplewebdesign.at/img/logo.png'
      },
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
      foundingDate: '2016',
      numberOfEmployees: '1-10'
    },
    // ProfessionalService
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
        addressCountry: 'AT'
      },
      parentOrganization: {
        '@id': 'https://simplewebdesign.at/#organization'
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
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Webdesign Services für KMU',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Responsive Webdesign',
              description: 'Moderne, responsive Websites für kleine und mittlere Unternehmen'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO-Optimierung',
              description: 'Suchmaschinenoptimierung für mehr Sichtbarkeit und organischen Traffic'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-Commerce mit Shopify',
              description: 'Online-Shops für KMU mit Shopify und maßgeschneiderten E-Commerce-Lösungen'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Redesign',
              description: 'Optimierung und Neugestaltung bestehender Websites für bessere Performance'
            }
          }
        ]
      }
    },
    // WebSite
    {
      '@type': 'WebSite',
      '@id': 'https://simplewebdesign.at/#website',
      name: 'SimpleWebDesign',
      description: 'Professionelles Webdesign mit Fokus auf SEO, Performance und Nutzerfreundlichkeit.',
      url: 'https://simplewebdesign.at',
      publisher: {
        '@id': 'https://simplewebdesign.at/#organization'
      }
    },
    // WebPage (Homepage)
    {
      '@type': 'WebPage',
      '@id': 'https://simplewebdesign.at/#webpage',
      url: 'https://simplewebdesign.at',
      name: 'Webdesign für KMU in Österreich & Deutschland',
      description: 'Viele Websites sehen gut aus, bringen aber keine Anfragen. Wir schaffen Klarheit, Struktur und messbare Wirkung – für KMU in Österreich & Deutschland.',
      isPartOf: {
        '@id': 'https://simplewebdesign.at/#website'
      },
      about: {
        '@id': 'https://simplewebdesign.at/#organization'
      },
      publisher: {
        '@id': 'https://simplewebdesign.at/#organization'
      },
      inLanguage: 'de-AT',
      image: {
        '@type': 'ImageObject',
        url: 'https://simplewebdesign.at/img/og-image.jpg'
      }
    },
    // BreadcrumbList
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://simplewebdesign.at/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://simplewebdesign.at'
        }
      ]
    },
    // FAQPage
    {
      '@type': 'FAQPage',
      '@id': 'https://simplewebdesign.at/#faq',
      mainEntity: faqData.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  ]
});

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

  return (
    <div>
      {/* Unified JSON-LD with @graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(UnifiedSchema(faqData)) }}
      />
      
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
