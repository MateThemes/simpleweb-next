import { Container } from '@/components/ui/Container'

const testimonials = [
  {
    quote: 'Endlich war klar, was auf die Startseite gehört – und was nicht.',
    attribution: 'KMU · Dienstleistung',
  },
  {
    quote: 'Wir haben nicht „mehr Text" bekommen, sondern eine Struktur, die führt.',
    attribution: 'Handwerk · lokal',
  },
  {
    quote: 'Die Website fühlt sich ruhiger an – und es kommt mehr rein.',
    attribution: 'Unternehmen · Region',
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-20 lg:py-24 bg-[var(--surface-2)]"
      aria-labelledby="testimonials-heading"
    >
      <Container>
        <div className="max-w-[1280px] mx-auto">
          <h2
            id="testimonials-heading"
            className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] max-w-[650px] mb-14 lg:mb-16"
          >
            Was Kunden danach sagen
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <blockquote
                key={index}
                className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1"
              >
                <p className="font-display text-xl lg:text-2xl font-light text-[var(--foreground)] leading-snug mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="text-sm text-[var(--muted-foreground)]">
                  {testimonial.attribution}
                </footer>
              </blockquote>
            ))}
          </div>

          <p className="mt-14 pt-12 border-t border-[var(--border)] text-[var(--muted-foreground)] max-w-[650px]">
            Auf Wunsch senden wir Referenzen passend zu deiner Branche.
          </p>
        </div>
      </Container>
    </section>
  )
}
