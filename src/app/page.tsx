import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Banner from '@/components/sections/Banner'
import Services from '@/components/sections/Services'
import Features from '@/components/sections/Features'
import Process from '@/components/sections/Process'
import WorkingPrinciples from '@/components/sections/WorkingPrinciples'
import Faq from '@/components/sections/Faq'
import Cta from '@/components/sections/Cta'

export const metadata: Metadata = {
  title: 'Das perfekte Design für deine Webseite',
  description: 'Professionelles Webdesign mit Fokus auf SEO, Performance und Nutzerfreundlichkeit. Individuelle Websites für nachhaltigen Geschäftserfolg.',
  openGraph: {
    images: '/img/og-image.jpg',
    type: 'website',
  },
}

// JSON-LD Script component
const WebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SimpleWebDesign',
  description: 'Professionelles Webdesign mit Fokus auf SEO, Performance und Nutzerfreundlichkeit.',
  url: 'https://simplewebdesign.at',
  address: {
    '@type': 'PostalAddress',
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

export default function Home() {
  return (
    <div>
      {/* Add JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WebsiteSchema) }}
      />
      
      {/* Main content sections */}
      <div>
        <Hero />
        <Banner />
        <Services />
        <Features />
        <Process />
        <WorkingPrinciples />
        <Faq />
        <Cta />
      </div>
    </div>
  )
}
