'use client'

import { Container } from '../ui/Container'
import { UserGroupIcon, RocketIcon, ClockIcon, ChatBubbleIcon } from '../icons'

const stats = [
  { id: 1, name: 'Zufriedene Kunden', icon: UserGroupIcon, subtext: 'Vertrauen seit Jahren' },
  { id: 2, name: 'Erfolgreiche Projekte', icon: RocketIcon, subtext: 'Individuell umgesetzt' },
  { id: 3, name: 'Jahre Erfahrung', icon: ClockIcon, subtext: 'Expertise & Know-how' },
  { id: 4, name: 'Support-Anfragen gelöst', icon: ChatBubbleIcon, subtext: 'Schnell & zuverlässig' },
]

export default function Stats() {
  return (
    <section className="relative py-section-xl">
      <Container>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-section-md">
          <div className="text-center max-w-2xl mx-auto mb-section-md">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Zahlen, die überzeugen
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Unsere Erfolge sprechen für sich. Entdecken Sie, was wir für unsere Kunden erreicht haben.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center"
              >
                <stat.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                <h3 className="mt-4 text-base font-medium text-gray-900 dark:text-white text-center">
                  {stat.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}