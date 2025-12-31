'use client'

import { Container } from '../ui/Container'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
}

const outcomes = [
  {
    title: 'Positionierung, die sofort sitzt',
    text: 'In Sekunden klar: Wer ist hier richtig – und warum?'
  },
  {
    title: 'Struktur, die Besucher führt',
    text: 'Weniger Scrollen, mehr Orientierung. Der nächste Schritt ist logisch.'
  },
  {
    title: 'Wirkung, die messbar wird',
    text: 'Anfragen, Termine oder Verkäufe – je nach Ziel. Nicht nur gutes Gefühl.'
  }
]

export default function WasDarausEntsteht() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-24 sm:py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Full-width Statement */}
          <div className="mb-16">
            {/* Badge/Eyebrow */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-900 dark:text-blue-100 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                Was daraus entsteht
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Klarheit, die man online spürt.
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              Am Ende geht es nicht um mehr Funktionen.
              <br />
              Sondern um eine Website, die Menschen führt – und Entscheidungen leichter macht.
            </p>
          </div>

          {/* Outcomes Rows */}
          <div className="space-y-0 mb-12">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
                variants={fadeInUp}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.12 }}
                className="py-8 border-b border-slate-200 dark:border-slate-700 last:border-b-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Number (optional, sehr dezent) */}
                  <div className="md:col-span-1">
                    <span className="text-2xl sm:text-3xl font-light text-slate-300 dark:text-slate-600">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <div className="md:col-span-4">
                    <h3 className="text-lg sm:text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                      {outcome.title}
                    </h3>
                  </div>
                  
                  {/* Text */}
                  <div className="md:col-span-7">
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                      {outcome.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Abschluss */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Technik und SEO gehören dazu. Aber sie sind nicht der Startpunkt.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

