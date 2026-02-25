import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { PaintBrushIcon, CheckIcon } from '@/components/icons'
import { breadcrumbSchema, webPageSchema, servicePageSchema } from '@/app/schema'
import { PriceCard } from '@/components/ui/PriceCard'

const META_TITLE = 'Website Redesign & Relaunch für KMU | Website modernisieren lassen'
const META_DESCRIPTION =
  'Website Redesign für KMU: Website modernisieren oder Relaunch mit klarer Struktur, besserer Positionierung und mehr Anfragen. Kostenlose Einordnung.'

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  openGraph: {
    title: `${META_TITLE} | SimpleWebDesign`,
    description: META_DESCRIPTION,
    url: 'https://simplewebdesign.at/services/redesign',
    images: [
      {
        url: '/img/services/redesign.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Redesign Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${META_TITLE} | SimpleWebDesign`,
    description: META_DESCRIPTION,
    images: ['/img/services/redesign.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/redesign'
  }
}

const features = [
  {
    title: 'Moderne Neugestaltung',
    description: 'Frisches, zeitgemäßes Design das Klarheit schafft. In Sekunden klar: Wer ist hier richtig – und warum?',
  },
  {
    title: 'Verbesserte Conversion',
    description: 'Struktur, die Besucher führt statt nur informiert. Messbar: Anfragen, Termine oder Verkäufe – je nach Ziel.',
  },
  {
    title: 'Optimierte Nutzerführung',
    description: 'Weniger Scrollen, mehr Orientierung. Der nächste Schritt ist logisch – nicht nur schön.',
  },
  {
    title: 'Technische Modernisierung',
    description: 'Saubere Technik im Dienst der Wirkung. Performance, die messbare Ergebnisse bringt.',
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

const packages = [
  {
    name: 'Redesign Standard',
    description: 'Mehr Anfragen durch klare Struktur und modernes Design.',
    targetAudience: 'Wann sinnvoll? Wenn die Website existiert, aber kaum Anfragen bringt.',
    price: '1.490',
    features: [
      { name: 'Modernes responsives Design', included: true },
      { name: 'Übernahme bestehender Inhalte', included: true },
      { name: 'Kontaktformular & Maps Integration', included: true },
      { name: 'Grundlegende SEO-Optimierung', included: true },
      { name: 'SSL-Verschlüsselung', included: true },
      { name: 'DSGVO-konforme Umsetzung', included: true },
      { name: '1 Jahr Hosting & Domain', included: true }
    ],
    popular: false
  },
  {
    name: 'Redesign Premium',
    description: 'Klarere Positionierung und messbare Wirkung – Besucher werden zu Kunden.',
    targetAudience: 'Wann sinnvoll? Wenn mehr Struktur und Orientierung fehlen, um Besucher zu führen.',
    price: '2.990',
    features: [
      { name: 'Alles aus Standard, plus:', included: true },
      { name: 'Erweiterte SEO & Local SEO', included: true },
      { name: 'Performance-Optimierung', included: true },
      { name: 'Content-Überarbeitung', included: true },
      { name: 'Blog-System & News-Bereich', included: true },
      { name: 'Individuelle Funktionen', included: true },
      { name: 'Premium Support', included: true }
    ],
    popular: true
  },
  {
    name: 'Redesign Komplett',
    description: 'Messbare Wirkung und laufende Optimierung für dauerhaft mehr Anfragen.',
    targetAudience: 'Wann sinnvoll? Wenn messbare Wirkung und laufende Optimierung wichtig sind.',
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

export default function RedesignPage() {
  // Schema.org Structured Data
  const schemas = [
    // BreadcrumbList Schema
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "Redesign", url: "https://simplewebdesign.at/services/redesign" },
      ],
    }),
    // WebPage Schema
    webPageSchema({
      name: META_TITLE,
      description: META_DESCRIPTION,
      url: "https://simplewebdesign.at/services/redesign",
      image: "https://simplewebdesign.at/img/services/redesign.jpg",
    }),
    // Service Schema
    servicePageSchema({
      name: "Website Redesign & Relaunch",
      description: META_DESCRIPTION,
      url: "https://simplewebdesign.at/services/redesign",
      image: "https://simplewebdesign.at/img/services/redesign.jpg",
      serviceType: ["Website Redesign", "Website Relaunch", "Website modernisieren", "Web Design", "UI/UX Design"],
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
        {/* Hero — M3 + Keyfacts wie /services/marketing */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
          aria-labelledby="redesign-hero-heading"
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
                    Website Redesign & Relaunch
                  </p>
                  <h1
                    id="redesign-hero-heading"
                    className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                  >
                    Website Redesign & Relaunch für KMU
                  </h1>
                  <p className="mt-10 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                    Ihre Website existiert – bringt aber zu wenig Anfragen? Wir modernisieren Struktur, Positionierung und Design – damit Besucher zu Kunden werden.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                    >
                      Kostenlose Einordnung
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
                    aria-label="Redesign und Relaunch"
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
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
                  }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src="/img/services/redesign.jpg"
                      alt="Website Redesign und Relaunch für KMU – Struktur, Positionierung, Design"
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
                      <PaintBrushIcon className="h-5 w-5 mb-1 opacity-90" aria-hidden />
                      <div className="text-lg font-bold leading-tight">+198%</div>
                      <div className="text-xs opacity-90">Mehr Conversions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <div id="features" className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Ihr Weg zum modernen Web
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Wir beginnen nicht mit Design oder Technik, sondern mit Einordnung: Was soll die Website leisten? Erst dann folgen Struktur, Design und Umsetzung – bis zur messbaren Wirkung. Ein Website Relaunch oder die Entscheidung, die Website modernisieren zu lassen, lohnt sich, wenn die bestehende Seite zu wenig bringt. Kombinieren Sie dies mit unserem <a href="/services/seo" className="text-purple-600 hover:text-purple-500 underline">SEO-Service</a> und <a href="/services/performance" className="text-purple-600 hover:text-purple-500 underline">Performance-Optimierung</a> für maximale Online-Sichtbarkeit.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">
                Wann ist ein Website Redesign oder Relaunch sinnvoll?
              </h2>
              <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300">
                <li className="flex gap-3">
                  <CheckIcon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-950 dark:text-white"><Link href="/blog/website-bringt-keine-anfragen" className="text-purple-600 hover:text-purple-500 underline">Website bringt keine Anfragen</Link>:</strong> Die Seite läuft, aber Besucher werden nicht zu Kunden – oft fehlt Klarheit oder der nächste Schritt.</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-950 dark:text-white">Veraltetes Design oder Technik:</strong> Optik oder Technik wirken veraltet; ein Website neu gestalten lassen oder gezielt modernisieren steigert Vertrauen und Nutzbarkeit.</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-950 dark:text-white">Unklare Positionierung:</strong> Besucher verstehen nicht sofort, für wen die Website da ist und welchen Nutzen sie bieten – Struktur und Botschaft müssen schärfer werden.</span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-neutral-950 dark:text-white">Wachstum oder neues Angebot:</strong> Unternehmen oder Leistungen haben sich geändert – die Website soll das abbilden und wieder klar führen.</span>
                </li>
              </ul>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <PaintBrushIcon className="h-8 w-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Before/After Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:flex-1">
                <div className="max-w-2xl">
                  <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                    Ihre Vorteile
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Wenn Ihre Website existiert, aber zu wenig passiert, liegt das meist nicht am Design. Meist fehlt Klarheit. Wir schaffen Struktur und Orientierung – damit Besucher zu Anfragen werden. Kombinieren Sie dies mit unserem <a href="/services/seo" className="text-purple-600 hover:text-purple-500 underline">SEO-Service</a>, <a href="/services/marketing" className="text-purple-600 hover:text-purple-500 underline">Marketing-Service</a> und <a href="/services/performance" className="text-purple-600 hover:text-purple-500 underline">Performance-Optimierung</a> für maximale Online-Sichtbarkeit.
                  </p>

                  <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-3xl mt-12">
                    Website modernisieren statt nur neu gestalten
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Wer nur die Website neu gestalten lässt, bekommt oft nur ein neues Kleid. Wir setzen anders an: <strong className="text-neutral-950 dark:text-white">Struktur</strong> zuerst – welche Seiten, welche Botschaft, welcher nächste Schritt für den Besucher. Dann <strong className="text-neutral-950 dark:text-white">Klarheit</strong>: In Sekunden erkennbar, wer hier richtig ist und warum. Darauf aufbauend <strong className="text-neutral-950 dark:text-white">Wirkung</strong> – messbar durch mehr Anfragen, klarere Positionierung und eine Website, die arbeitet. So bringt Website modernisieren lassen echten Mehrwert, nicht nur ein neues Layout.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckIcon className="h-8 w-8 text-purple-600 flex-shrink-0" />
                      <span className="text-lg font-semibold text-neutral-950 dark:text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:flex-1">
                <div className="relative aspect-square">
                  <Image
                    src="/img/services/redesign.jpg"
                    alt="Website Redesign Process"
                    fill
                    className="rounded-2xl object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Packages Section */}
        <div className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Unsere Redesign-Pakete
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Wählen Sie das passende Paket für die Modernisierung Ihrer Website. Alle Preise sind Endpreise gemäß § 6 Abs. 1 Z 27 UStG.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {packages.map((pkg) => (
                <PriceCard 
                  key={pkg.name} 
                  {...pkg} 
                  ctaText="Kostenlose Einordnung anfragen"
                  ctaLink="/kontakt"
                />
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <Button href="/preise-und-pakete" variant="secondary">
                Alle Pakete ansehen
              </Button>
            </div>
          </Container>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 bg-purple-600 overflow-hidden">
          <div className="absolute inset-0 mix-blend-multiply opacity-40">
            <Image
              src="/img/services/redesign.jpg"
              alt="Background Pattern"
              fill
              className="object-cover"
              quality={60}
            />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Bereit für eine Website, die arbeitet?
              </h2>
              <p className="mt-4 text-lg text-purple-100">
                Wenn du das Gefühl hast, dass online zu wenig passiert, ist das meist kein Design-Problem. Meist fehlt Klarheit. Lass uns klären, ob deine Website arbeiten soll.
              </p>
              <p className="mt-2 text-sm text-purple-100">
                Gemäß § 6 Abs. 1 Z 27 UStG wird keine Umsatzsteuer berechnet.
              </p>
              <div className="mt-8">
                <Button href="/kontakt" variant="secondary" className="text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-purple-600">
                  Kostenlose Einordnung anfragen
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}