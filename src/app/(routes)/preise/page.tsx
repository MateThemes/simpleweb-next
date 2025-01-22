import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PriceCard } from '@/components/ui/PriceCard'

export const metadata: Metadata = {
  title: 'Preise | SimpleWebDesign',
  description: 'Transparente Preise für professionelles Webdesign, SEO und Marketing. Wählen Sie das passende Paket für Ihr Projekt.',
}

const pricingPlans = [
  {
    name: 'Starter',
    price: '1.499',
    description: 'Perfekt für kleine Unternehmen und Selbstständige, die eine professionelle Online-Präsenz aufbauen möchten.',
    features: [
      { name: 'Responsive Website (bis zu 5 Seiten)', included: true },
      { name: 'SEO-Grundoptimierung', included: true },
      { name: 'Kontaktformular', included: true },
      { name: 'SSL-Zertifikat', included: true },
      { name: 'Mobile-First Design', included: true },
      { name: 'Cookie-Banner', included: true },
      { name: 'Social Media Integration', included: true },
      { name: 'Performance Optimierung', included: false },
      { name: 'Blog-Funktion', included: false },
      { name: 'E-Mail Marketing Integration', included: false },
    ],
  },
  {
    name: 'Professional',
    price: '2.999',
    description: 'Ideal für wachsende Unternehmen, die eine umfangreiche Website mit erweiterten Funktionen benötigen.',
    features: [
      { name: 'Responsive Website (bis zu 10 Seiten)', included: true },
      { name: 'SEO-Grundoptimierung', included: true },
      { name: 'Kontaktformular', included: true },
      { name: 'SSL-Zertifikat', included: true },
      { name: 'Mobile-First Design', included: true },
      { name: 'Cookie-Banner', included: true },
      { name: 'Social Media Integration', included: true },
      { name: 'Performance Optimierung', included: true },
      { name: 'Blog-Funktion', included: true },
      { name: 'E-Mail Marketing Integration', included: true },
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Individuell',
    description: 'Maßgeschneiderte Lösungen für große Unternehmen mit speziellen Anforderungen und komplexen Funktionen.',
    features: [
      { name: 'Unbegrenzte Seiten', included: true },
      { name: 'Erweiterte SEO-Optimierung', included: true },
      { name: 'Individuelle Funktionen', included: true },
      { name: 'SSL-Zertifikat', included: true },
      { name: 'Mobile-First Design', included: true },
      { name: 'Cookie-Banner', included: true },
      { name: 'Social Media Integration', included: true },
      { name: 'Performance Optimierung', included: true },
      { name: 'Blog-Funktion', included: true },
      { name: 'E-Mail Marketing Integration', included: true },
    ],
    ctaText: 'Kontaktieren Sie uns',
  },
]

const faqs = [
  {
    question: 'Was ist im Preis enthalten?',
    answer: 'Unsere Preise beinhalten die komplette Entwicklung Ihrer Website, inklusive Design, Programmierung, Responsive Layout, grundlegende SEO-Optimierung und alle notwendigen rechtlichen Komponenten wie Cookie-Banner und Datenschutzerklärung.',
  },
  {
    question: 'Gibt es versteckte Kosten?',
    answer: 'Nein, wir legen Wert auf volle Transparenz. Die angegebenen Preise sind Festpreise für den definierten Leistungsumfang. Zusätzliche Funktionen oder Änderungen werden vorab besprochen und separat kalkuliert.',
  },
  {
    question: 'Wie läuft die Bezahlung ab?',
    answer: 'Die Zahlung erfolgt in drei Schritten: 30% bei Auftragserteilung, 40% nach Design-Abnahme und 30% nach Fertigstellung. Für das Enterprise-Paket erstellen wir individuelle Zahlungspläne.',
  },
  {
    question: 'Fallen monatliche Kosten an?',
    answer: 'Die Preise sind einmalige Entwicklungskosten. Laufende Kosten für Hosting, Domain und SSL-Zertifikat werden separat berechnet und transparent kommuniziert.',
  },
]

export default function PreisePage() {
  return (
    <main className="flex-auto">
      <Container className="mt-16 sm:mt-32">
        <div className="md:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Transparente Preise für Ihren Erfolg
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Wählen Sie das passende Paket für Ihre Anforderungen. Alle Preise sind Festpreise und
            beinhalten die komplette Entwicklung Ihrer Website.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PriceCard key={plan.name} {...plan} />
          ))}
        </div>

        <div className="mt-24 md:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Häufig gestellte Fragen
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu unseren Preisen und Leistungen.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-2xl bg-gray-50 dark:bg-gray-800/50 p-8 md:p-12">
          <div className="md:text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Noch Fragen?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Wir beraten Sie gerne persönlich und erstellen ein individuelles Angebot für Ihr Projekt.
            </p>
            <div className="mt-8">
              <a
                href="/kontakt"
                className="inline-block rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                Kostenloses Beratungsgespräch vereinbaren
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
