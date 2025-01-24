import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://simplewebdesign.at'
  const lastModified = new Date('2025-01-24')

  // Define all service pages
  const servicePages = [
    'webdesign',
    'marketing',
    'seo',
    'redesign',
    'hosting',
    'performance'
  ]

  // Generate service page entries
  const serviceEntries = servicePages.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))

  // Define main pages
  const mainPages = [
    '',  // home page
    'kontakt',
    'portfolio',
    'preise',
    'prozess',
    'ueber-uns'
  ]

  // Generate main page entries
  const mainEntries = mainPages.map(page => ({
    url: `${baseUrl}${page ? `/${page}` : ''}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: page === '' ? 1.0 : 0.8
  }))

  // Define legal pages
  const legalPages = [
    'impressum',
    'datenschutz',
    'agb'
  ]

  // Generate legal page entries
  const legalEntries = legalPages.map(page => ({
    url: `${baseUrl}/${page}`,
    lastModified,
    changeFrequency: 'yearly' as const,
    priority: 0.3
  }))

  return [
    ...mainEntries,
    ...serviceEntries,
    ...legalEntries,
  ]
}