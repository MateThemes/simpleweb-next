import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const PAGE_TITLE = 'Shopify Experte Österreich & Deutschland | Shopify Agentur für KMU'
const PAGE_DESCRIPTION =
  'Shopify Experte für Österreich & Deutschland: Shopify Shop erstellen lassen, DSGVO-konforme Einrichtung und Conversion-Optimierung für KMU.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: 'Shopify Agentur, Shopify Experte, Shopify Shop erstellen lassen, Shopify Agentur Österreich, Shopify Agentur Deutschland, Shopify Setup für KMU, Shopify DSGVO, Shopify Shop optimieren',
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/services/e-commerce-partner-fuer-shopify',
    type: 'website',
    locale: 'de_AT',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shopify Experte Österreich & Deutschland – Shopify Agentur für KMU'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
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

import { breadcrumbSchema, webPageSchema, servicePageSchema, faqSchema } from '@/app/schema'

const faqs = [
  {
    question: "Was kostet ein Shopify Shop Setup in Österreich?",
    answer: "Standard-Setup ab ca. €2.500; komplexere Projekte entsprechend mehr. Genaues Angebot nach Anforderungsklärung."
  },
  {
    question: "Wie lange dauert die Entwicklung eines Shopify Shops?",
    answer: "Standard-Shop: 2–4 Wochen. Komplexe Anpassungen: 6–12 Wochen – abhängig von Umfang und Integrationen."
  },
  {
    question: "Ist Shopify DSGVO-konform für Österreich und Deutschland?",
    answer: "Shopify bietet die technischen Mittel. Wir setzen Cookie-Banner, Datenschutz und Rechtstexte für AT/DE um. Rechtliche Einzelfragen: Anwalt."
  },
  {
    question: "Welche Zahlungsanbieter können integriert werden?",
    answer: "SEPA, PayPal, Klarna, Stripe, Mollie und weitere gängige Anbieter für AT & DE."
  },
  {
    question: "Bieten Sie laufenden Support für Shopify Shops?",
    answer: "Ja: Updates, Performance-Optimierung und technischer Support – optional mit Monitoring."
  },
  {
    question: "Kann ich meinen Shopify Shop später erweitern?",
    answer: "Ja. Shopify skaliert mit – wir erweitern um Features, Produkte und Märkte bei Bedarf."
  }
]

