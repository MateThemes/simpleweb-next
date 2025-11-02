'use client'

import Link from 'next/link'
import { Container } from '../ui/Container'
import { SearchIcon, PaletteIcon, CodeIcon, RocketLaunchIcon } from '../icons'

interface ProcessStep {
  title: string
  description: string
  features: string[]
  icon: React.ComponentType<{ className?: string }>
}

const processSteps: ProcessStep[] = [
  {
    title: 'Analyse & Planung',
    description: 'Wir analysieren Ihre Anforderungen, Ziele und Zielgruppen gründlich. Zusammen entwickeln wir eine maßgeschneiderte Strategie, die perfekt auf Ihr KMU zugeschnitten ist.',
    features: [
      'Zielgruppenanalyse',
      'Wettbewerbsanalyse',
      'SEO-Audit',
      'Strategieentwicklung'
    ],
    icon: SearchIcon
  },
  {
    title: 'Design & Konzeption',
    description: 'Basierend auf der Analyse erstellen wir ein modernes, benutzerfreundliches Design-Konzept. Ihr Corporate Design wird dabei berücksichtigt, um eine einheitliche Markenpräsenz zu gewährleisten.',
    features: [
      'Responsive Design',
      'User Experience (UX)',
      'Corporate Design Integration',
      'Konzeptentwicklung'
    ],
    icon: PaletteIcon
  },
  {
    title: 'Entwicklung',
    description: 'Mit modernsten Technologien wie Next.js entwickeln wir Ihre Website leistungsstark und SEO-optimiert. Dabei setzen wir auf sauberen Code, schnelle Ladezeiten und mobile Optimierung.',
    features: [
      'Frontend-Entwicklung',
      'On-Page SEO',
      'Performance-Optimierung',
      'Mobile-First Ansatz'
    ],
    icon: CodeIcon
  },
  {
    title: 'Testing & Launch',
    description: 'Umfangreiche Tests stellen sicher, dass alle Funktionen einwandfrei arbeiten und die Website auf allen Geräten perfekt dargestellt wird. Nach dem Launch bieten wir kontinuierlichen Support.',
    features: [
      'Umfassende Tests',
      'Cross-Browser Testing',
      'Performance-Testing',
      'Launch & Support'
    ],
    icon: RocketLaunchIcon
  }
]

export default function Process() {
  return (
    <section 
      id="process"
      className="relative scroll-mt-[72px] bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-section-xl"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-section-lg">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Unser strukturierter Webdesign-Prozess
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Von der Idee bis zum erfolgreichen Launch – so begleiten wir KMU in Österreich & Deutschland durch jeden Schritt des Webdesign-Prozesses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 mb-section-md last:mb-0"
              >
                {/* Step Number and Line */}
                <div className="flex md:flex-col items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500/20 text-white dark:text-blue-400 text-xl font-semibold">
                    {index + 1}
                  </div>
                  {index !== processSteps.length - 1 && (
                    <div className="hidden md:block w-px md:h-full bg-gradient-to-b from-blue-200 to-transparent dark:from-blue-500/20 mx-auto" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                    {step.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {step.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                      >
                        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span className="text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* SEO Audit CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
            <span>🎯 Starten Sie mit einer kostenlosen SEO-Analyse</span>
            <Link 
              href="/seo-audit" 
              className="text-white hover:text-green-100 font-semibold underline decoration-2 underline-offset-2 hover:decoration-green-100 transition-colors"
            >
              Jetzt analysieren →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}