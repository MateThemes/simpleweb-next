import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import {
  SearchIcon,
  PaletteIcon,
  CodeIcon,
  RocketLaunchIcon,
  CheckIcon,
  ArrowRightIcon,
} from '@/components/icons'
import { processSchema, breadcrumbSchema, webPageSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'Webdesign Prozess für KMU | SimpleWebDesign Österreich & Deutschland',
  description:
    'Erfahre, wie wir dein KMU-Projekt in klaren Phasen begleiten: Analyse, Struktur, Design, Umsetzung und Launch – mit messbarer Wirkung, ohne Agentur-Theater.',
  openGraph: {
    title: 'Webdesign Prozess für KMU | SimpleWebDesign Österreich & Deutschland',
    description:
      'Erfahre, wie wir dein KMU-Projekt in klaren Phasen begleiten: Analyse, Struktur, Design, Umsetzung und Launch – mit messbarer Wirkung, ohne Agentur-Theater.',
    url: 'https://simplewebdesign.at/prozess',
    images: [
      {
        url: '/img/process/workflow.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWebDesign Webdesign-Prozess für KMU in Österreich & Deutschland',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign Prozess für KMU | SimpleWebDesign Österreich & Deutschland',
    description:
      'Erfahre, wie wir dein KMU-Projekt in klaren Phasen begleiten: Analyse, Struktur, Design, Umsetzung und Launch – mit messbarer Wirkung, ohne Agentur-Theater.',
    images: ['/img/process/workflow.jpg'],
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/prozess',
  },
}

const processSteps = [
  {
    name: 'Einordnung',
    description:
      'Wir klären zuerst, was die Website leisten soll – und für wen. Ohne Einordnung entsteht nur Oberfläche.',
    image: '/img/process/analysis.jpg',
    icon: SearchIcon,
  },
  {
    name: 'Struktur',
    description:
      'Aus der Einordnung entsteht eine klare Seitenlogik. Besucher verstehen sofort, wer hier richtig ist – und was der nächste Schritt ist.',
    image: '/img/process/design.jpg',
    icon: PaletteIcon,
  },
  {
    name: 'Design',
    description:
      'Design folgt der Struktur. Modern, ruhig und funktional – damit Orientierung entsteht, nicht nur Eindruck.',
    image: '/img/process/design.jpg',
    icon: PaletteIcon,
  },
  {
    name: 'Umsetzung',
    description:
      'Technisch sauber umgesetzt mit Fokus auf Performance, Stabilität und Wartbarkeit.',
    image: '/img/process/development.jpg',
    icon: CodeIcon,
  },
  {
    name: 'Launch & Wirkung',
    description:
      'Nach dem Launch prüfen wir gemeinsam, ob die Website das tut, wofür sie gebaut wurde: Anfragen, Termine oder Verkäufe.',
    image: '/img/process/launch.jpg',
    icon: RocketLaunchIcon,
  },
]

const benefitsList = [
  'Klare Entscheidungen statt Endlos-Schleifen',
  'Strukturierter Ablauf ohne Chaos',
  'Qualität vor Geschwindigkeit',
  'Transparenz in jeder Phase',
]

export default function ProcessPage() {
  const schemas = [
    processSchema({
      name: 'SimpleWebDesign Webdesign-Prozess',
      description:
        'Unser strukturierter Webdesign-Prozess von der Einordnung bis zum Launch für KMU in Österreich & Deutschland.',
      image: '/img/process/workflow.jpg',
      steps: processSteps.map((step) => ({
        name: step.name,
        description: step.description,
        image: step.image,
      })),
    }),
    breadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://simplewebdesign.at' },
        { name: 'Prozess', url: 'https://simplewebdesign.at/prozess' },
      ],
    }),
    webPageSchema({
      name: 'Webdesign Prozess für KMU',
      description:
        'Erfahre, wie wir dein KMU-Projekt in klaren Phasen begleiten: Analyse, Struktur, Design, Umsetzung und Launch – mit messbarer Wirkung, ohne Agentur-Theater.',
      url: 'https://simplewebdesign.at/prozess',
      image: 'https://simplewebdesign.at/img/process/workflow.jpg',
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
        {/* Hero — aligned with webdesign hero (typography rhythm, trust strip, CTA) */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="prozess-hero-heading"
        >
          <Container className="relative">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
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
                    Webdesign Prozess für KMU
                  </p>
                  <h1
                    id="prozess-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Struktur statt Zufall.
                  </h1>
                  <p className="text-base text-[var(--muted-foreground-strong)] leading-relaxed max-w-[650px]">
                    Ein klarer Ablauf von Einordnung bis Wirkung – ohne
                    Agentur-Theater.
                  </p>
                  <p className="text-base text-[var(--muted-foreground)] leading-relaxed max-w-[650px]">
                    Wir begleiten dein Projekt in klaren Phasen: Analyse,
                    Struktur, Design, Umsetzung und Launch. Nicht schneller.
                    Sondern sinnvoller.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Kostenlose Einordnung
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
                      src="/img/process/workflow.jpg"
                      alt=""
                      aria-hidden
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

        {/* Process Steps — 5 steps, M3 surfaces */}
        <section className="py-24 lg:py-28 bg-[var(--background)]">
          <Container className="max-w-5xl mx-auto">
            <div className="space-y-16 lg:space-y-24">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={step.name} className="relative">
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                    >
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] border-2 border-[var(--border)] text-[var(--foreground)]">
                            <IconComponent className="w-5 h-5 text-[var(--primary)]" />
                          </div>
                          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                            Schritt {index + 1}
                          </span>
                        </div>
                        <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl mb-4">
                          {step.name}
                        </h2>
                        <p className="text-[var(--muted-foreground)] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]">
                          <Image
                            src={step.image}
                            alt=""
                            aria-hidden
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Was du erwarten kannst — M3 card style */}
        <section className="py-24 lg:py-28 bg-[var(--surface-2)]">
          <Container className="max-w-5xl mx-auto">
            <div className="mx-auto max-w-2xl sm:text-center mb-12">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl mb-4">
                Was du erwarten kannst
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
                Ein Prozess, der Klarheit schafft – ohne Endlos-Schleifen und
                ohne Chaos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefitsList.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 lg:p-8 transition-shadow duration-200 hover:shadow-md"
                >
                  <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-base font-medium text-[var(--foreground)] leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Statistics — M3 surfaces */}
        <section className="py-24 lg:py-28 bg-[var(--background)]">
          <Container className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="text-3xl font-bold text-[var(--primary)]">
                  50+
                </div>
                <div className="text-sm text-[var(--muted-foreground)] mt-2">
                  KMU-Projekte
                </div>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="text-3xl font-bold text-[var(--primary)]">
                  5+
                </div>
                <div className="text-sm text-[var(--muted-foreground)] mt-2">
                  Jahre Erfahrung
                </div>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                <div className="text-3xl font-bold text-[var(--primary)]">
                  100%
                </div>
                <div className="text-sm text-[var(--muted-foreground)] mt-2">
                  Zufriedenheit
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA — match webdesign CTA style */}
        <section
          className="relative w-full min-h-[420px] overflow-hidden"
          aria-labelledby="prozess-cta-heading"
        >
          <div className="absolute inset-0">
            <Image
              src="/img/cta-home-bg.jpg"
              fill
              className="object-cover object-[55%_50%]"
              alt=""
              aria-hidden
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
                  id="prozess-cta-heading"
                  className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
                >
                  Lass uns dein Projekt einordnen.
                </h2>
                <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
                  Ohne Verkaufsdruck. Ohne Verpflichtung.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl bg-white text-gray-900 font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Kostenlose Einordnung anfragen
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </Container>
          </div>
        </section>
      </main>
    </>
  )
}
