import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PriceCard } from '@/components/ui/PriceCard'
import Button from '@/components/ui/Button'
import { SparklesIcon, DeviceLaptopIcon, PaintBrushIcon, ArrowRightIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Preise & Pakete – Webdesign & KI-Automatisierung für KMU | SimpleWebDesign',
  description: 'Transparente Preise für modernes Webdesign, SEO und KI-Automatisierung. Fixpreise & individuelle Pakete für KMU in Österreich & Deutschland.',
  openGraph: {
    title: 'Preise & Pakete – Webdesign & KI-Automatisierung für KMU | SimpleWebDesign',
    description: 'Transparente Preise für modernes Webdesign, SEO und KI-Automatisierung. Fixpreise & individuelle Pakete für KMU in Österreich & Deutschland.',
    url: 'https://simplewebdesign.at/preise-und-pakete',
    images: [
      {
        url: '/img/pricing/packages.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWebDesign Preise & Pakete'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preise & Pakete – Webdesign & KI-Automatisierung für KMU',
    description: 'Transparente Preise für modernes Webdesign, SEO und KI-Automatisierung.',
    images: ['/img/pricing/packages.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/preise-und-pakete'
  }
}

const websitePackages = [
  {
    name: 'Standard',
    description: 'Perfekt für kleine Unternehmen und Selbstständige – moderne Website mit allen wichtigen Funktionen.',
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
    description: 'Ideal für wachsende Unternehmen – erweiterte Features und bessere SEO-Performance.',
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
    popular: true,
    kiNote: 'Optional mit KI-Automatisierung Ihrer Anfragen oder Formularprozesse kombinierbar.'
  },
  {
    name: 'Komplett',
    description: 'Full-Service mit laufender Betreuung – maximale Performance und kontinuierliche Optimierung.',
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
    popular: false,
    kiNote: 'Optional mit KI-Automatisierung Ihrer Anfragen oder Formularprozesse kombinierbar.'
  }
]

const redesignPackages = [
  {
    name: 'Redesign Standard',
    description: 'Ideale Basis für eine moderne Website – Ihre bestehende Seite wird auf den neuesten Stand gebracht.',
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
    description: 'Erweiterte Funktionen & SEO – mehr Leistung und bessere Sichtbarkeit für Ihr Unternehmen.',
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
    description: 'All-inclusive mit Betreuung – kontinuierliche Optimierung und laufende Wartung.',
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

const kiPackages = [
  {
    name: 'KI Basic',
    description: 'Einfache Automatisierung für den Einstieg – perfekt für erste Schritte in die Digitalisierung.',
    price: '690',
    features: [
      { name: 'Einfache Automatisierung', included: true },
      { name: 'E-Mail → Google Sheet', included: true },
      { name: 'Kontaktformular → CRM', included: true },
      { name: 'Einrichtung mit n8n/Make/Zapier', included: true },
      { name: 'Basis-Dokumentation', included: true }
    ],
    popular: false
  },
  {
    name: 'KI Advanced',
    description: 'Mehrstufige Automatisierungen mit Workflow-Management – für komplexere Prozesse.',
    price: '1.290',
    features: [
      { name: 'Mehrstufige Automatisierungen', included: true },
      { name: 'Workflow-Management', included: true },
      { name: 'Angebotsworkflow', included: true },
      { name: 'Automatische Benachrichtigungen', included: true },
      { name: 'GPT-Integration möglich', included: true },
      { name: 'Dokumentation & Einweisung', included: true }
    ],
    popular: true
  },
  {
    name: 'KI Komplettsystem',
    description: 'Individuelle KI-Lösungen mit Schulung – für anspruchsvolle Automatisierungsprojekte.',
    price: '2.490',
    features: [
      { name: 'Individuelle KI-Lösungen', included: true },
      { name: 'Chatbot oder Telegram-Integration', included: true },
      { name: 'Angebotsgenerator mit KI', included: true },
      { name: 'Schulung & Onboarding', included: true },
      { name: 'Laufender Support (3 Monate)', included: true },
      { name: 'Monitoring-Dashboard', included: true }
    ],
    popular: false
  }
]

// JSON-LD Schema für Produkte
function generateProductSchema() {
  const allProducts = [
    ...websitePackages.map(pkg => ({
      '@type': 'Product' as const,
      name: `Webdesign ${pkg.name}`,
      description: pkg.description,
      offers: {
        '@type': 'Offer' as const,
        price: pkg.price,
        priceCurrency: 'EUR'
      }
    })),
    ...redesignPackages.map(pkg => ({
      '@type': 'Product' as const,
      name: `Redesign ${pkg.name}`,
      description: pkg.description,
      offers: {
        '@type': 'Offer' as const,
        price: pkg.price,
        priceCurrency: 'EUR'
      }
    })),
    ...kiPackages.map(pkg => ({
      '@type': 'Product' as const,
      name: `KI-Automatisierung ${pkg.name}`,
      description: pkg.description,
      offers: {
        '@type': 'Offer' as const,
        price: pkg.price,
        priceCurrency: 'EUR'
      }
    }))
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: allProducts.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: product
    }))
  }
}

export default function PricingPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductSchema())
        }}
      />

      <main className="flex-auto pb-24 sm:pb-32">
        {/* 🧭 Hero Section */}
        <section className="relative bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-24 lg:py-32">
          <Container className="mt-24 sm:mt-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-8">
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">💰 Transparente Preise</span>
              </div>
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
                Transparente Preise für Webdesign & KI-Automatisierung
              </h1>
              <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Von der Website-Erstellung bis zur intelligenten Prozessautomatisierung – alle Leistungen für KMU aus einer Hand, klar kalkuliert und DSGVO-konform.
              </p>
              <div className="mt-8">
                <Button
                  href="/kontakt"
                  variant="primary"
                  className="text-lg px-8 py-4"
                >
                  Kostenlose Erstberatung sichern
                  <ArrowRightIcon className="w-5 h-5" />
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                <Link href="/services/webdesign" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">Webdesign-Services</Link>
                <span>•</span>
                <Link href="/portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">Portfolio</Link>
                <span>•</span>
                <Link href="/ki-automatisierung" className="hover:text-indigo-600 dark:hover:text-indigo-400 underline">KI-Automatisierung</Link>
              </div>
            </div>
          </Container>
        </section>

        {/* 💻 Website-Pakete Section */}
        <Container className="mt-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <DeviceLaptopIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                Webdesign-Pakete für KMU
              </h2>
            </div>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Professionelle Webseiten-Pakete für Ihren Online-Auftritt – von der einfachen Unternehmens-Website bis zur vollständigen Lösung mit laufender Betreuung.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {websitePackages.map((pkg) => (
              <div key={pkg.name} className="relative">
                <PriceCard
                  name={pkg.name}
                  price={pkg.price}
                  description={pkg.description}
                  features={pkg.features}
                  popular={pkg.popular}
                  ctaText="Angebot anfragen"
                  ctaLink="/kontakt"
                />
                {pkg.kiNote && (
                  <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 italic text-center">
                    {pkg.kiNote}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>

        {/* 🔄 Redesign-Pakete Section */}
        <Container className="mt-24 sm:mt-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <PaintBrushIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                Website Redesign-Pakete
              </h2>
            </div>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Modernisieren Sie Ihre bestehende Website mit neuen Funktionen & Performance – Ihre Inhalte bleiben erhalten, die Technik wird erneuert.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {redesignPackages.map((pkg) => (
              <PriceCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
                ctaText="Angebot anfragen"
                ctaLink="/kontakt"
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Auch als Kombination mit KI-Automatisierung möglich – z. B. zur Automatisierung von Kontakt- oder Anfrageprozessen.
            </p>
          </div>
        </Container>

        {/* 🤖 KI-Automatisierung Section */}
        <section className="mt-24 sm:mt-32 py-16 bg-gradient-to-b from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
          <Container>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <SparklesIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
                  KI-Automatisierung – Digitale Abläufe, die Zeit sparen
                </h2>
              </div>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Wir helfen KMU, wiederkehrende Aufgaben zu automatisieren – von der E-Mail-Verarbeitung über Angebotsvorlagen bis hin zu Chatbots oder Prozessverknüpfungen. DSGVO-konform, effizient und individuell auf Ihr Unternehmen abgestimmt.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {kiPackages.map((pkg) => (
                <PriceCard
                  key={pkg.name}
                  name={pkg.name}
                  price={pkg.price}
                  description={pkg.description}
                  features={pkg.features}
                  popular={pkg.popular}
                  ctaText="KI-Potenzial prüfen"
                  ctaLink="/ki-automatisierung"
                />
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                href="/ki-automatisierung"
                variant="secondary"
                className="inline-flex items-center gap-2"
              >
                Mehr über KI-Automatisierung erfahren
                <ArrowRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </Container>
        </section>

        {/* ⚙️ Weitere Dienstleistungen Section */}
        <div className="py-24 mt-16">
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
                      KI-Beratung & Strategie
                    </h3>
                    <ul className="mt-6 space-y-4 text-base text-neutral-600 dark:text-neutral-300">
                      <li>• Analyse bestehender Prozesse</li>
                      <li>• Automatisierungspotenziale aufdecken</li>
                      <li>• Einrichtung von KI-Tools (ChatGPT, n8n, Make etc.)</li>
                      <li>• Schulung & Support ab 120 €/h</li>
                    </ul>
                    <div className="mt-8">
                      <Button href="/ki-automatisierung" variant="secondary">
                        Details ansehen
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* 💰 Stundensätze & Beratung Section */}
        <Container className="mt-24 sm:mt-32">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Stundensätze & Beratung
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Für individuelle Anforderungen, Beratung und Wartung bieten wir flexible Stundensätze:
            </p>

            <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Bereich</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Beschreibung</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">Preis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">KI-Beratung & Automatisierung</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Prozessanalyse, Umsetzung & Tests</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white text-right">130 €/h</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Beratung & Konzeption</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Strategieberatung, Konzeptentwicklung, Workshops</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white text-right">150 €/h</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Entwicklung</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Programmierung, Debugging, Technische Anpassungen</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white text-right">130 €/h</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Design</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">UI/UX Design, Grafikdesign, Prototyping</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white text-right">120 €/h</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Support & Wartung</td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Technischer Support, Updates, Wartungsarbeiten</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white text-right">100 €/h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>

        {/* 💬 Final CTA Section */}
        <section className="mt-24 sm:mt-32 py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                Egal, ob neue Website, Redesign oder KI-Automatisierung – wir erstellen Ihnen ein maßgeschneidertes Angebot.
              </h2>
              <p className="text-lg text-indigo-100 mb-8">
                Sprechen Sie mit uns über Ihr Projekt. Wir beraten Sie gerne kostenlos und unverbindlich.
              </p>
              <Button
                href="/kontakt"
                variant="primary"
                className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                Jetzt Beratung vereinbaren
                <ArrowRightIcon className="w-5 h-5" />
              </Button>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-indigo-100">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-indigo-100">KMU-Projekte</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-indigo-100">Jahre Erfahrung</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-indigo-100">Zufriedenheit</div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
