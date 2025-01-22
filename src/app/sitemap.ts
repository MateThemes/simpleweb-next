import { MetadataRoute } from 'next'

// Define the type for blog posts
type BlogPost = {
  slug: string;
  lastModified: Date;
}

// This function would fetch your blog posts from your data source
async function getBlogPosts(): Promise<BlogPost[]> {
  // TODO: Implement when blog feature is added
  // This could fetch from your CMS, database, or file system
  // Return format should be: { slug: string; lastModified: Date; }[]
  return []
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://simplewebdesign.at'
  
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
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Get blog posts and generate their entries
  const blogPosts = await getBlogPosts()
  const blogEntries = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...serviceEntries,
    // Blog index page (when implemented)
    ...(blogPosts.length > 0 ? [{
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }] : []),
    // Individual blog posts
    ...blogEntries,
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}