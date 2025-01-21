import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt | SimpleWebDesign',
  description: 'Kontaktieren Sie uns für Ihr Webprojekt. Wir beraten Sie gerne zu Webdesign, SEO und Online-Marketing.',
  openGraph: {
    title: 'Kontakt | SimpleWebDesign',
    description: 'Kontaktieren Sie uns für Ihr Webprojekt. Wir beraten Sie gerne zu Webdesign, SEO und Online-Marketing.',
    type: 'website',
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}