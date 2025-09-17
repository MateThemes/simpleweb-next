import { MetadataRoute } from 'next'
import { getAllPosts, getAllCategories } from '@/lib/mdx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://simplewebdesign.at'
  const lastModified = new Date('2025-01-24')

  // Define all service pages
  const servicePages = [
    'webdesign',
    'webdesign-handwerker',
    'marketing',
    'seo',
    'redesign',
    'hosting',
    'performance',
    'e-commerce-partner-fuer-shopify'
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
    'preise-und-pakete',
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

  // Get all blog posts
  const posts = await getAllPosts()
  const categories = await getAllCategories()

  // Generate blog post entries
  const blogEntries = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // Generate blog category entries
  const categoryEntries = categories.map(category => ({
    url: `${baseUrl}/blog/kategorie/${category.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }))

  // Add main blog page
  const blogMainEntry = {
    url: `${baseUrl}/blog`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }

  return [
    ...mainEntries,
    ...serviceEntries,
    ...legalEntries,
    blogMainEntry,
    ...blogEntries,
    ...categoryEntries,
  ]
}