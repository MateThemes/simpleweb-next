import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import {
  ChartBarIcon,
  CheckIcon,
  ChatBubbleIcon,
  FileTextIcon,
  ArrowTrendingUpIcon,
  EnvelopeIcon,
} from '@/components/icons'
import { breadcrumbSchema } from '@/app/schema'
import { getServicePageDC } from '@/lib/dublinCore'

const PAGE_TITLE = 'Digital Marketing für KMU in Österreich & Deutschland | SimpleWebDesign'
const PAGE_DESCRIPTION =
  'Marketing-Strategie für KMU: strukturiertes Online Marketing für mehr Anfragen statt nur Reichweite. Social Media, Content & Performance – messbar und klar.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/services/marketing',
    images: [
      {
        url: '/img/services/marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Marketing Dashboard mit Analytics und Social Media Performance für KMU in Österreich',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/img/services/marketing.jpg'],
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/marketing',
  },
  other: {
    ...getServicePageDC({
      title: 'Digital Marketing für KMU in Österreich & Deutschland',
      description: PAGE_DESCRIPTION,
      url: 'https://simplewebdesign.at/services/marketing',
    }),
  },
}

const subservices = [
  {
    title: 'Social Media',
    description: 'Klarer Content, der Positionierung stärkt – statt nur Reichweite.',
    Icon: ChatBubbleIcon,
  },
  {
    title: 'Content Marketing',
    description: 'Inhalte, die erklären und überzeugen – nicht nur füllen.',
    Icon: FileTextIcon,
  },
  {
    title: 'Performance Marketing',
    description: 'Ads als Verstärker für funktionierende Botschaften – datenbasiert.',
    Icon: ArrowTrendingUpIcon,
  },
  {
    title: 'E-Mail Marketing',
    description: 'Beziehungen aufbauen, statt nur Traffic einkaufen.',
    Icon: EnvelopeIcon,
  },
]

const benefits = [
  'Klarere Botschaft statt nur Reichweite',
  'Qualifizierte Anfragen statt nur Klicks',
  'Messbarkeit statt Bauchgefühl',
  'System statt Einzelmaßnahmen',
]

const process = [
  {
    title: 'Einordnung',
    description: 'Ziele, Zielgruppe, Angebot, Botschaft – wir klären, wer erreicht werden soll und warum.',
  },
  {
    title: 'Positionierung',
    description: 'Klare Kernbotschaft & Nutzenversprechen – damit Besucher sofort verstehen, wer hier richtig ist.',
  },
  {
    title: 'Kanalwahl',
    description: 'Welche Kanäle Sinn ergeben – nicht alles, sondern das Passende.',
  },
  {
    title: 'Umsetzung',
    description: 'Content, Ads, E-Mail im passenden Mix – konsistent zur Botschaft.',
  },
  {
    title: 'Messung & Weiterentwicklung',
    description: 'Was wirkt, was nicht, nächste Schritte – messbar, nachvollziehbar, transparent.',
  },
]

