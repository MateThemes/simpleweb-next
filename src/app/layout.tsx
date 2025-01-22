import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Outfit } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/cookie/CookieConsent";
import { CookieSettingsButton } from "@/components/cookie/CookieSettingsButton";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  metadataBase: new URL('https://simplewebdesign.de'),
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
    <html lang="de" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-white dark:bg-slate-950 transition-colors">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieConsent />
            <CookieSettingsButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
