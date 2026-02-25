import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { ShieldCheckIcon, CheckIcon, InformationCircleIcon, ToolIcon, FileTextIcon } from '@/components/icons'
import { breadcrumbSchema } from '@/app/schema'
import { getServicePageDC } from '@/lib/dublinCore'

const PAGE_TITLE = 'Website Security Check für KMU | Sicherheitsprüfung & Risiko-Einordnung'
const PAGE_DESCRIPTION = 'Website Sicherheitsprüfung für KMU: kontrollierter Security Check mit Risiko-Einordnung und konkreten Maßnahmen. Legal, transparent und ohne Angstmache.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/services/security-check',
    images: [
      {
        url: '/img/services/security-check.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Security Check Services für KMU'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/img/services/security-check.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/security-check'
  },
  other: {
    ...getServicePageDC({
      title: 'Website Security Check für KMU | Sicherheitsprüfung & Risiko-Einordnung',
      description: PAGE_DESCRIPTION,
      url: 'https://simplewebdesign.at/services/security-check',
    }),
  },
}

const features = [
  {
    title: 'Technische Analyse',
    description: 'Prüfung von Konfiguration, Updates und grundlegenden Sicherheitsaspekten – ohne Angriffe oder Exploits.',
    Icon: ToolIcon,
  },
  {
    title: 'Risiko-Einordnung',
    description: 'Klare Bewertung gefundener Punkte: Was ist kritisch, was ist verbesserungswürdig, was ist unbedenklich.',
    Icon: ShieldCheckIcon,
  },
  {
    title: 'Maßnahmenplan',
    description: 'Konkrete, umsetzbare Schritte zur Behebung – verständlich erklärt, ohne technisches Vorwissen.',
    Icon: FileTextIcon,
  },
  {
    title: 'Optionaler Retest',
    description: 'Nach Umsetzung der Maßnahmen prüfen wir erneut – damit Sie sicher sein können, dass alles passt.',
    Icon: CheckIcon,
  },
]

const benefits = [
  'Klarheit über den aktuellen Sicherheitsstand',
  'Verständliche Einordnung statt technischem Jargon',
  'Konkrete Maßnahmen statt allgemeiner Ratschläge',
  'Transparenz über den gesamten Prozess',
]

const process = [
  {
    title: 'Auftragsklärung',
    description: 'Wir klären gemeinsam, was geprüft werden soll. Schriftliche Freigabe, klarer Scope, keine Überraschungen.',
  },
  {
    title: 'Kontrollierte Prüfung',
    description: 'Technische Analyse mit professionellen Tools – legal, kontrolliert, ohne Beeinträchtigung des laufenden Betriebs.',
  },
  {
    title: 'Auswertung & Einordnung',
    description: 'Gefundene Punkte werden eingeordnet: Was ist kritisch, was ist verbesserungswürdig, was ist unbedenklich.',
  },
  {
    title: 'Kurzbericht & Maßnahmenplan',
    description: 'Verständlicher Bericht mit konkreten Maßnahmen – ohne technisches Vorwissen nachvollziehbar.',
  },
  {
    title: 'Optional: Retest nach Umsetzung',
    description: 'Nach Umsetzung der Maßnahmen prüfen wir erneut – damit Sie sicher sein können, dass alles passt.',
  },
]

