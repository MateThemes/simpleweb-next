'use client'

import { ChartArrowsIcon, ChartDotsIcon, TrendingUpIcon } from '../icons'
import { Container } from '../ui/Container'
import Stats from './Stats'

const features = [
  {
    title: 'Mehr Reichweite',
    description: 'Erreichen Sie Ihre Zielgruppe effektiv durch optimale Darstellung auf allen Geräten und in Suchmaschinen.',
    icon: ChartArrowsIcon
  },
  {
    title: 'Bessere Conversion',
    description: 'Überzeugen Sie Besucher durch schnelle Ladezeiten und intuitive Benutzerführung zum Handeln.',
    icon: ChartDotsIcon
  },
  {
    title: 'Nachhaltiger Erfolg',
    description: 'Profitieren Sie langfristig von einer modernen Webpräsenz, die mit Ihrem Unternehmen wächst.',
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
            <a 
              href="/seo-audit" 
              className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-semibold underline decoration-2 underline-offset-2 hover:decoration-green-700 dark:hover:decoration-green-300 transition-colors"
            >
              Kostenlose Analyse starten
            </a>
          </div>
        </div>
        
        <Stats />
      </Container>
    </section>
  )
}