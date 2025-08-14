import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { RocketIcon, CheckIcon } from '@/components/icons'
import { serviceSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'Website Wartung & Support | Professionelle Betreuung',
  description: 'Professionelle Website-Wartung und technischer Support. Wir kümmern uns um Updates, Sicherheit und Performance Ihrer Website.',
  openGraph: {
    title: 'Website Wartung & Support | Professionelle Betreuung',
    description: 'Professionelle Website-Wartung und technischer Support. Wir kümmern uns um Updates, Sicherheit und Performance Ihrer Website.',
    url: 'https://simplewebdesign.at/services/wartung',
    images: [
      {
        url: '/img/services/wartung.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Wartung und Support'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Wartung & Support | Professionelle Betreuung',
    description: 'Professionelle Website-Wartung und technischer Support.',
    images: ['/img/services/wartung.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/wartung'
  }
}

const features = [
  {
    title: 'Basis-Wartung',
    description: 'Regelmäßige Updates, Sicherheits-Patches und monatliche Backups für einen stabilen Betrieb.',
  },
  {
    title: 'Premium-Wartung',
    description: 'Erweiterte Betreuung mit Content-Updates, SEO-Monitoring und priorisiertem Support.',
  },
  {
    title: 'Standard Support',
    description: 'Technische Unterstützung mit einer Reaktionszeit von 24-48 Stunden.',
  },
  {
    title: 'Express Support',
    description: 'Schnelle Hilfe bei dringenden Anliegen mit garantierter Reaktionszeit von 2-4 Stunden.',
  },
]

const benefits = [
  'Regelmäßige Updates',
  'Proaktive Sicherheit',
  'Zuverlässige Backups',
  'Performance-Monitoring',
  'Technischer Support',
  'Content-Pflege',
]

export default function WartungPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Website Wartung & Support',
              description: 'Professionelle Website-Wartung und technischer Support. Wir kümmern uns um Updates, Sicherheit und Performance Ihrer Website.',
              image: '/img/services/wartung.jpg'
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
                  Wartung & Support
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Professionelle Betreuung für Ihre Website – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/kontakt">Wartung anfragen</Button>
                  <Button href="#features" variant="secondary">Mehr erfahren</Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img/services/wartung.jpg"
                    alt="Website Wartung Dashboard"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                  <div className="absolute -bottom-8 -left-8">
                    <div className="bg-orange-600 rounded-xl shadow-lg p-6 text-white">
                      <RocketIcon className="h-8 w-8 mb-2" />
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-90">Support</div>
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
                Wartungspakete
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Von der Basis-Wartung bis zum Express-Support - wir haben das passende Paket für Sie.
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

        {/* Benefits Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:flex-1">
                <div className="max-w-2xl">
                  <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                    Ihre Vorteile
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Eine gut gewartete Website ist sicher, schnell und immer auf dem neuesten Stand.
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
                    src="/img/services/wartung.jpg"
                    alt="Website Wartung und Support"
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
              src="/img/services/wartung.jpg"
              alt="Background Pattern"
              fill
              className="object-cover"
              quality={60}
            />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Starten Sie mit professioneller Wartung
              </h2>
              <p className="mt-4 text-lg text-orange-100">
                Basis-Wartung ab €49/Monat, Premium-Wartung ab €99/Monat. Support nach Aufwand: €90-120/Stunde.
              </p>
              <p className="mt-2 text-sm text-orange-100">
                Gemäß § 6 Abs. 1 Z 27 UStG wird keine Umsatzsteuer berechnet.
              </p>
              <Button href="/kontakt" className="mt-8" variant="primary">
                Jetzt Anfrage stellen
              </Button>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}
