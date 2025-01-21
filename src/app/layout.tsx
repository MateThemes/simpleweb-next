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
  title: "SimpleWebDesign",
  description: "Professional Web Design and Development Services",
  verification: {
    google: "DF5fLBHgCmP3fGWh_C86kV5DWFzFRBwm2xZadx2om9k",
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
