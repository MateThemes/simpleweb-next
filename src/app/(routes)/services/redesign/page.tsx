import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { PaintBrushIcon, CheckIcon } from '@/components/icons'
import { serviceSchema } from '@/app/schema'
import { PriceCard } from '@/components/ui/PriceCard'

export const metadata: Metadata = {
  title: 'Website Redesign für KMU: Klarheit statt nur neues Design | SimpleWebDesign',
  description: 'Ihre Website existiert, bringt aber keine Anfragen? Wir schaffen Klarheit, Struktur und messbare Wirkung – für KMU in Österreich & Deutschland. Ab 1.490 €.',
  openGraph: {
    title: 'Website Redesign für KMU: Klarheit statt nur neues Design | SimpleWebDesign',
    description: 'Ihre Website existiert, bringt aber keine Anfragen? Wir schaffen Klarheit, Struktur und messbare Wirkung – für KMU in Österreich & Deutschland. Ab 1.490 €.',
    url: 'https://simplewebdesign.at/services/redesign',
    images: [
      {
        url: '/img/services/redesign.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Redesign Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Redesign für KMU: Klarheit statt nur neues Design | SimpleWebDesign',
    description: 'Ihre Website existiert, bringt aber keine Anfragen? Wir schaffen Klarheit, Struktur und messbare Wirkung – für KMU in Österreich & Deutschland.',
    images: ['/img/services/redesign.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/redesign'
  }
}

const features = [
  {
    title: 'Moderne Neugestaltung',
    description: 'Frisches, zeitgemäßes Design das Klarheit schafft. In Sekunden klar: Wer ist hier richtig – und warum?',
  },
  {
    title: 'Verbesserte Conversion',
    description: 'Struktur, die Besucher führt statt nur informiert. Messbar: Anfragen, Termine oder Verkäufe – je nach Ziel.',
  },
  {
    title: 'Optimierte Nutzerführung',
    description: 'Weniger Scrollen, mehr Orientierung. Der nächste Schritt ist logisch – nicht nur schön.',
  },
  {
    title: 'Technische Modernisierung',
    description: 'Saubere Technik im Dienst der Wirkung. Performance, die messbare Ergebnisse bringt.',
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

const packages = [
  {
    name: 'Redesign Standard',
    description: 'Perfekt für kleine Unternehmen und Selbstständige',
    targetAudience: 'Wann sinnvoll? Wenn die Website existiert, aber kaum Anfragen bringt.',
    price: '1.490',
    features: [
      { name: 'Modernes responsives Design', included: true },
      { name: 'Übernahme bestehender Inhalte', included: true },
      { name: 'Kontaktformular & Maps Integration', included: true },
      { name: 'Grundlegende SEO-Optimierung', included: true },
      { name: 'SSL-Verschlüsselung', included: true },
      { name: 'DSGVO-konforme Umsetzung', included: true },
      { name: '1 Jahr Hosting & Domain', included: true }
    ],
    popular: false
  },
  {
    name: 'Redesign Premium',
    description: 'Ideal für wachsende Unternehmen',
    targetAudience: 'Wann sinnvoll? Wenn mehr Struktur und Orientierung fehlen, um Besucher zu führen.',
    price: '2.990',
    features: [
      { name: 'Alles aus Standard, plus:', included: true },
      { name: 'Erweiterte SEO & Local SEO', included: true },
      { name: 'Performance-Optimierung', included: true },
      { name: 'Content-Überarbeitung', included: true },
      { name: 'Blog-System & News-Bereich', included: true },
      { name: 'Individuelle Funktionen', included: true },
      { name: 'Premium Support', included: true }
    ],
    popular: true
  },
  {
    name: 'Redesign Komplett',
    description: 'Full-Service mit laufender Betreuung',
    targetAudience: 'Wann sinnvoll? Wenn messbare Wirkung und laufende Optimierung wichtig sind.',
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

export default function RedesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Website Redesign',
              description: 'Professionelles Website Redesign für einen modernen, benutzerfreundlichen Webauftritt. Wir modernisieren Ihre Website mit aktuellem Design und Technologie.',
              image: '/img/services/redesign.jpg'
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
                  Website Redesign für KMU
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Ihre Website existiert, bringt aber keine Anfragen? Das Problem ist selten Design oder Technik. Meist fehlt Klarheit. Wir schaffen Struktur und Orientierung – damit Besucher zu Anfragen werden.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/kontakt">Kostenlose Einordnung</Button>
                  <Button href="#features" variant="secondary">Mehr erfahren</Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img/services/redesign.jpg"
                    alt="Website Redesign Showcase"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                  <div className="absolute -bottom-8 -left-8">
                    <div className="bg-purple-600 rounded-xl shadow-lg p-6 text-white">
                      <PaintBrushIcon className="h-8 w-8 mb-2" />
                      <div className="text-2xl font-bold">+198%</div>
                      <div className="text-sm opacity-90">Mehr Conversions</div>
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
                Ihr Weg zum modernen Web
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Wir beginnen nicht mit Design oder Technik, sondern mit Einordnung: Was soll die Website leisten? Erst dann folgen Struktur, Design und Umsetzung – bis zur messbaren Wirkung. Kombinieren Sie dies mit unserem <a href="/services/seo" className="text-purple-600 hover:text-purple-500 underline">SEO-Service</a> und <a href="/services/performance" className="text-purple-600 hover:text-purple-500 underline">Performance-Optimierung</a> für maximale Online-Sichtbarkeit.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <PaintBrushIcon className="h-8 w-8 text-purple-600 flex-shrink-0" />
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

        {/* Before/After Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:flex-1">
                <div className="max-w-2xl">
                  <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                    Ihre Vorteile
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Wenn Ihre Website existiert, aber zu wenig passiert, liegt das meist nicht am Design. Meist fehlt Klarheit. Wir schaffen Struktur und Orientierung – damit Besucher zu Anfragen werden. Kombinieren Sie dies mit unserem <a href="/services/seo" className="text-purple-600 hover:text-purple-500 underline">SEO-Service</a>, <a href="/services/marketing" className="text-purple-600 hover:text-purple-500 underline">Marketing-Service</a> und <a href="/services/performance" className="text-purple-600 hover:text-purple-500 underline">Performance-Optimierung</a> für maximale Online-Sichtbarkeit.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckIcon className="h-8 w-8 text-purple-600 flex-shrink-0" />
                      <span className="text-lg font-semibold text-neutral-950 dark:text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:flex-1">
                <div className="relative aspect-square">
                  <Image
                    src="/img/services/redesign.jpg"
                    alt="Website Redesign Process"
                    fill
                    className="rounded-2xl object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Packages Section */}
        <div className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Unsere Redesign-Pakete
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Wählen Sie das passende Paket für die Modernisierung Ihrer Website. Alle Preise sind Endpreise gemäß § 6 Abs. 1 Z 27 UStG.
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

        {/* CTA Section */}
        <div className="relative py-24 bg-purple-600 overflow-hidden">
          <div className="absolute inset-0 mix-blend-multiply opacity-40">
            <Image
              src="/img/services/redesign.jpg"
              alt="Background Pattern"
              fill
              className="object-cover"
              quality={60}
            />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Bereit für eine Website, die arbeitet?
              </h2>
              <p className="mt-4 text-lg text-purple-100">
                Wenn du das Gefühl hast, dass online zu wenig passiert, ist das meist kein Design-Problem. Meist fehlt Klarheit. Lass uns klären, ob deine Website arbeiten soll.
              </p>
              <p className="mt-2 text-sm text-purple-100">
                Gemäß § 6 Abs. 1 Z 27 UStG wird keine Umsatzsteuer berechnet.
              </p>
              <div className="mt-8">
                <Button href="/kontakt" variant="secondary" className="text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-purple-600">
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