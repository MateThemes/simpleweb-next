import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { PaletteIcon, CheckIcon } from '@/components/icons'
import { PriceCard } from '@/components/ui/PriceCard'
import { professionalServiceSchema, breadcrumbSchema } from '@/app/schema'
import { getServicePageDC } from '@/lib/dublinCore'

export const metadata: Metadata = {
  title: 'Webdesign Agentur für KMU | Responsive Websites & UI/UX Design | SimpleWebDesign',
  description: 'Professionelles Webdesign für KMU in Österreich & Deutschland. Responsive Websites, moderne UI/UX und Conversion-optimiertes Design. Starter-Pakete ab 1.490€.',
  openGraph: {
    title: 'Webdesign Agentur für KMU | Responsive Websites & UI/UX Design Österreich & Deutschland',
    description: 'Professionelles Webdesign für KMU in Österreich & Deutschland. Responsive Websites, moderne UI/UX und Conversion-optimiertes Design. Starter-Pakete ab 1.490€.',
    url: 'https://simplewebdesign.at/services/webdesign',
    images: [
      {
        url: '/img/services/webdesign.jpg',
        width: 1200,
        height: 630,
        alt: 'Webdesign Services Niederösterreich - Responsive Websites & UI/UX Design'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign Agentur für KMU | Responsive Websites & UI/UX Design Österreich & Deutschland',
    description: 'Professionelles Webdesign für KMU in Österreich & Deutschland. Responsive Websites, moderne UI/UX und Conversion-optimiertes Design.',
    images: ['/img/services/webdesign.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/webdesign'
  },
  // Dublin Core Metadata
  other: {
    ...getServicePageDC({
      title: 'Webdesign Agentur für KMU | Responsive Websites & UI/UX Design',
      description: 'Professionelles Webdesign für KMU in Österreich & Deutschland. Responsive Websites, moderne UI/UX und Conversion-optimiertes Design.',
      url: 'https://simplewebdesign.at/services/webdesign',
    }),
  },
}

const features = [
  {
    title: 'Responsive Design',
    description: 'Ihre Website passt sich automatisch an alle Bildschirmgrößen an - vom Smartphone bis zum Desktop-PC. Struktur, die Besucher führt statt nur informiert.',
  },
  {
    title: 'Moderne Designprinzipien',
    description: 'Klares, zeitgemäßes Design das Ihre Marke perfekt repräsentiert. Klarheit, die Besucher sofort verstehen lässt: Wer ist hier richtig – und warum?',
  },
  {
    title: 'Optimierte Performance',
    description: 'Schnelle Ladezeiten und optimale Performance für ein hervorragendes Nutzererlebnis. Technik im Dienst der Wirkung.',
  },
  {
    title: 'SEO-Optimiert',
    description: 'Von Grund auf für Suchmaschinen optimiert, damit Sie besser gefunden werden. Messbar: Anfragen, Termine oder Verkäufe – je nach Ziel.',
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
    description: 'Wir setzen Ihr Projekt um und stellen sicher, dass alles reibungslos funktioniert und messbar wird.',
  },
  {
    title: 'Launch & Wirkung',
    description: 'Wir bringen Ihre neue Website online und sorgen dafür, dass Anfragen, Termine oder Verkäufe kommen – je nach Ziel.',
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
    // ProfessionalService Schema (erweitert)
    professionalServiceSchema({
      name: "Webdesign Agentur für KMU",
      description: "Professionelles Webdesign für KMU in Österreich & Deutschland. Responsive Websites, moderne UI/UX und Conversion-optimiertes Design. Starter-Pakete ab 1.490€.",
      url: "https://simplewebdesign.at/services/webdesign",
      image: "https://simplewebdesign.at/img/services/webdesign.jpg",
      priceRange: "€1.490 - €4.990",
      areaServed: ["Austria", "Germany"],
    }),
    // Breadcrumb Schema
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services/webdesign" },
        { name: "Webdesign", url: "https://simplewebdesign.at/services/webdesign" },
      ],
    }),
    // Bestehende detaillierte Service Schema
    {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Webdesign Agentur Niederösterreich",
            "description": "Professionelles Webdesign in Niederösterreich. Responsive Websites, moderne UI/UX und Conversion-optimiertes Design. Starter-Pakete ab 1.490€.",
            "image": "/img/services/webdesign.jpg",
            "provider": {
              "@type": "Organization",
              "name": "SimpleWebDesign",
              "url": "https://simplewebdesign.at",
              "logo": "https://simplewebdesign.at/img/logo.png"
            },
            "areaServed": {
              "@type": "State",
              "name": "Niederösterreich"
            },
            "serviceType": ["Webdesign", "Responsive Design", "UI/UX Design", "Website Development", "Conversion Optimization"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Webdesign Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Responsive Webdesign"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UI/UX Design"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Website Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Conversion Optimization"
                  }
                }
              ]
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Standard Webdesign",
                "price": "1490",
                "priceCurrency": "EUR",
                "description": "Perfekt für kleine Unternehmen und Selbstständige"
              },
              {
                "@type": "Offer",
                "name": "Premium Webdesign",
                "price": "2990",
                "priceCurrency": "EUR",
                "description": "Ideal für wachsende Unternehmen"
              },
              {
                "@type": "Offer",
                "name": "Komplett Webdesign",
                "price": "4990",
                "priceCurrency": "EUR",
                "description": "Full-Service mit laufender Betreuung"
              }
            ]
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
                  Webdesign Agentur für KMU
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  SimpleWebDesign baut Websites für KMU in Österreich und Deutschland, die nicht nur gut aussehen, sondern messbare Ergebnisse bringen. Wir schaffen Klarheit, Struktur und Orientierung – damit Besucher zu Anfragen werden.
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
                    src="/img/services/responsive.webp"
                    alt="Webdesign Services Niederösterreich - Responsive Webdesign Showcase mit modernem UI/UX"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                  <div className="absolute -bottom-8 -left-8">
                    <Image
                      src="/img/services/responsive.jpg"
                      alt="Mobile Webdesign Beispiel - Responsive Design für Smartphones"
                      width={200}
                      height={400}
                      className="rounded-xl shadow-lg"
                    />
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
                Alles was Sie brauchen
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Wir beginnen nicht mit Design oder Technik, sondern mit Einordnung: Was soll die Website leisten? Erst dann folgen Struktur, Design und Umsetzung. Kombinieren Sie dies mit unserem <a href="/services/seo" className="text-blue-600 hover:text-blue-500 underline">SEO-Service</a> und <a href="/services/performance" className="text-blue-600 hover:text-blue-500 underline">Performance-Optimierung</a> für maximale Online-Sichtbarkeit.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <PaletteIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
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

        {/* Branch Solutions Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Branchenlösungen
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Spezialisierte Webdesign-Lösungen für verschiedene Branchen und Anforderungen.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">🏗️</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-2">
                      Webdesign für Handwerker
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                      Spezialisierte Websites für Handwerksbetriebe mit lokaler SEO-Optimierung, DSGVO-Compliance und mobile-first Design.
                    </p>
                    <Button href="/services/webdesign-handwerker" variant="secondary">
                      Mehr erfahren
                    </Button>
                  </div>
                </div>
              </div>
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
                  Wir beginnen nicht mit Design oder Technik, sondern mit Einordnung: Was soll die Website leisten? Erst dann folgen Struktur, Design und Umsetzung – bis zur messbaren Wirkung.
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

        {/* Packages Section */}
        <div className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Unsere Webdesign-Pakete
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Wählen Sie das passende Webdesign-Paket für Ihren individuellen Bedarf in Niederösterreich. Alle Preise sind Endpreise gemäß § 6 Abs. 1 Z 27 UStG.
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
                    Mit unserem Webdesign-Service erhalten Sie eine maßgeschneiderte Lösung, die genau auf Ihre Bedürfnisse zugeschnitten ist. Kombinieren Sie dies mit unserem <a href="/services/seo" className="text-blue-600 hover:text-blue-500 underline">SEO-Service</a>, <a href="/services/marketing" className="text-blue-600 hover:text-blue-500 underline">Marketing-Service</a> und <a href="/services/performance" className="text-blue-600 hover:text-blue-500 underline">Performance-Optimierung</a> für maximale Online-Sichtbarkeit.
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
                    src="/img/services/performance.jpg"
                    alt="Web Performance Optimization und Performance-Monitoring für Webdesign in Niederösterreich"
                    fill
                    className="rounded-2xl object-cover shadow-xl"
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
                Bereit für Ihre neue Website?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Wenn du das Gefühl hast, dass online zu wenig passiert, ist das meist kein Design-Problem. Meist fehlt Klarheit. Lass uns klären, ob deine Website arbeiten soll.
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