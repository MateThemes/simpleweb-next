import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { RocketIcon, CheckIcon } from '@/components/icons'
import { breadcrumbSchema, webPageSchema, servicePageSchema } from '@/app/schema'

const PAGE_TITLE = 'Website Performance Optimierung für KMU | Core Web Vitals & Ladezeit verbessern'
const PAGE_DESCRIPTION =
  'Website schneller machen für KMU: Core Web Vitals Optimierung, Ladezeit verbessern und technische Performance steigern – für bessere Rankings und mehr Anfragen.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/services/performance',
    type: 'website',
    locale: 'de_AT',
    images: [
      {
        url: '/img/services/performance.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Performance Optimierung - Core Web Vitals und Ladezeit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/img/services/performance.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/performance'
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

const features = [
  {
    title: 'Core Web Vitals',
    description: 'Core Web Vitals Optimierung: LCP, FID und CLS verbessern – für besseres Ranking und Nutzererlebnis.',
  },
  {
    title: 'Asset-Optimierung',
    description: 'Bilder, Scripts und Styles komprimieren – Ladezeit verbessern ohne Qualitätsverlust.',
  },
  {
    title: 'Caching-Strategien',
    description: 'Caching und CDN sinnvoll einsetzen, damit Ihre Website schneller lädt.',
  },
  {
    title: 'Server & technische SEO',
    description: 'Server-Konfiguration und technische Struktur so anpassen, dass die Website schneller macht und Suchmaschinen klare Signale gibt.',
  },
]

const benefits = [
  'Besseres Google-Ranking',
  'Höhere Conversion-Rate',
  'Geringere Absprungrate',
  'Bessere User Experience',
  'Mobile Performance',
  'Reduzierte Serverkosten',
]

export default function PerformancePage() {
  // Schema.org Structured Data
  const schemas = [
    // BreadcrumbList Schema
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "Performance", url: "https://simplewebdesign.at/services/performance" },
      ],
    }),
    // WebPage Schema
    webPageSchema({
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/performance",
      image: "https://simplewebdesign.at/img/services/performance.jpg",
    }),
    // Service Schema
    servicePageSchema({
      name: "Website Performance Optimierung",
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/performance",
      image: "https://simplewebdesign.at/img/services/performance.jpg",
      serviceType: ["Performance Optimization", "Core Web Vitals", "Ladezeit verbessern", "Technische SEO"],
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
        {/* Hero — Typo/Spacing wie Marketing-Seite */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="performance-hero-heading"
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
                    Website Performance für KMU
                  </p>
                  <h1
                    id="performance-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Website Performance Optimierung für KMU
                  </h1>
                  <p className="mt-10 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                    Core Web Vitals, Ladezeit und technische Struktur – für bessere Rankings, niedrigere Absprungrate und mehr Anfragen.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Link
                      href="/seo-audit"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Performance Audit
                    </Link>
                    <Link
                      href="#features"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base bg-transparent text-[var(--foreground)] border-2 border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Mehr erfahren
                    </Link>
                  </div>
                  <div
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-8 pt-2 text-[var(--muted-foreground)] text-sm tracking-wide"
                    role="list"
                    aria-label="Erfahrung und Reichweite"
                  >
                    <span
                      className="uppercase tracking-wider font-medium"
                      role="listitem"
                    >
                      50+ Projekte
                    </span>
                    <span
                      className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]"
                      aria-hidden
                    >
                      ·
                    </span>
                    <span
                      className="uppercase tracking-wider font-medium"
                      role="listitem"
                    >
                      AT & DE
                    </span>
                    <span
                      className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]"
                      aria-hidden
                    >
                      ·
                    </span>
                    <span
                      className="uppercase tracking-wider font-medium"
                      role="listitem"
                    >
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
                      src="/img/services/performance.jpg"
                      alt="Website Performance Dashboard"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center brightness-[0.92] contrast-[1.02]"
                    />
                    <div
                      className="absolute inset-0 bg-black/10 pointer-events-none"
                      aria-hidden
                    />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-6 sm:right-6 sm:w-auto pointer-events-none">
                    <div
                      className="rounded-xl bg-[var(--primary)] px-3.5 py-3 text-[var(--primary-foreground)] w-fit"
                      style={{ boxShadow: 'var(--shadow-2)' }}
                    >
                      <RocketIcon className="h-5 w-5 mb-1 opacity-90" aria-hidden />
                      <div className="text-lg font-bold leading-tight">0.8s</div>
                      <div className="text-xs opacity-90">Ladezeit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Features — M3 Cards, wie Marketing Subservices */}
        <section
          id="features"
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="features-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="features-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Umfassende Optimierung
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Core Web Vitals Optimierung, Ladezeit verbessern, technische Struktur: Wir machen Ihre Website schneller – messbar. Kombination mit <a href="/services/seo" className="text-[var(--primary)] hover:underline">SEO</a> und <a href="/services/webdesign" className="text-[var(--primary)] hover:underline">Webdesign</a> möglich.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
                  <RocketIcon className="h-8 w-8 text-[var(--primary)] flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Performance Stats */}
        <section
          className="py-24 lg:py-28 bg-[var(--background)]"
          aria-labelledby="stats-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="stats-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Warum Performance wichtig ist
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Schnelle Websites halten Besucher länger und werden von Suchmaschinen bevorzugt – technische SEO und Ladezeit sind Ranking-Faktoren.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 lg:p-8 text-center">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                  Niedrigere Absprungrate
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                  Liegt die Ladezeit unter wenigen Sekunden, bleiben deutlich mehr Besucher auf der Seite. Langsame Seiten verlieren Nutzer schon beim ersten Aufbau.
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 lg:p-8 text-center">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                  Mehr Conversion
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                  Jede Verbesserung der Ladezeit kann sich in mehr Kontaktanfragen oder Verkäufen niederschlagen – Nutzer bleiben bei flüssigem Erlebnis eher dran.
                </p>
              </div>
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 lg:p-8 text-center">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                  Besseres Ranking
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed text-sm">
                  Google nutzt Core Web Vitals und Ladezeit als Signale. Eine schnellere Website unterstützt bessere Sichtbarkeit in den Suchergebnissen.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits + Image — wie Marketing */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="benefits-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:flex-1">
                <div className="max-w-2xl">
                  <h2
                    id="benefits-heading"
                    className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
                  >
                    Ihre Vorteile
                  </h2>
                  <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                    Website schneller machen heißt: besseres Nutzererlebnis und stärkere technische SEO – beides wirkt auf Rankings und Anfragen.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckIcon className="h-8 w-8 text-[var(--primary)] flex-shrink-0" aria-hidden />
                      <span className="text-lg font-semibold text-[var(--foreground)]">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:flex-1">
                <div className="relative aspect-square overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] shadow-[var(--shadow-2)]">
                  <Image
                    src="/img/services/performance.jpg"
                    alt="Performance Metrics Dashboard"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Shopify Performance */}
        <section
          className="py-24 lg:py-28 bg-[var(--background)]"
          aria-labelledby="shopify-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="shopify-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Spezielle Shopify Performance Optimierung
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Ladezeit verbessern und Core Web Vitals Optimierung auch für Shopify-Shops – für bessere Performance und Sichtbarkeit.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                  Shopify Core Web Vitals
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-3">
                  Core Web Vitals Optimierung speziell für Shopify: LCP, FID, CLS – für bessere Ladezeit und Rankings.
                </p>
                <div className="text-sm text-[var(--primary)] font-medium">Shopify-spezifisch</div>
              </div>
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                  Shopify App-Optimierung
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-3">
                  Apps identifizieren, die die Ladezeit belasten – gezielte Optimierung für schnellere Shops.
                </p>
                <div className="text-sm text-[var(--primary)] font-medium">Shopify-spezifisch</div>
              </div>
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                  Shopify Asset-Optimierung
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-3">
                  Bilder, Theme-Assets und Scripts komprimieren – Website schneller machen ohne Qualitätsverlust.
                </p>
                <div className="text-sm text-[var(--primary)] font-medium">Shopify-spezifisch</div>
              </div>
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                  Shopify Caching & CDN
                </h3>
                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed mb-3">
                  Caching und CDN nutzen, damit Shops global schnell laden – technische SEO für E-Commerce.
                </p>
                <div className="text-sm text-[var(--primary)] font-medium">Shopify-spezifisch</div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button href="/services/e-commerce-partner-fuer-shopify" variant="secondary">
                Mehr über Shopify Services erfahren
              </Button>
            </div>
          </Container>
        </section>

        {/* CTA — tonal background, 1 primary CTA, wie Marketing */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="performance-cta-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="performance-cta-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Bereit für eine schnellere Website?
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Wir analysieren Ihre Website und zeigen konkret, wo Performance verloren geht.
              </p>
              <div className="mt-10">
                <Link
                  href="/seo-audit"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                >
                  Kostenloses Performance Audit
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}