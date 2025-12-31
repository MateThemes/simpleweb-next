'use client'

import Link from 'next/link'
import { Container } from '../ui/Container'

const paths = [
  {
    title: 'Neue Website',
    text: 'Wenn Klarheit fehlt und ihr von Anfang an eine Website braucht, die Besucher führt.',
    link: '/services/webdesign',
    linkText: 'Mehr dazu →'
  },
  {
    title: 'Redesign / Relaunch',
    text: 'Wenn ihr online seid, aber merkt: Es passiert zu wenig – trotz Updates und Optimierungen.',
    link: '/services/redesign',
    linkText: 'Mehr dazu →'
  },
  {
    title: 'Sichtbarkeit & System',
    text: 'Wenn ihr Anfragen planbarer machen wollt – ohne euch in einzelne Maßnahmen zu verlieren.',
    link: '/services/marketing',
    linkText: 'Mehr dazu →'
  }
]

export default function WieWirHelfen() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-slate-900 py-24 sm:py-32">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Badge/Eyebrow */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-900 dark:text-indigo-100 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              Wie wir helfen
            </span>
          </div>

          {/* Headline */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Drei typische Ausgangslagen – drei passende Wege.
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
              Du musst nicht sofort wissen, welches Paket du brauchst. Entscheidend ist, wo du gerade stehst.
            </p>
          </div>

          {/* 3 Pfade als große vertikale Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {paths.map((path, index) => (
              <div
                key={index}
                className="flex flex-col p-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50"
              >
                <h3 className="text-xl font-semibold leading-7 text-gray-900 dark:text-white mb-4">
                  {path.title}
                </h3>
                <p className="text-base leading-7 text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {path.text}
                </p>
                <div>
                  <Link
                    href={path.link}
                    className="inline-flex items-center text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    {path.linkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Optionaler Abschlusssatz */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Wenn du unsicher bist, starte bei den Signalen in{' '}
              <Link href="#klarheit" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline">
                #klarheit
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

