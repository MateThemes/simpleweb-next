import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Accordion } from '@/components/ui/Accordion'
import { breadcrumbSchema, webPageSchema, faqSchema } from '@/app/schema'

const PAGE_TITLE = 'Warum deine Website keine Anfragen bekommt | Website Analyse für KMU'
const PAGE_DESCRIPTION =
  'Viele KMU-Websites haben Besucher, aber kaum Anfragen. Erfahre die häufigsten Ursachen und wie eine klare Website-Struktur mehr Leads und Termine bringt.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: `${PAGE_TITLE} | SimpleWebDesign`,
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/website-bringt-keine-anfragen',
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/website-bringt-keine-anfragen',
  },
}

const problemBlocks = [
  {
    title: 'Unklarer Nutzen',
    description:
      'Besucher verstehen nicht sofort, wofür das Unternehmen steht und welches Problem gelöst wird.',
  },
  {
    title: 'Keine klare Führung',
    description:
      'Die Website informiert, führt Besucher aber nicht zum nächsten Schritt.',
  },
  {
    title: 'Zu viel Information, zu wenig Struktur',
    description: 'Viele Texte – aber keine klare Seitenlogik.',
  },
  {
    title: 'Fokus auf Design statt Wirkung',
    description: 'Schöne Website, aber keine Conversion-Strategie.',
  },
]

const solutionSteps = [
  {
    title: 'Einordnung',
    description: 'Was soll die Website wirklich erreichen?',
  },
  {
    title: 'Struktur',
    description: 'Seitenlogik, die Besucher zum nächsten Schritt führt.',
  },
  {
    title: 'Conversion',
    description: 'Klare Botschaft, klare CTAs, klare Führung.',
  },
]

const exampleBlocks = [
  {
    title: 'Klarerer Nutzen auf der Startseite',
    description:
      'Besucher verstehen schneller, wofür das Unternehmen steht und was der nächste sinnvolle Schritt ist.',
  },
  {
    title: 'Bessere Führung zu Anfragen',
    description:
      'Klare Seitenlogik und eindeutige CTAs helfen, aus Besuchern häufiger qualifizierte Anfragen zu machen.',
  },
  {
    title: 'Weniger erklären, mehr orientieren',
    description:
      'Statt viele Informationen nebeneinander zu zeigen, wird die Website so strukturiert, dass Nutzer schneller Vertrauen fassen und Entscheidungen leichter treffen.',
  },
]

const faqItems = [
  {
    question: 'Warum bringt meine Website keine Anfragen?',
    answer:
      'Häufige Ursachen sind unklarer Nutzen (Besucher verstehen nicht sofort, wofür Sie da sind), fehlende Führung zum nächsten Schritt, zu viel Information ohne Struktur oder ein Fokus auf Design statt auf Conversion. Oft entstehen Websites aus Design- oder Technikprojekten – Strategie und Besucherführung werden erst später oder gar nicht bedacht. Eine klare Einordnung, Struktur und Conversion-Strategie können hier Abhilfe schaffen.',
  },
  {
    question: 'Brauche ich einen kompletten Website Relaunch?',
    answer:
      'Nicht immer. Oft reicht eine gezielte Optimierung von Struktur, Botschaften und Besucherführung. Ob ein Relaunch sinnvoll ist oder eine Anpassung der bestehenden Website, lässt sich in einem kurzen Gespräch einordnen. Wir schauen gemeinsam, wo die größten Hebel für mehr Anfragen liegen – und ob das mit einer Optimierung oder einem Relaunch besser erreicht wird.',
  },
  {
    question: 'Reicht eine Website Optimierung?',
    answer:
      'In vielen Fällen ja. Wenn die technische Basis stimmt und vor allem Klarheit, Struktur und Führung fehlen, bringt eine gezielte Optimierung oft mehr als ein Neustart. Wir ordnen mit Ihnen ein, was Ihre Website erreichen soll – und ob Optimierung (z. B. Struktur, Texte, CTAs) ausreicht oder ein umfassenderer Relaunch sinnvoller ist.',
  },
]

const linkStyles =
  'text-[var(--primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded'

