import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ServerIcon, CheckIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Hosting-Beratung | Professionelle Hosting-Lösungen',
  description: 'Professionelle Hosting-Beratung und Service. Wir finden die optimale Hosting-Lösung für Ihr Projekt.',
}

const features = [
  {
    title: 'Hosting-Beratung',
    description: 'Individuelle Beratung zur optimalen Hosting-Lösung für Ihr Projekt.',
  },
  {
    title: 'SSL & Sicherheit',
    description: 'Installation und Konfiguration von SSL-Zertifikaten und Sicherheitsmaßnahmen.',
  },
  {
    title: 'Performance',
    description: 'Optimierung der Server-Performance und Ladezeiten.',
  },
  {
    title: 'Domain-Management',
    description: 'Professionelle Verwaltung und Konfiguration Ihrer Domains.',
  },
]

const benefits = [
  'Deutsche Rechenzentren',
  'Automatische Deployments',
  'SSL-Zertifikate inklusive',
  '24/7 Support',
  'Globales CDN',
  'Analytics & Monitoring',
]

export default function HostingPage() {
  return (
    <main className="flex-auto">
      {/* Hero Section */}
      <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <Container className="relative">
          <div className="lg:flex lg:items-center lg:gap-x-10">
            <div className="max-w-2xl lg:max-w-lg">
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
                Hosting-Beratung & Service
              </h1>
              <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                Wir beraten Sie bei der Wahl der optimalen Hosting-Lösung und arbeiten mit erstklassigen Hosting-Partnern zusammen.
              </p>
              <div className="mt-8 flex gap-4">
                <Button href="/kontakt">Kostenlose Beratung</Button>
                <Button href="#features" variant="secondary">Mehr erfahren</Button>
              </div>
            </div>
            <div className="mt-16 lg:mt-0">
              <div className="relative">
                <Image
                  src="/img/services/hosting.jpg"
                  alt="Hosting Infrastructure"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-xl"
                  priority
                />
                <div className="absolute -bottom-8 -left-8">
                  <div className="bg-teal-600 rounded-xl shadow-lg p-6 text-white">
                    <ServerIcon className="h-8 w-8 mb-2" />
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
              Umfassende Hosting-Lösungen
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              Von der Beratung bis zur Umsetzung - wir unterstützen Sie bei allen Hosting-Fragen.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <ServerIcon className="h-8 w-8 text-teal-600 flex-shrink-0" />
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
                  Mit unseren Hosting-Partnern bieten wir Ihnen erstklassige Lösungen für Ihr Projekt.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckIcon className="h-8 w-8 text-teal-600 flex-shrink-0" />
                    <span className="text-lg font-semibold text-neutral-950 dark:text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-16 lg:mt-0 lg:flex-1">
              <div className="relative aspect-square">
                <Image
                  src="/img/services/hosting-benefits.jpg"
                  alt="Hosting Benefits"
                  fill
                  className="rounded-2xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-teal-600">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Finden Sie die perfekte Hosting-Lösung
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              Lassen Sie sich von uns beraten. Wir finden die optimale Hosting-Lösung für Ihr Projekt.
            </p>
            <div className="mt-8">
              <Button href="/kontakt" variant="secondary">
                Jetzt Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </main>
  )
}