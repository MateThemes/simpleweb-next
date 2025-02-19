import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { PaletteIcon, CheckIcon } from '@/components/icons'
import { serviceSchema } from '@/app/schema'
import { PriceCard } from '@/components/ui/PriceCard'

export const metadata: Metadata = {
  title: 'Webdesign | Professionelles Website Design',
  description: 'Modernes und professionelles Webdesign für Ihren erfolgreichen Onlineauftritt. Wir erstellen responsive Websites mit benutzerfreundlichem Design.',
  openGraph: {
    title: 'Webdesign | Professionelles Website Design',
    description: 'Modernes und professionelles Webdesign für Ihren erfolgreichen Onlineauftritt. Wir erstellen responsive Websites mit benutzerfreundlichem Design.',
    url: 'https://simplewebdesign.de/services/webdesign',
    images: [
      {
        url: '/img/services/webdesign.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Web Design Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign | Professionelles Website Design',
    description: 'Modernes und professionelles Webdesign für Ihren erfolgreichen Onlineauftritt.',
    images: ['/img/services/webdesign.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.de/services/webdesign'
  }
}

const features = [
  {
    title: 'Responsive Design',
    description: 'Ihre Website passt sich automatisch an alle Bildschirmgrößen an - vom Smartphone bis zum Desktop-PC.',
  },
  {
    title: 'Moderne Designprinzipien',
    description: 'Klares, zeitgemäßes Design das Ihre Marke perfekt repräsentiert und Besucher begeistert.',
  },
  {
    title: 'Optimierte Performance',
    description: 'Schnelle Ladezeiten und optimale Performance für ein hervorragendes Nutzererlebnis.',
  },
  {
    title: 'SEO-Optimiert',
    description: 'Von Grund auf für Suchmaschinen optimiert, damit Sie besser gefunden werden.',
  },
]

const benefits = [
  'Maßgeschneiderte Designlösungen',
  'Mobile-First Ansatz',
  'Intuitive Benutzerführung',
  'Conversion-optimiert',
  'Barrierefrei nach WCAG',
  'Regelmäßige Updates',
]

const process = [
  {
    title: 'Analyse',
    description: 'Wir analysieren Ihre Ziele und Bedürfnisse, um eine maßgeschneiderte Lösung zu entwickeln.',
  },
  {
    title: 'Konzeption',
    description: 'Wir entwickeln ein Konzept, das Ihre Marke perfekt repräsentiert und Ihre Ziele unterstützt.',
  },
  {
    title: 'Design',
    description: 'Wir erstellen ein modernes, responsives Design, das Ihre Website zum Leben erweckt.',
  },
  {
    title: 'Umsetzung',
    description: 'Wir setzen Ihr Projekt um und stellen sicher, dass alles reibungslos funktioniert.',
  },
  {
    title: 'Launch',
    description: 'Wir bringen Ihre neue Website online und unterstützen Sie bei der weiteren Entwicklung.',
  },
]

const packages = [
  {
    name: 'Standard',
    description: 'Perfekt für kleine Unternehmen und Selbstständige',
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Webdesign',
              description: 'Modernes und professionelles Webdesign für Ihren erfolgreichen Onlineauftritt. Wir erstellen responsive Websites mit benutzerfreundlichem Design.',
              image: '/img/services/webdesign.jpg'
            })
          )
        }}
      />
      <main className="flex-auto">
        {/* Hero Section */}
        <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
          <Container className="relative">
            <div className="lg:flex lg:items-center lg:gap-x-10">
              <div className="max-w-2xl lg:max-w-lg">
                <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
                  Responsive Webdesign
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Professionelles Webdesign, das Ihre Zielgruppe begeistert und Ihre Geschäftsziele unterstützt. Starter-Pakete ab 1.490€.
                </p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Gemäß § 6 Abs. 1 Z 27 UStG wird keine Umsatzsteuer berechnet.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/kontakt">Kostenlose Beratung</Button>
                  <Button href="#features" variant="secondary">Mehr erfahren</Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img/services/responsive.webp"
                    alt="Responsive Webdesign Showcase"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                  <div className="absolute -bottom-8 -left-8">
                    <Image
                      src="/img/services/responsive.jpg"
                      alt="Mobile Design Example"
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
                Von der ersten Konzeption bis zum fertigen Projekt - wir begleiten Sie durch den gesamten Prozess.
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

        {/* Process Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  Unser Prozess
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                  Wir unterstützen Sie bei jedem Schritt, um sicherzustellen, dass Ihr Projekt erfolgreich ist.
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
                Wählen Sie das passende Paket für Ihren individuellen Bedarf. Alle Preise sind Endpreise gemäß § 6 Abs. 1 Z 27 UStG.
              </p>
            </div>
            <div className="mx-auto mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {packages.map((pkg) => (
                <PriceCard key={pkg.name} {...pkg} />
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
                    Mit unserem Webdesign-Service erhalten Sie eine maßgeschneiderte Lösung, die genau auf Ihre Bedürfnisse zugeschnitten ist.
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
                    alt="Web Performance Optimization"
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
                Lassen Sie uns gemeinsam Ihr Projekt besprechen und Ihre Vision Realität werden.
              </p>
              <div className="mt-8">
                <Button href="/kontakt" variant="secondary" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-600">
                  Jetzt Beratungsgespräch vereinbaren
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}