export default function ShopifyPartnerPage() {
  // Schema.org Structured Data
  const schemas = [
    // BreadcrumbList Schema
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "Shopify Experte", url: "https://simplewebdesign.at/services/e-commerce-partner-fuer-shopify" },
      ],
    }),
    // WebPage Schema
    webPageSchema({
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/e-commerce-partner-fuer-shopify",
      image: "https://simplewebdesign.at/img/og-image.jpg",
    }),
    // Service Schema
    servicePageSchema({
      name: "Shopify Experte Agentur",
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/e-commerce-partner-fuer-shopify",
      image: "https://simplewebdesign.at/img/og-image.jpg",
      serviceType: ["E-Commerce Development", "Shopify Development", "Shopify Setup", "Shopify Design", "E-Commerce Consulting"],
    }),
    // FAQPage Schema
    faqSchema({
      faqs: faqs.map(faq => ({
        question: faq.question,
        answer: faq.answer
      }))
    }),
  ];

  return (
    <>
      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="flex-auto">
        {/* Hero — an Marketing-Seite angeglichen, mit Keyfacts */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="shopify-hero-heading"
        >
          <Container className="relative">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
              <div className="relative w-full">
                <div
                  className="absolute -inset-x-8 top-1/2 -translate-y-1/2 h-[120%] w-[140%] max-w-none pointer-events-none opacity-[0.04] dark:opacity-[0.06] hidden lg:block"
                  aria-hidden
                  style={{
                    background:
                      'radial-gradient(ellipse 70% 60% at 30% 50%, var(--foreground), transparent 70%)',
                  }}
                />
                <div className="relative space-y-6 max-w-2xl mx-auto">
                  <p className="text-sm font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                    Shopify für KMU
                  </p>
                  <h1
                    id="shopify-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Shopify Experte für Österreich & Deutschland
                  </h1>
                  <p className="mt-10 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                    Strukturierte Shopify Shops für KMU – DSGVO-konform, conversion-optimiert und technisch sauber umgesetzt.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Button href="/kontakt">Kostenlose Shopify Beratung</Button>
                    <Link
                      href="#referenzen"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
                    >
                      Referenzen ansehen
                    </Link>
                  </div>
                  <div
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-8 pt-2 text-[var(--muted-foreground)] text-sm tracking-wide"
                    role="list"
                    aria-label="Shopify und Reichweite"
                  >
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      50+ Projekte
                    </span>
                    <span className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]" aria-hidden>·</span>
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      AT & DE
                    </span>
                    <span className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]" aria-hidden>·</span>
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      Antwort in 1–2 Werktagen
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:pt-8">
                <div
                  className="relative w-full overflow-hidden rounded-[24px] bg-[var(--surface-2)] border border-[var(--border)]"
                  style={{
                    boxShadow:
                      '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
                  }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src="/img/services/shopify.png"
                      alt="Shopify Experte Österreich & Deutschland – Shopify Agentur für KMU"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-contain object-center p-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Von Problemen zu Lösungen — M3 Cards, klare Hierarchie */}
        <section className="py-24 lg:py-28 bg-[var(--surface-2)]" aria-labelledby="probleme-loesungen-heading">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 id="probleme-loesungen-heading" className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Von Problemen zu Lösungen
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Typische Herausforderungen beim Shopify Setup für KMU in Österreich und Deutschland – und wie wir sie lösen.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none md:grid-cols-2">
              <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                  Typische Probleme
                </h3>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  <li>Komplexes E-Commerce-Setup ohne Expertise</li>
                  <li>DSGVO-Probleme bei Online-Shops</li>
                  <li>Schlechte Conversion-Raten</li>
                  <li>Hohe Wartungskosten und technische Schulden</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                  Unsere Lösungen
                </h3>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  <li>Shopify Setup für KMU aus einer Hand</li>
                  <li>DSGVO-konforme Einrichtung für AT & DE</li>
                  <li>Conversion-optimierte Shops</li>
                  <li>Laufender Support und Wartung</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>


        {/* Leistungen — 2-Spalten M3 Cards, max 2–3 Zeilen je Service */}
        <section className="py-24 lg:py-28 bg-[var(--background)]" aria-labelledby="leistungen-heading">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 id="leistungen-heading" className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Unsere Shopify-Leistungen
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Shopify Shop erstellen lassen oder bestehenden Shop optimieren – aus einer Hand für Österreich und Deutschland.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2">
              <div className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60 text-[var(--primary)] font-semibold text-sm">1</div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    Shopify Setup & Theme
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Einrichtung und maßgeschneidertes Design für KMU in AT & DE.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60 text-[var(--primary)] font-semibold text-sm">2</div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    Shopify DSGVO
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Cookies, Datenschutz und Rechtstexte rechtssicher für AT & DE.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60 text-[var(--primary)] font-semibold text-sm">3</div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    Payment & Versand
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Zahlungsanbieter und Versand für Österreich und Deutschland.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60 text-[var(--primary)] font-semibold text-sm">4</div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    Conversion & SEO
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    UX und Suchmaschinenoptimierung für mehr Verkäufe.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60 text-[var(--primary)] font-semibold text-sm">5</div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    Betreuung & Support
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Wartung, Updates und technischer Support für Ihren Shop.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60 text-[var(--primary)] font-semibold text-sm">6</div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                    Analytics & Reporting
                  </h3>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                    Verkaufsanalysen, Conversion-Tracking, Reports.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="py-24 lg:py-28 bg-[var(--background)]" aria-labelledby="process-heading">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2 id="process-heading" className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  Unser Shopify-Prozess
                </h2>
                <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                  Als Shopify Agentur Österreich und Shopify Agentur Deutschland begleiten wir Sie von der Beratung bis zum Go-Live und darüber hinaus.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Beratung & Konzeption</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Anforderungen klären, E-Commerce-Strategie für Ihr KMU.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Shopify Setup</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Einrichtung und Theme nach Ihren Vorgaben.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Payment & DSGVO</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Zahlung, Versand, DSGVO-konforme Einrichtung.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">SEO & Optimierung</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">SEO und Conversion-Optimierung.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Go-Live</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Launch und Tests vor dem Livegang.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    6
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Laufende Betreuung</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Support, Updates, Monitoring.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Shopify — Fokus: Skalierbarkeit KMU, DSGVO AT/DE, Performance & Conversion */}
        <section id="referenzen" className="py-24 lg:py-28 bg-[var(--surface-2)]" aria-labelledby="why-shopify-heading">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 id="why-shopify-heading" className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Warum Shopify für KMU?
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Skalierbar, rechtssicher für Österreich und Deutschland, mit Fokus auf Performance und Conversion.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none md:grid-cols-3">
              <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                  Skalierbarkeit für KMU
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  Shopify wächst mit: vom ersten Shopify Setup für KMU bis zu mehr Produkten, Sprachen und Märkten – ohne Plattformwechsel.
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                  DSGVO für AT & DE
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  Shopify bietet die nötigen Bausteine für DSGVO-konforme Shops. Wir setzen Cookie-Banner, Datenschutz und Rechtstexte für den deutschsprachigen Raum um.
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                  Performance & Conversion
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  Schnelle Ladezeiten und klare Struktur unterstützen Suchmaschinen und Kaufentscheidungen. Wir optimieren Ihren Shopify Shop dafür.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ — sprachlich scharf, direkt */}
        <section className="py-24 lg:py-28 bg-[var(--background)]" aria-labelledby="faq-heading">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 id="faq-heading" className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Häufige Fragen
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)]">
                Kurze Antworten zu Shopify Setup, DSGVO und Support.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

      {/* Related Services Section */}
      <section className="py-24 lg:py-28 bg-[var(--surface-2)]" aria-labelledby="related-services">
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 id="related-services" className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Weitere Services
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)]">
              SEO, Marketing und Performance – passend zu Ihrem Shopify Shop optimieren und Aufbau.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-3">
            <Link href="/services/seo" className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)] block">
              <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                SEO
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Sichtbarkeit in Google und organischer Traffic für Ihren Shop.
              </p>
              <span className="text-sm font-medium text-[var(--primary)]">Mehr erfahren →</span>
            </Link>
            <Link href="/services/marketing" className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)] block">
              <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                Marketing
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Ads und Content – messbar, zur Botschaft passend.
              </p>
              <span className="text-sm font-medium text-[var(--primary)]">Mehr erfahren →</span>
            </Link>
            <Link href="/services/performance" className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)] block">
              <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                Performance
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Ladezeiten und Core Web Vitals für bessere Conversion.
              </p>
              <span className="text-sm font-medium text-[var(--primary)]">Mehr erfahren →</span>
            </Link>
          </div>
        </Container>
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
