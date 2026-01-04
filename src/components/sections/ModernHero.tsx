import Link from 'next/link'
import { CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Container } from '../ui/Container'
import HeroVisualStatic from './HeroVisualStatic'
import { HeroCtaLink } from './HeroCtaLink.client'

const features = [
  'Klarer Fokus: Wer ist hier richtig – und warum?',
  'Struktur, die Besucher führt (statt informiert).',
  'Messbar: Anfragen, Termine oder Verkäufe – je nach Ziel.'
]

export default function ModernHero() {
  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-sm md:blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-sm md:blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-sm md:blur-3xl"></div>
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-[1px] md:backdrop-blur-sm border border-blue-200 dark:border-slate-700">
              <SparklesIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Websites, die Entscheidungen erleichtern – nicht nur gut aussehen.
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                Viele Websites sehen gut aus – und bringen trotzdem keine Anfragen.
              </h1>
              {/* LLM-friendly summary block */}
              <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl space-y-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-[1px] md:backdrop-blur-sm p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <p>
                  SimpleWebDesign baut Websites für KMU in Österreich und Deutschland, die nicht nur gut aussehen, sondern messbare Ergebnisse bringen. Wir schaffen Klarheit, Struktur und Orientierung – damit Besucher zu Anfragen werden.
                </p>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Das Problem ist selten Design oder Technik. Meist fehlt Klarheit.
              </p>
            </div>

            {/* Primary CTA */}
            <div>
              <HeroCtaLink />
            </div>
          </div>

          {/* Visual */}
          <HeroVisualStatic />
        </div>
      </Container>

      {/* Nachgelagerter Container mit Bulletpoints, Trust-Line und Secondary CTA */}
      <Container className="relative pt-12 pb-8">
        <div className="space-y-8">
          {/* Features/Bulletpoints */}
          <div className="space-y-3 max-w-2xl">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Trust indicators und Secondary CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              ✓ 50+ erfolgreiche Projekte ✓ Zufriedene Kunden ✓ Schnelle Umsetzung
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/seo-audit"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                Kostenlose SEO-Analyse
              </Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Wenn du direkt sprechen willst:{' '}
            <Link href="/kontakt" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline">
              Beratung anfragen
            </Link>
          </p>
        </div>
      </Container>
    </section>
  )
}
