'use client'

import { Container } from '../ui/Container'

const comparison = {
  classic: {
    title: 'Klassische Webagentur',
    points: [
      'Startet mit Design & Funktionen',
      'Optimiert Seiten, bevor das Ziel klar ist',
      'Misst Erfolg an Technik & Features'
    ]
  },
  ourApproach: {
    title: 'Unser Ansatz',
    points: [
      'Startet mit Klarheit & Einordnung',
      'Baut Struktur für Entscheidungen',
      'Misst Erfolg an Wirkung (Anfragen, Termine, Verkäufe)'
    ]
  }
}

export default function Ansatz() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-slate-900 py-24 sm:py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Badge/Eyebrow */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-900 dark:text-indigo-100 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              Unser Ansatz
            </span>
          </div>

          {/* Headline */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Wir bauen Websites nicht zuerst.
              <br />
              Wir ordnen sie zuerst ein.
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
              Viele Webprojekte starten mit Design, Technik oder Features.
              <br />
              Wir starten früher – bei der Frage, was eine Website eigentlich leisten soll.
            </p>
          </div>

          {/* Comparison Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
            {/* Klassische Webagentur */}
            <div className="relative pr-6 md:pr-8 md:border-r border-slate-200 dark:border-slate-700">
              <div className="mb-2">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                  {comparison.classic.title}
                </span>
              </div>
              <ul className="space-y-4 mt-6">
                {comparison.classic.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-base leading-7 text-gray-600 dark:text-gray-400">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unser Ansatz */}
            <div className="relative pl-6 md:pl-8">
              <div className="mb-2">
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                  {comparison.ourApproach.title}
                </span>
              </div>
              <ul className="space-y-4 mt-6">
                {comparison.ourApproach.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-base leading-7 text-gray-600 dark:text-gray-400">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Abschluss */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Deshalb sehen unsere Websites oft ruhiger aus – und arbeiten trotzdem mehr.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

