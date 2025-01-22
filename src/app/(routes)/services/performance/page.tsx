import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { RocketIcon, CheckIcon } from '@/components/icons'
import { serviceSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'Website Performance Optimierung | Schnellere Websites',
  description: 'Professionelle Website Performance Optimierung. Verbessern Sie Ihre Core Web Vitals und PageSpeed für besseres Ranking und Conversion.',
  openGraph: {
    title: 'Website Performance Optimierung | Schnellere Websites',
    description: 'Professionelle Website Performance Optimierung. Verbessern Sie Ihre Core Web Vitals und PageSpeed für besseres Ranking und Conversion.',
    url: 'https://simplewebdesign.de/services/performance',
    images: [
      {
        url: '/img/services/performance.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Performance Optimization'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Performance Optimierung | Schnellere Websites',
    description: 'Professionelle Website Performance Optimierung. Verbessern Sie Ihre Core Web Vitals und PageSpeed.',
    images: ['/img/services/performance.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.de/services/performance'
  }
}

const features = [
  {
    title: 'Core Web Vitals',
    description: 'Optimierung der wichtigsten Performance-Metriken für besseres Google-Ranking.',
  },
  {
    title: 'Asset-Optimierung',
    description: 'Komprimierung und Optimierung von Bildern, Scripts und Stylesheets.',
  },
  {
    title: 'Caching-Strategien',
    description: 'Implementierung effektiver Caching-Mechanismen für schnellere Ladezeiten.',
  },
  {
    title: 'Server-Optimierung',
    description: 'Optimierung der Server-Konfiguration und Datenbank-Performance.',
  },
]

const benefits = [
  'Besseres Google-Ranking',
  'Höhere Conversion-Rate',
  'Geringere Absprungrate',
  'Bessere User Experience',
  'Mobile Performance',
  'Reduzierte Serverkosten',
]

export default function PerformancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Website Performance Optimierung',
              description: 'Professionelle Website Performance Optimierung. Verbessern Sie Ihre Core Web Vitals und PageSpeed für besseres Ranking und Conversion.',
              image: '/img/services/performance.jpg'
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
                  Performance & Speed
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Optimieren Sie die Geschwindigkeit Ihrer Website für bessere Rankings und zufriedenere Besucher.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/kontakt">Performance Audit</Button>
                  <Button href="#features" variant="secondary">Mehr erfahren</Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img/services/performance.jpg"
                    alt="Website Performance Dashboard"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                  <div className="absolute -bottom-8 -left-8">
                    <div className="bg-orange-600 rounded-xl shadow-lg p-6 text-white">
                      <RocketIcon className="h-8 w-8 mb-2" />
                      <div className="text-2xl font-bold">0.8s</div>
                      <div className="text-sm opacity-90">Ladezeit</div>
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
                Umfassende Optimierung
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Von Core Web Vitals bis zur Server-Optimierung - wir machen Ihre Website spürbar schneller.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <RocketIcon className="h-8 w-8 text-orange-600 flex-shrink-0" />
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

        {/* Performance Metrics Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:flex-1">
                <div className="max-w-2xl">
                  <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                    Ihre Vorteile
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Eine schnelle Website verbessert nicht nur das Nutzererlebnis, sondern auch Ihr Google-Ranking.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckIcon className="h-8 w-8 text-orange-600 flex-shrink-0" />
                      <span className="text-lg font-semibold text-neutral-950 dark:text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:flex-1">
                <div className="relative aspect-square">
                  <Image
                    src="/img/services/performance.jpg"
                    alt="Performance Metrics Dashboard"
                    fill
                    className="rounded-2xl object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 bg-orange-600 overflow-hidden">
          <div className="absolute inset-0 mix-blend-multiply opacity-40">
            <Image
              src="/img/services/performance.jpg"
              alt="Background Pattern"
              fill
              className="object-cover"
              quality={60}
            />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Bereit für mehr Speed?
              </h2>
              <p className="mt-4 text-lg text-orange-100">
                Lassen Sie uns gemeinsam die Performance Ihrer Website analysieren und optimieren.
              </p>
              <div className="mt-8">
                <Button href="/kontakt" variant="secondary" className="text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-orange-600">
                  Jetzt kostenloses Performance Audit
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}