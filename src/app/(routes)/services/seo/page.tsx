import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { ChartBarIcon, CheckIcon, CodeIcon, MapPinIcon, SearchIcon } from '@/components/icons'
import { Accordion } from '@/components/ui/Accordion'
import {
  breadcrumbSchema,
  webPageSchema,
  servicePageSchema,
  faqSchema,
} from '@/app/schema'
import { getServicePageDC } from '@/lib/dublinCore'

export const metadata: Metadata = {
  title: 'SEO für KMU: Klarheit, Struktur, Sichtbarkeit | SimpleWebDesign',
  description:
    'SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut. Google-konform, messbar, langfristig wirksam.',
  openGraph: {
    title: 'SEO für KMU: Klarheit, Struktur, Sichtbarkeit | SimpleWebDesign',
    description:
      'SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut. Google-konform, messbar, langfristig wirksam.',
    url: 'https://simplewebdesign.at/services/seo',
    images: [
      {
        url: '/img/services/seo.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO für KMU – Nachhaltige Suchmaschinenoptimierung in Österreich und Deutschland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO für KMU: Klarheit, Struktur, Sichtbarkeit | SimpleWebDesign',
    description:
      'SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut.',
    images: ['/img/services/seo.jpg'],
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/seo',
  },
  other: {
    ...getServicePageDC({
      title: 'SEO für KMU: Klarheit, Struktur, Sichtbarkeit | SimpleWebDesign',
      description:
        'SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut.',
      url: 'https://simplewebdesign.at/services/seo',
    }),
  },
}

const problemBullets = [
  'Plugins und Tools ohne klare Einordnung – wer soll gefunden werden?',
  'Keyword-Fokus ohne Struktur – Suchmaschinen verstehen Kontext nicht.',
  'Versprechen ohne Basis – Rankings in 30 Tagen gibt es nicht nachhaltig.',
]

const leistungen = [
  {
    title: 'Technisches SEO',
    sentence:
      'Saubere technische Grundlagen, damit Suchmaschinen Ihre Website erfassen und einordnen können.',
    bullets: [
      'Crawlbarkeit und Indexierung',
      'Core Web Vitals und Ladezeiten',
      'Strukturierte Daten (Schema)',
    ],
  },
  {
    title: 'Struktur & Inhalte',
    sentence:
      'Klare Seitenlogik und semantische Struktur, die Besucher führt und Suchmaschinen signalisiert, worum es geht.',
    bullets: [
      'Seitenlogik und Informationsarchitektur',
      'Semantische Struktur (Überschriften, Abschnitte)',
      'Keyword-Zuordnung auf Basis von Klarheit',
    ],
  },
  {
    title: 'Lokale Sichtbarkeit',
    sentence:
      'Für KMU in Österreich und Deutschland: lokale Signale und regionale Relevanz – ohne Tricks.',
    bullets: [
      'Fokus AT & DE',
      'Lokale Signale (Einträge, NAP)',
      'Regionale Landingpages wo sinnvoll',
    ],
  },
  {
    title: 'Messung & Weiterentwicklung',
    sentence:
      'Regelmäßige Einordnung, was wirkt – und was nicht. Transparent und iterativ.',
    bullets: [
      'Search Console und Auswertung',
      'Tracking und Ziele',
      'Iteration statt einmalige Aktion',
    ],
  },
]

const processSteps = [
  {
    title: 'Einordnung',
    description: 'Wir klären, wer gefunden werden soll und warum. Erst dann folgen technische und inhaltliche Maßnahmen.',
  },
  {
    title: 'Struktur prüfen',
    description: 'Wir prüfen die technische und inhaltliche Struktur. Was ist bereits klar? Was fehlt?',
  },
  {
    title: 'Optimierung',
    description: 'Wir optimieren technisch und inhaltlich – immer aufbauend auf Klarheit und Struktur.',
  },
  {
    title: 'Messung',
    description: 'Wir messen, was funktioniert und was nicht. Regelmäßige Einordnung statt Versprechen.',
  },
  {
    title: 'Weiterentwicklung',
    description: 'Wir entwickeln weiter, basierend auf Daten und Klarheit – nicht auf Vermutungen.',
  },
]

const fuerWenBullets = [
  'Regionale Dienstleister und Handwerksbetriebe, die vor Ort gefunden werden sollen.',
  'Unternehmen mit erklärungsbedürftigen Leistungen – wenn Klarheit im Web fehlt.',
  'Bestehende Website, aber zu wenig Anfragen – und Sie wollen verstehen, wo das Potenzial liegt.',
]

const abgrenzungBullets = [
  'Keine Ranking-Garantien – niemand kann Google-Platzierungen versprechen.',
  'Kein Linkkauf oder künstliche Link-Netzwerke – wir arbeiten konform zu den Richtlinien.',
  'Kein Black-Hat oder Grauzonen – keine Abkürzungen auf Kosten der langfristigen Sichtbarkeit.',
  'Keine 30-Tage-Versprechen – SEO wirkt nachhaltig, nicht in wenigen Wochen.',
]

const faqItems = [
  {
    question: 'Wie lange dauert SEO, bis Ergebnisse sichtbar werden?',
    answer:
      'Erste Verbesserungen (z. B. Indexierung, technische Kennzahlen) können innerhalb von Wochen sichtbar werden. Sichtbare Ranking-Verbesserungen für wichtige Suchbegriffe brauchen in der Regel mehrere Monate – abhängig von Konkurrenz und Ausgangslage. Wir setzen auf nachhaltige Wirkung statt kurzfristige Spitzen.',
  },
  {
    question: 'Was ist technisches SEO – und warum ist es wichtig?',
    answer:
      'Technisches SEO umfasst alles, was Suchmaschinen das Crawlen, Indexieren und Einordnen Ihrer Website erleichtert: Ladezeiten, mobile Darstellung, strukturierte Daten, saubere URLs und interne Verlinkung. Ohne solide technische Basis bringen inhaltliche Optimierungen oft weniger als sie könnten.',
  },
  {
    question: 'Brauche ich SEO, wenn ich bereits Google Ads schalte?',
    answer:
      'Ads und SEO ergänzen sich: Ads bringen kurzfristig Sichtbarkeit für ausgewählte Begriffe; SEO baut langfristig organische Sichtbarkeit und Vertrauen auf. Gerade für KMU lohnt sich beides – wobei SEO ohne laufende Klickkosten wirkt und oft zu qualifizierteren Anfragen führt.',
  },
  {
    question: 'Was kostet SEO für KMU?',
    answer:
      'Die Kosten hängen vom Umfang ab: Einmalige Einordnung und technische Basis-Optimierung, laufende Betreuung oder umfassendes Programm. Wir geben Ihnen nach einem ersten Gespräch eine transparente Einschätzung – ohne versteckte Pakete.',
  },
  {
    question: 'Ist lokale SEO für mein Unternehmen relevant?',
    answer:
      'Wenn Sie regional in Österreich oder Deutschland Kunden suchen – z. B. Handwerk, Beratung, lokale Dienstleistungen –, ist lokale SEO sehr relevant. Wir sorgen dafür, dass Suchmaschinen und Nutzer Sie lokal einordnen können (z. B. über Einträge, NAP-Konsistenz und regionale Inhalte).',
  },
]

const linkStyles =
  'text-[var(--primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded'

export default function SeoPage() {
  const schemas = [
    breadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://simplewebdesign.at' },
        { name: 'Services', url: 'https://simplewebdesign.at/services' },
        { name: 'SEO', url: 'https://simplewebdesign.at/services/seo' },
      ],
    }),
    webPageSchema({
      name: 'SEO für KMU: Klarheit, Struktur, Sichtbarkeit',
      description:
        'SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut. Google-konform, messbar, langfristig wirksam.',
      url: 'https://simplewebdesign.at/services/seo',
      image: 'https://simplewebdesign.at/img/services/seo.jpg',
    }),
    servicePageSchema({
      name: 'SEO',
      description:
        'SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut.',
      url: 'https://simplewebdesign.at/services/seo',
      image: 'https://simplewebdesign.at/img/services/seo.jpg',
      serviceType: ['SEO', 'Search Engine Optimization', 'Local SEO', 'Technical SEO'],
    }),
    faqSchema({
      faqs: faqItems.map((item) => ({ question: item.question, answer: item.answer })),
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
      <main className="flex-auto" id="main-content">
        {/* Hero — exact match to webdesign */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="seo-hero-heading"
        >
          <Container className="relative">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
              <div className="relative">
                <div
                  className="absolute -inset-x-8 top-1/2 -translate-y-1/2 h-[120%] w-[140%] max-w-none pointer-events-none opacity-[0.04] dark:opacity-[0.06] hidden lg:block"
                  aria-hidden
                  style={{
                    background:
                      'radial-gradient(ellipse 70% 60% at 30% 50%, var(--foreground), transparent 70%)',
                  }}
                />
                <div className="relative space-y-6">
                  <p className="text-sm font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                    SEO für KMU
                  </p>
                  <h1
                    id="seo-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    SEO für KMU in Österreich & Deutschland
                  </h1>
                  <p className="text-base text-[var(--muted-foreground-strong)] leading-relaxed max-w-[650px]">
                    Nachhaltige Sichtbarkeit auf Basis klarer Struktur – nicht auf Basis von Tricks.
                  </p>
                  <p className="text-base text-[var(--muted-foreground)] leading-relaxed max-w-[650px]">
                    Wir optimieren Websites technisch und inhaltlich so, dass Suchmaschinen verstehen, wer Sie sind – und warum Ihr Unternehmen relevant ist.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Kostenlose Einordnung
                    </Link>
                    <Link
                      href="/prozess"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base bg-transparent text-[var(--foreground)] border-2 border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Wie wir arbeiten
                    </Link>
                  </div>
                  <div
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-8 pt-2 text-[var(--muted-foreground)] text-sm tracking-wide"
                    role="list"
                    aria-label="SEO-Prinzipien und Reichweite"
                  >
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      Google-konform
                    </span>
                    <span
                      className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]"
                      aria-hidden
                    >
                      ·
                    </span>
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      Messbar
                    </span>
                    <span
                      className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]"
                      aria-hidden
                    >
                      ·
                    </span>
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      AT & DE
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
                      src="/img/services/seo.jpg"
                      alt="SEO für KMU – Klarheit, Struktur und Sichtbarkeit in Suchmaschinen"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center brightness-[0.92] contrast-[1.02]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Problem / Klarheit — section intro pattern from webdesign */}
        <section
          id="problem"
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="problem-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="problem-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Warum SEO oft nicht wirkt
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Ohne Klarheit bringen Plugins und Keywords wenig. SEO beginnt
                nicht mit Tools – sondern mit Klarheit. Warum viele Websites trotz Sichtbarkeit keine Anfragen bekommen:{' '}
                <Link href="/blog/website-bringt-keine-anfragen" className="text-[var(--primary)] underline underline-offset-2 hover:no-underline">
                  Website konvertiert nicht – Ursachen
                </Link>
                .
              </p>
            </div>
            <ul className="mx-auto mt-16 max-w-2xl space-y-4 text-[var(--muted-foreground)]">
              {problemBullets.map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]"
                    aria-hidden
                  />
                  <span className="text-base leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Leistungen — same card system as webdesign features */}
        <section
          id="leistungen"
          className="py-24 lg:py-28 bg-[var(--background)]"
          aria-labelledby="leistungen-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="leistungen-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Unsere SEO-Leistungen
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Technisches SEO, Struktur & Inhalte, lokale Sichtbarkeit und
                messbare Weiterentwicklung – auf Basis von Klarheit, nicht
                Tricks.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2">
              {leistungen.map((item, index) => {
                const icons = [CodeIcon, SearchIcon, MapPinIcon, ChartBarIcon]
                const Icon = icons[index] ?? ChartBarIcon
                return (
                  <div
                    key={item.title}
                    className="flex gap-5 rounded-2xl bg-[var(--surface)]/40 border border-[var(--border)]/50 p-6 lg:p-8 transition-shadow duration-200 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/40">
                      <Icon className="h-5 w-5 text-[var(--primary)]" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {item.sentence}
                      </p>
                      <ul className="mt-4 space-y-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <CheckIcon
                              className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5"
                              aria-hidden
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Prozess — exact stepper from webdesign */}
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
                  Unser Prozess
                </h2>
                <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                  Wir beginnen nicht mit Keywords oder Tools, sondern mit
                  Einordnung: Wer soll gefunden werden? Erst dann folgen
                  technische und inhaltliche Maßnahmen – bis zur messbaren
                  Wirkung.
                </p>
              </div>
              <div className="mt-16 lg:mt-20 relative">
                <div
                  className="absolute left-5 top-6 bottom-6 w-px border-l border-[var(--border)] hidden sm:block"
                  aria-hidden
                />
                <ul className="space-y-0" role="list">
                  {processSteps.map((step, index) => (
                    <li
                      key={step.title}
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

        {/* Für wen sinnvoll — section intro + list like webdesign benefits */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="fuer-wen-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="fuer-wen-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Für wen SEO sinnvoll ist
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Regionale Anbieter, erklärungsbedürftige Leistungen oder
                bestehende Website mit zu wenig Anfragen – wir ordnen ein, ob
                SEO für Sie passt.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 max-w-4xl">
              {fuerWenBullets.map((bullet, i) => (
                <div key={i} className="flex gap-4">
                  <CheckIcon
                    className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-base font-medium text-[var(--foreground)] leading-snug">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Abgrenzung — section intro + list */}
        <section
          className="py-24 lg:py-28 bg-[var(--background)]"
          aria-labelledby="abgrenzung-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="abgrenzung-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Was wir bewusst nicht machen
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Wir arbeiten Google-konform und langfristig – keine Garantien,
                kein Linkkauf, keine Abkürzungen.
              </p>
            </div>
            <ul className="mx-auto mt-16 max-w-2xl space-y-3 text-[var(--muted-foreground)]">
              {abgrenzungBullets.map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <CheckIcon
                    className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-base leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* FAQ — section intro pattern */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="faq-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="faq-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Häufige Fragen zu SEO
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Kurze Antworten für KMU in Österreich und Deutschland.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:p-8 shadow-elev-1">
                <Accordion items={faqItems} />
              </div>
              <p className="mt-8 text-center text-[var(--muted-foreground)]">
                Weitere Fragen?{' '}
                <Link href="/kontakt" className={linkStyles}>
                  Kontaktieren Sie uns
                </Link>
              </p>
            </div>
          </Container>
        </section>

        {/* CTA — exact block from webdesign (background image + overlay + white button) */}
        <section
          className="relative w-full min-h-[420px] overflow-hidden"
          aria-labelledby="seo-cta-heading"
        >
          <div className="absolute inset-0">
            <Image
              src="/img/cta-home-bg.jpg"
              fill
              className="object-cover object-[55%_50%]"
              alt=""
              role="presentation"
              quality={60}
              sizes="100vw"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60"
            aria-hidden
          />
          <div
            className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-80"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.35) 100%)',
            }}
            aria-hidden
          />
          <div className="relative z-10 flex items-center justify-center py-24 lg:py-28 min-h-[420px]">
            <Container>
              <div className="max-w-[720px] mx-auto text-center">
                <h2
                  id="seo-cta-heading"
                  className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
                >
                  Bereit für mehr Sichtbarkeit?
                </h2>
                <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
                  Lassen Sie uns klären, ob SEO für Ihr Unternehmen sinnvoll ist –
                  und wo das größte Potenzial liegt.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl bg-white text-gray-900 font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Kostenlose Einordnung anfragen
                </Link>
              </div>
            </Container>
          </div>
        </section>
      </main>
    </>
  )
}
