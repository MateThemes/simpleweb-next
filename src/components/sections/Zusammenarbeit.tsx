'use client'

import { Container } from '../ui/Container'

const phases = [
  {
    title: 'Einordnung',
    text: 'Wir klären zuerst, was die Website leisten soll – und was nicht.'
  },
  {
    title: 'Struktur',
    text: 'Wir bauen eine klare Seitenlogik, die Besucher führt.'
  },
  {
    title: 'Umsetzung',
    text: 'Design und Technik folgen der Struktur – nicht umgekehrt.'
  },
  {
    title: 'Wirkung',
    text: 'Wir prüfen gemeinsam, ob die Website das tut, wofür sie gebaut wurde.'
  }
]

export default function Zusammenarbeit() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Badge/Eyebrow */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-900 dark:text-blue-100 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              Zusammenarbeit
            </span>
          </div>

          {/* Headline */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Ein klarer Ablauf – ohne Agentur-Theater.
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              Viele haben schlechte Erfahrungen mit Webprojekten gemacht.
              <br />
              Unklare Abläufe, wechselnde Ansprechpartner, ständig neue Entscheidungen.
              <br />
              So arbeiten wir nicht.
            </p>
          </div>

          {/* 4 Phasen als vertikale Timeline/Steps mit viel Abstand */}
          <div className="space-y-12 mb-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Optional: Dezente Nummer links */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <span className="inline-block text-2xl sm:text-3xl font-light text-slate-300 dark:text-slate-600 w-12">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-7 text-gray-900 dark:text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-base sm:text-lg leading-7 text-gray-600 dark:text-gray-400">
                      {phase.text}
                    </p>
                  </div>
                </div>
                {/* Dezenter Divider zwischen Phasen (außer letzter) */}
                {index < phases.length - 1 && (
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700"></div>
                )}
              </div>
            ))}
          </div>

          {/* Abschlusssatz */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Du musst nicht alles wissen. Aber du solltest jederzeit verstehen, warum etwas passiert.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

