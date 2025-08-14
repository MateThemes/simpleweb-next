import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PriceCard } from '@/components/ui/PriceCard'
import { pricingSchema } from '@/app/schema'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Preise | Webdesign Pakete & Leistungen',
  description: 'Transparente Preise für professionelles Webdesign. Wählen Sie aus unseren maßgeschneiderten Paketen das passende für Ihr Projekt.',
  openGraph: {
    title: 'Preise | Webdesign Pakete & Leistungen',
    description: 'Transparente Preise für professionelles Webdesign. Wählen Sie aus unseren maßgeschneiderten Paketen das passende für Ihr Projekt.',
    url: 'https://simplewebdesign.at/preise-und-pakete',
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
    canonical: 'https://simplewebdesign.at/preise-und-pakete'
  }
}

const packages = [
  {
    name: 'Standard',
    description: 'Perfekt für kleine Unternehmen und Selbstständige',
    price: '1.490',
    features: [
      { name: 'Modernes responsives Design', included: true },
      { name: 'Bis zu 5 Unterseiten', included: true },
      { name: 'Kontaktformular & Maps Integration', included: true },
      { name: 'Grundlegende SEO-Optimierung', included: true },
      { name: 'SSL-Verschlüsselung', included: true },
      { name: 'DSGVO-konforme Umsetzung', included: true },
      { name: '1 Jahr Hosting & Domain', included: true }
    ],
    popular: false
  },
  {
    name: 'Premium',
    description: 'Ideal für wachsende Unternehmen',
    price: '2.990',
    features: [
      { name: 'Alles aus Standard, plus:', included: true },
      { name: 'Erweiterte SEO & Local SEO', included: true },
      { name: 'Performance-Optimierung', included: true },
      { name: 'Bis zu 10 Unterseiten', included: true },
      { name: 'Blog-System & News-Bereich', included: true },
      { name: 'Individuelle Funktionen', included: true },
      { name: 'Premium Support', included: true }
    ],
    popular: true
  },
  {
    name: 'Komplett',
    description: 'Full-Service mit laufender Betreuung',
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

const redesignPackages = [
  {
    name: 'Redesign Standard',
    description: 'Ideale Basis für eine moderne Website',
    price: '1.490',
    features: [
      { name: 'Modernes responsives Design', included: true },
      { name: 'Bis zu 5 Seiten', included: true },
      { name: 'Kontaktformular & Google Maps', included: true },
      { name: 'Grundlegende SEO', included: true },
      { name: 'DSGVO-konform', included: true },
      { name: 'Performance-Optimierung', included: true },
      { name: 'Content-Migration', included: true }
    ],
    popular: false
  },
  {
    name: 'Redesign Premium',
    description: 'Erweiterte Funktionen & SEO',
    price: '2.990',
    features: [
      { name: 'Alles aus Standard-Paket', included: true },
      { name: 'Erweiterte SEO & Local SEO', included: true },
      { name: 'Performance-Optimierung', included: true },
      { name: 'Mehr Unterseiten', included: true },
      { name: 'Individuelle Funktionen', included: true },
      { name: 'Content-Überarbeitung', included: true },
      { name: 'Analytics-Setup', included: true }
    ],
    popular: true
  },
  {
    name: 'Redesign Komplett',
    description: 'All-inclusive mit Betreuung',
    price: '4.990',
    features: [
      { name: 'Alles aus Premium-Paket', included: true },
      { name: 'Laufende Wartung & Updates', included: true },
      { name: 'Regelmäßige SEO-Optimierung', included: true },
      { name: 'Blog-Artikel & Content', included: true },
      { name: 'Performance-Monitoring', included: true },
      { name: 'Monatliches Reporting', included: true },
      { name: 'Optionales Monatspaket (250-500€)', included: true }
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
              name: "SimpleWeb Design Preise",
              description: "Unsere Webdesign Pakete und Leistungen",
              image: "/img/pricing/packages.jpg",
              packages: packages.map((pkg) => ({
                name: pkg.name,
                description: pkg.description,
                price: pkg.price,
                features: pkg.features,
              })),
            })
          ),
        }}
      />
      <main className="flex-auto pb-24 sm:pb-32">
        {/* Hero Section */}
        <Container className="mt-24 sm:mt-32">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              Transparente Preise
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
              Wählen Sie das passende Paket für Ihr Projekt. Gemäß § 6 Abs. 1 Z
              27 UStG wird keine Umsatzsteuer berechnet.
            </p>
          </div>
        </Container>

        {/* New Website Packages */}
        <Container className="mt-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Neue Website
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Professionelle Webseiten-Pakete für Ihren Neustart im Internet:
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {packages.map((pkg) => (
                <PriceCard key={pkg.name} {...pkg} />
              ))}
            </div>
          </div>
        </Container>

        {/* Redesign Section */}
        <Container className="mt-24 sm:mt-32">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Website Redesign
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Modernisieren Sie Ihre bestehende Website mit unseren spezialisierten Redesign-Paketen:
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {redesignPackages.map((pkg) => (
                <PriceCard key={pkg.name} {...pkg} />
              ))}
            </div>
          </div>
        </Container>

        {/* Other Services Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  Weitere Dienstleistungen
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                  Für technische Services und Hosting bieten wir flexible Abrechnungsmodelle nach Aufwand.
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
                <div className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                      Performance & Hosting Beratung
                    </h3>
                    <ul className="mt-6 space-y-4 text-base text-neutral-600 dark:text-neutral-300">
                      <li>• Hosting-Analyse & Empfehlung</li>
                      <li>• Performance-Optimierung nach Aufwand</li>
                      <li>• Server-Setup Beratung</li>
                      <li>• Technischer Support: €90-120/Stunde</li>
                    </ul>
                    <div className="mt-8">
                      <Button href="/services/performance" variant="secondary">
                        Details ansehen
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                      SEO & Marketing
                    </h3>
                    <ul className="mt-6 space-y-4 text-base text-neutral-600 dark:text-neutral-300">
                      <li>• SEO-Audit & Analyse: €490</li>
                      <li>• Monatliche SEO-Betreuung ab €390</li>
                      <li>• Content-Marketing nach Aufwand</li>
                      <li>• Local SEO & Google Business</li>
                    </ul>
                    <div className="mt-8">
                      <Button href="/services/seo" variant="secondary">
                        Details ansehen
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                      Wartung & Support
                    </h3>
                    <ul className="mt-6 space-y-4 text-base text-neutral-600 dark:text-neutral-300">
                      <li>• Basis-Wartung ab €49/Monat</li>
                      <li>• Updates & Sicherheit</li>
                      <li>• Backup & Monitoring</li>
                      <li>• Express-Support verfügbar</li>
                    </ul>
                    <div className="mt-8">
                      <Button href="/services/wartung" variant="secondary">
                        Details ansehen
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                      Individuelle Projekte
                    </h3>
                    <ul className="mt-6 space-y-4 text-base text-neutral-600 dark:text-neutral-300">
                      <li>• Maßgeschneiderte Lösungen</li>
                      <li>• Komplexe Funktionen & Features</li>
                      <li>• Spezielle Integrationen</li>
                      <li>• Projektbasierte Kalkulation</li>
                    </ul>
                    <div className="mt-8">
                      <Button href="/kontakt" variant="secondary">
                        Anfrage stellen
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Additional Services */}
        <Container className="mt-24 sm:mt-32">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Zusätzliche Leistungen
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Erweitern Sie Ihr Paket mit individuellen Leistungen:
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-3xl bg-neutral-950 dark:bg-white/5 px-6 py-8">
                <h3 className="text-lg font-semibold text-white">
                  E-Commerce Erweiterung
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Shop-System, Produkt-Katalog, Payment-Integration
                </p>
                <p className="mt-4 text-3xl font-bold text-white">ab 2.990€</p>
              </div>

              <div className="rounded-3xl bg-neutral-950 dark:bg-white/5 px-6 py-8">
                <h3 className="text-lg font-semibold text-white">
                  Performance Boost
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Optimierung, CDN-Setup, Caching-Strategie
                </p>
                <p className="mt-4 text-3xl font-bold text-white">ab 990€</p>
              </div>
            </div>
          </div>
        </Container>

        {/* Hourly Rates Section */}
        <Container className="mt-24 sm:mt-32">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Stundensätze & Beratung
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Für individuelle Anforderungen, Beratung und Wartung bieten wir
              flexible Stundensätze:
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-3xl bg-neutral-950 dark:bg-white/5 px-6 py-8">
                <h3 className="text-lg font-semibold text-white">
                  Beratung & Konzeption
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Strategieberatung, Konzeptentwicklung, Workshops
                </p>
                <p className="mt-4 text-3xl font-bold text-white">150€/h</p>
              </div>

              <div className="rounded-3xl bg-neutral-950 dark:bg-white/5 px-6 py-8">
                <h3 className="text-lg font-semibold text-white">
                  Entwicklung
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Programmierung, Debugging, Technische Anpassungen
                </p>
                <p className="mt-4 text-3xl font-bold text-white">130€/h</p>
              </div>

              <div className="rounded-3xl bg-neutral-950 dark:bg-white/5 px-6 py-8">
                <h3 className="text-lg font-semibold text-white">Design</h3>
                <p className="mt-2 text-sm text-neutral-300">
                  UI/UX Design, Grafikdesign, Prototyping
                </p>
                <p className="mt-4 text-3xl font-bold text-white">120€/h</p>
              </div>

              <div className="rounded-3xl bg-neutral-950 dark:bg-white/5 px-6 py-8">
                <h3 className="text-lg font-semibold text-white">
                  Support & Wartung
                </h3>
                <p className="mt-2 text-sm text-neutral-300">
                  Technischer Support, Updates, Wartungsarbeiten
                </p>
                <p className="mt-4 text-3xl font-bold text-white">100€/h</p>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}
