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
      { name: 'Google Analytics Integration', included: true },
      { name: '1 Jahr Hosting & Domain', included: true }
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
      { name: 'Content Management System', included: true },
      { name: 'Premium Support', included: true }
    ],
    popular: true
  },
  {
    name: 'Redesign',
    description: 'Modernisierung bestehender Websites',
    price: '2.490',
    features: [
      { name: 'Analyse der bestehenden Website', included: true },
      { name: 'Modernes responsives Design', included: true },
      { name: 'Performance-Optimierung', included: true },
      { name: 'SEO-Migration & Verbesserung', included: true },
      { name: 'Content-Überarbeitung', included: true },
      { name: 'Analytics-Setup', included: true },
      { name: '301-Weiterleitungen', included: true }
    ],
    popular: false
  },
  {
    name: 'E-Commerce',
    description: 'Professioneller Online-Shop',
    price: '4.990',
    features: [
      { name: 'Shopify oder WooCommerce Setup', included: true },
      { name: 'Produktkatalog-Integration', included: true },
      { name: 'Payment-Gateway-Integration', included: true },
      { name: 'Warenkorb & Checkout', included: true },
      { name: 'Bestellverwaltung', included: true },
      { name: 'Produkt-SEO', included: true },
      { name: 'Shop-Analytics', included: true }
    ],
    popular: false
  },
  {
    name: 'Enterprise',
    description: 'Maßgeschneiderte Lösungen für große Unternehmen',
    price: 'Individuell',
    features: [
      { name: 'Individuelle Entwicklung', included: true },
      { name: 'Unbegrenzte Unterseiten', included: true },
      { name: 'Multi-Language Support', included: true },
      { name: 'Custom Funktionen', included: true },
      { name: 'API-Integrationen', included: true },
      { name: 'Dedicated Support', included: true },
      { name: 'Service Level Agreement', included: true }
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

        {/* Hourly Rates Section */}
        <Container className="mt-24 sm:mt-32">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Stundensätze & Beratung
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Für individuelle Anforderungen, Beratung und Wartung bieten wir flexible Stundensätze:
            </p>
            
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-3xl bg-neutral-950 dark:bg-white/5 px-6 py-8">
                <h3 className="text-lg font-semibold text-white">Beratung & Konzeption</h3>
                <p className="mt-2 text-sm text-neutral-300">Strategieberatung, Konzeptentwicklung, Workshops</p>
                <p className="mt-4 text-3xl font-bold text-white">150€/h</p>
              </div>
              
              <div className="rounded-3xl bg-neutral-950 dark:bg-white/5 px-6 py-8">
                <h3 className="text-lg font-semibold text-white">Entwicklung</h3>
                <p className="mt-2 text-sm text-neutral-300">Programmierung, Debugging, Technische Anpassungen</p>
                <p className="mt-4 text-3xl font-bold text-white">130€/h</p>
              </div>
              
              <div className="rounded-3xl bg-neutral-950 dark:bg-white/5 px-6 py-8">
                <h3 className="text-lg font-semibold text-white">Design</h3>
                <p className="mt-2 text-sm text-neutral-300">UI/UX Design, Grafikdesign, Prototyping</p>
                <p className="mt-4 text-3xl font-bold text-white">120€/h</p>
              </div>
              
              <div className="rounded-3xl bg-neutral-950 dark:bg-white/5 px-6 py-8">
                <h3 className="text-lg font-semibold text-white">Support & Wartung</h3>
                <p className="mt-2 text-sm text-neutral-300">Technischer Support, Updates, Wartungsarbeiten</p>
                <p className="mt-4 text-3xl font-bold text-white">100€/h</p>
              </div>
            </div>

            <div className="mt-10 text-sm text-neutral-600 dark:text-neutral-400">
              <p>* Mindestabnahme: 1 Stunde</p>
              <p>* Abrechnung erfolgt in 15-Minuten-Intervallen</p>
              <p>* Alle Preise zzgl. MwSt.</p>
            </div>
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
                <dd className="mt-2">Alle Preise beinhalten Design, Entwicklung, Testing und Launch Ihrer Website. Bei Neuprojekten sind Hosting und Domain für das erste Jahr inklusive. Jedes Paket enthält auch eine ausführliche Einweisung in Ihr neues System.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-950 dark:text-white">Wie läuft ein Redesign-Projekt ab?</dt>
                <dd className="mt-2">Wir beginnen mit einer gründlichen Analyse Ihrer bestehenden Website. Anschließend erstellen wir ein Konzept für das neue Design unter Berücksichtigung Ihrer Ziele und Anforderungen. Die Migration erfolgt ohne Unterbrechung Ihres laufenden Betriebs, und wir stellen durch 301-Weiterleitungen sicher, dass Ihr SEO-Ranking erhalten bleibt.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-950 dark:text-white">Welches E-Commerce System ist das Richtige für mich?</dt>
                <dd className="mt-2">Die Wahl zwischen Shopify und WooCommerce hängt von Ihren spezifischen Anforderungen ab. Shopify eignet sich besonders für schnelles Wachstum und einfache Verwaltung, während WooCommerce mehr Flexibilität und Kontrolle bietet. In einem Beratungsgespräch finden wir gemeinsam die beste Lösung für Sie.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-950 dark:text-white">Wie lange dauert die Umsetzung?</dt>
                <dd className="mt-2">Die Projektdauer variiert je nach Paket: Starter-Websites sind in 4-6 Wochen fertig, Business-Projekte in 6-8 Wochen. Redesign-Projekte benötigen etwa 4-6 Wochen, E-Commerce-Lösungen 8-12 Wochen. Enterprise-Projekte werden individuell geplant.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-950 dark:text-white">Welche laufenden Kosten entstehen?</dt>
                <dd className="mt-2">Nach dem ersten Jahr fallen Kosten für Hosting und Domain an (ab 15€/Monat). Bei E-Commerce-Lösungen können je nach gewähltem System Lizenzgebühren hinzukommen. Wartung und Support bieten wir optional als Servicepakete an. Alle zusätzlichen Kosten werden transparent im Vorfeld besprochen.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-950 dark:text-white">Kann ich meine Website später erweitern?</dt>
                <dd className="mt-2">Ja, alle unsere Websites sind modular aufgebaut und können jederzeit erweitert werden. Sie können beispielsweise von einem Starter-Paket auf ein Business-Paket upgraden oder später einen Online-Shop integrieren. Die Preise für Erweiterungen werden individuell kalkuliert.</dd>
              </div>
              <div>
                <dt className="font-semibold text-neutral-950 dark:text-white">Wie werden Stundensätze abgerechnet?</dt>
                <dd className="mt-2">Die Abrechnung erfolgt in 15-Minuten-Intervallen mit einer Mindestabnahme von einer Stunde. Vor Beginn der Arbeiten erhalten Sie einen Kostenvoranschlag über den erwarteten Zeitaufwand. Regelmäßige Wartungsarbeiten können auch als monatliches Servicepaket vereinbart werden.</dd>
              </div>
            </dl>
          </div>
        </Container>
      </main>
    </>
  )
}
