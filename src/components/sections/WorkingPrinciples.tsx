'use client'

import { type ReactElement } from 'react'
import Link from 'next/link'
import { Container } from '../ui/Container'
import { 
  UsersIcon, 
  SparklesIcon,
  ShieldCheckIcon 
} from '../icons'

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
        <div className="mx-auto max-w-2xl text-center mb-section-lg">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Wie wir arbeiten
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Unsere Prinzipien für erfolgreiche Webprojekte
          </p>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {approaches.map((approach, idx) => (
                <div
                  key={idx}
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5★</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Google Bewertungen</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Kundenzufriedenheit</div>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Support verfügbar</div>
            </div>
          </div>
        </div>

        {/* Blog Integration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
            <span className="text-slate-600 dark:text-slate-400 font-medium">💡 Mehr Tipps für KMU</span>
            <Link 
              href="/blog" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold underline decoration-2 underline-offset-2 hover:decoration-blue-700 dark:hover:decoration-blue-300 transition-colors"
            >
              Blog lesen →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}