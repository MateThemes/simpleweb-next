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
  title: "SimpleWebDesign | Professional Web Design and Development",
  description: "Professional Web Design and Development Services in Deutschland. Wir erstellen moderne, performante und SEO-optimierte Websites.",
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
