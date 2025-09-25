'use client'

import { Container } from '../ui/Container'
import Link from 'next/link'
import { ArrowRightIcon, PhoneIcon, CheckCircleIcon, ClockIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function CtaV2() {
  return (
    <section className="relative py-section-xl overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display font-bold leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
                Bereit für Ihren
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  digitalen Durchbruch?
                </span>
              </h2>
              <p className="text-xl leading-relaxed text-white/80 mb-8">
                Wir verwandeln Ihre Geschäftsidee in eine erfolgreiche Online-Präsenz. 
                Mit modernster Technologie und bewährten Strategien für KMU.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>3-4 Wochen Umsetzung</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Lokale SEO inklusive</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Jetzt starten</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+436645182696"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border-2 border-white/30 hover:border-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>Anrufen</span>
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            {/* Main CTA Card */}
            <div className="relative p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Kostenlose SEO-Analyse</h3>
                    <p className="text-white/70">Ihre Website unter der Lupe</p>
                  </div>
                </div>
                <p className="text-white/80 mb-6">
                  Erhalten Sie eine detaillierte Analyse Ihrer Website mit konkreten Verbesserungsvorschlägen.
                </p>
                <Link
                  href="/seo-audit"
                  className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold transition-colors"
                >
                  Analyse starten
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-white/70">Erfolgreiche Projekte</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-white/70">Jahre Erfahrung</div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl border border-green-400/30">
              <div className="flex items-center gap-3 mb-3">
                <ClockIcon className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-white">Schnelle Antwort garantiert</span>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Antworten auf Ihre Anfragen innerhalb von 24 Stunden.
              </p>
              <a
                href="mailto:info@simplewebdesign.at"
                className="text-green-300 hover:text-green-200 font-medium text-sm transition-colors"
              >
                info@simplewebdesign.at
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
