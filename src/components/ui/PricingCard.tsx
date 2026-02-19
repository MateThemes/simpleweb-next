'use client'

import Link from 'next/link'
import { CheckIcon } from '@/components/icons'
import { cn } from '@/lib/utils'

export interface PricingFeature {
  name: string
  included: boolean
}

export interface PricingCardProps {
  name: string
  price: string
  description: string
  valueLine?: string
  features: PricingFeature[]
  popular?: boolean
  ctaText: string
  ctaLink: string
  footnote?: string
  className?: string
}

export function PricingCard({
  name,
  price,
  description,
  valueLine,
  features,
  popular = false,
  ctaText,
  ctaLink,
  footnote,
  className,
}: PricingCardProps) {
  return (
    <article
      className={cn(
        'relative flex flex-col rounded-[var(--radius-2xl)] border p-8 lg:p-10 transition-[box-shadow] duration-[var(--duration-normal)]',
        popular
          ? 'bg-[var(--surface-2)] border-[var(--border)] shadow-elev-2'
          : 'bg-[var(--surface)] border-[var(--border)] shadow-elev-1 hover:shadow-elev-2',
        className
      )}
    >
      {popular && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--primary-foreground)] bg-[var(--primary)] rounded-full"
          aria-hidden
        >
          Beliebt
        </span>
      )}

      <div className="mb-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)]">
          {name}
        </h3>
        {valueLine && (
          <p className="mt-1.5 text-sm text-[var(--muted-foreground)]">{valueLine}</p>
        )}
        <p className="mt-3 text-[var(--muted-foreground)] text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="font-display text-4xl font-bold tracking-tight text-[var(--foreground)]">
            {price}
          </span>
          {price !== 'Individuell' && (
            <span className="text-lg font-semibold text-[var(--muted-foreground)]">€</span>
          )}
        </div>
      </div>

      <ul role="list" className="space-y-4 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3">
            <CheckIcon
              className={cn(
                'h-5 w-5 flex-shrink-0 mt-0.5',
                feature.included
                  ? 'text-[var(--primary)]'
                  : 'text-[var(--border)]'
              )}
              aria-hidden
            />
            <span
              className={cn(
                'text-sm leading-relaxed',
                feature.included
                  ? 'text-[var(--foreground)]'
                  : 'text-[var(--muted-foreground)]'
              )}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-2">
        <Link
          href={ctaLink}
          className={cn(
            'inline-flex items-center justify-center gap-2 w-full min-h-[52px] px-6 rounded-xl font-semibold text-base transition-opacity duration-[var(--duration-normal)]',
            popular
              ? 'bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95'
              : 'bg-[var(--foreground)] text-[var(--background)] hover:opacity-95',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
          )}
        >
          {ctaText}
        </Link>
        {footnote && (
          <p className="mt-4 text-xs text-[var(--muted-foreground)] italic text-center">
            {footnote}
          </p>
        )}
      </div>
    </article>
  )
}
