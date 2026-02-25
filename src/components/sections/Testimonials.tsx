import { Container } from '@/components/ui/Container'

const projectResults = [
  {
    title: 'Klarer Nutzen auf den ersten Blick',
    body: 'Startseite reduziert auf das Wesentliche. Besucher verstehen schneller, wofür ihr da seid – und was der nächste Schritt ist.',
  },
  {
    title: 'Struktur, die zu Anfragen führt',
    body: 'Weniger erklären, mehr führen: Seitenlogik + klare CTAs. Ergebnis: mehr qualifizierte Kontaktanfragen.',
  },
  {
    title: 'Conversion statt nur Design',
    body: 'Design folgt Strategie. Erfolg wird an Anfragen, Terminen oder Verkäufen gemessen – nicht an Features.',
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-20 lg:py-24 bg-[var(--surface-2)]"
      aria-labelledby="project-results-heading"
    >
      <Container>
        <div className="max-w-[1280px] mx-auto">
          <header className="max-w-[650px] mb-14 lg:mb-16">
            <h2
              id="project-results-heading"
              className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] mb-4"
            >
              Mehr Anfragen durch klare Website-Struktur
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              Keine Floskeln – sondern wiederkehrende Ergebnisse aus Projekten
              mit KMU in Österreich & Deutschland.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {projectResults.map((item, index) => (
              <article
                key={index}
                className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1"
              >
                <h3 className="font-display text-lg lg:text-xl font-semibold tracking-tight text-[var(--foreground)] mb-4">
                  {item.title}
                </h3>
                <p className="text-[var(--foreground)] text-[15px] lg:text-base leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-12 pt-10 border-t border-[var(--border)] text-[13px] text-[var(--muted-foreground)]">
            Auf Wunsch senden wir Referenzen passend zu deiner Branche.
          </p>
        </div>
      </Container>
    </section>
  )
}
