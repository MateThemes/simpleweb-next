import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ChartBarIcon, CheckIcon } from '@/components/icons'
import { serviceSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'SEO Optimierung | Suchmaschinenoptimierung',
  description: 'Professionelle SEO Optimierung für bessere Google Rankings. Steigern Sie Ihre Sichtbarkeit in den Suchergebnissen mit unserer SEO Expertise.',
  openGraph: {
    title: 'SEO Optimierung | Suchmaschinenoptimierung',
    description: 'Professionelle SEO Optimierung für bessere Google Rankings. Steigern Sie Ihre Sichtbarkeit in den Suchergebnissen mit unserer SEO Expertise.',
    url: 'https://simplewebdesign.de/services/seo',
    images: [
      {
        url: '/img/services/seo.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Optimization Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Optimierung | Suchmaschinenoptimierung',
    description: 'Professionelle SEO Optimierung für bessere Google Rankings.',
    images: ['/img/services/seo.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.de/services/seo'
  }
}

const features = [
  {
    title: 'Technische SEO',
    description: 'Optimierung der technischen Grundlagen Ihrer Website für besseres Ranking in Suchmaschinen.',
  },
  {
    title: 'Content-Optimierung',
    description: 'Strategische Keyword-Recherche und Content-Optimierung für relevanten, wertvollen Content.',
  },
  {
    title: 'Local SEO',
    description: 'Lokale Suchmaschinenoptimierung für mehr Sichtbarkeit in Ihrer Region.',
  },
  {
    title: 'Performance SEO',
    description: 'Optimierung der Ladezeiten und technischen Performance für besseres Ranking.',
  },
]

const benefits = [
  'Höhere Sichtbarkeit bei Google',
  'Mehr organischer Traffic',
  'Bessere Conversion-Rate',
  'Nachhaltiges Wachstum',
  'Messbare Ergebnisse',
  'Regelmäßige Reports',
]

export default function SeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'SEO Optimierung',
              description: 'Professionelle SEO Optimierung für bessere Google Rankings. Steigern Sie Ihre Sichtbarkeit in den Suchergebnissen mit unserer SEO Expertise.',
              image: '/img/services/seo.jpg'
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
                  SEO-Optimierung
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Verbessern Sie Ihre Online-Sichtbarkeit durch modernste SEO-Techniken und erreichen Sie mehr qualifizierte Besucher.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/kontakt">Kostenlose SEO-Analyse</Button>
                  <Button href="#features" variant="secondary">Mehr erfahren</Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img/services/seo.jpg"
                    alt="SEO Analytics Dashboard"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                  <div className="absolute -bottom-8 -left-8">
                    <div className="bg-green-600 rounded-xl shadow-lg p-6 text-white">
                      <ChartBarIcon className="h-8 w-8 mb-2" />
                      <div className="text-2xl font-bold">+156%</div>
                      <div className="text-sm opacity-90">Organischer Traffic</div>
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
                Umfassende SEO-Optimierung
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Wir optimieren Ihre Website ganzheitlich für bessere Rankings und mehr qualifizierten Traffic.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <ChartBarIcon className="h-8 w-8 text-green-600 flex-shrink-0" />
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
                    Mit unserer SEO-Optimierung erreichen Sie nachhaltig mehr qualifizierte Besucher und steigern Ihren Umsatz.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckIcon className="h-8 w-8 text-green-600 flex-shrink-0" />
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
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 bg-green-600 overflow-hidden">
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
                Bereit für mehr Sichtbarkeit?
              </h2>
              <p className="mt-4 text-lg text-green-100">
                Lassen Sie uns Ihre SEO-Potenziale analysieren und einen Plan für mehr organischen Traffic erstellen.
              </p>
              <div className="mt-8">
                <Button href="/kontakt" variant="secondary" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-green-600">
                  Jetzt kostenlose SEO-Analyse anfordern
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}