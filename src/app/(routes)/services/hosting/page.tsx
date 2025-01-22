import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ServerIcon, CheckIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Hosting-Beratung | Professionelle Hosting-Lösungen',
  description: 'Professionelle Hosting-Beratung und Service. Wir finden die optimale Hosting-Lösung für Ihr Projekt.',
}

const partners = [
  {
    name: 'IONOS',
    logo: '/img/ionos-logo.svg',
    description: 'Zuverlässiger deutscher Hosting-Anbieter mit erstklassigem Support und modernster Infrastruktur.',
    features: [
      'Deutsche Rechenzentren',
      '24/7 Support',
      'SSL-Zertifikate inklusive',
    ],
  },
  {
    name: 'Vercel',
    logo: '/img/vercel-logo.svg',
    description: 'Moderne Cloud-Plattform für statische Websites und JAMstack Anwendungen.',
    features: [
      'Globales CDN',
      'Automatische Deployments',
      'Analytics & Monitoring',
    ],
  },
]

const services = [
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
                <Button href="/kontakt">Kostenlos beraten lassen</Button>
                <Button href="#partners" variant="secondary">Mehr erfahren</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Partners Section */}
      <div id="partners" className="py-24 bg-neutral-50 dark:bg-neutral-900">
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              Erstklassige Hosting-Partner
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              Wir arbeiten mit führenden Hosting-Anbietern zusammen, um Ihnen die beste Performance und Sicherheit zu bieten.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <div className="flex items-center gap-x-3">
                  <Image src={partner.logo} alt={`${partner.name} Logo`} width={32} height={32} />
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    {partner.name}
                  </h3>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300">{partner.description}</p>
                <ul className="space-y-3">
                  {partner.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-shrink-0 text-blue-600" />
                      <span className="text-neutral-600 dark:text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Services Section */}
      <div className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              Umfassende Hosting-Lösungen
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              Von der Beratung bis zur Umsetzung - wir unterstützen Sie bei allen Hosting-Fragen.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4">
                <ServerIcon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-blue-600">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Finden Sie die perfekte Hosting-Lösung
            </h2>
            <p className="mt-6 text-lg text-blue-100">
              Lassen Sie sich von uns beraten. Wir finden die optimale Hosting-Lösung für Ihr Projekt.
            </p>
            <div className="mt-10">
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