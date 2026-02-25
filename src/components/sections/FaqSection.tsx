'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Accordion } from '@/components/ui/Accordion'

export const faqData = [
  {
    question: 'Warum bringt meine Website keine Anfragen?',
    answer:
      'Oft fehlt Klarheit: Besucher verstehen nicht sofort, wofür du da bist. Eine conversion-optimierte Website gibt Orientierung und führt zu Anfragen oder Terminen – nicht nur Information.',
  },
  {
    question: 'Was kostet eine Website erstellen lassen?',
    answer:
      'Abhängig vom Umfang. Wir geben eine Einschätzung erst nach dem Kennenlernen deines Ziels – unverbindlich. Webdesign für KMU in Österreich und Deutschland.',
  },
  {
    question: 'Wie lange dauert ein Website-Projekt oder Website Relaunch?',
    answer:
      'In der Regel 3–8 Wochen. Wichtiger als Tempo: dass die Website am Ende mehr Anfragen oder Termine bringt.',
  },
  {
    question: 'Arbeitet ihr nur vor Ort oder auch remote?',
    answer:
      'Wir arbeiten mit KMU in Österreich (z.B. Niederösterreich) und Deutschland – remote ist Standard. Kein Standort-Nachteil.',
  },
  {
    question: 'Website Optimierung oder kompletter Relaunch – was ist sinnvoll?',
    answer:
      'Oft reicht eine strukturierte Website-Optimierung; manchmal ist ein Website Relaunch sinnvoller. Wir schauen uns deine Website an und sagen ehrlich, was mehr bringt.',
  },
  {
    question: 'Was unterscheidet euch von einer klassischen Agentur?',
    answer:
      'Wir starten mit Strategie und Einordnung: Was soll die Website leisten? Dann folgen Struktur und Umsetzung – für messbare Wirkung (mehr Anfragen, Termine).',
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
              Kurze Antworten auf typische Fragen zu Webdesign für KMU.
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
