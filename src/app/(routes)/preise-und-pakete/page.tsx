import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PricingCard } from '@/components/ui/PricingCard'
import {
  PricingSection,
  PricingSectionHeader,
  SectionNav,
  RatesTable,
  ServiceCardGrid,
} from '@/components/sections/pricing'
import { ArrowRightIcon } from '@/components/icons'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Preise & Pakete – Webdesign & KI-Automatisierung für KMU | SimpleWebDesign',
  description: 'Transparente Preise für modernes Webdesign, SEO und KI-Automatisierung. Fixpreise & individuelle Pakete für KMU in Österreich & Deutschland.',
  openGraph: {
    title: 'Preise & Pakete – Webdesign & KI-Automatisierung für KMU | SimpleWebDesign',
    description: 'Transparente Preise für modernes Webdesign, SEO und KI-Automatisierung. Fixpreise & individuelle Pakete für KMU in Österreich & Deutschland.',
    url: 'https://simplewebdesign.at/preise-und-pakete',
    images: [
      { url: '/img/pricing/packages.jpg', width: 1200, height: 630, alt: 'SimpleWebDesign Preise & Pakete' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preise & Pakete – Webdesign & KI-Automatisierung für KMU',
    description: 'Transparente Preise für modernes Webdesign, SEO und KI-Automatisierung.',
    images: ['/img/pricing/packages.jpg'],
  },
  alternates: { canonical: 'https://simplewebdesign.at/preise-und-pakete' },
}

const websitePackages = [
  {
    name: 'Standard',
    description: 'Perfekt für kleine Unternehmen und Selbstständige – moderne Website mit allen wichtigen Funktionen.',
    valueLine: 'Kleine Unternehmen & Selbstständige.',
    price: '1.490',
    features: [
      { name: 'Modernes responsives Design', included: true },
      { name: 'Bis zu 5 Unterseiten', included: true },
      { name: 'Kontaktformular & Maps Integration', included: true },
      { name: 'Grundlegende SEO-Optimierung', included: true },
      { name: 'SSL-Verschlüsselung', included: true },
      { name: 'DSGVO-konforme Umsetzung', included: true },
      { name: '1 Jahr Hosting & Domain', included: true },
    ],
    popular: false,
  },
  {
    name: 'Premium',
    description: 'Ideal für wachsende Unternehmen – erweiterte Features und bessere SEO-Performance.',
    valueLine: 'Wachsende Unternehmen mit höheren Ansprüchen.',
    price: '2.990',
    features: [
      { name: 'Alles aus Standard, plus:', included: true },
      { name: 'Erweiterte SEO & Local SEO', included: true },
      { name: 'Performance-Optimierung', included: true },
      { name: 'Bis zu 10 Unterseiten', included: true },
      { name: 'Blog-System & News-Bereich', included: true },
      { name: 'Individuelle Funktionen', included: true },
      { name: 'Premium Support', included: true },
    ],
    popular: true,
    footnote: 'Optional mit KI-Automatisierung deiner Anfragen oder Formularprozesse kombinierbar.',
  },
  {
    name: 'Komplett',
    description: 'Full-Service mit laufender Betreuung – maximale Performance und kontinuierliche Optimierung.',
    valueLine: 'Maximale Performance mit laufender Betreuung.',
    price: '4.990',
    features: [
      { name: 'Alles aus Premium, plus:', included: true },
      { name: 'Laufende Wartung & Updates', included: true },
      { name: 'Regelmäßige SEO-Optimierung', included: true },
      { name: 'Content-Marketing & Blog-Artikel', included: true },
      { name: 'Performance-Monitoring', included: true },
      { name: 'Monatliche Reports', included: true },
      { name: 'Priority Support', included: true },
    ],
    popular: false,
    footnote: 'Optional mit KI-Automatisierung deiner Anfragen oder Formularprozesse kombinierbar.',
  },
]

const redesignPackages = [
  {
    name: 'Redesign Standard',
    description: 'Ideale Basis für eine moderne Website – deine bestehende Seite wird auf den neuesten Stand gebracht.',
    valueLine: 'Bestehende Seite modernisieren.',
    price: '1.490',
    features: [
      { name: 'Modernes responsives Design', included: true },
      { name: 'Bis zu 5 Seiten', included: true },
      { name: 'Kontaktformular & Google Maps', included: true },
      { name: 'Grundlegende SEO', included: true },
      { name: 'DSGVO-konform', included: true },
      { name: 'Performance-Optimierung', included: true },
      { name: 'Content-Migration', included: true },
    ],
    popular: false,
  },
  {
    name: 'Redesign Premium',
    description: 'Erweiterte Funktionen & SEO – mehr Leistung und bessere Sichtbarkeit für dein Unternehmen.',
    valueLine: 'Mehr Leistung und Sichtbarkeit.',
    price: '2.990',
    features: [
      { name: 'Alles aus Standard-Paket', included: true },
      { name: 'Erweiterte SEO & Local SEO', included: true },
      { name: 'Performance-Optimierung', included: true },
      { name: 'Mehr Unterseiten', included: true },
      { name: 'Individuelle Funktionen', included: true },
      { name: 'Content-Überarbeitung', included: true },
      { name: 'Analytics-Setup', included: true },
    ],
    popular: true,
  },
  {
    name: 'Redesign Komplett',
    description: 'All-inclusive mit Betreuung – kontinuierliche Optimierung und laufende Wartung.',
    valueLine: 'All-inclusive mit laufender Betreuung.',
    price: '4.990',
    features: [
      { name: 'Alles aus Premium-Paket', included: true },
      { name: 'Laufende Wartung & Updates', included: true },
      { name: 'Regelmäßige SEO-Optimierung', included: true },
      { name: 'Blog-Artikel & Content', included: true },
      { name: 'Performance-Monitoring', included: true },
      { name: 'Monatliches Reporting', included: true },
      { name: 'Optionales Monatspaket (250-500€)', included: true },
    ],
    popular: false,
  },
]

const kiPackages = [
  {
    name: 'KI Basic',
    description: 'Einfache Automatisierung für den Einstieg – perfekt für erste Schritte in die Digitalisierung.',
    valueLine: 'Einstieg in die Automatisierung.',
    price: '690',
    features: [
      { name: 'Einfache Automatisierung', included: true },
      { name: 'E-Mail → Google Sheet', included: true },
      { name: 'Kontaktformular → CRM', included: true },
      { name: 'Einrichtung mit n8n/Make/Zapier', included: true },
      { name: 'Basis-Dokumentation', included: true },
    ],
    popular: false,
  },
  {
    name: 'KI Advanced',
    description: 'Mehrstufige Automatisierungen mit Workflow-Management – für komplexere Prozesse.',
    valueLine: 'Komplexere Prozesse, mehrstufig.',
    price: '1.290',
    features: [
      { name: 'Mehrstufige Automatisierungen', included: true },
      { name: 'Workflow-Management', included: true },
      { name: 'Angebotsworkflow', included: true },
      { name: 'Automatische Benachrichtigungen', included: true },
      { name: 'GPT-Integration möglich', included: true },
      { name: 'Dokumentation & Einweisung', included: true },
    ],
    popular: true,
  },
  {
    name: 'KI Komplettsystem',
    description: 'Individuelle KI-Lösungen mit Schulung – für anspruchsvolle Automatisierungsprojekte.',
    valueLine: 'Individuelle KI-Lösungen inkl. Schulung.',
    price: '2.490',
    features: [
      { name: 'Individuelle KI-Lösungen', included: true },
      { name: 'Chatbot oder Telegram-Integration', included: true },
      { name: 'Angebotsgenerator mit KI', included: true },
      { name: 'Schulung & Onboarding', included: true },
      { name: 'Laufender Support (3 Monate)', included: true },
      { name: 'Monitoring-Dashboard', included: true },
    ],
    popular: false,
  },
]

const ratesRows = [
  { area: 'KI-Beratung & Automatisierung', description: 'Prozessanalyse, Umsetzung & Tests', price: '130 €/h' },
  { area: 'Beratung & Konzeption', description: 'Strategieberatung, Konzeptentwicklung, Workshops', price: '150 €/h' },
  { area: 'Entwicklung', description: 'Programmierung, Debugging, Technische Anpassungen', price: '130 €/h' },
  { area: 'Design', description: 'UI/UX Design, Grafikdesign, Prototyping', price: '120 €/h' },
  { area: 'Support & Wartung', description: 'Technischer Support, Updates, Wartungsarbeiten', price: '100 €/h' },
]

const serviceCards = [
  {
    title: 'Performance & Hosting Beratung',
    items: [
      'Hosting-Analyse & Empfehlung',
      'Performance-Optimierung nach Aufwand',
      'Server-Setup Beratung',
      'Technischer Support: 90–120 €/Stunde',
    ],
    href: '/services/performance',
    linkText: 'Details ansehen',
  },
  {
    title: 'SEO & Marketing',
    items: [
      'SEO-Audit & Analyse: 490 €',
      'Monatliche SEO-Betreuung ab 390 €',
      'Content-Marketing nach Aufwand',
      'Local SEO & Google Business',
    ],
    href: '/services/seo',
    linkText: 'Details ansehen',
  },
  {
    title: 'Wartung & Support',
    items: [
      'Basis-Wartung ab 49 €/Monat',
      'Updates & Sicherheit',
      'Backup & Monitoring',
      'Express-Support verfügbar',
    ],
    href: '/services/wartung',
    linkText: 'Details ansehen',
  },
  {
    title: 'KI-Beratung & Strategie',
    items: [
      'Analyse bestehender Prozesse',
      'Automatisierungspotenziale aufdecken',
      'Einrichtung von KI-Tools (ChatGPT, n8n, Make etc.)',
      'Schulung & Support ab 120 €/h',
    ],
    href: '/ki-automatisierung',
    linkText: 'Details ansehen',
  },
]

function generateProductSchema() {
  const allProducts = [
    ...websitePackages.map((pkg) => ({
      '@type': 'Product' as const,
      name: `Webdesign ${pkg.name}`,
      description: pkg.description,
      offers: { '@type': 'Offer' as const, price: pkg.price, priceCurrency: 'EUR' },
    })),
    ...redesignPackages.map((pkg) => ({
      '@type': 'Product' as const,
      name: `Redesign ${pkg.name}`,
      description: pkg.description,
      offers: { '@type': 'Offer' as const, price: pkg.price, priceCurrency: 'EUR' },
    })),
    ...kiPackages.map((pkg) => ({
      '@type': 'Product' as const,
      name: `KI-Automatisierung ${pkg.name}`,
      description: pkg.description,
      offers: { '@type': 'Offer' as const, price: pkg.price, priceCurrency: 'EUR' },
    })),
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: allProducts.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: product,
    })),
  }
}

