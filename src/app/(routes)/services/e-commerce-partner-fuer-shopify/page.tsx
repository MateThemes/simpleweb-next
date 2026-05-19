import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'

const PAGE_TITLE = 'Shopify Agentur Österreich für KMU | Shopify Shop erstellen lassen'
const PAGE_DESCRIPTION =
  'Shopify Agentur Österreich für KMU: Wir erstellen und optimieren strukturierte Shopify Shops – DSGVO-konform, conversion-optimiert und technisch sauber umgesetzt.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: 'Shopify Agentur Österreich, Shopify Shop erstellen lassen, Shopify Agentur für KMU, Shopify Experte Österreich, Shopify Webdesign Österreich, Shopify DSGVO Österreich, Shopify Betreuung, Shopify SEO',
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
        alt: 'Shopify Agentur Österreich – Shopify Shop erstellen lassen für KMU'
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
    question: "Was kostet es, einen Shopify Shop erstellen zu lassen?",
    answer: "Ein einfaches Shopify Setup startet meist ab ca. €2.500. Der genaue Preis hängt von Design, Produktumfang, Zahlungsarten, Versandlogik, Apps und gewünschten Integrationen ab. Nach einem kurzen Strategiegespräch geben wir eine realistische Einschätzung."
  },
  {
    question: "Wie lange dauert die Entwicklung eines Shopify Shops?",
    answer: "Ein Standard-Shop ist oft in 2–4 Wochen umsetzbar. Bei komplexeren Anpassungen, vielen Produkten oder Integrationen planen wir 6–12 Wochen – abhängig von Umfang und Abstimmung."
  },
  {
    question: "Ist Shopify DSGVO-konform für Österreich und Deutschland?",
    answer: "Shopify stellt technische Bausteine bereit. Wir setzen Cookie-Banner, Datenschutz und rechtliche Grundlagen DSGVO-nah für AT und DE um. Rechtliche Einzelfragen klären Sie am besten mit Ihrer Anwaltskanzlei."
  },
  {
    question: "Was ist besser: Shopify oder WooCommerce für KMU?",
    answer: "Shopify eignet sich besonders, wenn Sie schnell live gehen und E-Commerce ohne technischen Overhead betreiben möchten. WooCommerce kann sinnvoll sein, wenn Sie bereits WordPress nutzen und maximale Flexibilität brauchen. Wir ordnen im Gespräch ein, welche Lösung zu Ihrem Geschäftsmodell passt."
  },
  {
    question: "Kann ein bestehender Shopify Shop optimiert werden?",
    answer: "Ja. Wir optimieren Struktur, Theme, Conversion, technische SEO-Basis und DSGVO-Bausteine bestehender Shops – ohne unnötigen Neustart, sofern die Grundlage tragfähig ist."
  },
  {
    question: "Übernimmt SimpleWebDesign auch Shopify SEO?",
    answer: "Ja. Im Rahmen von Setup und Optimierung legen wir die technische SEO-Basis an (Struktur, Produktseiten, Metadaten). Für umfassendere SEO-Strategien ergänzen wir auf Wunsch unseren SEO-Service."
  },
  {
    question: "Bieten Sie laufende Shopify Betreuung an?",
    answer: "Ja. Nach dem Go-Live übernehmen wir auf Wunsch laufende Shopify Betreuung: technische Anpassungen, Optimierungen, Updates und Support."
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
        { name: "Shopify Agentur Österreich", url: "https://simplewebdesign.at/services/e-commerce-partner-fuer-shopify" },
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
      name: "Shopify Agentur Österreich – Shopify Shop erstellen lassen",
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/e-commerce-partner-fuer-shopify",
      image: "https://simplewebdesign.at/img/og-image.jpg",
      serviceType: ["Shopify Agentur Österreich", "Shopify Shop erstellen lassen", "Shopify Setup", "Shopify DSGVO", "Shopify Betreuung", "E-Commerce Development"],
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
                    Shopify Agentur für KMU
                  </p>
                  <h1
                    id="shopify-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Shopify Agentur Österreich für KMU
                  </h1>
                  <p className="mt-10 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                    Als Shopify Agentur aus Österreich erstellen und optimieren wir strukturierte Shopify Shops für KMU – DSGVO-konform, conversion-optimiert und technisch sauber umgesetzt.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Button href="/kontakt">Shopify-Projekt kostenlos besprechen</Button>
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
                      alt="Shopify Agentur Österreich – Shopify Shop erstellen lassen für KMU"
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
                Shopify Shop erstellen lassen: typische Herausforderungen
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Viele KMU starten mit Shopify, stoßen aber schnell auf Fragen zu Struktur, DSGVO, Zahlungsarten, Versand, SEO und Conversion. Genau hier setzen wir an.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none md:grid-cols-2">
              <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                  Typische Probleme
                </h3>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  <li>Unklares Shopify Setup ohne saubere Shop-Struktur</li>
                  <li>DSGVO, Cookies und Rechtstexte für Österreich & Deutschland</li>
                  <li>Zu wenig Verkäufe trotz Produkten und Traffic</li>
                  <li>Zu viele Apps, technische Schulden und hohe Wartungskosten</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                  Unsere Lösungen
                </h3>
                <ul className="space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                  <li>Shopify Setup für KMU aus einer Hand</li>
                  <li>DSGVO-nahe Einrichtung mit Cookie-Banner, Datenschutz und rechtlichen Grundlagen</li>
                  <li>Conversion-optimierte Produkt-, Kategorie- und Checkout-Struktur</li>
                  <li>Laufende Shopify Betreuung, Optimierung und technischer Support</li>
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
                Shopify Shop erstellen lassen: Leistungen im Überblick
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Ob neuer Shopify Shop oder Optimierung eines bestehenden Shops: Wir unterstützen KMU in Österreich bei Struktur, Technik, DSGVO, SEO und Conversion. Orientierung zu{' '}
                <Link href="/prozess" className="text-[var(--primary)] hover:underline">Ablauf</Link>
                {' '}und{' '}
                <Link href="/preise-und-pakete" className="text-[var(--primary)] hover:underline">Preisen</Link>
                {' '}finden Sie auf den passenden Seiten.
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
                    Einrichtung, Struktur und Design für einen professionellen Shopify Shop.
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
                    Cookie-Banner, Datenschutz-Grundlagen und technische DSGVO-Bausteine für AT & DE.
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
                    Zahlungsanbieter, Versandlogik und Checkout-Grundlagen passend zum Geschäftsmodell.
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
                    Shop-Struktur, Produktseiten und technische SEO-Basis für bessere Sichtbarkeit und mehr Verkäufe.
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
                    Laufende Shopify Betreuung, technische Anpassungen und Optimierungen nach dem Go-Live.
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
                    Tracking, Verkaufsanalysen und Auswertung wichtiger Kennzahlen.
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
                  Unser Prozess als Shopify Agentur Österreich
                </h2>
                <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                  Wir begleiten Shopify-Projekte von der ersten Einordnung bis zum Go-Live – strukturiert, verständlich und ohne unnötige technische Komplexität. Mehr Details finden Sie auf unserer{' '}
                  <Link href="/prozess" className="text-[var(--primary)] hover:underline">Prozess-Seite</Link>.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Beratung & Einordnung</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Anforderungen klären und das Projekt realistisch einordnen.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Shop-Struktur & Konzept</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Navigation, Kategorien und Seitenstruktur für Ihr Geschäftsmodell.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Shopify Setup & Theme</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Einrichtung und Theme nach Ihren Vorgaben.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Payment, Versand & DSGVO</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Zahlung, Versand und DSGVO-nahe technische Einrichtung.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">SEO, Testing & Go-Live</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Technische SEO-Basis, Tests und Launch vor dem Livegang.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-sm">
                    6
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Betreuung & Optimierung</h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Laufende Shopify Betreuung, Support und Optimierung.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Shopify — Fokus: Skalierbarkeit KMU, E-Commerce-Basis, Performance & Conversion */}
        <section id="referenzen" className="py-24 lg:py-28 bg-[var(--surface-2)]" aria-labelledby="why-shopify-heading">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 id="why-shopify-heading" className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Warum Shopify für KMU?
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Shopify eignet sich für KMU, die einen skalierbaren Online-Shop benötigen, ohne ein technisch überladenes System betreiben zu müssen.{' '}
                <Link href="/blog/shopify-fuer-kmu" className="text-[var(--primary)] hover:underline">Mehr im Blog zu Shopify für KMU</Link>.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none md:grid-cols-3">
              <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                  Skalierbar für KMU
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  Shopify wächst mit: vom ersten Setup bis zu mehr Produkten, Sprachen und Märkten – ohne Plattformwechsel.
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                  Starke E-Commerce-Basis
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  Zahlung, Versand, Checkout und Produktverwaltung sind integriert – ideal für KMU, die verkaufen statt Systeme administrieren wollen.
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
                Kurze Antworten zu Kosten, DSGVO, Shopify SEO und laufender Betreuung. Für ein Angebot:{' '}
                <Link href="/kontakt" className="text-[var(--primary)] hover:underline">Kontakt</Link>.
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
              SEO, Performance und{' '}
              <Link href="/services/redesign" className="text-[var(--primary)] hover:underline">Shop-Optimierung</Link>
              {' '}– passend zu Ihrem Shopify Shop. Pakete und Preise:{' '}
              <Link href="/preise-und-pakete" className="text-[var(--primary)] hover:underline">Preise & Pakete</Link>.
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
                  Shopify-Projekt kostenlos besprechen
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}
