'use client'

import { Container } from '../ui/Container'

const points = [
  {
    title: 'Besucher gehen – ohne etwas zu tun',
    text: 'Es gibt Aufrufe, aber kaum Anfragen, keine Termine, keine Käufe.'
  },
  {
    title: 'Viel Text, wenig Führung',
    text: 'Die Seite informiert – aber sie führt nicht zu einem nächsten Schritt.'
  },
  {
    title: 'Unklarer Nutzen auf den ersten Blick',
    text: 'Man versteht nicht sofort, wofür Kunden euch bezahlen – und warum gerade euch.'
  },
  {
    title: 'Änderungen bringen keine Wirkung',
    text: 'Man verbessert Details, aber das Ergebnis bleibt: Es passiert zu wenig.'
  }
]

export default function Klarheit() {
  return (
    <section 
      id="klarheit"
      className="relative scroll-mt-[72px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-24 sm:py-32"
    >
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Links: Eyebrow + H2 + Intro + Abschlusssatz */}
            <div className="space-y-8">
              {/* Badge/Eyebrow */}
              <div>
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-900 dark:text-blue-100 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  Orientierung
                </span>
              </div>

              {/* Headline */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                  Woran du erkennst, ob deine Website arbeitet
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                  Viele Websites sind technisch sauber, modern gestaltet und online.
                  <br />
                  Und trotzdem passiert nichts.
                  <br />
                  Das zeigt sich meist früher, als man denkt.
                </p>
              </div>

              {/* Abschluss */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  Wenn dir davon etwas bekannt vorkommt, liegt das Problem selten an Design oder Technik. Meist fehlt Klarheit.
                </p>
              </div>
            </div>

            {/* Rechts: 4 Punkte als gestapelter Stack */}
            <div className="space-y-0">
              {points.map((point, index) => (
                <div
                  key={index}
                  className={`py-6 ${index < points.length - 1 ? 'border-b border-slate-200 dark:border-slate-700' : ''}`}
                >
                  <h3 className="text-lg font-semibold leading-7 text-gray-900 dark:text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

