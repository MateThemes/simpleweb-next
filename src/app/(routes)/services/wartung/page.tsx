import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { CheckIcon, ClockIcon, ServerIcon } from '@/components/icons'
import { PricingCard } from '@/components/ui/PricingCard'
import { PricingSection, PricingSectionHeader } from '@/components/sections/pricing'
import { breadcrumbSchema, webPageSchema, servicePageSchema } from '@/app/schema'

const PAGE_TITLE = 'Website Wartung & Support für KMU | Wartungsvertrag & Pflege'
const PAGE_DESCRIPTION =
  'Website Wartung für KMU: Updates, Sicherheit, Backups und technischer Support. Klare Wartungsverträge und schnelle Hilfe bei Problemen.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/services/wartung',
    images: [
      {
        url: '/img/services/wartung.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Wartung und Support'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/img/services/wartung.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/wartung'
  }
}

const wartungPackages = [
  {
    name: 'Basis',
    price: '49',
    description: 'Regelmäßige Updates, Sicherheits-Patches und monatliche Backups für einen stabilen Betrieb. Ideal für kleine Websites mit geringem Änderungsbedarf.',
    valueLine: 'pro Monat',
    popular: false,
    features: [
      { name: 'Monatliche Updates & Sicherheits-Patches', included: true },
      { name: 'Monatliche Backups', included: true },
      { name: 'Kurz-Check (Erreichbarkeit, SSL)', included: true },
      { name: 'E-Mail-Support (24–48 h)', included: true },
    ],
  },
  {
    name: 'Premium',
    price: '99',
    description: 'Erweiterte Website Pflege mit Content-Updates, SEO-Monitoring und priorisiertem technischen Website Support.',
    valueLine: 'pro Monat',
    popular: true,
    features: [
      { name: 'Alles aus Basis', included: true },
      { name: 'Content-Updates (bis 2 h/Monat)', included: true },
      { name: 'SEO-Monitoring (Rankings, Fehler)', included: true },
      { name: 'Priorisierter Support (Reaktion innerhalb 24 h)', included: true },
    ],
  },
]

const supportOptions = [
  {
    name: 'Standard Support',
    price: '90',
    description: 'Technischer Support nach Aufwand, z. B. bei Fehlern oder Anpassungswünschen.',
    valueLine: 'pro Stunde',
    popular: false,
    features: [
      { name: 'Reaktionszeit 24–48 Stunden', included: true },
      { name: 'Fehlerbehebung, kleine Anpassungen', included: true },
    ],
  },
  {
    name: 'Express Support',
    price: '120',
    description: 'Schnelle Hilfe bei dringenden Anliegen – wenn es schnell gehen muss.',
    valueLine: 'pro Stunde',
    popular: false,
    features: [
      { name: 'Reaktionszeit 2–4 Stunden (Werktags)', included: true },
      { name: 'Priorisierte Bearbeitung', included: true },
    ],
  },
]

const wannSinnvoll = [
  'Sie betreiben eine Website (z. B. WordPress) und möchten keine Zeit mit Updates und Sicherheit verbringen.',
  'Ein Website Wartungsvertrag gibt Ihnen Planbarkeit: feste monatliche Kosten, klare Leistungen.',
  'Technischer Website Support soll greifbar sein – mit definierten Reaktionszeiten, nicht nur eine Hotline.',
  'Website Pflege wird bei Ihnen gebraucht: Inhalte ändern, Backups sicher wissen, Performance im Blick.',
]

const benefits = [
  'Regelmäßige Updates',
  'Proaktive Sicherheit',
  'Zuverlässige Backups',
  'Performance-Monitoring',
  'Technischer Support',
  'Content-Pflege',
]

