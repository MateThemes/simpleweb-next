'use client'

import Link from 'next/link'
import { ChartArrowsIcon, ChartDotsIcon, TrendingUpIcon } from '../icons'
import { Container } from '../ui/Container'
import Stats from './Stats'

const features = [
  {
    title: 'Lokale Sichtbarkeit für KMU',
    description: 'Erreichen Sie Kunden in Ihrer Region durch lokale SEO und Google My Business Optimierung. Perfekt für Handwerker, Dienstleister und lokale Geschäfte.',
    icon: ChartArrowsIcon
  },
  {
    title: 'Höhere Conversion-Raten',
    description: 'Mehr Anfragen und Terminbuchungen durch benutzerfreundliche Websites mit klaren Call-to-Actions. Speziell optimiert für KMU-Bedürfnisse.',
    icon: ChartDotsIcon
  },
  {
    title: 'Nachhaltiges Wachstum',
    description: 'Eine moderne Webpräsenz, die mit Ihrem Unternehmen wächst. Von der ersten Website bis zum umfangreichen Online-Shop – wir begleiten Sie.',
    icon: TrendingUpIcon
  }
]


export default function Features() {
  return (
    <section 
      className="relative scroll-mt-[72px] bg-gradient-to-b from-gray-50/50 to-white dark:from-slate-800/50 dark:to-slate-950 backdrop-blur-sm py-24 sm:py-32" 
      id="features"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Warum KMU mit uns erfolgreich werden
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Wir verstehen die besonderen Herausforderungen kleiner und mittlerer Unternehmen und bieten maßgeschneiderte Lösungen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="relative p-6 rounded-2xl shadow-lg shadow-gray-900/5 dark:shadow-none ring-1 ring-gray-900/5 dark:ring-white/10 bg-white dark:bg-slate-900 hover:shadow-xl dark:hover:ring-white/20 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 dark:bg-blue-500/10">
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                      {feature.description}
                      {index === 0 && (
                        <span className="block mt-2">
                          <Link href="/services/seo" className="text-blue-600 hover:text-blue-700 underline">Mehr über lokale SEO →</Link>
                        </span>
                      )}
                      {index === 1 && (
                        <span className="block mt-2">
                          <Link href="/services/webdesign" className="text-blue-600 hover:text-blue-700 underline">Webdesign für KMU →</Link>
                        </span>
                      )}
                      {index === 2 && (
                        <span className="block mt-2">
                          <Link href="/services/marketing" className="text-blue-600 hover:text-blue-700 underline">Online Marketing →</Link>
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* SEO Audit CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
            <span className="text-green-600 dark:text-green-400 font-medium">🎯 Neugierig auf Ihre SEO-Performance?</span>
            <Link 
              href="/seo-audit" 
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold underline decoration-2 underline-offset-2 hover:decoration-green-700 dark:hover:decoration-green-300 transition-colors"
            >
              Kostenlose Analyse starten
            </Link>
          </div>
        </div>

        {/* Blog Integration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800">
            <span className="text-blue-600 dark:text-blue-400 font-medium">📚 Tipps für KMU-Websites</span>
            <Link 
              href="/blog" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold underline decoration-2 underline-offset-2 hover:decoration-blue-700 dark:hover:decoration-blue-300 transition-colors"
            >
              Blog lesen
            </Link>
          </div>
        </div>
        
        <Stats />
      </Container>
    </section>
  )
}