export default function WebsiteBringtKeineAnfragenPage() {
  const schemas = [
    breadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://simplewebdesign.at' },
        {
          name: 'Website bringt keine Anfragen',
          url: 'https://simplewebdesign.at/website-bringt-keine-anfragen',
        },
      ],
    }),
    webPageSchema({
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: 'https://simplewebdesign.at/website-bringt-keine-anfragen',
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
      <main className="flex-auto">
        {/* Hero Section — matches /services/webdesign */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="website-anfragen-hero-heading"
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
                    Website Analyse für KMU
                  </p>
                  <h1
                    id="website-anfragen-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Warum deine Website keine Anfragen bekommt
                  </h1>
                  <p className="text-base text-[var(--muted-foreground-strong)] leading-relaxed max-w-[650px]">
                    Viele KMU-Websites haben Besucher – aber kaum Anfragen oder
                    Termine. Oft liegt das nicht am Design, sondern an fehlender
                    Klarheit und Struktur.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Kostenlose Website-Analyse anfordern
                    </Link>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base bg-transparent text-[var(--foreground)] border-2 border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Strategiegespräch anfragen
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
                      src="/img/services/website-services-hero.jpg"
                      alt="Abstrakte digitale Illustration eines Laptops mit stilisierten Interface-Elementen und leuchtenden Linien über einer Karte von Österreich und Deutschland."
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

        {/* Problem Section — same card pattern as service features */}
        <section
          id="probleme"
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="probleme-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="probleme-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Typische Gründe, warum Websites keine Anfragen bringen
              </h2>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2">
              {problemBlocks.map((block, index) => (
                <div
                  key={index}
                  className="flex gap-5 rounded-2xl bg-[var(--surface)]/40 border border-[var(--border)]/50 p-6 lg:p-8 transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/40 text-lg font-semibold text-[var(--foreground)]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                      {block.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Explanation Section */}
        <section
          className="py-24 lg:py-28 bg-[var(--background)]"
          aria-labelledby="erklaerung-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="erklaerung-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Warum das bei KMU häufig passiert
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Viele Websites entstehen aus Design- oder Technikprojekten.
                Strategie, Positionierung und Besucherführung werden erst später
                bedacht – oder gar nicht.
              </p>
            </div>
          </Container>
        </section>

        {/* Solution Section — process-style stepper like service pages */}
        <section
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
          aria-labelledby="loesung-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2
                  id="loesung-heading"
                  className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
                >
                  Was stattdessen funktioniert
                </h2>
              </div>
              <div className="mt-16 lg:mt-20 relative">
                <div
                  className="absolute left-5 top-6 bottom-6 w-px border-l border-[var(--border)] hidden sm:block"
                  aria-hidden
                />
                <ul className="space-y-0" role="list">
                  {solutionSteps.map((step, index) => (
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
              <p className="mt-8 text-[var(--muted-foreground)] leading-relaxed">
                Ob eine{' '}
                <Link href="/services/redesign" className={linkStyles}>
                  Website-Optimierung
                </Link>{' '}
                ausreicht oder ein{' '}
                <Link href="/services/redesign" className={linkStyles}>
                  Website-Relaunch
                </Link>{' '}
                sinnvoller ist, lässt sich in einem kurzen Gespräch einordnen.
              </p>
            </div>
          </Container>
        </section>

        {/* Beispiele aus Projekten — trust-building, same card pattern as Problem section */}
        <section
          id="beispiele"
          className="py-24 lg:py-28 bg-[var(--background)]"
          aria-labelledby="beispiele-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="beispiele-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Beispiele aus Projekten mit KMU
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Typische Muster aus Projekten mit KMU in Österreich und
                Deutschland: Oft liegt das Problem nicht an zu wenig Traffic,
                sondern an fehlender Klarheit, Struktur und Besucherführung.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
              {exampleBlocks.map((block, index) => (
                <div
                  key={index}
                  className="flex gap-5 rounded-2xl bg-[var(--surface)]/40 border border-[var(--border)]/50 p-6 lg:p-8 transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/40 text-lg font-semibold text-[var(--foreground)]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                      {block.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {block.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-[var(--muted-foreground)]">
              Auf Wunsch zeigen wir im Gespräch passende Beispiele und
              Referenzen.
            </p>
          </Container>
        </section>

        {/* CTA Section — same block as service pages */}
        <section
          className="relative w-full min-h-[420px] overflow-hidden"
          aria-labelledby="cta-heading"
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
                  id="cta-heading"
                  className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
                >
                  Lass uns deine Website kurz einordnen
                </h2>
                <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
                  In einem kurzen Gespräch schauen wir uns an, warum deine
                  Website aktuell zu wenig Anfragen bringt – und welche Struktur
                  mehr Wirkung erzeugen kann.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl bg-white text-gray-900 font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Kostenlose Website-Analyse anfordern
                </Link>
              </div>
            </Container>
          </div>
        </section>

        {/* FAQ Section — same pattern as SEO / webdesign-handwerker */}
        <section
          className="py-24 lg:py-28 bg-[var(--background)]"
          aria-labelledby="faq-heading"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2
                id="faq-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
              >
                Häufige Fragen
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Kurze Antworten zu Website, Anfragen und nächsten Schritten.
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
      </main>
    </>
  )
}
