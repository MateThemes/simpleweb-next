import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

export interface ServiceCardItem {
  title: string
  items: string[]
  href: string
  linkText: string
}

interface ServiceCardGridProps {
  title: string
  description?: string
  cards: ServiceCardItem[]
  className?: string
}

export function ServiceCardGrid({
  title,
  description,
  cards,
  className,
}: ServiceCardGridProps) {
  return (
    <section
      className={cn('py-[var(--spacing-section-md)] lg:py-[var(--spacing-section-lg)]', className)}
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-14">
          <h2
            id="services-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {cards.map((card) => (
            <article
              key={card.title}
              className={cn(
                'flex flex-col rounded-[var(--radius-2xl)] p-8 lg:p-10 border border-[var(--border)] bg-[var(--surface)]',
                'shadow-elev-1 transition-[box-shadow] duration-[var(--duration-normal)] hover:shadow-elev-2'
              )}
            >
              <h3 className="font-display text-xl font-semibold text-[var(--foreground)] mb-6">
                {card.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 flex-1 text-[var(--muted-foreground)] text-base leading-relaxed">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-8 pt-2">
                <Link
                  href={card.href}
                  className={cn(
                    'inline-flex items-center font-medium text-[var(--primary)]',
                    'hover:underline underline-offset-2',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] rounded'
                  )}
                >
                  {card.linkText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
