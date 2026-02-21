import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'
import { SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Ich bin Gerald. Ich entwickle strategische Websites für KMU in Österreich & Deutschland – mit Klarheit, Struktur und messbarer Wirkung. Ehrliche Einschätzung ohne Verkaufsdruck.',
  openGraph: {
    title: `Über mich | ${SITE_NAME}`,
    description:
      'Ich bin Gerald. Ich entwickle strategische Websites für KMU in Österreich & Deutschland – mit Klarheit, Struktur und messbarer Wirkung. Ehrliche Einschätzung ohne Verkaufsdruck.',
    url: 'https://simplewebdesign.at/ueber-uns',
    type: 'website',
    images: [
      {
        url: '/img/about/workspace.jpg',
        width: 1200,
        height: 630,
        alt: 'Arbeitsplatz – strategische Websites mit Klarheit und Struktur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Über mich | ${SITE_NAME}`,
    description:
      'Ich bin Gerald. Ich entwickle strategische Websites für KMU in Österreich & Deutschland – mit Klarheit, Struktur und messbarer Wirkung. Ehrliche Einschätzung ohne Verkaufsdruck.',
    images: ['/img/about/workspace.jpg'],
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/ueber-uns',
  },
}

const trustItems = ['50+ Projekte', 'AT & DE', 'Antwort in 1–2 Werktagen']

const principles = [
  {
    label: 'Prinzip',
    title: 'Einordnung',
    description:
      'Bevor ich etwas baue, kläre ich mit dir, was die Website eigentlich leisten soll – und für wen.',
  },
  {
    label: 'Prinzip',
    title: 'Struktur',
    description:
      'Websites funktionieren nicht durch Design oder Features, sondern durch klare Seitenlogik, die Besucher führt.',
  },
  {
    label: 'Prinzip',
    title: 'Wirkung',
    description:
      'Erfolg messe ich nicht an Klicks oder Traffic, sondern an messbaren Ergebnissen: Anfragen, Termine oder Verkäufe.',
  },
  {
    label: 'Prinzip',
    title: 'Ehrliche Kommunikation',
    description:
      'Kein Agentur-Sprech, keine Buzzwords. Wenn etwas nicht passt, sage ich das offen – bevor Zeit und Budget investiert werden.',
  },
]

const phases = [
  { number: '01', title: 'Einordnung', text: 'Wir klären zuerst, was die Website leisten soll – und was nicht.' },
  { number: '02', title: 'Struktur', text: 'Wir bauen eine klare Seitenlogik, die Besucher führt.' },
  { number: '03', title: 'Umsetzung', text: 'Design und Technik folgen der Struktur – nicht umgekehrt.' },
  { number: '04', title: 'Wirkung', text: 'Wir prüfen gemeinsam, ob die Website das tut, wofür sie gebaut wurde.' },
]

const fits = {
  good: [
    'Du merkst, dass deine Website nicht klar arbeitet',
    'Du suchst Orientierung, bevor du investierst',
    'Du hast keine Lust auf Agentur-Sprech',
    'Du willst verstehen, warum etwas gemacht wird',
  ],
  notGood: [
    'Du brauchst nur schnell „eine Website"',
    'Du willst primär Preise vergleichen',
    'Du suchst eine reine Umsetzungsagentur',
    'Du willst Entscheidungen komplett abgeben',
  ],
}

export default function AboutPage() {
  const unifiedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://simplewebdesign.at/ueber-uns#webpage',
        url: 'https://simplewebdesign.at/ueber-uns',
        name: `Über mich | ${SITE_NAME}`,
        description:
          'Ich bin Gerald. Ich entwickle strategische Websites für KMU in Österreich & Deutschland – mit Klarheit, Struktur und messbarer Wirkung.',
        isPartOf: { '@id': 'https://simplewebdesign.at/#website' },
        about: { '@id': 'https://simplewebdesign.at/#person' },
        publisher: { '@id': 'https://simplewebdesign.at/#organization' },
        inLanguage: 'de-AT',
        image: { '@type': 'ImageObject', url: 'https://simplewebdesign.at/img/about/workspace.jpg' },
      },
      {
        '@type': 'Person',
        '@id': 'https://simplewebdesign.at/#person',
        name: 'Gerald Schandl',
        jobTitle: 'Webdesigner & Gründer',
        worksFor: { '@id': 'https://simplewebdesign.at/#organization' },
        url: 'https://simplewebdesign.at/ueber-uns',
        knowsAbout: ['Webdesign', 'User Experience (UX)', 'Conversion-Optimierung', 'SEO Grundlagen', 'Website-Struktur'],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedSchema) }} />
      <div className="flex-auto">
        {/* ——— A) Hero ——— */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="about-hero-heading"
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
                  <h1
                    id="about-hero-heading"
                    className={cn(
                      'font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08]',
                      'text-4xl sm:text-5xl lg:text-6xl'
                    )}
                  >
                    Über mich
                  </h1>
                  <p className="text-xl lg:text-2xl font-medium text-[var(--muted-foreground)] leading-snug">
                    Websites, die Entscheidungen erleichtern – nicht nur gut aussehen.
                  </p>
                  <p className="text-base text-[var(--muted-foreground-strong)] leading-relaxed max-w-[650px]">
                    Ich bin Gerald. Ich entwickle strategische Websites für KMU in Österreich & Deutschland –
                    mit Klarheit, Struktur und messbarer Wirkung. Das Problem liegt selten bei Design oder Technik,
                    sondern bei fehlender Einordnung.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Link
                      href="/kontakt"
                      className={cn(
                        'inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base',
                        'bg-[var(--primary)] text-[var(--primary-foreground)]',
                        'hover:opacity-95 transition-opacity duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                      )}
                    >
                      Einschätzung anfragen
                    </Link>
                    <Link
                      href="/prozess"
                      className={cn(
                        'inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base',
                        'bg-transparent text-[var(--foreground)] border-2 border-[var(--border)]',
                        'hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-150',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                      )}
                    >
                      Wie ich arbeite
                    </Link>
                  </div>
                  <div
                    className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-8 pt-2 text-[var(--muted-foreground)] text-sm tracking-wide"
                    role="list"
                    aria-label="Erfahrung und Reichweite"
                  >
                    {trustItems.map((item, i) => (
                      <span key={i} className="inline-flex items-center" role="listitem">
                        <span className="uppercase tracking-wider font-medium">{item}</span>
                        {i < trustItems.length - 1 && (
                          <span className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]" aria-hidden>
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:pt-8">
                <div
                  className="relative w-full overflow-hidden rounded-[24px] bg-[var(--surface-2)] border border-[var(--border)]"
                  style={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)' }}
                >
                  <div className="aspect-[4/3] lg:aspect-[3/2] relative">
                    <Image
                      src="/img/about/workspace.jpg"
                      alt="Arbeitsplatz – strategische Websites mit Klarheit und Struktur"
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

        {/* ——— B) Warum ich so arbeite ——— */}
        <section
          className="py-20 lg:py-24 bg-[var(--surface-2)]"
          aria-labelledby="warum-heading"
        >
          <Container>
            <div className="max-w-[720px] mx-auto">
              <div className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 sm:p-10 lg:p-12 border border-[var(--border)] shadow-elev-1 border-l-4 border-l-[var(--primary)]">
                <h2
                  id="warum-heading"
                  className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] mb-8"
                >
                  Warum ich so arbeite
                </h2>
                <div className="space-y-6 text-[var(--muted-foreground-strong)] text-lg leading-relaxed">
                  <p>
                    Ich habe zu oft gesehen, wie Unternehmen viel Geld in schöne Websites investieren – die dann nicht
                    liefern. Weil niemand vorher gefragt hat: Was soll diese Website eigentlich tun?
                  </p>
                  <p>
                    Deshalb beginne ich jedes Projekt mit Einordnung. Wir klären gemeinsam, für wen die Website ist,
                    was sie leisten soll – und was nicht. Erst dann baue ich die Struktur. Und erst dann kommt Design
                    und Technik.
                  </p>
                  <p>
                    Das ist kein klassisches Agentur-Vorgehen. Aber es funktioniert besser – vor allem für KMU, die keine
                    Zeit für Experimente haben.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ——— C) Wie ich arbeite (Principles) ——— */}
        <section
          className="py-20 lg:py-24 bg-[var(--background)]"
          aria-labelledby="principles-heading"
        >
          <Container>
            <div className="max-w-[1280px] mx-auto">
              <div className="max-w-[650px] mb-14 lg:mb-16">
                <h2
                  id="principles-heading"
                  className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)]"
                >
                  Wie ich arbeite
                </h2>
                <p className="mt-4 text-lg text-[var(--muted-foreground)]">
                  Diese Prinzipien leiten meine Arbeit – und unterscheiden sie von klassischen Web-Projekten.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                {principles.map((p, i) => (
                  <div
                    key={p.title}
                    className={cn(
                      'rounded-[var(--radius-2xl)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1',
                      i % 2 === 0 ? 'bg-[var(--surface)]' : 'bg-[var(--surface-2)]'
                    )}
                    aria-label={p.title}
                  >
                    <p className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">
                      {p.label}
                    </p>
                    <h3 className="font-display text-xl font-semibold text-[var(--foreground)] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ——— D) Wie die Zusammenarbeit abläuft ——— */}
        <section
          className="py-20 lg:py-24 bg-[var(--surface-2)]"
          aria-labelledby="zusammenarbeit-heading"
        >
          <Container>
            <div className="max-w-[720px] mx-auto">
              <h2
                id="zusammenarbeit-heading"
                className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] max-w-[650px] mb-14 lg:mb-16"
              >
                Wie die Zusammenarbeit abläuft
              </h2>
              <div className="space-y-0">
                {phases.map((phase, index) => (
                  <div
                    key={phase.number}
                    className="py-12 lg:py-14 border-b border-[var(--border)] last:border-b-0 first:pt-0"
                  >
                    <span
                      className="font-display text-5xl lg:text-6xl font-light text-[var(--muted-foreground)] tabular-nums block mb-4"
                      aria-hidden
                    >
                      {phase.number}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-semibold text-[var(--foreground)] mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] text-lg leading-relaxed max-w-[650px]">
                      {phase.text}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-12 pt-8 border-t border-[var(--border)] text-[var(--muted-foreground)] text-lg">
                Du musst nicht alles wissen. Aber du solltest jederzeit verstehen, warum etwas passiert.
              </p>
            </div>
          </Container>
        </section>

        {/* ——— E) Passt das für dich? ——— */}
        <section
          className="py-20 lg:py-24 bg-[var(--background)]"
          aria-labelledby="fit-heading"
        >
          <Container>
            <div className="max-w-[1280px] mx-auto">
              <h2
                id="fit-heading"
                className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] max-w-[650px] mb-14 lg:mb-16"
              >
                Passt das für dich?
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] max-w-[650px] mb-10">
                Eine ehrliche Einordnung – nicht jedes Projekt passt zu meiner Arbeitsweise.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
                <div
                  className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1"
                  aria-label="Passt gut, wenn …"
                >
                  <h3 className="font-display text-xl font-semibold text-[var(--foreground)] mb-6">
                    Passt gut, wenn …
                  </h3>
                  <ul className="space-y-3" role="list">
                    {fits.good.map((item, i) => (
                      <li key={i} className="text-[var(--muted-foreground)] leading-relaxed flex items-start gap-2">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--success)]"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1"
                  aria-label="Passt eher nicht, wenn …"
                >
                  <h3 className="font-display text-xl font-semibold text-[var(--foreground)] mb-6">
                    Passt eher nicht, wenn …
                  </h3>
                  <ul className="space-y-3" role="list">
                    {fits.notGood.map((item, i) => (
                      <li key={i} className="text-[var(--muted-foreground)] leading-relaxed flex items-start gap-2">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--muted-foreground)]"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ——— F) Metrics ——— */}
        <section
          className="py-20 lg:py-24 bg-[var(--surface-2)]"
          aria-label="Erfahrung und Reaktionszeit"
        >
          <Container>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 border border-[var(--border)] shadow-elev-1 text-center">
                  <div className="font-display text-4xl font-bold text-[var(--primary)] tabular-nums">50+</div>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                    Erfolgreich umgesetzte Projekte
                  </p>
                </div>
                <div className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 border border-[var(--border)] shadow-elev-1 text-center">
                  <div className="font-display text-4xl font-bold text-[var(--primary)]">1–2 Tage</div>
                  <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                    Durchschnittliche Antwortzeit
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ——— G) Final CTA ——— */}
        <section
          className="py-20 lg:py-24 bg-[var(--background)]"
          aria-labelledby="cta-heading"
        >
          <Container>
            <div className="relative overflow-hidden rounded-[24px] bg-[var(--surface-2)] border border-[var(--border)] shadow-elev-2 px-6 py-16 sm:px-12 sm:py-20">
              <div className="max-w-[720px] mx-auto text-center">
                <h2
                  id="cta-heading"
                  className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-8"
                >
                  Lass uns schauen, ob es passt.
                </h2>
                <p className="text-lg lg:text-xl text-[var(--muted-foreground-strong)] mb-10 leading-relaxed">
                  Kein Verkaufsgespräch. Keine Verpflichtung. Nur eine ehrliche Einschätzung, ob meine Arbeitsweise zu
                  deinem Projekt passt.
                </p>
                <Link
                  href="/kontakt"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl',
                    'bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-lg',
                    'transition-all duration-200 hover:opacity-95',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                  )}
                >
                  Einschätzung anfragen
                </Link>
                <p className="mt-6 text-sm text-[var(--muted-foreground)]">
                  Antwort in 1–2 Werktagen. Kein Spam. Wenn es nicht passt, sagen wir&apos;s offen.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ——— H) Tech-Stack (optional panel) ——— */}
        <section className="pb-24 sm:pb-32 pt-4" aria-labelledby="tech-heading">
          <Container>
            <div className="max-w-2xl mx-auto">
              <details
                className="group rounded-[var(--radius-2xl)] bg-[var(--surface-2)] border border-[var(--border)] overflow-hidden"
                id="tech-stack"
              >
                <summary
                  id="tech-heading"
                  className="cursor-pointer list-none px-6 py-4 text-[var(--muted-foreground)] text-sm font-medium hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-inset rounded-[var(--radius-2xl)] transition-colors duration-150"
                >
                  <span className="flex items-center justify-between gap-2">
                    Tech-Stack (für die, die es interessiert)
                    <span className="text-[var(--muted-foreground)] group-open:rotate-180 transition-transform duration-200" aria-hidden>
                      ▼
                    </span>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-[var(--muted-foreground-strong)] text-sm leading-relaxed border-t border-[var(--border)]">
                  <p>
                    Ich arbeite hauptsächlich mit Next.js, React, Tailwind CSS und Shopify. Hosting läuft über Vercel
                    (oder Hetzner, je nach Projekt). Die Technologie ist selten das Problem – wichtiger ist, dass die
                    Website tut, was sie soll.
                  </p>
                </div>
              </details>
            </div>
          </Container>
        </section>
      </div>
    </>
  )
}
