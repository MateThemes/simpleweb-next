'use client'

import { Container } from '../ui/Container'
import { UserGroupIcon, RocketIcon, ClockIcon, ChatBubbleIcon } from '../icons'

const stats = [
  { id: 1, name: 'KMU erfolgreich digitalisiert', icon: UserGroupIcon, subtext: 'Von Handwerkern bis Dienstleistern' },
  { id: 2, name: 'Websites in Österreich & Deutschland', icon: RocketIcon, subtext: 'Lokale Expertise, grenzenlose Qualität' },
  { id: 3, name: 'Jahre Webdesign-Erfahrung', icon: ClockIcon, subtext: 'Seit 2020 für KMU da' },
  { id: 4, name: 'Probleme gelöst', icon: ChatBubbleIcon, subtext: 'Schnelle Hilfe für KMU' },
]

export default function Stats() {
  return (
    <section className="relative py-section-xl">
      <Container>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-section-md">
          <div className="text-center max-w-3xl mx-auto mb-section-md">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Unsere Erfolge für KMU
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Wir haben bereits zahlreiche kleine und mittlere Unternehmen in Österreich und Deutschland erfolgreich digitalisiert. 
              Von Handwerkern über Dienstleister bis hin zu lokalen Geschäften – wir verstehen die Bedürfnisse von KMU.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="group relative flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-lg shadow-gray-900/5 dark:shadow-none ring-1 ring-gray-900/5 dark:ring-white/10 hover:shadow-xl dark:hover:ring-white/20 hover:scale-105 transition-all duration-300 h-full"
              >
                {/* Background decoration */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                    {stat.name}
                  </h3>
                  
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                    {stat.subtext}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}