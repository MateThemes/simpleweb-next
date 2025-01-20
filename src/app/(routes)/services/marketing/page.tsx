import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ChartBarIcon, CheckIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Online Marketing Service | SimpleWeb',
  description: 'Maßgeschneiderte Online Marketing Strategien für mehr Reichweite und Conversions. Social Media, Content und Performance Marketing aus einer Hand.',
}

const features = [
  {
    title: 'Social Media Marketing',
    description: 'Professionelle Betreuung Ihrer Social Media Kanäle für maximale Reichweite und Engagement.',
  },
  {
    title: 'Content Marketing',
    description: 'Wertvoller Content der Ihre Zielgruppe begeistert und zu mehr Conversions führt.',
  },
  {
    title: 'Performance Marketing',
    description: 'Datengetriebene Werbekampagnen für messbare Ergebnisse und ROI.',
  },
  {
    title: 'E-Mail Marketing',
    description: 'Aufbau und Pflege von E-Mail-Listen für langfristige Kundenbeziehungen.',
  },
]

const benefits = [
  'Höhere Markenbekanntheit',
  'Mehr qualifizierte Leads',
  'Bessere Conversion-Rates',
  'Messbarer ROI',
  'Zielgruppenspezifische Ansprache',
  'Kontinuierliche Optimierung',
]

export default function MarketingPage() {
  return (
    <main className="flex-auto">
      {/* Hero Section */}
      <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <Container className="relative">
          <div className="lg:flex lg:items-center lg:gap-x-10">
            <div className="max-w-2xl lg:max-w-lg">
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
                Online Marketing
              </h1>
              <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                Steigern Sie Ihre digitale Reichweite mit maßgeschneiderten Marketing-Strategien und erreichen Sie Ihre Zielgruppe effektiv.
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
                  alt="Marketing Dashboard"
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
              Von Social Media bis Performance Marketing - wir entwickeln die perfekte Strategie für Ihren Erfolg.
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
                  Mit unseren Marketing-Strategien erreichen Sie Ihre Zielgruppe effektiv und steigern nachhaltig Ihren Erfolg.
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
                  alt="Marketing Analytics"
                  fill
                  className="rounded-2xl object-cover shadow-xl"
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
              Bereit für mehr Reichweite?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Lassen Sie uns gemeinsam Ihre Marketing-Strategie entwickeln und Ihre Ziele erreichen.
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
  )
}