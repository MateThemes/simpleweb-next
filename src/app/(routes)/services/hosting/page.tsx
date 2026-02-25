import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { ServerIcon, CheckIcon, ChatBubbleIcon, ShieldCheckIcon, ChartArrowsVerticalIcon } from '@/components/icons'
import { breadcrumbSchema, webPageSchema, servicePageSchema } from '@/app/schema'
import { getServicePageDC } from '@/lib/dublinCore'

const PAGE_TITLE = 'Website Hosting & Hosting-Beratung für KMU | Managed Hosting'
const PAGE_DESCRIPTION =
  'Website Hosting für KMU: Beratung bei Anbieterwahl, Managed Hosting und Performance-Optimierung. Stabil, sicher und transparent.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/services/hosting',
    images: [
      {
        url: '/img/services/hosting.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Hosting & Hosting-Beratung für KMU'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/img/services/hosting.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/hosting'
  },
  other: {
    ...getServicePageDC({
      title: 'Website Hosting & Hosting-Beratung für KMU',
      description: PAGE_DESCRIPTION,
      url: 'https://simplewebdesign.at/services/hosting',
    }),
  },
}

const features = [
  {
    title: 'Hosting-Beratung',
    description: 'Individuelle Beratung zur passenden Hosting-Lösung – ob Neuwahl oder Hosting wechseln. Wir helfen KMU, den richtigen Hosting Anbieter für Unternehmen zu finden.',
    Icon: ChatBubbleIcon,
  },
  {
    title: 'SSL & Sicherheit',
    description: 'SSL-Zertifikate und Sicherheitsmaßnahmen einrichten und pflegen. Stabilität und Absicherung im Fokus.',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Performance',
    description: 'Server-Performance und Ladezeiten optimieren – damit Ihre Website stabil und schnell läuft.',
    Icon: ChartArrowsVerticalIcon,
  },
  {
    title: 'Domain-Management',
    description: 'Verwaltung und Konfiguration Ihrer Domains – übersichtlich und ohne versteckte Kosten.',
    Icon: ServerIcon,
  },
]

const benefits = [
  'Deutsche Rechenzentren',
  'Automatische Deployments',
  'SSL-Zertifikate inklusive',
  '24/7 Support',
  'Globales CDN',
  'Analytics & Monitoring',
]

export default function HostingPage() {
  // Schema.org Structured Data
  const schemas = [
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "Hosting", url: "https://simplewebdesign.at/services/hosting" },
      ],
    }),
    webPageSchema({
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/hosting",
      image: "https://simplewebdesign.at/img/services/hosting.jpg",
    }),
    servicePageSchema({
      name: "Website Hosting & Hosting-Beratung für KMU",
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/hosting",
      image: "https://simplewebdesign.at/img/services/hosting.jpg",
      serviceType: ["Hosting", "Web Hosting", "Hosting Consultation", "Managed Hosting", "WordPress Hosting"],
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
          aria-labelledby="hosting-hero-heading"
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
                    Website Hosting für KMU
                  </p>
                  <h1
                    id="hosting-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Website Hosting & Hosting-Beratung für KMU
                  </h1>
                  <p className="mt-10 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                    Stabil, sicher und performant: Wir helfen KMU, die passende Hosting-Lösung zu finden – ohne Technik-Wirrwarr oder versteckte Kosten.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Kostenlose Beratung
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
                    aria-label="Hosting und Reichweite"
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
                      src="/img/services/hosting.jpg"
                      alt="Hosting-Infrastruktur – Website Hosting für KMU"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center brightness-[0.92] contrast-[1.02]"
                    />
                    <div className="absolute inset-0 bg-black/10 pointer-events-none" aria-hidden />
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-6 sm:right-6 sm:w-auto pointer-events-none">
                    <div
                      className="rounded-xl bg-[var(--primary)] px-3.5 py-3 text-[var(--primary-foreground)] w-fit"
                      style={{ boxShadow: 'var(--shadow-2)' }}
                    >
                      <ServerIcon className="h-5 w-5 mb-1 opacity-90" aria-hidden />
                      <div className="text-lg font-bold leading-tight">24/7</div>
                      <div className="text-xs opacity-90">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Services — M3 Cards wie Marketing */}
        <section
          id="features"
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="hosting-solutions-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="hosting-solutions-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Umfassende Hosting-Lösungen
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Stabilität, Performance und Sicherheit im Fokus: Von der Beratung bis zur Umsetzung unterstützen wir Sie bei der Wahl des passenden Hosting Anbieters für Unternehmen. Kombinieren Sie dies mit unserem <a href="/services/webdesign" className="text-[var(--primary)] hover:underline">Webdesign</a> und <a href="/services/performance" className="text-[var(--primary)] hover:underline">Performance-Service</a> für optimale Website-Performance.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60">
                    <item.Icon className="h-5 w-5 text-[var(--primary)]" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Wann Hosting-Beratung sinnvoll ist */}
        <section
          className="py-24 lg:py-28 bg-[var(--background)]"
          aria-labelledby="hosting-beratung-sinnvoll-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <h2
                id="hosting-beratung-sinnvoll-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Wann ist eine Hosting-Beratung sinnvoll?
              </h2>
              <ul className="mt-10 space-y-5 text-[var(--muted-foreground)]" role="list">
                <li className="flex gap-4">
                  <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-base">Sie planen einen Neustart oder wollen <strong className="text-[var(--foreground)]">Hosting wechseln</strong> – und brauchen eine klare Empfehlung ohne Technik-Wirrwarr.</span>
                </li>
                <li className="flex gap-4">
                  <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-base">Ihre Website ist langsam oder instabil – Sie wollen Stabilität und Performance statt Trial-and-Error.</span>
                </li>
                <li className="flex gap-4">
                  <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-base">Sie nutzen oder planen <strong className="text-[var(--foreground)]">WordPress Hosting</strong> und möchten wissen, welcher Anbieter und welches Paket wirklich passen.</span>
                </li>
                <li className="flex gap-4">
                  <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                  <span className="text-base">Sie wünschen <strong className="text-[var(--foreground)]">Managed Hosting</strong>: Weniger Technik-Kümmernis, mehr Fokus auf Ihr Geschäft.</span>
                </li>
              </ul>
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="hosting-benefits-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:flex-1">
                <div className="max-w-2xl">
                  <h2
                    id="hosting-benefits-heading"
                    className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
                  >
                    Ihre Vorteile
                  </h2>
                  <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                    Stabile Infrastruktur, transparente Konditionen und Support, der greift – ohne versteckte Kosten.
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
                    src="/img/services/hosting-benefits.jpg"
                    alt="Hosting-Vorteile: stabile Infrastruktur für KMU"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="hosting-cta-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="hosting-cta-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Unsicher, ob Ihr Hosting wirklich passt?
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Wir analysieren Ihre bestehende Hosting-Struktur und geben eine klare Empfehlung.
              </p>
              <div className="mt-10">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                >
                  Jetzt Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}