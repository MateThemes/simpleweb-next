import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const paths = [
  {
    title: 'Neue Website',
    text: 'Wenn Klarheit fehlt und ihr von Anfang an eine Website braucht, die Besucher führt.',
    link: '/services/webdesign',
    linkText: 'Mehr dazu →',
  },
  {
    title: 'Redesign / Relaunch',
    text: 'Wenn ihr online seid, aber merkt: Es passiert zu wenig – trotz Updates und Optimierungen.',
    link: '/services/redesign',
    linkText: 'Mehr dazu →',
  },
  {
    title: 'Sichtbarkeit & System',
    text: 'Wenn ihr Anfragen planbarer machen wollt – ohne euch in einzelne Maßnahmen zu verlieren.',
    link: '/services/marketing',
    linkText: 'Mehr dazu →',
  },
]

export default function ServicesCards() {
  return (
    <section
      className="py-20 lg:py-28 bg-[var(--background)]"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-3 py-1.5 text-sm font-medium text-[var(--primary)] bg-[var(--surface-2)] rounded-full border border-[var(--border)] mb-6">
            Wie wir helfen
          </span>
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-6"
          >
            Drei typische Ausgangslagen – drei passende Wege.
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mb-12">
            Du musst nicht sofort wissen, welches Paket du brauchst. Entscheidend ist, wo du gerade stehst.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
            {paths.map((path, index) => (
              <div
                key={index}
                className={cn(
                  'flex flex-col rounded-[var(--radius-2xl)] p-6 lg:p-8 border border-[var(--border)] bg-[var(--surface)]',
                  'transition-[box-shadow] duration-[var(--duration-normal)] hover:shadow-[var(--shadow-3)]',
                  'focus-within:shadow-[var(--shadow-3)]'
                )}
                style={{ boxShadow: 'var(--shadow-1)' }}
              >
                <h3 className="font-display text-xl font-semibold text-[var(--foreground)] mb-4">
                  {path.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed mb-6 flex-grow">
                  {path.text}
                </p>
                <Link
                  href={path.link}
                  className={cn(
                    'inline-flex items-center font-medium text-[var(--primary)]',
                    'hover:underline underline-offset-2',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded'
                  )}
                >
                  {path.linkText}
                </Link>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-[var(--border)]">
            <p className="text-sm text-[var(--muted-foreground)]">
              Wenn du unsicher bist, starte bei den Signalen in{' '}
              <Link href="#klarheit" className="text-[var(--primary)] underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded">
                #klarheit
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
