import { Metadata } from 'next'
import ModernHero from '@/components/sections/ModernHero'
import Banner from '@/components/sections/Banner'
import Services from '@/components/sections/Services'
import KIAutomatisierung from '@/components/sections/KIAutomatisierung'
import Features from '@/components/sections/Features'
import Process from '@/components/sections/Process'
import WorkingPrinciples from '@/components/sections/WorkingPrinciples'
import Faq from '@/components/sections/Faq'
import CtaV1 from '@/components/sections/CtaV1'
import { breadcrumbSchema, webPageSchema } from '@/app/schema'
import { getWebPageDC } from '@/lib/dublinCore'

export const metadata: Metadata = {
  title: 'Webdesign Agentur für KMU | Moderne Websites Österreich & Deutschland | SimpleWebDesign',
  description: 'Professionelle Webdesign Agentur für KMU in Österreich & Deutschland. Moderne Websites, SEO-Optimierung, E-Commerce & Online-Marketing. Kostenlose Beratung für kleine und mittlere Unternehmen.',
  openGraph: {
    images: '/img/og-image.jpg',
    type: 'website',
  },
  // Dublin Core Metadata
  other: {
    ...getWebPageDC({
      title: 'Webdesign Agentur für KMU | Moderne Websites Österreich & Deutschland',
      description: 'Professionelle Webdesign Agentur für KMU in Österreich & Deutschland. Moderne Websites, SEO-Optimierung, E-Commerce & Online-Marketing.',
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
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sonnleite 20',
    addressLocality: 'Vitis',
    postalCode: '3902',
    addressRegion: 'Niederösterreich',
    addressCountry: 'AT'
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 48.4474,
      longitude: 15.6066
    },
    geoRadius: '100000'
  }
}

const LocalBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
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
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 48.4474,
      longitude: 15.6066
    },
    geoRadius: '500000'
  },
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
  foundingDate: '2020',
  numberOfEmployees: '1-10',
  sameAs: [
    'https://simplewebdesign.at'
  ]
}

export default function Home() {
  // Erweiterte Schemas
  const additionalSchemas = [
    // WebPage Schema
    webPageSchema({
      name: 'Webdesign Agentur für KMU | SimpleWebDesign',
      description: 'Professionelle Webdesign Agentur für KMU in Österreich & Deutschland.',
      url: 'https://simplewebdesign.at',
      image: 'https://simplewebdesign.at/img/og-image.jpg',
    }),
    // Breadcrumb Schema
    breadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://simplewebdesign.at' },
      ],
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
      
      {/* Main content sections */}
      <div>
        <ModernHero />
        <Banner />
        <Services />
        <KIAutomatisierung />
        <Features />
        <Process />
        <WorkingPrinciples />
        <Faq />
        <CtaV1 />
      </div>
    </div>
  )
}
