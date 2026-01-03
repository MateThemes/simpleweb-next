import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { aboutSchema } from '@/app/schema'

// Metadata
export const metadata: Metadata = {
  title: 'Über mich | Websites, die Entscheidungen erleichtern | SimpleWebDesign',
  description: 'Warum ich Websites anders baue: Klarheit vor Design. Struktur vor Features. Wirkung vor Buzzwords. Für KMU in Österreich & Deutschland.',
  openGraph: {
    title: 'Über mich | Websites, die Entscheidungen erleichtern | SimpleWebDesign',
    description: 'Warum ich Websites anders baue: Klarheit vor Design. Struktur vor Features. Wirkung vor Buzzwords. Für KMU in Österreich & Deutschland.',
    url: 'https://simplewebdesign.at/ueber-uns',
    images: [
      {
        url: '/img/about/workspace.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWeb Design - Websites mit Klarheit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Über mich | Websites, die Entscheidungen erleichtern | SimpleWebDesign',
    description: 'Warum ich Websites anders baue: Klarheit vor Design. Struktur vor Features. Wirkung vor Buzzwords.',
    images: ['/img/about/workspace.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/ueber-uns'
  }
}

const principles = [
  {
    title: 'Einordnung',
    description: 'Bevor ich etwas baue, kläre ich mit dir, was die Website eigentlich leisten soll – und für wen.'
  },
  {
    title: 'Struktur',
    description: 'Websites funktionieren nicht durch Design oder Features, sondern durch klare Seitenlogik, die Besucher führt.'
  },
  {
    title: 'Wirkung',
    description: 'Erfolg messe ich nicht an Klicks oder Traffic, sondern an messbaren Ergebnissen: Anfragen, Termine oder Verkäufe.'
  },
  {
    title: 'Ehrliche Kommunikation',
    description: 'Kein Agentur-Sprech, keine Buzzwords. Wenn etwas nicht passt, sage ich das offen – bevor Zeit und Budget investiert werden.'
  },
]

const phases = [
  {
    number: '01',
    title: 'Einordnung',
    text: 'Wir klären zuerst, was die Website leisten soll – und was nicht.'
  },
  {
    number: '02',
    title: 'Struktur',
    text: 'Wir bauen eine klare Seitenlogik, die Besucher führt.'
  },
  {
    number: '03',
    title: 'Umsetzung',
    text: 'Design und Technik folgen der Struktur – nicht umgekehrt.'
  },
  {
    number: '04',
    title: 'Wirkung',
    text: 'Wir prüfen gemeinsam, ob die Website das tut, wofür sie gebaut wurde.'
  }
]

const fits = {
  good: [
    'Du merkst, dass deine Website nicht klar arbeitet',
    'Du suchst Orientierung, bevor du investierst',
    'Du hast keine Lust auf Agentur-Sprech',
    'Du willst verstehen, warum etwas gemacht wird'
  ],
  notGood: [
    'Du brauchst nur schnell „eine Website"',
    'Du willst primär Preise vergleichen',
    'Du suchst eine reine Umsetzungsagentur',
    'Du willst Entscheidungen komplett abgeben'
  ]
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            aboutSchema({
              name: 'SimpleWebDesign',
              description: 'Websites mit Klarheit, Struktur und messbarer Wirkung für KMU in Österreich & Deutschland.',
              image: '/img/about/workspace.jpg',
              foundingDate: '2020',
              founders: ['Gerald Schandl'],
              address: {
                streetAddress: 'Sonnleite 20',
                addressLocality: 'Vitis',
                addressRegion: 'Niederösterreich',
                postalCode: '3902',
                addressCountry: 'AT'
              }
            })
          )
        }}
      />
      <main className="flex-auto">
        {/* Hero Section */}
        <Container className="mt-24 sm:mt-32">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800 mb-8">
              <span className="text-blue-600 dark:text-blue-400 font-medium">Über mich</span>
            </div>
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              Websites, die Entscheidungen erleichtern – nicht nur gut aussehen.
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl">
              Ich bin Gerald, und ich baue Websites anders als die meisten Agenturen. 
              Nicht, weil ich gegen Design oder Technik bin – sondern weil ich gelernt habe, 
              dass das Problem selten dort liegt.
            </p>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
              Die meisten Websites scheitern an fehlender Klarheit. An unklarer Zielgruppe. 
              An fehlender Struktur. Das sieht man nicht sofort – aber man spürt es in den 
              Anfragen (oder ihrem Ausbleiben).
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/kontakt" variant="primary">
                Einschätzung anfragen
              </Button>
              <Button href="/prozess" variant="secondary">
                Wie ich arbeite
              </Button>
            </div>
          </div>
        </Container>

        {/* Image + Story Section */}
        <Container className="mt-24 sm:mt-32">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-2xl">
              <Image
                src="/img/about/workspace.jpg"
                alt="Modern workspace - Websites mit klarer Struktur"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                Warum ich so arbeite
              </h2>
              <div className="mt-6 space-y-6 text-lg text-neutral-600 dark:text-neutral-400">
                <p>
                  Ich habe zu oft gesehen, wie Unternehmen viel Geld in schöne Websites 
                  investieren – die dann nicht liefern. Weil niemand vorher gefragt hat: 
                  Was soll diese Website eigentlich tun?
                </p>
                <p>
                  Deshalb beginne ich jedes Projekt mit Einordnung. Wir klären gemeinsam, 
                  für wen die Website ist, was sie leisten soll – und was nicht. Erst dann 
                  baue ich die Struktur. Und erst dann kommt Design und Technik.
                </p>
                <p>
                  Das ist kein klassisches Agentur-Vorgehen. Aber es funktioniert besser – 
                  vor allem für KMU, die keine Zeit für Experimente haben.
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* Principles / Values Section */}
        <Container className="mt-24 sm:mt-32">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                Wie ich arbeite
              </h2>
              <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
                Diese Prinzipien leiten meine Arbeit – und unterscheiden sie von klassischen Web-Projekten.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title} className="flex flex-col">
                  <h3 className="font-display text-xl font-medium text-neutral-950 dark:text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* Process Section - 4 Steps */}
        <Container className="mt-24 sm:mt-32">
          <div className="relative overflow-hidden bg-neutral-50 dark:bg-neutral-900 rounded-3xl px-6 py-20 sm:px-12 sm:py-28">
            <div className="relative mx-auto max-w-3xl">
              <div className="mb-12">
                <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                  Wie die Zusammenarbeit abläuft
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                  Ein klarer Ablauf – ohne Agentur-Theater.
                </p>
              </div>
              
              <div className="space-y-8">
                {phases.map((phase, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <span className="inline-block text-2xl font-light text-neutral-300 dark:text-neutral-600 w-12">
                        {phase.number}
                      </span>
                    </div>
                    <div className="flex-1 pb-8 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0">
                      <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-base text-neutral-600 dark:text-neutral-400">
                        {phase.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                  Du musst nicht alles wissen. Aber du solltest jederzeit verstehen, warum etwas passiert.
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* Fit Section - Passt gut / Passt nicht */}
        <Container className="mt-24 sm:mt-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                Passt das für dich?
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                Eine ehrliche Einordnung – nicht jedes Projekt passt zu meiner Arbeitsweise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Passt gut */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-6">
                  Passt gut, wenn …
                </h3>
                <ul className="space-y-3">
                  {fits.good.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span className="text-base text-neutral-600 dark:text-neutral-400">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Passt eher nicht */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-6">
                  Passt eher nicht, wenn …
                </h3>
                <ul className="space-y-3">
                  {fits.notGood.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-neutral-400 dark:text-neutral-600 mt-1">–</span>
                      <span className="text-base text-neutral-600 dark:text-neutral-400">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>

        {/* Simple Stats */}
        <Container className="mt-24 sm:mt-32">
          <div className="text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Erfolgreich umgesetzte Projekte</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">1–2 Tage</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Durchschnittliche Antwortzeit</div>
              </div>
            </div>
          </div>
        </Container>

        {/* CTA Section - Calm & Clear */}
        <Container className="mt-24 sm:mt-32 mb-24 sm:mb-32">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 px-6 py-16 rounded-3xl sm:px-12 sm:py-20 border border-blue-100 dark:border-blue-900">
            <div className="relative max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                Lass uns schauen, ob es passt.
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                Kein Verkaufsgespräch. Keine Verpflichtung. Nur eine ehrliche Einschätzung, 
                ob meine Arbeitsweise zu deinem Projekt passt.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/kontakt" variant="primary">
                  Unverbindlich Kontakt aufnehmen
                </Button>
              </div>
              <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
                Antwort in 1–2 Werktagen. Kein Spam. Wenn es nicht passt, sagen wir&apos;s offen.
              </p>
            </div>
          </div>
        </Container>

        {/* Tech Note - Small, at the end */}
        <Container className="mb-24">
          <div className="max-w-2xl mx-auto">
            <details className="text-sm text-neutral-500 dark:text-neutral-400">
              <summary className="cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-300">
                Tech-Stack (für die, die es interessiert)
              </summary>
              <p className="mt-4 leading-relaxed">
                Ich arbeite hauptsächlich mit Next.js, React, Tailwind CSS und Shopify. 
                Hosting läuft meist über Vercel oder cloudbasierte Lösungen. 
                Aber ehrlich: Die Technologie ist selten das Problem. 
                Wichtiger ist, dass die Website tut, was sie soll.
              </p>
            </details>
          </div>
        </Container>
      </main>
    </>
  )
}
