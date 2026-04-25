import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ProblemSignalsGrid from '@/components/sections/ProblemSignalsGrid'
import ApproachComparison from '@/components/sections/ApproachComparison'
import Outcomes from '@/components/sections/Outcomes'
import ProcessSteps from '@/components/sections/ProcessSteps'
import FitChecklist from '@/components/sections/FitChecklist'
import Testimonials from '@/components/sections/Testimonials'
import ProjectTestimonial from '@/components/sections/ProjectTestimonial'
import FinalCta from '@/components/sections/FinalCta'
import FaqSection, { faqData } from '@/components/sections/FaqSection'
import { getWebPageDC } from '@/lib/dublinCore'
import { JsonLd } from '@/components/seo/JsonLd'
import { getHomePageJsonLdGraph, serializeJsonLd } from '@/lib/schema'

const PAGE_TITLE = 'Webdesign für KMU in Österreich & Deutschland | Conversion-optimierte Websites'
const PAGE_DESCRIPTION =
  'Website erstellen lassen für KMU in Österreich & Deutschland: strukturierte, conversion-optimierte Websites für mehr Anfragen und Termine. Kostenlose Analyse & unverbindliches Strategiegespräch.'

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

export default function Home() {
  return (
    <div>
      <JsonLd
        json={serializeJsonLd(
          getHomePageJsonLdGraph({
            faqs: faqData,
            webPageName: PAGE_TITLE,
            webPageDescription: PAGE_DESCRIPTION,
          })
        )}
      />
      <div>
        <Hero />
        <ProblemSignalsGrid />
        <Outcomes />
        <ApproachComparison />
        <ProcessSteps />
        <FitChecklist />
        <Testimonials />
        <ProjectTestimonial />
        <FinalCta />
        <FaqSection />
      </div>
    </div>
  )
}
