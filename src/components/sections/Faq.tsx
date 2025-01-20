'use client'

import { Container } from '../ui/Container'
import { motion } from 'framer-motion'
import { ClockIcon, CodeIcon, RouteIcon, ToolIcon, DeviceMobileIcon, SearchIcon } from '../icons'

interface FaqItem {
  question: string
  answer: string
  icon: React.ComponentType<{ className?: string }>
}

const faqItems: FaqItem[] = [
  {
    question: 'Wie lange dauert die Entwicklung einer Website?',
    answer: 'Die Entwicklungszeit variiert je nach Umfang und Komplexität des Projekts. Ein einfaches Projekt kann in 2-3 Wochen abgeschlossen sein, während komplexere Projekte 6-8 Wochen oder länger dauern können.',
    icon: ClockIcon
  },
  {
    question: 'Welche Technologien verwenden Sie?',
    answer: 'Wir setzen auf moderne, zukunftssichere Technologien wie Next.js, React und Tailwind CSS. Diese ermöglichen uns, performante, wartbare und skalierbare Websites zu entwickeln.',
    icon: CodeIcon
  },
  {
    question: 'Wie ist der Ablauf eines Webprojekts?',
    answer: 'Der Prozess beginnt mit einem ausführlichen Gespräch über Ihre Anforderungen. Danach erstellen wir ein Konzept und Design. Nach Ihrer Freigabe beginnt die Entwicklung. Während der gesamten Zeit stehen wir in engem Austausch.',
    icon: RouteIcon
  },
  {
    question: 'Bieten Sie auch Wartung und Support an?',
    answer: 'Ja, wir bieten verschiedene Wartungspakete an. Diese umfassen regelmäßige Updates, Sicherheitschecks, Backups und technischen Support. So stellen wir sicher, dass Ihre Website stets sicher und aktuell bleibt.',
    icon: ToolIcon
  },
  {
    question: 'Sind die Websites für mobile Geräte optimiert?',
    answer: 'Absolut! Alle unsere Websites werden nach dem Mobile-First Prinzip entwickelt und sind vollständig responsiv. Sie funktionieren perfekt auf allen Geräten, von Smartphones bis Desktop-PCs.',
    icon: DeviceMobileIcon
  },
  {
    question: 'Wie wird die Website für Suchmaschinen optimiert?',
    answer: 'SEO ist ein integraler Bestandteil unserer Entwicklung. Wir optimieren Ladezeiten, Struktur, Meta-Tags und erstellen eine saubere, semantische Code-Basis. Zusätzlich beraten wir Sie zu Content-Strategien.',
    icon: SearchIcon
  }
]

export default function Faq() {
  return (
    <section className="relative py-section-xl bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-section-lg"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Häufig gestellte Fragen
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2"
        >
          {faqItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
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
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}