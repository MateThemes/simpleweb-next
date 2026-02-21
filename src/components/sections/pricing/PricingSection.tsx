import { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

interface PricingSectionProps {
  id?: string
  /** Surface layer: background (default), surface, surface-2 */
  variant?: 'background' | 'surface' | 'surface-2'
  className?: string
  children: ReactNode
}

const variantClasses = {
  background: 'bg-[var(--background)]',
  surface: 'bg-[var(--surface)]',
  'surface-2': 'bg-[var(--surface-2)]',
}

export function PricingSection({
  id,
  variant = 'background',
  className,
  children,
}: PricingSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-[var(--spacing-section-md)] lg:py-[var(--spacing-section-lg)]',
        id && 'scroll-mt-[140px]',
        variantClasses[variant],
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  )
}

interface PricingSectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
}

export function PricingSectionHeader({
  eyebrow,
  title,
  description,
  className,
}: PricingSectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mx-auto text-center mb-12 lg:mb-14',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block px-3 py-1.5 text-sm font-medium text-[var(--primary)] bg-[var(--surface-2)] rounded-full border border-[var(--border)] mb-6">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--foreground)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
