'use client'

import { useState } from 'react'
import { ChevronRightIcon } from '@/components/icons'
import clsx from 'clsx'

interface AccordionItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

interface AccordionProps {
  items: AccordionItemProps[]
  className?: string
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${question}`}
      >
        <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
          {question}
        </span>
        <ChevronRightIcon
          className={clsx(
            'h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400 transition-transform',
            isOpen && 'rotate-90'
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={`accordion-content-${question}`}
        className={clsx(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[1000px] pb-4' : 'max-h-0'
        )}
        aria-hidden={!isOpen}
      >
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={clsx('space-y-0', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          defaultOpen={item.defaultOpen}
        />
      ))}
    </div>
  )
}

