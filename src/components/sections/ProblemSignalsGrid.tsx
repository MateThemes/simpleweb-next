import { Container } from '@/components/ui/Container'

const cards = [
  {
    title: 'Besucher gehen – ohne Anfragen oder Termine',
    text: 'Viele Aufrufe, aber kaum Leads, Anfragen oder Verkäufe.',
  },
  {
    title: 'Viel Text, wenig Führung',
    text: 'Die Website informiert – führt aber nicht zum nächsten Schritt.',
  },
  {
    title: 'Unklarer Nutzen auf den ersten Blick',
    text: 'Besucher verstehen nicht sofort, wofür sie euch buchen sollen.',
  },
  {
    title: 'Website-Optimierung bringt keine Wirkung',
    text: 'Details verbessert, das Ergebnis bleibt: zu wenig Anfragen.',
  },
]

export default function ProblemSignalsGrid() {
  return (
    <section
      id="klarheit"
      className="scroll-mt-[72px] py-20 lg:py-24 bg-[var(--surface-2)]"
      aria-labelledby="problem-heading"
    >
      <Container>
        <div className="max-w-[1280px] mx-auto">
          <h2
            id="problem-heading"
            className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] max-w-[650px] mb-14 lg:mb-16"
          >
            Die meisten KMU-Websites scheitern nicht am Design – sondern an fehlender Klarheit.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <article
                key={index}
                className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1 transition-[box-shadow] duration-[var(--duration-normal)] hover:shadow-elev-2 focus-within:shadow-elev-2"
              >
                <h3 className="font-display text-lg font-semibold text-[var(--foreground)] mb-3">
                  {card.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
