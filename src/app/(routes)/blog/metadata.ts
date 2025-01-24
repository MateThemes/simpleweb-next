import { Metadata } from 'next'

const baseMetadata = {
  title: 'Blog | SimpleWebDesign',
  description: 'Aktuelle Artikel und Insights zu Webdesign, SEO und Online Marketing.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'SimpleWebDesign Blog',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
} satisfies Metadata

export const metadata = baseMetadata

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...baseMetadata,
    alternates: {
      canonical: '/blog',
    },
  }
}
