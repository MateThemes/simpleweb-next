import { Inter, Outfit } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/cookie/CookieConsent";
import { CookieSettingsButton } from "@/components/cookie/CookieSettingsButton";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import type { Metadata } from "next";
import { getCanonicalMetadata } from "@/lib/canonical";
import { getDublinCoreMetadata, DublinCoreTypes } from "@/lib/dublinCore";
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
  // CHANGE: Define metadataBase so Next.js can resolve relative Open Graph/Twitter image URLs without warnings.
  // Uses NEXT_PUBLIC_SITE_URL in production, with a sensible localhost fallback for development.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://simplewebdesign.at'),
  title: "SimpleWebDesign | Professional Web Design and Development",
  description: "Professional Web Design and Development Services in Deutschland. Wir erstellen moderne, performante und SEO-optimierte Websites.",
  alternates: {
    canonical: getCanonicalMetadata('/').alternates.canonical,
  },
  icons: {
    icon: [
      { url: '/img/favicon/favicon.ico', sizes: 'any' },
      { url: '/img/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/img/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/img/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/img/favicon/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/favicon/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/img/favicon/site.webmanifest',
  // Dublin Core Metadata
  other: {
    ...getDublinCoreMetadata({
      title: "SimpleWebDesign | Professional Web Design and Development",
      description: "Professional Web Design and Development Services in Deutschland. Wir erstellen moderne, performante und SEO-optimierte Websites.",
      type: DublinCoreTypes.SERVICE,
      identifier: "https://simplewebdesign.at",
      language: "de",
      creator: "Gerald Schandl",
      publisher: "SimpleWebDesign",
      subject: "Webdesign, SEO, Web Development, Online Marketing",
      coverage: "Austria, Germany",
      rights: "© SimpleWebDesign. Alle Rechte vorbehalten.",
    }),
  },
}

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
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="DF5fLBHgCmP3fGWh_C86kV5DWFzFRBwm2xZadx2om9k" />
        
        {/* Consent Mode 2 Default Initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 2000
              });
            `,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieConsent />
          <CookieSettingsButton />
          <GoogleTagManager />
        </ThemeProvider>
      </body>
    </html>
  );
}
