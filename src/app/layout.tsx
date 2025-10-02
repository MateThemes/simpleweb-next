import { Inter, Outfit } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/cookie/CookieConsent";
import { CookieSettingsButton } from "@/components/cookie/CookieSettingsButton";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { getCanonicalMetadata } from "@/lib/canonical";
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TNK6X4Q5');
            `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNK6X4Q5"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