export default function MarketingPage() {
  // Schema.org Structured Data
  const schemas = [
    // BreadcrumbList Schema
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "Marketing", url: "https://simplewebdesign.at/services/marketing" },
      ],
    }),
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://simplewebdesign.at/services/marketing#webpage",
      "name": "Digital Marketing für KMU in Österreich & Deutschland",
      "description": PAGE_DESCRIPTION,
      "url": "https://simplewebdesign.at/services/marketing",
      "image": "https://simplewebdesign.at/img/services/marketing.jpg",
      "publisher": {
        "@id": "https://simplewebdesign.at/#org",
        "@type": "Organization",
        "name": "SimpleWebDesign",
        "url": "https://simplewebdesign.at",
        "logo": {
          "@type": "ImageObject",
          "url": "https://simplewebdesign.at/img/logo.png"
        }
      }
    },
    // Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://simplewebdesign.at/services/marketing#service",
      "name": "Digital Marketing",
      "serviceType": "Digital Marketing",
      "url": "https://simplewebdesign.at/services/marketing",
      "provider": {
        "@id": "https://simplewebdesign.at/#org",
        "@type": "Organization",
        "name": "SimpleWebDesign",
        "url": "https://simplewebdesign.at",
        "logo": {
          "@type": "ImageObject",
          "url": "https://simplewebdesign.at/img/logo.png"
        }
      },
      "areaServed": ["AT", "DE"]
    },
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
        {/* Hero — visuell exakt wie /services/webdesign */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="marketing-hero-heading"
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
                    Digital Marketing für KMU
                  </p>
                  <h1
                    id="marketing-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Digital Marketing für KMU in Österreich & Deutschland
                  </h1>
                  <p className="mt-10 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                    Marketing-System statt Posting-Aktionismus – klar positioniert, messbar und auf Anfragen ausgerichtet.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Strategie-Gespräch
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
                    aria-label="Marketing und Reichweite"
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
                      src="/img/services/marketing.jpg"
                      alt="Marketing Dashboard mit Analytics und Social Media Performance für KMU in Österreich"
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
                      <ChartBarIcon className="h-5 w-5 mb-1 opacity-90" aria-hidden />
                      <div className="text-lg font-bold leading-tight">+284%</div>
                      <div className="text-xs opacity-90">Social Engagement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Subservices — M3 Cards, tonal surface, hover elevation */}
        <section
          id="features"
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="subservices-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="subservices-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Ganzheitliches Marketing
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Marketing ist kein Posting-Aktionismus, sondern ein System: Strategie → Botschaft → Umsetzung → Messung. Wir entwickeln Maßnahmen, die zur Botschaft passen und messbar sind. Kombinieren Sie dies mit unserem <a href="/services/webdesign" className="text-[var(--primary)] hover:underline">Webdesign</a>, <a href="/services/seo" className="text-[var(--primary)] hover:underline">SEO</a> und <a href="/services/performance" className="text-[var(--primary)] hover:underline">Performance-Optimierung</a> für maximale Online-Sichtbarkeit.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2">
              {subservices.map((item, index) => (
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

        {/* Process — M3 vertical Stepper */}
        <section
          className="py-24 lg:py-28 bg-[var(--background)]"
          aria-labelledby="process-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2
                  id="process-heading"
                  className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
                >
                  Unser Marketing-Prozess
                </h2>
                <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                  Wir beginnen nicht mit Postings oder Ads, sondern mit Einordnung: Wer soll erreicht werden? Erst dann folgen Botschaft, Kanalwahl und Umsetzung – bis zur messbaren Wirkung.
                </p>
              </div>
              <div className="mt-16 lg:mt-20 relative">
                <div
                  className="absolute left-5 top-6 bottom-6 w-px border-l border-[var(--border)] hidden sm:block"
                  aria-hidden
                />
                <ul className="space-y-0" role="list">
                  {process.map((step, index) => (
                    <li
                      key={index}
                      className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0"
                    >
                      <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--surface)] border-2 border-[var(--border)] text-sm font-semibold text-[var(--foreground)]">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0 pt-0.5">
                        <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)]">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[var(--muted-foreground)] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Trust — Marketing sauber, strategisch, messbar */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="trust-heading"
        >
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12 shadow-[var(--shadow-1)]">
                <h2
                  id="trust-heading"
                  className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
                >
                  Marketing – sauber, strategisch, messbar
                </h2>
                <p className="mt-6 text-lg text-[var(--muted-foreground-strong)] leading-relaxed">
                  Kein Aktionismus, keine leeren Versprechen. Wir arbeiten mit Klarheit, konsistenter Botschaft und messbaren Signalen – damit Marketing zu Anfragen führt.
                </p>
                <ul className="mt-10 space-y-5 text-[var(--muted-foreground)]">
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-base">Keine &ldquo;mehr Reichweite&rdquo;-Versprechen ohne Strategie</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-base">Maßnahmen nur, wenn sie zur Botschaft passen</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-base">Messbar, nachvollziehbar, transparent</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-base">Fokus auf Anfragen statt Vanity Metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits + Image */}
        <section
          className="py-24 lg:py-28 bg-[var(--background)]"
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
                    Mit unseren Marketing-Strategien erreichen Sie Ihre Zielgruppe effektiv und steigern nachhaltig Ihren Erfolg. Kombinieren Sie dies mit unserem <Link href="/services/webdesign" className="text-[var(--primary)] hover:underline">Webdesign</Link>, <Link href="/services/seo" className="text-[var(--primary)] hover:underline">SEO</Link> und <Link href="/services/performance" className="text-[var(--primary)] hover:underline">Performance-Optimierung</Link> für maximale Online-Sichtbarkeit.
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
                    src="/img/services/marketing.jpg"
                    alt="Marketing Dashboard mit Analytics und Social Media Performance für KMU in Österreich"
                    fill
                    className="object-cover object-center"
                    quality={60}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA — tonal background, 1 primary CTA */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="marketing-cta-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="marketing-cta-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Bereit für Marketing, das zu Anfragen führt?
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Lassen Sie uns kurz einordnen, welche Kanäle für Sie wirklich Sinn ergeben.
              </p>
              <div className="mt-10">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                >
                  Jetzt Strategie-Gespräch vereinbaren
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}