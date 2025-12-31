'use client'

import Link from 'next/link'
import { Container } from '../ui/Container'

const fits = {
  good: {
    title: 'Passt gut, wenn …',
    points: [
      'ihr merkt, dass eure Website nicht klar arbeitet',
      'ihr Orientierung sucht, bevor ihr investiert',
      'ihr keine Lust auf Agentur-Sprech habt',
      'ihr verstehen wollt, warum etwas gemacht wird'
    ]
  },
  notGood: {
    title: 'Passt eher nicht, wenn …',
    points: [
      'ihr nur schnell „eine Website" braucht',
      'ihr primär Preise vergleichen wollt',
      'ihr eine reine Umsetzungsagentur sucht',
      'ihr Entscheidungen komplett abgeben wollt'
    ]
  }
}

export default function Einordnung() {
  return (
    <section className="relative scroll-mt-[72px] bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-slate-900 py-24 sm:py-32">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Badge/Eyebrow */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-900 dark:text-indigo-100 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
              Einordnung
            </span>
          </div>

          {/* Headline */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Passt das für euch? Eine ehrliche Einordnung.
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl">
              Nicht jedes Projekt passt zu unserer Arbeitsweise.
              <br />
              Und nicht jede Website profitiert von unserem Ansatz.
            </p>
          </div>

          {/* 2 Spalten Vergleich */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
            {/* Linke Spalte - Passt gut */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold leading-7 text-gray-900 dark:text-white mb-6">
                {fits.good.title}
              </h3>
              <ul className="space-y-4">
                {fits.good.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-base leading-7 text-gray-600 dark:text-gray-400">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rechte Spalte - Passt eher nicht */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold leading-7 text-gray-900 dark:text-white mb-6">
                {fits.notGood.title}
              </h3>
              <ul className="space-y-4">
                {fits.notGood.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-base leading-7 text-gray-600 dark:text-gray-400">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Abschlusssatz */}
          <div className="pt-6 border-t border-indigo-200 dark:border-indigo-800 mb-8">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Wenn du dich in der ersten Spalte wiederfindest,
              <br />
              lohnt sich ein Gespräch – ganz ohne Verkaufsdruck.
            </p>
            <div>
              <Link
                href="/kontakt"
                className="inline-flex items-center text-base font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                Unverbindlich Kontakt aufnehmen →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

