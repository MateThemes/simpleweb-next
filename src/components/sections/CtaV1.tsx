'use client'

import { Container } from '../ui/Container'
import Link from 'next/link'
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function CtaV1() {
  return (
    <section className="relative py-section-xl overflow-hidden">
      {/* Background with animated gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <Container className="relative">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-indigo-700/90 backdrop-blur-sm border border-white/20">
          {/* Floating elements */}
          <div className="absolute top-8 left-8 w-4 h-4 bg-white/30 rounded-full animate-bounce" />
          <div className="absolute top-16 right-12 w-2 h-2 bg-white/40 rounded-full animate-ping" />
          <div className="absolute bottom-12 left-16 w-3 h-3 bg-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-8 right-8 w-5 h-5 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />

          <div className="relative px-8 py-16 sm:px-12 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8">
                <SparklesIcon className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">Bereit für den nächsten Schritt?</span>
              </div>

              {/* Headline */}
              <h2 className="font-display font-bold leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
                Lassen Sie uns Ihre
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  digitale Zukunft
                </span>
                gestalten
              </h2>
              
              <p className="text-xl leading-relaxed text-white/90 mb-12 max-w-2xl mx-auto">
                Von der ersten Idee bis zur erfolgreichen Website – wir begleiten KMU durch die digitale Transformation mit modernster Technologie.
              </p>

              {/* CTA Button */}
              <div className="flex justify-center items-center mb-8">
                <Link
                  href="/kontakt"
                  className="group relative inline-flex items-center justify-center gap-3 px-12 py-6 min-w-[320px] rounded-2xl bg-white text-gray-900 font-bold text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <span className="relative">Projekt starten</span>
                  <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>5+ Jahre Erfahrung</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>50+ erfolgreiche Projekte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
