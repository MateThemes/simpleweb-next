import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
// Icons werden nicht verwendet in dieser Komponente

export const metadata: Metadata = {
  title: 'Shopify Experte Österreich & Deutschland | Shopify Agentur | E-Commerce Experten 2025',
  description: 'Professioneller Shopify Experte für erfolgreiche Online-Shops in Österreich & Deutschland. Shopify Agentur mit Expertise in Shopify Webdesign, Setup, DSGVO, SEO & Support. Kostenlose Beratung!',
  keywords: 'Shopify Agentur, Shopify Experte, Shopify Webdesign, Shopify Shop erstellen lassen, Shopify Experte Österreich, Shopify Experte Deutschland, Shopify Setup, Shopify Theme Entwicklung, E-Commerce Experte, Shopify SEO, Shopify DSGVO, Shopify Marketing, Online Shop erstellen, E-Commerce Lösung',
  openGraph: {
    title: 'Shopify Experte Österreich & Deutschland | Shopify Agentur | E-Commerce Experten 2025',
    description: 'Professioneller Shopify Experte für erfolgreiche Online-Shops in Österreich & Deutschland. Shopify Agentur mit Expertise in Shopify Webdesign, Setup, DSGVO, SEO & Support. Kostenlose Beratung!',
    url: 'https://simplewebdesign.at/services/e-commerce-partner-fuer-shopify',
    type: 'website',
    locale: 'de_AT',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shopify Experte Österreich & Deutschland - Professionelle Shopify Agentur für E-Commerce'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Experte Österreich & Deutschland | Shopify Agentur | E-Commerce Experten 2025',
    description: 'Professioneller Shopify Experte für erfolgreiche Online-Shops in Österreich & Deutschland. Shopify Agentur mit Expertise in Shopify Webdesign, Setup, DSGVO, SEO & Support.',
    images: ['/img/og-image.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/e-commerce-partner-fuer-shopify'
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
  }
}

export default function ShopifyPartnerPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopify Experte Agentur Österreich & Deutschland",
    "description": "Professioneller Shopify Experte für erfolgreiche Online-Shops in Österreich & Deutschland. Shopify Agentur mit Expertise in Shopify Webdesign, Setup, DSGVO, SEO & Support.",
    "provider": {
      "@type": "Organization",
      "name": "SimpleWebDesign",
      "url": "https://simplewebdesign.at",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AT"
      }
    },
    "areaServed": ["Österreich", "Deutschland"],
    "serviceType": "E-Commerce Entwicklung",
    "offers": {
      "@type": "Offer",
      "description": "Shopify Shop Entwicklung und Betreuung",
      "priceCurrency": "EUR"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex-auto">
        {/* Hero Section */}
        <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
          <Container className="relative">
            <div className="lg:flex lg:items-center lg:gap-x-10">
              <div className="max-w-2xl lg:max-w-lg">
                <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
                  Shopify Experte Österreich & Deutschland
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Professionelle Shopify Agentur für erfolgreiche Online-Shops. Wir erstellen, optimieren und betreuen E-Commerce-Lösungen von der Konzeption bis zum laufenden Support.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/kontakt">Kostenlose Shopify Beratung</Button>
                  <Button href="#referenzen" variant="secondary">Referenzen ansehen</Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img/services/shopify.png"
                    alt="Shopify Experte Österreich & Deutschland - Professionelle E-Commerce Agentur"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-xl"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Pain → Outcome Section */}
        <div className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Von Problemen zu Lösungen
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Wir lösen die typischen Herausforderungen beim E-Commerce Setup in Österreich und Deutschland.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
                  ❌ Typische Probleme
                </h3>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Komplexe E-Commerce Setup ohne Expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>DSGVO-Probleme bei Online-Shops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Schlechte Conversion-Raten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Hohe Wartungskosten und technische Probleme</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
                  ✅ Unsere Lösungen
                </h3>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Professionelles Shopify Setup aus einer Hand</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Vollständige DSGVO-Compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Optimierte Conversion-Raten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Laufender Support und Wartung</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>


        {/* Services Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Unsere Shopify Experten Leistungen
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Alles was Sie für einen erfolgreichen Online-Shop brauchen - aus einer Hand.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <div className="text-4xl">🛍️</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    Shopify Setup & Theme-Entwicklung
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    Professionelle Einrichtung Ihres Shopify Shops mit maßgeschneidertem Design für österreichische und deutsche Unternehmen.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <div className="text-4xl">🛡️</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    DSGVO-konforme Einrichtung
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    Cookies, Datenschutz, Rechtstexte - alles rechtssicher für den deutschen und österreichischen Markt.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <div className="text-4xl">💳</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    Payment & Versand Anbindung
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    Integration von österreichischen und deutschen Zahlungsanbietern sowie Versanddienstleistern.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <div className="text-4xl">🎯</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    Conversion-Optimierung & SEO
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    Maximale Verkäufe durch optimierte User Experience und lokale Suchmaschinenoptimierung.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <div className="text-4xl">⚙️</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    Laufende Betreuung & Support
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    Kontinuierliche Wartung, Updates und technischer Support für Ihren Shopify Shop.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    Analytics & Reporting
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    Detaillierte Verkaufsanalysen, Conversion-Tracking und monatliche Reports.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Process Section */}
        <div className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  Unser Shopify Experten Prozess
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                  Wir begleiten Sie Schritt für Schritt zu Ihrem erfolgreichen Online-Shop.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">Beratung & Konzeption</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">Wir analysieren Ihre Anforderungen und entwickeln eine maßgeschneiderte E-Commerce-Strategie.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">Shopify Setup</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">Professionelle Einrichtung Ihres Shopify Shops mit individueller Theme-Entwicklung.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">Payment & DSGVO</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">Integration von Zahlungsanbietern und vollständige DSGVO-konforme Einrichtung.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">SEO & Optimierung</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">Suchmaschinenoptimierung und Conversion-Optimierung für maximale Verkäufe.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">Go-Live</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">Wir bringen Ihren Online-Shop online und testen alle Funktionen gründlich.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                    6
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">Laufende Betreuung</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">Kontinuierlicher Support, Updates und Performance-Monitoring für Ihren Erfolg.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Why Shopify Section */}
        <div id="referenzen" className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Warum Shopify? Die führende E-Commerce-Plattform
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Über 2 Millionen Unternehmen weltweit vertrauen auf Shopify für ihren Online-Erfolg.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-3">
                  Bewährte Skalierbarkeit
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  Von Start-ups bis zu Enterprise-Unternehmen - Shopify wächst mit Ihrem Business mit. Über 2 Millionen aktive Shops weltweit.
                </p>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Von Shopify bis Shopify Plus
                </div>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-3">
                  Höchste Sicherheitsstandards
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  PCI DSS Level 1 zertifiziert, 99.98% Uptime und automatische Backups. Ihre Kundendaten sind bei Shopify sicher aufgehoben.
                </p>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Banken-Level Sicherheit
                </div>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-3">
                  Globale E-Commerce-Lösung
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  Multi-Currency, Multi-Language und lokale Payment-Optionen. Perfekt für den österreichischen und deutschen Markt.
                </p>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  Über 175 Länder unterstützt
                </div>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 text-center">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
                Vertrauen Sie auf die gleiche Plattform wie diese erfolgreichen Marken:
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold text-neutral-400">Allbirds</div>
                <div className="text-2xl font-bold text-neutral-400">Gymshark</div>
                <div className="text-2xl font-bold text-neutral-400">Kylie Cosmetics</div>
                <div className="text-2xl font-bold text-neutral-400">Tesla</div>
                <div className="text-2xl font-bold text-neutral-400">Heinz</div>
              </div>
            </div>
          </Container>
        </div>

        {/* FAQ Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Häufige Fragen
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Antworten auf die wichtigsten Fragen zu Shopify Experte Services.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-4">
                  Was kostet ein Shopify Shop Setup in Österreich?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Die Kosten für ein Shopify Shop Setup variieren je nach Anforderungen. Ein Standard-Setup beginnt bei €2.500, während komplexe Enterprise-Lösungen bis zu €15.000 kosten können.
                </p>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-4">
                  Wie lange dauert die Entwicklung eines Shopify Shops?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Ein Standard Shopify Shop ist in 2-4 Wochen fertig entwickelt. Komplexe Custom-Lösungen benötigen 6-12 Wochen. Die genaue Dauer hängt von der Komplexität ab.
                </p>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-4">
                  Ist Shopify DSGVO-konform für österreichische und deutsche Unternehmen?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Shopify bietet DSGVO-konforme Funktionen. Wir unterstützen Sie bei der technischen Umsetzung von Cookie-Bannern und Datenschutzeinstellungen. Für rechtliche Beratung empfehlen wir einen spezialisierten Anwalt.
                </p>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-4">
                  Welche Zahlungsanbieter können integriert werden?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Wir integrieren alle gängigen österreichischen und deutschen Zahlungsanbieter: SEPA, PayPal, Klarna, Stripe, Mollie und viele mehr.
                </p>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-4">
                  Bieten Sie auch laufenden Support für Shopify Shops?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Ja, wir bieten umfassenden Support: 24/7 Monitoring, regelmäßige Updates, Performance-Optimierung und technischen Support.
                </p>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-4">
                  Kann ich meinen Shopify Shop später erweitern?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Absolut! Shopify ist sehr skalierbar. Wir können Ihren Shop jederzeit um neue Features, Produkte oder Funktionen erweitern.
                </p>
              </div>
            </div>
          </Container>
        </div>

      {/* Related Services Section */}
      <section className="py-24" aria-labelledby="related-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 id="related-services" className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Weitere Services für Ihren Online-Erfolg
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Ergänzen Sie Ihr E-Commerce-Projekt mit unseren zusätzlichen Services für maximale Performance.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                <a href="/services/seo" className="hover:text-blue-600 transition-colors duration-200">
                  SEO Optimierung
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professionelle Suchmaschinenoptimierung für Online-Shops. Verbessern Sie Ihre Sichtbarkeit in Google und steigern Sie organischen Traffic.
              </p>
              <a href="/services/seo" className="text-blue-600 hover:text-blue-700 font-medium">
                Mehr erfahren →
              </a>
            </article>
            <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                <a href="/services/marketing" className="hover:text-blue-600 transition-colors duration-200">
                  E-Commerce Marketing
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professionelles Marketing für Online-Shops. Google Ads, Facebook Marketing und Conversion-Optimierung für mehr Verkäufe.
              </p>
              <a href="/services/marketing" className="text-blue-600 hover:text-blue-700 font-medium">
                Mehr erfahren →
              </a>
            </article>
            <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                <a href="/services/performance" className="hover:text-blue-600 transition-colors duration-200">
                  Performance Optimierung
                </a>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Schnellere Ladezeiten für bessere Conversion-Raten. Optimierung der Core Web Vitals für Ihren Online-Shop.
              </p>
              <a href="/services/performance" className="text-blue-600 hover:text-blue-700 font-medium">
                Mehr erfahren →
              </a>
            </article>
          </div>
        </div>
      </section>

        {/* Final CTA Section */}
        <div className="relative py-24 bg-blue-600 overflow-hidden">
          <div className="absolute inset-0 mix-blend-multiply opacity-40">
            <Image
              src="/img/services/shopify.png"
              alt="Background Pattern"
              fill
              className="object-cover"
              quality={60}
            />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Bereit für Ihren Shopify Online-Shop?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Lassen Sie uns gemeinsam Ihren E-Commerce-Erfolg entwickeln und mehr Kunden online gewinnen.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href="/kontakt" variant="secondary" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-600">
                  <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Kostenlose Shopify Beratung
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}
