import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/_vercel/',
          '/static/',
        ]
      }
    ],
    sitemap: 'https://simplewebdesign.at/sitemap.xml',
  }
}