const trustItems = ['KMU in AT & DE', 'klare Pakete', 'DSGVO-konform']

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateProductSchema()) }}
      />

      <main className="flex-auto">
        {/* Hero */}
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20"
          aria-labelledby="pricing-hero-heading"
        >
          <Container className="relative">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-3 py-1.5 text-sm font-medium text-[var(--primary)] bg-[var(--surface-2)] rounded-full border border-[var(--border)] mb-6">
                Transparente Preise
              </span>
              <h1
                id="pricing-hero-heading"
                className={cn(
                  'font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08]',
                  'text-4xl sm:text-5xl lg:text-6xl'
                )}
              >
                Transparente Preise für Webdesign & KI-Automatisierung
              </h1>
              <p className="mt-6 text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
                Von der Website-Erstellung bis zur intelligenten Prozessautomatisierung – alle Leistungen für KMU aus einer Hand, klar kalkuliert und DSGVO-konform.
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-xl font-semibold text-base',
                    'bg-[var(--primary)] text-[var(--primary-foreground)]',
                    'hover:opacity-95 transition-opacity duration-[var(--duration-normal)]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                  )}
                >
                  Kostenlose Erstberatung sichern
                  <ArrowRightIcon className="w-5 h-5" aria-hidden />
                </Link>
              </div>
              <div
                className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 mt-8 pt-2 text-[var(--muted-foreground)] text-sm tracking-wide"
                role="list"
                aria-label="Vertrauen und Reichweite"
              >
                {trustItems.map((item, i) => (
                  <span key={i} className="inline-flex items-center" role="listitem">
                    <span className="uppercase tracking-wider font-medium">{item}</span>
                    {i < trustItems.length - 1 && (
                      <span className="mx-2 text-[var(--border)]" aria-hidden>·</span>
                    )}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-[var(--muted-foreground)]">
                <Link href="/services/webdesign" className="hover:text-[var(--foreground)] underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded">Webdesign-Services</Link>
                <span aria-hidden>·</span>
                <Link href="/portfolio" className="hover:text-[var(--foreground)] underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded">Portfolio</Link>
                <span aria-hidden>·</span>
                <Link href="/ki-automatisierung" className="hover:text-[var(--foreground)] underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded">KI-Automatisierung</Link>
              </div>
            </div>
          </Container>
        </section>

        <SectionNav />

        {/* Webdesign-Pakete */}
        <PricingSection id="webdesign-pakete" variant="surface-2">
          <PricingSectionHeader
            title="Webdesign-Pakete für KMU"
            description="Professionelle Webseiten-Pakete für deinen Online-Auftritt – von der einfachen Unternehmens-Website bis zur vollständigen Lösung mit laufender Betreuung."
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {websitePackages.map((pkg) => (
              <PricingCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                valueLine={pkg.valueLine}
                features={pkg.features}
                popular={pkg.popular}
                ctaText="Angebot anfragen"
                ctaLink="/kontakt"
                footnote={pkg.footnote}
              />
            ))}
          </div>
        </PricingSection>

        {/* Redesign-Pakete */}
        <PricingSection id="redesign-pakete" variant="background">
          <PricingSectionHeader
            title="Website Redesign-Pakete"
            description="Bestehende Website? Struktur & Technik modernisieren – Inhalte bleiben."
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {redesignPackages.map((pkg) => (
              <PricingCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                valueLine={pkg.valueLine}
                features={pkg.features}
                popular={pkg.popular}
                ctaText="Angebot anfragen"
                ctaLink="/kontakt"
              />
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-[var(--muted-foreground)]">
            Auch als Kombination mit KI-Automatisierung möglich – z. B. zur Automatisierung von Kontakt- oder Anfrageprozessen.
          </p>
        </PricingSection>

        {/* KI-Automatisierung */}
        <PricingSection id="ki-automatisierung" variant="surface-2">
          <PricingSectionHeader
            title="KI-Automatisierung – Digitale Abläufe, die Zeit sparen"
            description="Wir helfen KMU, wiederkehrende Aufgaben zu automatisieren – von der E-Mail-Verarbeitung über Angebotsvorlagen bis hin zu Chatbots oder Prozessverknüpfungen. DSGVO-konform, effizient und individuell auf dein Unternehmen abgestimmt."
          />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {kiPackages.map((pkg) => (
              <PricingCard
                key={pkg.name}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                valueLine={pkg.valueLine}
                features={pkg.features}
                popular={pkg.popular}
                ctaText="KI-Potenzial prüfen"
                ctaLink="/ki-automatisierung"
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/ki-automatisierung"
              className={cn(
                'inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base',
                'bg-transparent text-[var(--foreground)] border-2 border-[var(--border)]',
                'hover:border-[var(--muted-foreground)] hover:bg-[var(--surface)] transition-colors duration-[var(--duration-fast)]',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
              )}
            >
              Mehr über KI-Automatisierung erfahren
              <ArrowRightIcon className="w-5 h-5" aria-hidden />
            </Link>
          </div>
        </PricingSection>

        {/* Weitere Dienstleistungen */}
        <ServiceCardGrid
          title="Weitere Dienstleistungen"
          description="Für technische Services und Hosting bieten wir flexible Abrechnungsmodelle nach Aufwand."
          cards={serviceCards}
          className="bg-[var(--background)]"
        />

        {/* Stundensätze */}
        <PricingSection id="stundensaetze" variant="surface">
          <PricingSectionHeader
            title="Stundensätze & Beratung"
            description="Für individuelle Anforderungen, Beratung und Wartung bieten wir flexible Stundensätze."
          />
          <RatesTable rows={ratesRows} className="max-w-4xl mx-auto" />
        </PricingSection>

        {/* Final CTA */}
        <section
          className="py-[var(--spacing-section-lg)] lg:py-[var(--spacing-section-xl)] bg-[var(--surface-2)]"
          aria-labelledby="pricing-cta-heading"
        >
          <Container>
            <div className="max-w-[720px] mx-auto text-center">
              <h2
                id="pricing-cta-heading"
                className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6"
              >
                Egal, ob neue Website, Redesign oder KI-Automatisierung – wir erstellen dir ein maßgeschneidertes Angebot.
              </h2>
              <p className="text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed">
                Ein Gespräch – unverbindlich, ohne Verkaufsdruck.
              </p>
              <Link
                href="/kontakt"
                className={cn(
                  'inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl',
                  'bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold text-lg',
                  'transition-opacity duration-[var(--duration-normal)] hover:opacity-95',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                )}
              >
                Jetzt Beratung vereinbaren
                <ArrowRightIcon className="w-5 h-5" aria-hidden />
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
