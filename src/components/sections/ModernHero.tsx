'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Container } from '../ui/Container'

const features = [
  'SEO-optimiert',
  'Mobile-first',
  'Performance-optimiert',
  'Moderne Technologien'
]

export default function ModernHero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200 dark:border-slate-700">
              <SparklesIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Moderne Webentwicklung
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                Ihre digitale
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Zukunft beginnt hier
                </span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Professionelle Websites, die nicht nur gut aussehen, sondern auch Ihre Geschäftsziele erreichen. 
                Mit modernster Technologie und bewährten SEO-Strategien.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/seo-audit"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span>Kostenlose SEO-Analyse</span>
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                Beratung anfragen
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                ✓ Über 50 erfolgreiche Projekte ✓ 100% Kundenzufriedenheit ✓ Schnelle Umsetzung
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/hero-image-optimized.jpg"
                  alt="Moderne Webentwicklung - Professionelle Websites"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-900 dark:text-white">Live</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Website online</p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Performance Score</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
