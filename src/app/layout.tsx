import { Inter, Outfit } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/cookie/CookieConsent";
import { CookieSettingsButton } from "@/components/cookie/CookieSettingsButton";
import { GoogleTagManagerLazy } from "@/components/analytics/GoogleTagManagerLazy";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import "./layout.css"; // CHANGE: add placeholder layout-level CSS to avoid dev 404s

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
  title: "SimpleWebDesign | Professional Web Design and Development",
  description: "Professional Web Design and Development Services in Deutschland. Wir erstellen moderne, performante und SEO-optimierte Websites.",
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
        {/* Google Tag Manager (noscript) - for better tracking when JavaScript is disabled */}
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
        <GoogleTagManagerLazy />
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
