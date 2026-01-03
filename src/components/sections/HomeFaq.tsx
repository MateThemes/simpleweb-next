'use client'

import { Container } from '../ui/Container'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Warum bringt meine Website keine Anfragen?',
    answer: 'Meist fehlt Klarheit: Besucher verstehen nicht sofort, wer hier richtig ist und warum. Eine Website muss Orientierung geben, nicht nur informieren.'
  },
  {
    question: 'Was unterscheidet SimpleWebDesign von klassischen Agenturen?',
    answer: 'Wir beginnen nicht mit Design oder Technik, sondern mit Einordnung: Was soll die Website leisten? Erst dann folgen Struktur, Design und Umsetzung.'
  },
  {
    question: 'Wie lange dauert ein Website-Projekt?',
    answer: 'Je nach Umfang 3–8 Wochen. Wichtiger als Geschwindigkeit ist, dass die Website am Ende das tut, wofür sie gebaut wurde.'
  },
  {
    question: 'Arbeitet ihr nur mit KMU in Österreich?',
    answer: 'Nein, wir arbeiten mit KMU in ganz Österreich und Deutschland. Remote-Projekte sind für uns Standard.'
  },
  {
    question: 'Was kostet eine professionelle Website?',
    answer: 'Das hängt vom Umfang ab. Wir geben erst eine Einschätzung, nachdem wir dein Projekt verstanden haben – ohne Verpflichtung.'
  },
  {
    question: 'Kann ich meine bestehende Website optimieren lassen?',
    answer: 'Ja. Oft bringt eine klare Struktur-Überarbeitung mehr als ein kompletter Relaunch. Wir schauen uns deine Website an und sagen ehrlich, was Sinn macht.'
  }
]

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 sm:py-32 bg-white dark:bg-neutral-950">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Häufige Fragen
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
              Klarheit vor dem ersten Gespräch.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden bg-neutral-50 dark:bg-neutral-900"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-neutral-950 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-neutral-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Weitere Fragen?{' '}
              <a
                href="/kontakt"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium underline"
              >
                Schreib uns einfach
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { faqs }
