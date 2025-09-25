'use client'

import { Container } from '../ui/Container'
import Link from 'next/link'
import { ArrowRightIcon } from '../icons'

export default function Cta() {
  return (
    <section className="relative py-section-xl">
      <Container>
        <div>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 mix-blend-multiply" />
            </div>

            <div className="relative px-8 py-section-lg sm:px-section-md lg:py-section-xl">
              <div className="mx-auto max-w-4xl text-center">
                <div>
                  <h2 className="font-display font-bold leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl text-white dark:text-white mb-6">
                    Bereit für Ihren Erfolg im Web?
                  </h2>
                  <p className="text-xl leading-relaxed text-gray-200 dark:text-gray-200 mb-section-md">
                    Lassen Sie uns gemeinsam Ihre Vision verwirklichen.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                      href="/kontakt"
                      className="group text-xl px-10 py-5 min-w-[250px] rounded-xl bg-white text-gray-900 hover:bg-gray-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      Jetzt starten
                      <ArrowRightIcon className="w-6 h-6 ml-2 inline-block transition-transform group-hover:translate-x-1" />
                    </Link>
                    <a
                      href="tel:+436645182696"
                      className="text-lg px-8 py-4 min-w-[200px] rounded-xl bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-200 text-center"
                    >
                      📞 Direkt anrufen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}