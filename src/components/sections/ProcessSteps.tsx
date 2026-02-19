import { Container } from '@/components/ui/Container'

const steps = [
  { title: 'Einordnung', text: 'Was soll die Website leisten – und was nicht?' },
  { title: 'Struktur', text: 'Klare Seitenlogik, die Besucher führt.' },
  { title: 'Umsetzung', text: 'Design und Technik folgen der Struktur.' },
  { title: 'Wirkung', text: 'Prüfen, ob die Website das tut, wofür sie gebaut wurde.' },
]

export default function ProcessSteps() {
  return (
    <section
      className="py-20 lg:py-24 bg-[var(--surface-2)]"
      aria-labelledby="process-heading"
    >
      <Container>
        <div className="max-w-[720px] mx-auto">
          <h2
            id="process-heading"
            className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] max-w-[650px] mb-14 lg:mb-16"
          >
            Ein klarer Ablauf – ohne Agentur-Theater.
          </h2>

          <div className="space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="py-12 lg:py-14 border-b border-[var(--border)] last:border-b-0 first:pt-0"
              >
                <span
                  className="font-display text-5xl lg:text-6xl font-light text-[var(--muted-foreground)] tabular-nums block mb-4"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-[var(--foreground)] mb-3">
                  {step.title}
                </h3>
                <p className="text-[var(--muted-foreground)] text-lg leading-relaxed max-w-[650px]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
