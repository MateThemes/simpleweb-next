'use client'

import { useState } from 'react'
import { ChevronRightIcon } from '@/components/icons'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
  id?: string
}

interface AccordionProps {
  items: AccordionItemProps[]
  className?: string
}

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
  id: providedId,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const id = providedId ?? `accordion-${question.slice(0, 20).replace(/\s/g, '-')}`
  const contentId = `${id}-content`

  return (
    <div className="border-b border-[var(--border)] last:border-b-0">
      <h3 className="sr-only">{question}</h3>
      <button
        type="button"
        id={id}
        className={cn(
          'flex w-full items-center justify-between gap-4 py-6 text-left rounded-[var(--radius-md)] px-1 -mx-1',
          'text-lg font-semibold text-[var(--foreground)]',
          'transition-colors duration-200 hover:bg-[var(--surface)]/80',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] focus-visible:bg-[var(--surface)]/80'
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="pr-4">{question}</span>
        <ChevronRightIcon
          className={cn(
            'h-5 w-5 flex-shrink-0 text-[var(--muted-foreground)] transition-transform duration-200',
            isOpen && 'rotate-90'
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={contentId}
        className={cn(
          'overflow-hidden transition-all duration-200 ease-[var(--ease-out)]',
          isOpen ? 'max-h-[1000px] pb-6' : 'max-h-0'
        )}
        aria-hidden={!isOpen}
        role="region"
        aria-labelledby={id}
      >
        <p className="text-[var(--muted-foreground)] leading-relaxed px-1 pb-2">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn('space-y-0', className)} role="list">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          defaultOpen={item.defaultOpen}
          id={`faq-item-${index}`}
        />
      ))}
    </div>
  )
}
