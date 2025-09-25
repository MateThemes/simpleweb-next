'use client'

import Link from 'next/link'
import { Container } from '../ui/Container'
import { ClockIcon, CodeIcon, RouteIcon, ToolIcon, DeviceMobileIcon, SearchIcon } from '../icons'

interface FaqItem {
  question: string
  answer: string
  icon: React.ComponentType<{ className?: string }>
}

const faqItems: FaqItem[] = [
  {
    question: 'Arbeiten Sie auch mit KMU in Deutschland zusammen?',
    answer: 'Ja, wir betreuen KMU sowohl in Österreich als auch in Deutschland. Dank moderner Kommunikationstools und regelmäßiger Abstimmung funktioniert die Zusammenarbeit auch über Ländergrenzen hinweg reibungslos.',
    icon: ClockIcon
  },
  {
    question: 'Wie lange dauert die Entwicklung einer KMU-Website?',
    answer: 'Für eine typische KMU-Website planen wir 3-4 Wochen. Einfache Projekte können in 2 Wochen fertig sein, während komplexere mit Online-Shop oder Terminbuchung 6-8 Wochen benötigen. Wir halten Sie stets über den Fortschritt auf dem Laufenden.',
    icon: CodeIcon
  },
  {
    question: 'Welche Kosten entstehen für eine KMU-Website?',
    answer: 'Unsere Preise richten sich nach dem Umfang Ihres Projekts. Eine einfache KMU-Website startet bei €2.500, komplexere Lösungen mit E-Commerce bei €5.000+. Wir bieten auch flexible Ratenzahlung für KMU an.',
    icon: RouteIcon
  },
  {
    question: 'Bieten Sie lokale SEO für Handwerker an?',
    answer: 'Ja, lokale SEO ist einer unserer Schwerpunkte! Wir optimieren Ihre Website für Google My Business, lokale Keywords und regionale Suchergebnisse. Perfekt für Handwerker, Dienstleister und lokale Geschäfte.',
    icon: ToolIcon
  },
  {
    question: 'Können Sie auch bestehende KMU-Websites modernisieren?',
    answer: 'Absolut! Wir modernisieren bestehende Websites schrittweise, ohne dass Ihr Geschäft unterbrochen wird. Mobile-Optimierung, SEO-Verbesserungen und Design-Updates führen wir professionell durch.',
    icon: DeviceMobileIcon
  },
  {
    question: 'Welche Wartung und Support bieten Sie für KMU?',
    answer: 'Wir bieten verschiedene Wartungspakete speziell für KMU: Von monatlichen Updates und Sicherheitschecks bis hin zu 24/7-Monitoring. So bleibt Ihre Website immer sicher und aktuell.',
    icon: SearchIcon
  },
  {
    question: 'Können Sie auch Online-Shops für KMU erstellen?',
    answer: 'Ja, wir entwickeln E-Commerce-Lösungen mit Shopify, Strapi CMS oder individuellen Next.js Systemen. Von der Produktpräsentation bis zur Zahlungsabwicklung – wir machen Ihren Online-Shop erfolgreich.',
    icon: ClockIcon
  },
  {
    question: 'Wie schnell können Sie in Wien oder München starten?',
    answer: 'Wir können bereits innerhalb einer Woche mit Ihrem Projekt beginnen. Dank unserer digitalen Arbeitsweise sind wir flexibel und können auch kurzfristige Projekte umsetzen.',
    icon: RouteIcon
  }
]

export default function Faq() {
  return (
    <section className="relative py-section-xl bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900/50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-section-lg">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            FAQ für KMU - Häufige Fragen zu Webdesign
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Antworten auf die wichtigsten Fragen kleiner und mittlerer Unternehmen zu Webdesign, SEO und Online-Marketing
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
          {faqItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-gray-900/5 dark:shadow-none ring-1 ring-gray-900/5 dark:ring-white/10"
              >
                <div className="flex gap-4">
                  <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-blue-600/10 dark:bg-blue-400/10">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {item.question}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.answer}
                      {index === 3 && (
                        <span className="block mt-2">
                          <Link href="/services/seo" className="text-blue-600 hover:text-blue-700 underline">Lokale SEO Services →</Link>
                        </span>
                      )}
                      {index === 6 && (
                        <span className="block mt-2">
                          <Link href="/services/e-commerce-partner-fuer-shopify" className="text-blue-600 hover:text-blue-700 underline">Shopify E-Commerce →</Link>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}