export default function WartungPage() {
  const schemas = [
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "Wartung", url: "https://simplewebdesign.at/services/wartung" },
      ],
    }),
    webPageSchema({
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/wartung",
      image: "https://simplewebdesign.at/img/services/wartung.jpg",
    }),
    servicePageSchema({
      name: "Website Wartung & Support für KMU",
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/wartung",
      image: "https://simplewebdesign.at/img/services/wartung.jpg",
      serviceType: ["Website Maintenance", "Technical Support", "Website Updates", "Website Security"],
    }),
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main className="flex-auto">
        {/* Hero — an Marketing-Seite angeglichen, mit Keyfacts, kleiner 24/7 Badge */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="wartung-hero-heading"
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
                    Website Wartung für KMU
                  </p>
                  <h1
                    id="wartung-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Website Wartung & Support für KMU
                  </h1>
                  <p className="mt-10 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                    Regelmäßige Updates, Sicherheit und technischer Support – damit Ihre Website stabil läuft und Sie sich auf Ihr Kerngeschäft konzentrieren können.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Wartung anfragen
                    </Link>
                    <Link
                      href="#wartungspakete"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base bg-transparent text-[var(--foreground)] border-2 border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Mehr erfahren
                    </Link>
                  </div>
                  <div
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-8 pt-2 text-[var(--muted-foreground)] text-sm tracking-wide"
                    role="list"
                    aria-label="Wartung und Support"
                  >
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      Updates & Backups
                    </span>
                    <span className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]" aria-hidden>·</span>
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      AT & DE
                    </span>
                    <span className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]" aria-hidden>·</span>
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      24/7 Monitoring
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
                      src="/img/services/wartung.jpg"
                      alt="Website Wartung Dashboard – technischer Support und Pflege für KMU"
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

        {/* Wann ist eine Website Wartung sinnvoll? */}
        <section
          id="wann-sinnvoll"
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="wann-sinnvoll-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-3xl">
              <h2
                id="wann-sinnvoll-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Wann ist eine Website Wartung sinnvoll?
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Ein Website Wartungsvertrag lohnt sich, wenn Sie Ihre Website nicht selbst betreuen wollen – und trotzdem sicher und aktuell bleiben möchten.
              </p>
              <ul className="mt-10 space-y-5 text-[var(--muted-foreground)]" role="list">
                {wannSinnvoll.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* Wartungspakete — M3 Pricing Cards */}
        <PricingSection id="wartungspakete" variant="background">
          <PricingSectionHeader
            title="Wartungspakete"
            description="Von der Basis-Wartung bis zum Express-Support: klare Leistungen, transparente Preise. Auch WordPress Wartung möglich."
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 max-w-4xl mx-auto">
            {wartungPackages.map((pkg) => (
              <PricingCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                valueLine={pkg.valueLine}
                features={pkg.features}
                popular={pkg.popular}
                ctaText="Wartung anfragen"
                ctaLink="/kontakt"
              />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[var(--muted-foreground)]">
            Gemäß § 6 Abs. 1 Z 27 UStG wird keine Umsatzsteuer berechnet.
          </p>
          <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)] mt-14 mb-6 text-center">
            Support-Optionen
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {supportOptions.map((pkg) => (
              <PricingCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                valueLine={pkg.valueLine}
                features={pkg.features}
                popular={false}
                ctaText="Support anfragen"
                ctaLink="/kontakt"
              />
            ))}
          </div>
        </PricingSection>

        {/* Technischer Website Support – Reaktionszeiten */}
        <section
          id="support"
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="support-heading"
        >
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2
                id="support-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Technischer Website Support – wenn es schnell gehen muss
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Sie haben ein technisches Problem oder eine dringende Frage? Wir unterscheiden klar zwischen Standard- und Express-Support – mit definierten Reaktionszeiten.
              </p>
              <div className="mt-12 grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6">
                  <ClockIcon className="h-8 w-8 text-[var(--primary)] flex-shrink-0" aria-hidden />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Standard Support</h3>
                    <p className="mt-1 text-[var(--muted-foreground)] text-sm">Reaktionszeit: 24–48 Stunden (Werktage)</p>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Für nicht-dringende Anliegen, Fehlerbehebung und kleine Anpassungen.</p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6">
                  <ClockIcon className="h-8 w-8 text-[var(--primary)] flex-shrink-0" aria-hidden />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">Express Support</h3>
                    <p className="mt-1 text-[var(--muted-foreground)] text-sm">Reaktionszeit: 2–4 Stunden (Werktags)</p>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)]">Priorisierte Bearbeitung bei dringenden Problemen.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits */}
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
                    Eine gut gewartete Website ist sicher, schnell und immer auf dem neuesten Stand.
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
                    src="/img/services/wartung.jpg"
                    alt="Website Wartung und Support für KMU"
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

        {/* CTA */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="wartung-cta-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="wartung-cta-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Unsicher, ob Ihre Website technisch sauber läuft?
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Wir prüfen Updates, Backups und Sicherheit – und empfehlen das passende Wartungspaket.
              </p>
              <div className="mt-10">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                >
                  Jetzt Anfrage stellen
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
