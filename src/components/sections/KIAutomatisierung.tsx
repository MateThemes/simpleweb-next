'use client'

import Link from 'next/link'
import { Container } from '../ui/Container'
import { SparklesIcon, ClockIcon, ShieldCheckIcon, CheckIcon, ArrowRightIcon } from '../icons'

const benefits = [
  {
    title: 'Zeit & Kosten sparen',
    description: 'Automatisierung von Routineaufgaben – von Anfrage-Antworten bis Angebots-Vorbereitung.',
    icon: ClockIcon
  },
  {
    title: '24/7 Reaktionsfähigkeit',
    description: 'Chatbots und automatische E-Mail-Benachrichtigungen sorgen dafür, dass keine Anfrage verloren geht.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Messbare Prozesse',
    description: 'Transparente Workflows und klare Daten – Sie sehen genau, wo Automatisierung Zeit spart.',
    icon: SparklesIcon
  }
]

export default function KIAutomatisierung() {
  return (
    <section 
      className="relative scroll-mt-[72px] bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-slate-900 py-24 sm:py-32" 
      id="ki-automatisierung"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full border border-indigo-200 dark:border-indigo-800 mb-6">
            <SparklesIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              KI-Automatisierung für KMU
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Weniger Handarbeit, mehr Ergebnis.
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
            Wir digitalisieren Routineaufgaben – von Anfrage-Antworten bis Angebots-Vorbereitung. Speziell für Handwerker & lokale Dienstleister.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ki-automatisierung"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
            >
              Kostenlosen KI-Check anfordern
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/ki-automatisierung#use-cases"
              className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold bg-white text-indigo-600 hover:bg-gray-50 dark:bg-slate-800 dark:text-indigo-400 dark:hover:bg-slate-700 border border-indigo-200 dark:border-indigo-800 transition-colors"
            >
              Beispiele ansehen
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            DSGVO-bedacht • Erprobt für kleine Betriebe • Schnelle Umsetzung
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="relative p-6 rounded-2xl shadow-lg shadow-gray-900/5 dark:shadow-none ring-1 ring-gray-900/5 dark:ring-white/10 bg-white dark:bg-slate-900 hover:shadow-xl dark:hover:ring-white/20 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Use Cases Preview */}
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 shadow-lg shadow-gray-900/5 dark:shadow-none ring-1 ring-gray-900/5 dark:ring-white/10">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Anwendungsbeispiele für Handwerker & Dienstleister
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              So setzen KMU KI-Automatisierung ein, um Zeit zu sparen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-slate-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Bodenleger
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Anfrage → Besichtigungstermin-Vorschlag → Richtwert-Angebot (mit Hinweis auf Untergrundprüfung)
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-slate-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Maler
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Quadratmeter + Untergrund → Materialliste + E-Mail-Entwurf für schnelle Angebote
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-slate-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Dienstleister
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Website-Chat → Terminbuchung + Reminder – keine verpassten Anfragen mehr
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/ki-automatisierung#use-cases"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold underline decoration-2 underline-offset-2 hover:decoration-indigo-700 dark:hover:decoration-indigo-300 transition-colors"
            >
              Alle Anwendungsbeispiele ansehen
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

