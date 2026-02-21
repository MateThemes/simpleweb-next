import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PaletteIcon, CheckIcon, ToolIcon } from '@/components/icons'
import { PriceCard } from '@/components/ui/PriceCard'
import { breadcrumbSchema, webPageSchema, servicePageSchema } from '@/app/schema'
import { getServicePageDC } from '@/lib/dublinCore'

const PAGE_TITLE = 'Webdesign für KMU in Österreich & Deutschland | Strategische Websites'
const PAGE_DESCRIPTION =
  'Webdesign für KMU in Österreich & Deutschland: Wir entwickeln strategische Websites mit klarer Struktur und messbarer Wirkung – für mehr Anfragen, Termine und Verkäufe. Kostenlose Einordnung.'

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: `${PAGE_TITLE} | SimpleWebDesign`,
    description: PAGE_DESCRIPTION,
    url: 'https://simplewebdesign.at/services/webdesign',
    images: [
      {
        url: '/img/services/webdesign.jpg',
        width: 1200,
        height: 630,
        alt: 'Webdesign Österreich & Deutschland – strategische Websites für KMU',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PAGE_TITLE} | SimpleWebDesign`,
    description: PAGE_DESCRIPTION,
    images: ['/img/services/webdesign.jpg'],
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/webdesign',
  },
  other: {
    ...getServicePageDC({
      title: `${PAGE_TITLE} | SimpleWebDesign`,
      description: PAGE_DESCRIPTION,
      url: 'https://simplewebdesign.at/services/webdesign',
    }),
  },
}

const features = [
  {
    title: 'Responsive Design',
    description: 'Überall gut lesbar und bedienbar – vom Smartphone bis zum Desktop. Struktur, die Besucher führt.',
  },
  {
    title: 'Moderne Designprinzipien',
    description: 'Klares, zeitgemäßes Design. Besucher erkennen sofort: Wer ist hier richtig – und warum?',
  },
  {
    title: 'Optimierte Performance',
    description: 'Schnelle Ladezeiten, stabiles Nutzererlebnis. Technik im Dienst der Wirkung.',
  },
  {
    title: 'SEO-Optimiert',
    description: 'Von Anfang an suchmaschinentauglich – damit du gefunden wirst.',
  },
]

const benefits = [
  'Klarheit: In Sekunden klar, wer hier richtig ist – und warum',
  'Struktur, die Besucher führt statt nur informiert',
  'Wirkung, die messbar wird: Anfragen, Termine oder Verkäufe',
  'Positionierung, die sofort sitzt',
  'Orientierung statt Informationsüberflutung',
  'Messbare Ergebnisse statt nur gutes Gefühl',
]

const process = [
  {
    title: 'Einordnung',
    description: 'Wir klären, was die Website leisten soll und wer hier richtig ist. Erst dann folgen Design und Technik.',
  },
  {
    title: 'Struktur',
    description: 'Wir entwickeln eine Struktur, die Besucher führt statt nur informiert. Der nächste Schritt ist logisch.',
  },
  {
    title: 'Design',
    description: 'Wir erstellen ein modernes, responsives Design, das Klarheit schafft und Orientierung gibt.',
  },
  {
    title: 'Umsetzung',
    description: 'Dein Projekt wird umgesetzt – reibungslos, messbar und technisch sauber.',
  },
  {
    title: 'Launch & Wirkung',
    description: 'Deine neue Website geht online; wir prüfen gemeinsam, ob Anfragen, Termine oder Verkäufe kommen – je nach Ziel.',
  },
]

const packages = [
  {
    name: 'Standard',
    description: 'Perfekt für kleine Unternehmen und Selbstständige',
    targetAudience: 'Für wen? Kleine Unternehmen und Selbstständige, die online sichtbar werden wollen.',
    price: '1.490',
    features: [
      { name: 'Modernes responsives Design', included: true },
      { name: 'Bis zu 5 Unterseiten', included: true },
      { name: 'Kontaktformular & Maps Integration', included: true },
      { name: 'Grundlegende SEO-Optimierung', included: true },
      { name: 'SSL-Verschlüsselung', included: true },
      { name: 'DSGVO-konforme Umsetzung', included: true },
      { name: '1 Jahr Hosting & Domain', included: true }
    ],
    popular: false
  },
  {
    name: 'Premium',
    description: 'Ideal für wachsende Unternehmen',
    targetAudience: 'Für wen? Wachsende Unternehmen, die mehr Struktur und Orientierung brauchen.',
    price: '2.990',
    features: [
      { name: 'Alles aus Standard, plus:', included: true },
      { name: 'Erweiterte SEO & Local SEO', included: true },
      { name: 'Performance-Optimierung', included: true },
      { name: 'Bis zu 10 Unterseiten', included: true },
      { name: 'Blog-System & News-Bereich', included: true },
      { name: 'Individuelle Funktionen', included: true },
      { name: 'Premium Support', included: true }
    ],
    popular: true
  },
  {
    name: 'Komplett',
    description: 'Full-Service mit laufender Betreuung',
    targetAudience: 'Für wen? Unternehmen, die messbare Wirkung und laufende Optimierung brauchen.',
    price: '4.990',
    features: [
      { name: 'Alles aus Premium, plus:', included: true },
      { name: 'Laufende Wartung & Updates', included: true },
      { name: 'Regelmäßige SEO-Optimierung', included: true },
      { name: 'Content-Marketing & Blog-Artikel', included: true },
      { name: 'Performance-Monitoring', included: true },
      { name: 'Monatliche Reports', included: true },
      { name: 'Priority Support', included: true }
    ],
    popular: false
  }
]

export default function WebdesignPage() {
  // Schema.org Structured Data
  const schemas = [
    // BreadcrumbList Schema
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "Webdesign", url: "https://simplewebdesign.at/services/webdesign" },
      ],
    }),
    // WebPage Schema
    webPageSchema({
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/webdesign",
      image: "https://simplewebdesign.at/img/services/webdesign.jpg",
    }),
    servicePageSchema({
      name: "Webdesign",
      description: PAGE_DESCRIPTION,
      url: "https://simplewebdesign.at/services/webdesign",
      image: "https://simplewebdesign.at/img/services/webdesign.jpg",
      serviceType: ["Webdesign", "Responsive Design", "UI/UX Design", "Website Development"],
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
        {/* Hero Section — matches /ueber-uns design system */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="webdesign-hero-heading"
        >
          <Container className="relative">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
              <div className="relative">
                <div
                  className="absolute -inset-x-8 top-1/2 -translate-y-1/2 h-[120%] w-[140%] max-w-none pointer-events-none opacity-[0.04] dark:opacity-[0.06] hidden lg:block"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 60% at 30% 50%, var(--foreground), transparent 70%)",
                  }}
                />
                <div className="relative space-y-6">
                  <p className="text-sm font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                    Webdesign für KMU in Österreich & Deutschland
                  </p>
                  <h1
                    id="webdesign-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Websites, die Entscheidungen erleichtern – nicht nur gut
                    aussehen.
                  </h1>
                  <p className="text-base text-[var(--muted-foreground-strong)] leading-relaxed max-w-[650px]">
                    Wir entwickeln Websites mit klarer Struktur und messbarer
                    Wirkung – damit Besucher nicht nur scrollen, sondern
                    anfragen. Einordnung zuerst, Design und Technik danach.
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
                      "0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)",
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

        {/* Features Section — Alles, was du brauchst */}
        <section
          id="features"
          className="py-24 lg:py-28 bg-[var(--background)]"
        >
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Alles, was du brauchst
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                Wir starten mit Einordnung: Was soll die Website leisten – und
                für wen? Daraus entsteht eine klare Struktur, die Besucher
                führt. Wenn sinnvoll, ergänzen wir{" "}
                <a
                  href="/services/seo"
                  className="text-[var(--primary)] hover:underline"
                >
                  SEO
                </a>{" "}
                und{" "}
                <a
                  href="/services/performance"
                  className="text-[var(--primary)] hover:underline"
                >
                  Performance-Optimierung
                </a>{" "}
                für mehr Sichtbarkeit.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-5 rounded-2xl bg-[var(--surface)]/40 border border-[var(--border)]/50 p-6 lg:p-8 transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/40">
                    <PaletteIcon className="h-5 w-5 text-[var(--primary)]" />
                  </div>
                  <div>
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

        {/* Branchenlösung */}
        <section className="py-24 lg:py-28 bg-[var(--surface-2)]">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Branchenlösungen
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)]">
                Spezialisierte Webdesign-Lösungen für verschiedene Branchen –
                z. B. Website für Handwerker mit Fokus auf lokale Sichtbarkeit.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-elev-1 p-8 lg:p-10 transition-shadow duration-200 hover:shadow-elev-2">
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/40">
                    <ToolIcon
                      className="h-7 w-7 text-[var(--muted-foreground)]"
                      aria-hidden
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)] mb-2">
                      Webdesign für Handwerker
                    </h3>
                    <p className="text-[var(--muted-foreground)] leading-relaxed mb-5">
                      Spezialisierte Websites für Handwerksbetriebe mit lokaler
                      SEO-Optimierung, DSGVO-Compliance und mobile-first Design.
                    </p>
                    <a
                      href="/services/webdesign-handwerker"
                      className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl font-medium text-sm bg-transparent text-[var(--foreground)] border-2 border-[var(--border)] hover:bg-[var(--surface-2)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
                    >
                      Mehr erfahren
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Prozess Section — visual step timeline */}
        <section className="py-24 lg:py-28 bg-[var(--background)]">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  Unser Prozess
                </h2>
                <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                  Website erstellen lassen – in klaren Phasen: Einordnung,
                  Struktur, Design, Umsetzung, Launch. Ohne Agentur-Theater –
                  mit messbarer Wirkung.
                </p>
              </div>
              <div className="mt-16 lg:mt-20 relative">
                {/* Connector line */}
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

        {/* Pakete Section — aligned with Preise page, tier differentiation */}
        <section className="py-24 lg:py-28 bg-[var(--surface-2)]">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                Unsere Webdesign-Pakete
              </h2>
              <p className="mt-4 text-lg text-[var(--muted-foreground)]">
                Wähle das passende Paket für deinen Bedarf – transparent und
                ohne versteckte Kosten.
              </p>
              <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                Alle Preise sind Endpreise gemäß § 6 Abs. 1 Z 27 UStG.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6 lg:items-stretch">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={
                    "h-full flex flex-col " +
                    (pkg.name === "Standard"
                      ? "rounded-2xl"
                      : pkg.name === "Premium"
                        ? "rounded-2xl ring-2 ring-[var(--primary)]/20 shadow-md"
                        : "rounded-2xl ring-2 ring-[var(--primary)]/30 shadow-elev-3")
                  }
                >
                  <PriceCard
                    {...pkg}
                    ctaText="Kostenlose Einordnung anfragen"
                    ctaLink="/kontakt"
                  />
                </div>
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <a
                href="/preise-und-pakete"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-medium text-base bg-transparent text-[var(--foreground)] border-2 border-[var(--border)] hover:bg-[var(--surface)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
              >
                Alle Pakete ansehen
              </a>
            </div>
          </Container>
        </section>

        {/* Sicherheits-Check — technical info block */}
        <section className="py-24 lg:py-28 bg-[var(--background)]">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl bg-[var(--muted)]/20 border border-[var(--border)]/60 p-6 sm:p-8 lg:p-10">
                <div className="flex gap-4">
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--muted)]/40"
                    aria-hidden
                  >
                    <svg
                      className="h-5 w-5 text-[var(--muted-foreground)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 space-y-4">
                    <h2 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
                      Sicherheit & Technik – bewusst geprüft, sauber umgesetzt
                    </h2>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      Ob neue Website oder{" "}
                      <a
                        href="/services/redesign"
                        className="text-[var(--primary)] hover:underline"
                      >
                        Redesign
                      </a>
                      : Es geht nicht nur um Design und{" "}
                      <a
                        href="/services/performance"
                        className="text-[var(--primary)] hover:underline"
                      >
                        Performance
                      </a>
                      . Auch technische Sauberkeit und grundlegende
                      Sicherheitsaspekte spielen eine Rolle – insbesondere bei
                      bestehenden Websites.
                    </p>
                    <ul className="space-y-3 text-sm text-[var(--muted-foreground)] leading-relaxed">
                      <li className="flex gap-3">
                        <CheckIcon className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                        <span>
                          Schonende technische Checks ohne Exploits oder
                          Angriffe
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckIcon className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                        <span>
                          Keine Umgehung bestehender Schutzmechanismen
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckIcon className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                        <span>
                          Niedrige Zugriffslast, keine automatisierten
                          Angriffsmuster
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <CheckIcon className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                        <span>
                          Fokus auf Konfiguration, Prävention und Einordnung
                        </span>
                      </li>
                    </ul>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      Reagieren Schutzsysteme wie Firewalls oder
                      Sicherheits-Plugins, wird der Check bewusst beendet. Das
                      ist kein Fehler, sondern ein positives Zeichen: Die
                      Schutzmechanismen greifen.
                    </p>
                    <p className="text-xs text-[var(--muted-foreground)] leading-relaxed pt-2">
                      Dieser Sicherheits-Check ersetzt keinen Penetrationstest.
                      Für weitergehende Tests sind abgestimmte Prüfungen mit
                      Freigabe erforderlich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Was du bekommst — outcomes and differentiation */}
        <section className="py-24 lg:py-28 bg-[var(--surface-2)]">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:flex-1">
                <div className="max-w-2xl">
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                    Was du bekommst
                  </h2>
                  <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
                    Eine Website, die zu deinem Ziel passt: Klarheit für
                    Besucher, Struktur, die führt, Wirkung die du messen kannst –
                    kein generisches Agency-Template.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckIcon className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-base font-medium text-[var(--foreground)] leading-snug">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:flex-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-[var(--border)] shadow-elev-2 bg-[var(--surface)]">
                  <Image
                    src="/img/services/website-services-performance.jpg"
                    alt="Abstrakte digitale Grafik mit leuchtenden Farbverläufen und aufsteigender Linie auf stilisierten Interface-Elementen."
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section — match homepage FinalCta style, du-tone */}
        <section
          className="relative w-full min-h-[420px] overflow-hidden"
          aria-labelledby="webdesign-cta-heading"
        >
          <div className="absolute inset-0">
            <Image
              src="/img/cta-home-bg.jpg"
              fill
              className="object-cover object-[55%_50%]"
              alt="Hintergrund CTA – strategisches Webdesign für KMU"
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
                "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.35) 100%)",
            }}
            aria-hidden
          />
          <div className="relative z-10 flex items-center justify-center py-24 lg:py-28 min-h-[420px]">
            <Container>
              <div className="max-w-[720px] mx-auto text-center">
                <h2
                  id="webdesign-cta-heading"
                  className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
                >
                  Bereit für deine neue Website?
                </h2>
                <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
                  Wenn online zu wenig passiert, fehlt meist Klarheit – nicht
                  Design. Lass uns klären, ob deine Website arbeiten soll.
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
  );
}