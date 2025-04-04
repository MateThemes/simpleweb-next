'use client'

import { type ReactElement } from 'react'
import { Container } from '../ui/Container'
import { motion } from 'framer-motion'
import { 
  UsersIcon, 
  SparklesIcon,
  ShieldCheckIcon 
} from '@heroicons/react/24/outline'

const approaches = [
  {
    title: 'Individuelle Lösungen',
    body: 'Jedes Projekt wird nach Ihren spezifischen Anforderungen und Zielen maßgeschneidert. Keine vorgefertigten Templates, sondern echte individuelle Entwicklung.',
    icon: UsersIcon,
  },
  {
    title: 'Moderne Technologien',
    body: 'Wir setzen auf zukunftssichere Technologien wie Next.js, React und TypeScript. Das garantiert Ihnen eine schnelle, sichere und wartbare Webseite.',
    icon: SparklesIcon,
  },
  {
    title: 'Qualität & Sicherheit',
    body: 'Von der Entwicklung bis zum Hosting achten wir auf höchste Qualitätsstandards. Regelmäßige Updates und Wartung halten Ihre Webseite sicher.',
    icon: ShieldCheckIcon,
  },
]

export default function WorkingPrinciples(): ReactElement {
  return (
    <section className="relative scroll-mt-[72px] bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 py-section-xl">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-section-lg"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Wie wir arbeiten
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Unsere Prinzipien für erfolgreiche Webprojekte
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-7xl">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {approaches.map((approach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="relative h-full"
                >
                  <div className="relative h-full bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-gray-900/5 dark:shadow-none ring-1 ring-gray-900/5 dark:ring-white/10">
                    <div className="flex items-center gap-4 mb-4">
                      <approach.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                        {approach.title}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                      {approach.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}