import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { aboutSchema } from '@/app/schema'
import { 
  CodeBracketIcon, 
  RocketLaunchIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline'

// Metadata
export const metadata: Metadata = {
  title: 'Über Uns | SimpleWeb Design',
  description: 'Lernen Sie das Team hinter SimpleWeb Design kennen. Wir sind Ihre Experten für modernes Webdesign, SEO und digitales Marketing in Deutschland.',
  openGraph: {
    title: 'Über Uns | SimpleWeb Design',
    description: 'Lernen Sie das Team hinter SimpleWeb Design kennen. Wir sind Ihre Experten für modernes Webdesign, SEO und digitales Marketing in Deutschland.',
    url: 'https://simplewebdesign.de/ueber-uns',
    images: [
      {
        url: '/img/about/team.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWeb Design Team'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über Uns | SimpleWeb Design',
    description: 'Lernen Sie das Team hinter SimpleWeb Design kennen.',
    images: ['/img/about/team.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.de/ueber-uns'
  }
}

const values = [
  {
    name: 'Expertise',
    description: 'Mit jahrelanger Erfahrung in Webentwicklung und digitalem Marketing biete ich Ihnen professionelle Lösungen auf höchstem Niveau.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Innovation',
    description: 'Ich bleibe stets am Puls der Zeit und setze die neuesten Technologien und Trends ein, um Ihren Online-Auftritt zukunftssicher zu gestalten.',
    icon: LightBulbIcon,
  },
  {
    name: 'Performance',
    description: 'Schnelle Ladezeiten und optimale Benutzerfreundlichkeit sind für mich keine Option, sondern Standard.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Persönliche Betreuung',
    description: 'Als Ihr direkter Ansprechpartner garantiere ich Ihnen kurze Kommunikationswege und individuelle Betreuung.',
    icon: RocketLaunchIcon,
  },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            aboutSchema({
              name: 'SimpleWeb Design',
              description: 'Wir sind Ihre Experten für modernes Webdesign, SEO und digitales Marketing in Deutschland.',
              image: '/img/about/team.jpg',
              foundingDate: '2020',
              founders: ['Gerald Böhm'],
              address: {
                streetAddress: 'Musterstraße 123',
                addressLocality: 'München',
                addressRegion: 'BY',
                postalCode: '80331',
                addressCountry: 'DE'
              }
            })
          )
        }}
      />
      <main className="flex-auto">
        {/* Hero Section */}
        <Container className="mt-24 sm:mt-32">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              Ihr Partner für digitalen Erfolg
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
              Als erfahrener Webentwickler und Digital-Experte unterstütze ich Sie dabei, Ihre Online-Präsenz zu optimieren und Ihr Geschäft digital erfolgreich zu machen.
            </p>
          </div>
        </Container>

        {/* About Section with Image */}
        <Container className="mt-24 sm:mt-32">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-2xl">
              <Image
                src="/img/about/workspace.jpg"
                alt="Modern workspace with computer setup"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                Moderne Lösungen für die digitale Welt
              </h2>
              <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
                Mit einem tiefen Verständnis für moderne Webtechnologien und digitales Marketing entwickle ich maßgeschneiderte Lösungen, die Ihr Unternehmen voranbringen.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                    <CodeBracketIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">Technische Expertise</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                      Modernste Webtechnologien und bewährte Entwicklungspraktiken für optimale Performance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                    <RocketLaunchIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">Schnelle Umsetzung</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                      Effiziente Projektabwicklung mit klarer Kommunikation und schnellen Reaktionszeiten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Values Section */}
        <Container className="mt-24 sm:mt-32">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                Unsere Werte
              </h2>
              <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
                Diese Grundsätze leiten unsere tägliche Arbeit und garantieren Ihnen erstklassige Ergebnisse.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name} className="flex flex-col">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-neutral-950 dark:text-white">
                    {value.name}
                  </h3>
                  <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Services Overview */}
        <Container className="mt-24 sm:mt-32">
          <div className="relative overflow-hidden bg-neutral-50 dark:bg-neutral-900 rounded-3xl px-6 py-20 sm:px-12 sm:py-28">
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                Mein Leistungsangebot
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                Von der Konzeption bis zur Umsetzung - ich begleite Sie durch den gesamten Prozess.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col rounded-3xl bg-white dark:bg-neutral-800 px-6 py-8">
                <h3 className="font-display text-xl font-medium text-neutral-950 dark:text-white">Webdesign</h3>
                <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
                  Responsive Websites mit modernem Design und optimaler Benutzerführung.
                </p>
                <Image
                  src="/img/about/webdesign.jpg"
                  alt="Webdesign Service"
                  width={300}
                  height={200}
                  className="mt-6 rounded-2xl"
                />
              </div>
              <div className="flex flex-col rounded-3xl bg-white dark:bg-neutral-800 px-6 py-8">
                <h3 className="font-display text-xl font-medium text-neutral-950 dark:text-white">E-Commerce</h3>
                <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
                  Professionelle Online-Shops mit sicheren Zahlungssystemen.
                </p>
                <Image
                  src="/img/about/ecommerce.jpg"
                  alt="E-Commerce Service"
                  width={300}
                  height={200}
                  className="mt-6 rounded-2xl"
                />
              </div>
              <div className="flex flex-col rounded-3xl bg-white dark:bg-neutral-800 px-6 py-8">
                <h3 className="font-display text-xl font-medium text-neutral-950 dark:text-white">Marketing</h3>
                <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
                  SEO und digitale Marketing-Strategien für mehr Sichtbarkeit.
                </p>
                <Image
                  src="/images/services/marketing-icon.jpg"
                  alt="Marketing Service"
                  width={300}
                  height={200}
                  className="mt-6 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </Container>

        {/* CTA Section */}
        <Container className="mt-24 sm:mt-32 mb-24 sm:mb-32">
          <div className="relative overflow-hidden bg-neutral-950 px-6 py-24 shadow-2xl rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Lassen Sie uns gemeinsam Ihr Projekt verwirklichen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-neutral-300">
              Ich freue mich darauf, Sie kennenzulernen und Ihre Ideen in die digitale Welt zu bringen.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/kontakt" variant="primary">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}