import { Inter, Outfit } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/cookie/CookieConsent";
import { CookieSettingsButton } from "@/components/cookie/CookieSettingsButton";
import { GoogleTagManagerLazy } from "@/components/analytics/GoogleTagManagerLazy";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://simplewebdesign.at'),
  title: {
    default: "SimpleWebDesign | Professional Web Design and Development",
    template: "%s | SimpleWebDesign"
  },
  description: "Professional Web Design and Development Services in Deutschland. Wir erstellen moderne, performante und SEO-optimierte Websites.",
  keywords: ['web design', 'web development', 'SEO', 'hosting', 'performance optimization', 'webdesign agentur', 'webentwicklung'],
  authors: [{ name: 'SimpleWebDesign' }],
  creator: 'SimpleWebDesign',
  publisher: 'SimpleWebDesign',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "DF5fLBHgCmP3fGWh_C86kV5DWFzFRBwm2xZadx2om9k",
  },
  icons: {
    icon: [
      { url: '/img/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/img/favicon/favicon.ico',
    apple: { url: '/img/favicon/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/img/favicon/site.webmanifest',
  appleWebApp: {
    title: 'SimpleWeb',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'SimpleWebDesign',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWebDesign - Professional Web Design and Development'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SimpleWebDesign | Professional Web Design and Development',
    description: 'Professional Web Design and Development Services in Deutschland. Wir erstellen moderne, performante und SEO-optimierte Websites.',
    images: ['/img/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/img/hero-image.png" as="image" />
        

        
        <GoogleTagManagerLazy />
      </head>
      <body className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
        <GoogleTagManagerLazy />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ErrorBoundary>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieConsent />
            <CookieSettingsButton />
            <Analytics />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
