import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const fits = {
  good: {
    title: 'Passt gut, wenn …',
    points: [
      'deine Website zu wenig Anfragen oder Leads bringt',
      'ein Website Relaunch oder eine Website Optimierung ansteht',
      'deine Positionierung unklar ist – Besucher verstehen nicht, wofür du da bist',
      'du Orientierung suchst, bevor du investierst',
    ],
  },
  notGood: {
    title: 'Passt nicht, wenn …',
    points: [
      'du nur schnell „eine Website" brauchst, ohne Strategie',
      'du primär Preise vergleichen willst',
      'du eine reine Umsetzungsagentur suchst',
      'du Entscheidungen komplett abgeben willst',
    ],
  },
}

export default function FitChecklist() {
  return (
    <section
      className="py-20 lg:py-24 bg-[var(--background)]"
      aria-labelledby="fit-heading"
    >
      <Container>
        <div className="max-w-[1280px] mx-auto">
          <h2
            id="fit-heading"
            className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] max-w-[650px] mb-14 lg:mb-16"
          >
            Passt Webdesign für KMU zu dir?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            <div
              className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1"
              aria-label={fits.good.title}
            >
              <h3 className="font-display text-xl font-semibold text-[var(--foreground)] mb-6">
                {fits.good.title}
              </h3>
              <ul className="space-y-3" role="list">
                {fits.good.points.map((point, i) => (
                  <li key={i} className="text-[var(--muted-foreground)] leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--success)]" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1"
              aria-label={fits.notGood.title}
            >
              <h3 className="font-display text-xl font-semibold text-[var(--foreground)] mb-6">
                {fits.notGood.title}
              </h3>
              <ul className="space-y-3" role="list">
                {fits.notGood.points.map((point, i) => (
                  <li key={i} className="text-[var(--muted-foreground)] leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--muted-foreground)]" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 pt-10 border-t border-[var(--border)] text-[var(--muted-foreground-strong)] text-lg">
            Wenn du dich hier wiederfindest, lohnt sich ein Strategiegespräch – unverbindlich, ohne Verkaufsdruck.
          </p>
          <Link
            href="/kontakt"
            className={cn(
              'inline-flex items-center mt-4 font-medium text-[var(--primary)]',
              'hover:underline underline-offset-2',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded'
            )}
          >
            Kostenloses Strategiegespräch anfragen
          </Link>
        </div>
      </Container>
    </section>
  )
}
