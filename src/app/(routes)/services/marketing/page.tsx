import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ChartBarIcon, CheckIcon } from '@/components/icons'
import { breadcrumbSchema } from '@/app/schema'
import { getServicePageDC } from '@/lib/dublinCore'

export const metadata: Metadata = {
  title: 'Digital Marketing für KMU: Klarheit, Botschaft, Wirkung | SimpleWebDesign',
  description: 'Marketing für KMU in Österreich & Deutschland: Kein Posting-Aktionismus, sondern System aus Einordnung, Botschaft, Kanalwahl und Messung. Reichweite wird zu Anfragen – messbar und nachvollziehbar.',
  openGraph: {
    title: 'Digital Marketing für KMU: Klarheit, Botschaft, Wirkung | SimpleWebDesign',
    description: 'Marketing für KMU in Österreich & Deutschland: Kein Posting-Aktionismus, sondern System aus Einordnung, Botschaft, Kanalwahl und Messung. Reichweite wird zu Anfragen – messbar und nachvollziehbar.',
    url: 'https://simplewebdesign.at/services/marketing',
    images: [
      {
        url: '/img/services/marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services Niederösterreich'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing für KMU: Klarheit, Botschaft, Wirkung | SimpleWebDesign',
    description: 'Marketing für KMU in Österreich & Deutschland: Kein Posting-Aktionismus, sondern System aus Einordnung, Botschaft, Kanalwahl und Messung.',
    images: ['/img/services/marketing.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/marketing'
  },
  // Dublin Core Metadata
  other: {
    ...getServicePageDC({
      title: 'Digital Marketing für KMU: Klarheit, Botschaft, Wirkung',
      description: 'Marketing für KMU in Österreich & Deutschland: Kein Posting-Aktionismus, sondern System aus Einordnung, Botschaft, Kanalwahl und Messung. Reichweite wird zu Anfragen – messbar und nachvollziehbar.',
      url: 'https://simplewebdesign.at/services/marketing',
    }),
  },
}

const features = [
  {
    title: 'Social Media Marketing',
    description: 'Klarer Content, der Positionierung stärkt – statt nur Reichweite.',
  },
  {
    title: 'Content Marketing',
    description: 'Inhalte, die erklären und überzeugen – nicht nur füllen.',
  },
  {
    title: 'Performance Marketing',
    description: 'Ads als Verstärker für funktionierende Botschaften – datenbasiert.',
  },
  {
    title: 'E-Mail Marketing',
    description: 'Beziehungen aufbauen, statt nur Traffic einkaufen.',
  },
]

const benefits = [
  'Klarere Botschaft statt nur Reichweite',
  'Qualifizierte Anfragen statt nur Klicks',
  'Messbarkeit statt Bauchgefühl',
  'System statt Einzelmaßnahmen',
]

const process = [
  {
    title: 'Einordnung',
    description: 'Ziele, Zielgruppe, Angebot, Botschaft – wir klären, wer erreicht werden soll und warum.',
  },
  {
    title: 'Positionierung',
    description: 'Klare Kernbotschaft & Nutzenversprechen – damit Besucher sofort verstehen, wer hier richtig ist.',
  },
  {
    title: 'Kanalwahl',
    description: 'Welche Kanäle Sinn ergeben – nicht alles, sondern das Passende.',
  },
  {
    title: 'Umsetzung',
    description: 'Content, Ads, E-Mail im passenden Mix – konsistent zur Botschaft.',
  },
  {
    title: 'Messung & Weiterentwicklung',
    description: 'Was wirkt, was nicht, nächste Schritte – messbar, nachvollziehbar, transparent.',
  },
]

export default function MarketingPage() {
  // Schema.org Structured Data
  const schemas = [
    // BreadcrumbList Schema
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "Marketing", url: "https://simplewebdesign.at/services/marketing" },
      ],
    }),
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://simplewebdesign.at/services/marketing#webpage",
      "name": "Digital Marketing für KMU: Klarheit, Botschaft, Wirkung",
      "description": "Marketing für KMU in Österreich & Deutschland: Kein Posting-Aktionismus, sondern System aus Einordnung, Botschaft, Kanalwahl und Messung. Reichweite wird zu Anfragen – messbar und nachvollziehbar.",
      "url": "https://simplewebdesign.at/services/marketing",
      "image": "https://simplewebdesign.at/img/services/marketing.jpg",
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
      "@id": "https://simplewebdesign.at/services/marketing#service",
      "name": "Digital Marketing",
      "serviceType": "Digital Marketing",
      "url": "https://simplewebdesign.at/services/marketing",
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
        {/* Hero Section */}
        <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
          <Container className="relative">
            <div className="lg:flex lg:items-center lg:gap-x-10">
              <div className="max-w-2xl lg:max-w-lg">
                <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
                  Digital Marketing für KMU
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Marketing beginnt nicht mit Postings oder Ads, sondern mit Klarheit: Wer soll erreicht werden – und warum?
                  Wir entwickeln Botschaften, Kanäle und Maßnahmen so, dass Reichweite zu Anfragen wird – messbar und nachvollziehbar.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/kontakt">Strategie-Gespräch</Button>
                  <Button href="#features" variant="secondary">Mehr erfahren</Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img/services/marketing.webp"
                    alt="Digital Marketing Services Niederösterreich - Marketing Dashboard mit Analytics"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                  <div className="absolute -bottom-8 -left-8">
                    <div className="bg-indigo-600 rounded-xl shadow-lg p-6 text-white">
                      <ChartBarIcon className="h-8 w-8 mb-2" />
                      <div className="text-2xl font-bold">+284%</div>
                      <div className="text-sm opacity-90">Social Engagement</div>
                    </div>
                  </div>
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
                Ganzheitliches Marketing
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Marketing ist kein Posting-Aktionismus, sondern ein System: Strategie → Botschaft → Umsetzung → Messung. Wir entwickeln Maßnahmen, die zur Botschaft passen und messbar sind. Kombinieren Sie dies mit unserem <a href="/services/webdesign" className="text-indigo-600 hover:text-indigo-500 underline">Webdesign</a>, <a href="/services/seo" className="text-indigo-600 hover:text-indigo-500 underline">SEO</a> und <a href="/services/performance" className="text-indigo-600 hover:text-indigo-500 underline">Performance-Optimierung</a> für maximale Online-Sichtbarkeit.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <ChartBarIcon className="h-8 w-8 text-indigo-600 flex-shrink-0" />
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

        {/* Process Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  Unser Marketing-Prozess
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                  Wir beginnen nicht mit Postings oder Ads, sondern mit Einordnung: Wer soll erreicht werden? Erst dann folgen Botschaft, Kanalwahl und Umsetzung – bis zur messbaren Wirkung.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckIcon className="h-8 w-8 text-indigo-600" />
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

        {/* Marketing Trust Section */}
        <div className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 sm:p-12 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  Marketing – sauber, strategisch, messbar
                </h2>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Kein Aktionismus, keine leeren Versprechen. Wir arbeiten mit Klarheit, konsistenter Botschaft und messbaren Signalen – damit Marketing zu Anfragen führt.
                </p>
                <ul className="mt-10 space-y-5 text-neutral-600 dark:text-neutral-300">
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Keine &ldquo;mehr Reichweite&rdquo;-Versprechen ohne Strategie</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Maßnahmen nur, wenn sie zur Botschaft passen</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Messbar, nachvollziehbar, transparent</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Fokus auf Anfragen statt Vanity Metrics</span>
                  </li>
                </ul>
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
                    Mit unseren Marketing-Strategien erreichen Sie Ihre Zielgruppe effektiv und steigern nachhaltig Ihren Erfolg. Kombinieren Sie dies mit unserem <Link href="/services/webdesign" className="text-indigo-600 hover:text-indigo-500 underline">Webdesign</Link>, <Link href="/services/seo" className="text-indigo-600 hover:text-indigo-500 underline">SEO</Link> und <Link href="/services/performance" className="text-indigo-600 hover:text-indigo-500 underline">Performance-Optimierung</Link> für maximale Online-Sichtbarkeit.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckIcon className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                      <span className="text-lg font-semibold text-neutral-950 dark:text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:flex-1">
                <div className="relative aspect-square">
                  <Image
                    src="/img/services/marketing.jpg"
                    alt="Marketing Analytics und Performance Tracking für Digital Marketing in Niederösterreich"
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
        <div className="relative py-24 bg-indigo-600 overflow-hidden">
          <div className="absolute inset-0 mix-blend-multiply opacity-40">
            <Image
              src="/img/services/marketing.webp"
              alt="Background Pattern"
              fill
              className="object-cover"
              quality={60}
            />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Bereit für Marketing, das zu Anfragen führt?
              </h2>
              <p className="mt-4 text-lg text-indigo-100">
                Lass uns kurz einordnen, welche Kanäle für dich wirklich Sinn ergeben.
              </p>
              <div className="mt-8">
                <Button href="/kontakt" variant="secondary" className="text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-indigo-600">
                  Jetzt Strategie-Gespräch vereinbaren
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}