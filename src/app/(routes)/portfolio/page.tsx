import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { CheckIcon } from '@/components/icons'
import { portfolioSchema } from '@/app/schema'

const PAGE_TITLE =
  'Case Study & Strukturbeispiele für KMU | SimpleWebDesign Österreich & Deutschland'
const PAGE_DESCRIPTION =
  'Ausgewählte Case Study und Strukturbeispiele für KMU in Österreich & Deutschland. Strategisches Webdesign mit Klarheit, Struktur und messbarer Wirkung. Kostenlose Einordnung.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: `${PAGE_TITLE} | SimpleWebDesign`,
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/portfolio',
    images: [
      {
        url: '/img/portfolio/showcase.jpg',
        width: 1200,
        height: 630,
        alt: 'Case Study & Strukturbeispiele für KMU',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PAGE_TITLE} | SimpleWebDesign`,
    description: PAGE_DESCRIPTION,
    images: ['/img/portfolio/showcase.jpg'],
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/portfolio',
  },
}

// Einzige öffentlich verlinkte Case Study
const caseStudy = {
  id: "parkett-stelzl",
  title: "Parkett Stelzl – München",
  tags: ["Relaunch", "Struktur", "Local SEO"],
  ausgangslage:
    "Website war inhaltlich vorhanden, aber wenig führend und nicht klar auf Anfragen aufgebaut.",
  ansatz:
    "Einordnung + neue Seitenlogik mit klarer Leistungsführung, Kontaktpfaden und sauberer Struktur.",
  ergebnis:
    "Ruhigerer Auftritt, klarere Leistungsführung und ein Kontaktpfad, der Anfragen erleichtert.",
  techStack: ["Nuxt.js", "UIkit 3"],
  websiteUrl: "https://artparkett-stelzl.de/",
  imageUrl: "/img/portfolio/parkett-stelzl-munich.jpg",
};

// Strukturbeispiele (Szenarien, keine Projektnamen, keine Screenshots)
const strukturbeispiele = [
  {
    id: 'handwerk',
    title: 'Handwerksbetrieb (lokal)',
    problem: 'Viele Aufrufe, aber zu wenig Anfragen.',
    structure:
      'Leistungslogik, Vertrauen, lokale Suchintention, Kontaktpfad.',
  },
  {
    id: 'dienstleister',
    title: 'Dienstleister (Beratung/Service)',
    problem: 'Unklarer Nutzen auf den ersten Blick.',
    structure:
      'Positionierung, Seitenhierarchie, klare nächste Schritte.',
  },
  {
    id: 'shop',
    title: 'Shop / E-Commerce',
    problem: 'Traffic da, Conversion schwach.',
    structure:
      'Produktlogik, Vertrauen, Checkout-Pfade, Performance.',
  },
  {
    id: 'events',
    title: 'Events & Buchungen',
    problem: 'Infos da, aber keine saubere Buchungsführung.',
    structure:
      'Terminlogik, CTA-Führung, Prozesse und Bestätigung.',
  },
  {
    id: 'automatisierung',
    title: 'Automatisierung (Anfragen/Workflows)',
    problem: 'Anfragen kommen rein, aber Verarbeitung kostet Zeit.',
    structure:
      'Formularlogik, Routing, CRM/Automation, klare Übergaben.',
  },
]

const wirkungBullets = [
  'Klarer Nutzen in Sekunden',
  'Struktur, die Besucher führt',
  'Mehr Anfragen, Termine oder Verkäufe – je nach Ziel',
  'Bessere lokale Sichtbarkeit',
  'Saubere Technik & schnelle Ladezeiten',
]

// Schema: nur Parkett Stelzl + Strukturbeispiele (keine externen Links für Beispiele)
const schemaProjects = [
  {
    name: caseStudy.title,
    description: [caseStudy.ausgangslage, caseStudy.ansatz, caseStudy.ergebnis].join(' '),
    image: caseStudy.imageUrl,
    url: caseStudy.websiteUrl,
  },
  ...strukturbeispiele.map((s) => ({
    name: s.title,
    description: `${s.problem} ${s.structure}`,
    image: '/img/portfolio/showcase.jpg',
    url: 'https://simplewebdesign.at/kontakt',
  })),
]

export default function PortfolioPage() {
  const schema = portfolioSchema({
    name: 'SimpleWebDesign – Case Study & Strukturbeispiele',
    description: PAGE_DESCRIPTION,
    image: '/img/portfolio/showcase.jpg',
    projects: schemaProjects,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="flex-auto">
        {/* Hero — match /services/webdesign rhythm */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="portfolio-hero-heading"
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
                    Case Study & Strukturbeispiele
                  </p>
                  <h1
                    id="portfolio-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Strategische Webprojekte für KMU.
                  </h1>
                  <p className="text-base text-[var(--muted-foreground-strong)] leading-relaxed max-w-[650px]">
                    Weniger Galerie. Mehr Struktur: Einordnung, Seitenlogik und
                    messbare Wirkung.
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-[650px]">
                    Ein Teil unserer Arbeit entsteht in Agenturpartnerschaften und
                    darf nicht öffentlich gezeigt werden. Entscheidend ist nicht
                    die Menge an Screenshots, sondern die Struktur dahinter – und
                    was sie bewirkt.
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
                    aria-label="Erfahrung und Reichweite"
                  >
                    <span className="uppercase tracking-wider font-medium" role="listitem">
                      50+ Projekte
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
                    <span
                      className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]"
                      aria-hidden
                    >
                      ·
                    </span>
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
                      src="/img/services/website-services-hero.jpg"
                      alt=""
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

        {/* Freigegebene Case Study — nur Parkett Stelzl */}
        <section
          id="case-study"
          className="py-24 lg:py-28 bg-[var(--background)]"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center mb-16">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Freigegebene Case Study
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <article className="rounded-3xl bg-[var(--surface)]/60 border border-[var(--border)]/60 overflow-hidden shadow-sm transition-shadow duration-200 hover:shadow-md">
                <div className="aspect-[16/10] relative bg-[var(--surface-2)]">
                  <Image
                    src={caseStudy.imageUrl}
                    alt="Screenshot der Website Parkett Stelzl mit klarer Leistungsübersicht und Kontaktführung."
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)]">
                    {caseStudy.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-3 mb-5">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-[var(--muted)]/50 px-2.5 py-0.5 text-xs font-medium text-[var(--muted-foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed list-none">
                    <li className="flex gap-2">
                      <span className="font-medium text-[var(--foreground)] shrink-0">
                        Ausgangslage:
                      </span>
                      {caseStudy.ausgangslage}
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-[var(--foreground)] shrink-0">
                        Ansatz:
                      </span>
                      {caseStudy.ansatz}
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium text-[var(--foreground)] shrink-0">
                        Ergebnis:
                      </span>
                      {caseStudy.ergebnis}
                    </li>
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {caseStudy.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-lg bg-[var(--muted)]/30 px-2 py-1 text-xs font-medium text-[var(--muted-foreground)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--border)]/60">
                    <a
                      href={caseStudy.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl font-medium text-sm bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
                    >
                      Projekt ansehen
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </Container>
        </section>

        {/* Strukturbeispiele statt Galerie — keine Screenshots, keine Projektnamen */}
        <section
          id="strukturbeispiele"
          className="py-24 lg:py-28 bg-[var(--surface-2)]"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center mb-16">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Strukturbeispiele statt Galerie
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {strukturbeispiele.map((item) => (
                <article
                  key={item.id}
                  className="rounded-3xl bg-[var(--surface)]/60 border border-[var(--border)]/60 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md flex flex-col"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-3">
                    <span className="font-medium text-[var(--foreground)]">
                      Typische Ausgangslage:
                    </span>{' '}
                    {item.problem}
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4 flex-1">
                    <span className="font-medium text-[var(--foreground)]">
                      Was wir strukturieren:
                    </span>{' '}
                    {item.structure}
                  </p>
                  <div className="pt-3 border-t border-[var(--border)]/60">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-xl font-medium text-sm bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--muted)]/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
                    >
                      Beispiel anfragen
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Wirkung, die zählt */}
        <section
          id="wirkung"
          className="py-24 lg:py-28 bg-[var(--background)]"
        >
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="rounded-3xl bg-[var(--surface)]/60 border border-[var(--border)]/60 p-6 sm:p-8 lg:p-10 shadow-sm">
                <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                  Wirkung, die zählt
                </h2>
                <ul className="mt-6 space-y-3" role="list">
                  {wirkungBullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-[var(--muted-foreground)]"
                    >
                      <CheckIcon
                        className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5"
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-[var(--muted-foreground)] leading-relaxed border-t border-[var(--border)]/60 pt-6">
                  Welche Hebel bei dir realistisch sind, klären wir in der
                  Einordnung – ohne Verkaufsdruck.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA — match webdesign/homepage */}
        <section
          className="relative w-full min-h-[420px] overflow-hidden"
          aria-labelledby="portfolio-cta-heading"
        >
          <div className="absolute inset-0">
            <Image
              src="/img/cta-home-bg.jpg"
              fill
              className="object-cover object-[55%_50%]"
              alt=""
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
                  id="portfolio-cta-heading"
                  className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
                >
                  Lass uns dein Projekt einordnen.
                </h2>
                <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
                  Ohne Verkaufsdruck. Ohne Verpflichtung.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl bg-white text-gray-900 font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    Kostenlose Einordnung anfragen
                  </Link>
                  <Link
                    href="/preise-und-pakete"
                    className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl bg-transparent text-white font-medium text-lg border-2 border-white/80 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  >
                    Preise ansehen
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </main>
    </>
  )
}
