'use client'

import { Container } from '../ui/Container'

const testimonials = [
  {
    quote: 'Endlich war klar, was auf die Startseite gehört – und was nicht.',
    attribution: 'KMU · Dienstleistung'
  },
  {
    quote: 'Wir haben nicht „mehr Text" bekommen, sondern eine Struktur, die führt.',
    attribution: 'Handwerk · lokal'
  },
  {
    quote: 'Die Website fühlt sich ruhiger an – und es kommt mehr rein.',
    attribution: 'Unternehmen · Region'
  }
]

export default function Erfahrungen() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-24 sm:py-32">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Badge/Eyebrow */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-900 dark:text-blue-100 bg-blue-100 dark:bg-blue-900/30 rounded-full">
              Erfahrungen
            </span>
          </div>

          {/* Headline */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Was Kunden danach sagen
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl">
              Nicht wegen Design. Sondern weil plötzlich klar war, was die Website tun soll.
            </p>
          </div>

          {/* 3 Stimmen als editorial quotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative py-6 border-l-2 border-slate-200 dark:border-slate-700 pl-6 md:pl-8"
              >
                {/* Optional: Dezente Anführungszeichen als Background-Element */}
                <div className="absolute -left-2 top-0 text-6xl font-serif text-slate-200 dark:text-slate-700 leading-none pointer-events-none">
                  "
                </div>
                <blockquote className="relative text-lg leading-7 text-gray-900 dark:text-white mb-4">
                  {testimonial.quote}
                </blockquote>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {testimonial.attribution}
                </p>
              </div>
            ))}
          </div>

          {/* Optionaler Footnote */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Auf Wunsch senden wir Referenzen passend zu deiner Branche.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

