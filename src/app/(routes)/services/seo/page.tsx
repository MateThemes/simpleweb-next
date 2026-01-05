import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ChartBarIcon, CheckIcon, SearchIcon, CodeIcon, MapPinIcon } from '@/components/icons'
import { breadcrumbSchema, webPageSchema, servicePageSchema } from '@/app/schema'
import { getServicePageDC } from '@/lib/dublinCore'

export const metadata: Metadata = {
  title: 'SEO für KMU: Klarheit, Struktur, Sichtbarkeit | SimpleWebDesign',
  description: 'SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut. Google-konform, messbar, langfristig wirksam.',
  openGraph: {
    title: 'SEO für KMU: Klarheit, Struktur, Sichtbarkeit | SimpleWebDesign',
    description: 'SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut. Google-konform, messbar, langfristig wirksam.',
    url: 'https://simplewebdesign.at/services/seo',
    images: [
      {
        url: '/img/services/seo.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Services Niederösterreich - Nachhaltige Suchmaschinenoptimierung'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO für KMU: Klarheit, Struktur, Sichtbarkeit | SimpleWebDesign',
    description: 'SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut.',
    images: ['/img/services/seo.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/seo'
  },
  // Dublin Core Metadata
  other: {
    ...getServicePageDC({
      title: 'SEO für KMU: Klarheit, Struktur, Sichtbarkeit | SimpleWebDesign',
      description: 'SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut.',
      url: 'https://simplewebdesign.at/services/seo',
    }),
  },
}

const features = [
  {
    title: 'Technisches SEO',
    description: 'Saubere technische Grundlagen, die Suchmaschinen verstehen. Keine Tricks, keine Abkürzungen – nur solide Struktur.',
  },
  {
    title: 'Struktur & Inhalte',
    description: 'Klare Struktur, die Besucher führt und Suchmaschinen zeigt, wer hier richtig ist – und warum.',
  },
  {
    title: 'Lokale Sichtbarkeit',
    description: 'Lokale SEO, die aufbaut auf klarer Positionierung und sauberer Struktur – nicht auf Keyword-Stuffing.',
  },
  {
    title: 'Messung & Weiterentwicklung',
    description: 'Regelmäßige Einordnung: Was funktioniert? Was nicht? Wo liegt das Potenzial? Messbar, nachvollziehbar.',
  },
]

const benefits = [
  'Klarheit: Wer soll gefunden werden – und warum?',
  'Struktur, die Suchmaschinen verstehen',
  'Nachhaltige Wirkung statt kurzfristiger Tricks',
  'Google-konform, keine Richtlinien-Umgehung',
  'Messbare Ergebnisse statt Versprechen',
  'Aufbauend auf Webdesign & Inhalt',
]

const process = [
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

export default function SeoPage() {
  // Schema.org Structured Data
  const schemas = [
    // BreadcrumbList Schema
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "SEO", url: "https://simplewebdesign.at/services/seo" },
      ],
    }),
    // WebPage Schema
    webPageSchema({
      name: "SEO für KMU: Klarheit, Struktur, Sichtbarkeit",
      description: "SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut. Google-konform, messbar, langfristig wirksam.",
      url: "https://simplewebdesign.at/services/seo",
      image: "https://simplewebdesign.at/img/services/seo.jpg",
    }),
    // Service Schema
    servicePageSchema({
      name: "SEO",
      description: "SEO für KMU in Österreich & Deutschland: Nachhaltige Suchmaschinenoptimierung, die auf Klarheit und Struktur aufbaut.",
      url: "https://simplewebdesign.at/services/seo",
      image: "https://simplewebdesign.at/img/services/seo.jpg",
      serviceType: ["SEO", "Search Engine Optimization", "Local SEO", "Technical SEO"],
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
        {/* Hero Section */}
        <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
          <Container className="relative">
            <div className="lg:flex lg:items-center lg:gap-x-10">
              <div className="max-w-2xl lg:max-w-lg">
                <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
                  SEO für KMU
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  SEO beginnt nicht mit Keywords, sondern mit Klarheit darüber, wer gefunden werden soll – und warum. Wir bauen auf Struktur und Inhalt auf, nicht auf Tricks oder Abkürzungen.
                </p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Gemäß § 6 Abs. 1 Z 27 UStG wird keine Umsatzsteuer berechnet.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/kontakt">Kostenlose Einordnung</Button>
                  <Button href="#features" variant="secondary">Mehr erfahren</Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img/services/seo.jpg"
                    alt="SEO Services Niederösterreich - Nachhaltige Suchmaschinenoptimierung"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Features Section */}
        <div id="features" className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Alles was Sie brauchen
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                SEO ist kein isoliertes Tool, sondern ein Verstärker von Klarheit und Struktur. Wir bauen auf bestehendem <a href="/services/webdesign" className="text-blue-600 hover:text-blue-500 underline">Webdesign</a> und Inhalt auf und ergänzen mit technischer Optimierung und <a href="/services/performance" className="text-blue-600 hover:text-blue-500 underline">Performance</a>.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => {
                const icons = [CodeIcon, SearchIcon, MapPinIcon, ChartBarIcon]
                const Icon = icons[index] || ChartBarIcon
                return (
                  <div key={index} className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                    <Icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-neutral-600 dark:text-neutral-300">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </div>

        {/* Process Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  Unser Prozess
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                  Wir beginnen nicht mit Keywords oder Tools, sondern mit Einordnung: Wer soll gefunden werden? Erst dann folgen technische und inhaltliche Maßnahmen – bis zur messbaren Wirkung.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckIcon className="h-8 w-8 text-blue-600" />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">{step.title}</h3>
                      <p className="mt-2 text-neutral-600 dark:text-neutral-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* SEO Trust Section */}
        <div className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 sm:p-12 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  SEO – nachhaltig, sauber, nachvollziehbar
                </h2>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  SEO ist kein Sprint, sondern ein Marathon. Wir setzen auf langfristige Wirkung statt kurzfristige Tricks. Keine Abkürzungen, keine Richtlinien-Umgehung, keine Versprechen – nur saubere, Google-konforme Optimierung.
                </p>
                <ul className="mt-10 space-y-5 text-neutral-600 dark:text-neutral-300">
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Keine Abkürzungen oder Tricks</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Google-konform, keine Richtlinien-Umgehung</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Fokus auf langfristige Wirkung</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Messbar, nachvollziehbar, transparent</span>
                  </li>
                </ul>
                <p className="mt-10 text-xl text-neutral-600 dark:text-neutral-300">
                  SEO braucht Zeit. Wir versprechen keine Rankings in 30 Tagen, sondern arbeiten an nachhaltiger Sichtbarkeit, die auf Klarheit und Struktur aufbaut.
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Benefits Section with Image */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:flex-1">
                <div className="max-w-2xl">
                  <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                    Ihre Vorteile
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Mit unserem SEO-Service erhalten Sie eine nachhaltige Optimierung, die auf Klarheit und Struktur aufbaut. Ergänzend zu unserem <a href="/services/webdesign" className="text-blue-600 hover:text-blue-500 underline">Webdesign</a> und <a href="/services/performance" className="text-blue-600 hover:text-blue-500 underline">Performance-Optimierung</a> für maximale Online-Sichtbarkeit.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                      <span className="text-lg font-semibold text-neutral-950 dark:text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:flex-1">
                <div className="relative aspect-square">
                  <Image
                    src="/img/services/marketing.jpg"
                    alt="SEO Growth Analytics"
                    fill
                    className="rounded-2xl object-cover shadow-xl"
                    quality={60}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 bg-blue-600 overflow-hidden">
          <div className="absolute inset-0 mix-blend-multiply opacity-40">
            <Image
              src="/img/services/seo.jpg"
              alt="Background Pattern"
              fill
              className="object-cover"
              quality={60}
            />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Bereit für mehr Sichtbarkeit?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Wenn du das Gefühl hast, dass online zu wenig passiert, ist das meist kein SEO-Problem. Meist fehlt Klarheit. Lass uns klären, ob SEO für dich sinnvoll ist.
              </p>
              <div className="mt-8">
                <Button href="/kontakt" variant="secondary" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-600">
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