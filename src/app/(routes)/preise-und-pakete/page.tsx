import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PriceCard } from '@/components/ui/PriceCard'
import { pricingSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'Preise | Webdesign Pakete & Leistungen',
  description: 'Transparente Preise für professionelles Webdesign. Wählen Sie aus unseren maßgeschneiderten Paketen das passende für Ihr Projekt.',
  openGraph: {
    title: 'Preise | Webdesign Pakete & Leistungen',
    description: 'Transparente Preise für professionelles Webdesign. Wählen Sie aus unseren maßgeschneiderten Paketen das passende für Ihr Projekt.',
    url: 'https://simplewebdesign.de/preise-und-pakete',
    images: [
      {
        url: '/img/pricing/packages.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWeb Design Preise'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preise | Webdesign Pakete & Leistungen',
    description: 'Transparente Preise für professionelles Webdesign.',
    images: ['/img/pricing/packages.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.de/preise-und-pakete'
  }
}

const packages = [
  {
    name: 'Starter',
    description: 'Perfekt für kleine Unternehmen und Selbstständige',
    price: '1.990',
    features: [
      { name: 'Responsive Design', included: true },
      { name: 'Bis zu 5 Unterseiten', included: true },
      { name: 'Kontaktformular', included: true },
      { name: 'SEO Grundoptimierung', included: true },
      { name: 'SSL-Verschlüsselung', included: true },
      { name: 'Google Analytics Integration', included: true }
    ],
    popular: false
  },
  {
    name: 'Business',
    description: 'Ideal für wachsende Unternehmen',
    price: '3.990',
    features: [
      { name: 'Alles aus Starter, plus:', included: true },
      { name: 'Bis zu 10 Unterseiten', included: true },
      { name: 'Blog-System', included: true },
      { name: 'Newsletter-Integration', included: true },
      { name: 'Social Media Integration', included: true },
      { name: 'Content Management System', included: true }
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'Maßgeschneiderte Lösungen für große Unternehmen',
    price: 'Individuell',
    features: [
      { name: 'Alles aus Business, plus:', included: true },
      { name: 'Unbegrenzte Unterseiten', included: true },
      { name: 'E-Commerce Integration', included: true },
      { name: 'Multi-Language Support', included: true },
      { name: 'Custom Funktionen', included: true },
      { name: 'Premium Support', included: true }
    ],
    popular: false
  }
]

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            pricingSchema({
              name: 'SimpleWeb Design Preise',
              description: 'Unsere Webdesign Pakete und Leistungen',
              image: '/img/pricing/packages.jpg',
              packages: packages.map(pkg => ({
                name: pkg.name,
                description: pkg.description,
                price: pkg.price,
                features: pkg.features
              }))
            })
          )
        }}
      />
      <main className="flex-auto">
        {/* Hero Section */}
        <Container className="mt-24 sm:mt-32">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              Transparente Preise
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
              Wählen Sie das passende Paket für Ihr Projekt. Alle Preise verstehen sich zzgl. MwSt.
            </p>
          </div>
        </Container>

        {/* Pricing Cards */}
        <Container className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PriceCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </Container>

        {/* FAQ Section */}
        <Container className="mt-24 sm:mt-32 pb-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Häufig gestellte Fragen
            </h2>
            <dl className="mt-10 space-y-8 text-neutral-600 dark:text-neutral-400">
              <div>
                <dt className="font-semibold text-neutral-950 dark:text-white">Was ist in den Preisen enthalten?</dt>
                <dd className="mt-2">Alle Preise beinhalten Design, Entwicklung, Testing und Launch Ihrer Website. Hosting und Domain sind für das erste Jahr inklusive.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-950 dark:text-white">Gibt es versteckte Kosten?</dt>
                <dd className="mt-2">Nein, wir legen großen Wert auf Transparenz. Alle Kosten werden im Vorfeld besprochen und vertraglich festgehalten.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-950 dark:text-white">Wie lange dauert die Umsetzung?</dt>
                <dd className="mt-2">Die Projektdauer hängt von der Komplexität ab. Ein Starter-Paket ist in der Regel nach 4-6 Wochen fertig.</dd>
              </div>
            </dl>
          </div>
        </Container>
      </main>
    </>
  )
}
