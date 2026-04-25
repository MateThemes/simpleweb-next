/**
 * Schema.org JSON-LD für die Startseite (nur aus dieser Datei gebündelt).
 * Keine UI — nur strukturierte Daten.
 */

export const SITE_ORIGIN: string =
  typeof process !== 'undefined' && process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
    : 'https://simplewebdesign.at'

const IDS = {
  organization: `${SITE_ORIGIN}/#organization`,
  service: `${SITE_ORIGIN}/#service`,
  website: `${SITE_ORIGIN}/#website`,
  webPage: `${SITE_ORIGIN}/#webpage`,
  faqPage: `${SITE_ORIGIN}/#faq`,
} as const

const SERVICE_TYPES = [
  'Webdesign',
  'Website Relaunch',
  'Website Optimierung',
  'Conversion-Optimierung',
  'SEO-optimierte Websites',
] as const

/** Adresse / Kontakt laut Impressum */
const POSTAL_ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: 'Sonnleite 20',
  addressLocality: 'Vitis',
  postalCode: '3902',
  addressRegion: 'Niederösterreich',
  addressCountry: 'AT',
}

export interface HomeFaqEntry {
  question: string
  answer: string
}

export interface HomePageJsonLdInput {
  faqs: HomeFaqEntry[]
  webPageName: string
  webPageDescription: string
}

function stripNullishDeep<T>(value: T): T {
  if (value === null || value === undefined) {
    return value
  }
  if (Array.isArray(value)) {
    const next = value
      .map((item) => stripNullishDeep(item))
      .filter((item) => item !== undefined && item !== null)
    return next as T
  }
  if (typeof value === 'object' && value !== null && value.constructor === Object) {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (v === undefined || v === null) continue
      const cleaned = stripNullishDeep(v)
      if (cleaned === undefined || cleaned === null) continue
      out[k] = cleaned
    }
    return out as T
  }
  return value
}

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(stripNullishDeep(data))
}

function toAbsoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl
  }
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${SITE_ORIGIN}${path}`
}

/**
 * Genau: Organization, ProfessionalService, WebSite, WebPage (Start), FAQPage.
 */
export function getHomePageJsonLdGraph(input: HomePageJsonLdInput) {
  const { faqs, webPageName, webPageDescription } = input
  const homeUrl = SITE_ORIGIN

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': IDS.organization,
        name: 'SimpleWebDesign',
        url: homeUrl,
        description: webPageDescription,
        telephone: '+436645182696',
        email: 'info@simplewebdesign.at',
        address: POSTAL_ADDRESS,
        logo: {
          '@type': 'ImageObject',
          url: toAbsoluteUrl('/img/logo.png'),
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': IDS.service,
        name: 'SimpleWebDesign',
        url: homeUrl,
        description: webPageDescription,
        telephone: '+436645182696',
        email: 'info@simplewebdesign.at',
        address: POSTAL_ADDRESS,
        parentOrganization: { '@id': IDS.organization },
        serviceType: [...SERVICE_TYPES],
        areaServed: [
          { '@type': 'Country', name: 'Austria' },
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'AdministrativeArea', name: 'Niederösterreich' },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': IDS.website,
        name: 'SimpleWebDesign',
        url: homeUrl,
        inLanguage: 'de-AT',
        publisher: { '@id': IDS.organization },
      },
      {
        '@type': 'WebPage',
        '@id': IDS.webPage,
        url: homeUrl,
        name: webPageName,
        description: webPageDescription,
        inLanguage: 'de-AT',
        isPartOf: { '@id': IDS.website },
        publisher: { '@id': IDS.organization },
        image: {
          '@type': 'ImageObject',
          url: toAbsoluteUrl('/img/og-image.jpg'),
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: toAbsoluteUrl('/img/og-image.jpg'),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': IDS.faqPage,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }
}
