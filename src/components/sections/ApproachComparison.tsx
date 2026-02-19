import { Container } from '@/components/ui/Container'

const comparison = {
  classic: {
    title: 'Klassische Agentur',
    points: [
      'Startet mit Design & Funktionen',
      'Optimiert Seiten, bevor das Ziel klar ist',
      'Misst Erfolg an Technik & Features',
    ],
  },
  us: {
    title: 'SimpleWebDesign',
    points: [
      'Startet mit Klarheit & Einordnung',
      'Baut Struktur für Entscheidungen',
      'Misst Erfolg an Wirkung (Anfragen, Termine, Verkäufe)',
    ],
  },
}

export default function ApproachComparison() {
  return (
    <section
      className="py-20 lg:py-24 bg-[var(--background)]"
      aria-labelledby="differentiation-heading"
    >
      <Container>
        <div className="max-w-[1280px] mx-auto">
          <h2
            id="differentiation-heading"
            className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] max-w-[650px] mb-14 lg:mb-16"
          >
            Klassische Agentur vs. SimpleWebDesign
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            <div
              className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1"
              aria-label={comparison.classic.title}
            >
              <h3 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wider mb-6">
                {comparison.classic.title}
              </h3>
              <ul className="space-y-5" role="list">
                {comparison.classic.points.map((point, i) => (
                  <li key={i} className="text-[var(--muted-foreground)] leading-relaxed pl-0">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-[var(--radius-2xl)] bg-[var(--surface-2)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1"
              aria-label={comparison.us.title}
            >
              <h3 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-6">
                {comparison.us.title}
              </h3>
              <ul className="space-y-5" role="list">
                {comparison.us.points.map((point, i) => (
                  <li key={i} className="text-[var(--muted-foreground-strong)] leading-relaxed pl-0">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
