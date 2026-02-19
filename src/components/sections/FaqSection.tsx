'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Accordion } from '@/components/ui/Accordion'

export const faqData = [
  {
    question: 'Warum bringt meine Website keine Anfragen?',
    answer:
      'Meist fehlt Klarheit: Besucher verstehen nicht sofort, wer hier richtig ist und warum. Eine Website muss Orientierung geben, nicht nur informieren.',
  },
  {
    question: 'Was unterscheidet SimpleWebDesign von klassischen Agenturen?',
    answer:
      'Wir beginnen nicht mit Design oder Technik, sondern mit Einordnung: Was soll die Website leisten? Erst dann folgen Struktur, Design und Umsetzung.',
  },
  {
    question: 'Wie lange dauert ein Website-Projekt?',
    answer:
      'Je nach Umfang 3–8 Wochen. Wichtiger als Geschwindigkeit ist, dass die Website am Ende das tut, wofür sie gebaut wurde.',
  },
  {
    question: 'Arbeitet ihr nur mit KMU in Österreich?',
    answer:
      'Nein, wir arbeiten mit KMU in ganz Österreich und Deutschland. Remote-Projekte sind für uns Standard.',
  },
  {
    question: 'Was kostet eine professionelle Website?',
    answer:
      'Das hängt vom Umfang ab. Wir geben erst eine Einschätzung, nachdem wir dein Projekt verstanden haben – ohne Verpflichtung.',
  },
  {
    question: 'Kann ich meine bestehende Website optimieren lassen?',
    answer:
      'Ja. Oft bringt eine klare Struktur-Überarbeitung mehr als ein kompletter Relaunch. Wir schauen uns deine Website an und sagen ehrlich, was Sinn macht.',
  },
]

export default function FaqSection() {
  return (
    <section
      className="py-20 lg:py-24 bg-[var(--surface)]"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14 lg:mb-16">
            <h2
              id="faq-heading"
              className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)]"
            >
              Häufige Fragen
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)]">
              Klarheit vor dem ersten Gespräch.
            </p>
          </div>

          <div
            className="rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface-2)] p-6 lg:p-8"
            style={{ boxShadow: 'var(--shadow-1)' }}
          >
            <Accordion items={faqData} />
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--muted-foreground)]">
              Weitere Fragen?{' '}
              <Link
                href="/kontakt"
                className="font-medium text-[var(--primary)] underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded"
              >
                Schreib uns einfach
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