export default function SecurityCheckPage() {
  // Schema.org Structured Data
  const schemas = [
    // BreadcrumbList Schema
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "Security Check", url: "https://simplewebdesign.at/services/security-check" },
      ],
    }),
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://simplewebdesign.at/services/security-check#webpage",
      "name": "Website Security Check für KMU | Sicherheitsprüfung & Risiko-Einordnung",
      "description": PAGE_DESCRIPTION,
      "url": "https://simplewebdesign.at/services/security-check",
      "image": "https://simplewebdesign.at/img/services/security-check.jpg",
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
      "@id": "https://simplewebdesign.at/services/security-check#service",
      "name": "Website Security Check",
      "serviceType": "Website Security Check",
      "url": "https://simplewebdesign.at/services/security-check",
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
        {/* Hero — visuell wie /services/marketing */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="security-hero-heading"
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
                    Website Sicherheitsprüfung für KMU
                  </p>
                  <h1
                    id="security-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Website Security Check für KMU
                  </h1>
                  <p className="mt-10 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                    Kontrollierte Sicherheitsprüfung mit klarer Risiko-Einordnung und konkreten Maßnahmen – legal, transparent und ohne Angstmache.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Security Check anfragen
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
                    aria-label="Security Check Fakten"
                  >
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      Legal & kontrolliert
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
                  style={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)' }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src="/img/services/security-check.jpg"
                      alt="Website Security Check und Website Sicherheitsanalyse für KMU"
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
                      <ShieldCheckIcon className="h-5 w-5 mb-1 opacity-90" aria-hidden />
                      <div className="text-lg font-bold leading-tight">Legal</div>
                      <div className="text-xs opacity-90">Kontrolliert & Transparent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Was ein Security Check leistet — M3 Cards, tonal surface */}
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
                Was ein Security Check leistet
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Eine Website Sicherheitsanalyse ist keine Penetrationstest. Wir prüfen Konfiguration, Updates und können gezielt Website Schwachstellen prüfen – mit Risiko-Einordnung und konkreten Maßnahmen. Kombinieren Sie dies mit unserem <a href="/services/webdesign" className="text-[var(--primary)] hover:underline">Webdesign</a>, <a href="/services/redesign" className="text-[var(--primary)] hover:underline">Redesign</a> und <a href="/services/performance" className="text-[var(--primary)] hover:underline">Performance-Optimierung</a> für eine vollständige Website-Betreuung.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60">
                    <feature.Icon className="h-5 w-5 text-[var(--primary)]" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Prozess — M3 vertikaler Stepper */}
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
                  Unser Security Check Prozess
                </h2>
                <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                  Wir beginnen nicht mit Tests oder Tools, sondern mit Klärung: Was soll geprüft werden? Erst dann folgen kontrollierte Prüfung, Einordnung und konkrete Maßnahmen – transparent und nachvollziehbar.
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

        {/* Legal-Abgrenzung — tonal, Info-Icon, klarer Abschnittstitel */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="legal-heading"
        >
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12 shadow-[var(--shadow-1)]">
                <div className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60">
                    <InformationCircleIcon className="h-5 w-5 text-[var(--primary)]" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h2
                      id="legal-heading"
                      className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
                    >
                      Was dieser Security Check nicht ist
                    </h2>
                    <p className="mt-6 text-lg text-[var(--muted-foreground-strong)] leading-relaxed">
                      Ein Security Check ist kein Penetrationstest. Es ist eine kontrollierte, legale Prüfung Ihrer Website – mit klarer Risiko-Einordnung und konkreten Maßnahmen. Kein Hacking, keine Angstmache, sondern Klarheit.
                    </p>
                    <ul className="mt-10 space-y-5 text-[var(--muted-foreground)]">
                      <li className="flex gap-4">
                        <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                        <span className="text-base">Tests nur mit schriftlicher Freigabe und klar definiertem Scope</span>
                      </li>
                      <li className="flex gap-4">
                        <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                        <span className="text-base">Keine Beeinträchtigung des laufenden Betriebs</span>
                      </li>
                      <li className="flex gap-4">
                        <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                        <span className="text-base">Kein Social Engineering, kein DDoS, kein Test außerhalb der Freigabe</span>
                      </li>
                      <li className="flex gap-4">
                        <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                        <span className="text-base">Fokus auf Konfiguration, Updates und grundlegende Sicherheitsaspekte</span>
                      </li>
                    </ul>
                    <p className="mt-10 text-lg text-[var(--muted-foreground-strong)] leading-relaxed">
                      Reagieren Schutzsysteme wie Firewalls oder Sicherheits-Plugins, wird der Check bewusst beendet. Das ist kein Fehler, sondern ein positives Zeichen: Die Schutzmechanismen greifen.
                    </p>
                    <p className="mt-8 text-base text-[var(--muted-foreground)]">
                      Dieser Security Check ersetzt keinen Penetrationstest. Für weitergehende Tests sind abgestimmte Prüfungen mit Freigabe erforderlich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits Section with Image */}
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
                    Mit unserer Website Sicherheitsprüfung erhalten Sie Klarheit über den aktuellen Sicherheitsstand – ohne technisches Vorwissen. Auch als WordPress Sicherheitscheck möglich. Kombinieren Sie dies mit unserem <Link href="/services/webdesign" className="text-[var(--primary)] hover:underline">Webdesign</Link>, <Link href="/services/redesign" className="text-[var(--primary)] hover:underline">Redesign</Link> und <Link href="/services/performance" className="text-[var(--primary)] hover:underline">Performance-Optimierung</Link> für eine vollständige Website-Betreuung.
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
                    src="/img/services/security-check.jpg"
                    alt="Website Security Check und Website Schwachstellen prüfen für KMU in Österreich und Deutschland"
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

        {/* CTA Section — M3 tonal, 1 primary CTA */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="security-cta-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2
                id="security-cta-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Unsicher, wie sicher Ihre Website wirklich ist?
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Wir prüfen Konfiguration, Updates und grundlegende Schwachstellen – kontrolliert und nachvollziehbar.
              </p>
              <div className="mt-10">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                >
                  Unverbindliche Einschätzung erhalten
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}

