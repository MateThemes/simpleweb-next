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
                      className="group text-lg px-8 py-4 min-w-[200px] rounded-xl bg-white text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Jetzt starten
                      <ArrowRightIcon className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />
                    </Link>
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