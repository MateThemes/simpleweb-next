'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useActiveSection, type PricingSectionId } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'

const HEADER_OFFSET_BUFFER_PX = 0

export const PRICING_SECTION_IDS: { id: PricingSectionId; label: string }[] = [
  { id: 'webdesign-pakete', label: 'Webdesign' },
  { id: 'redesign-pakete', label: 'Redesign' },
  { id: 'ki', label: 'KI' },
  { id: 'stundensaetze', label: 'Stundensätze' },
]

export function SectionNav() {
  const pathname = usePathname()
  const isPricingPage = pathname === '/preise-und-pakete'
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const lastScrollY = useRef(0)
  const { activeId, scrollToSection } = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrollingDown(currentScrollY > lastScrollY.current && currentScrollY > 0)
      lastScrollY.current = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isPricingPage) return null

  const topValue = isScrollingDown ? 0 : `calc(var(--header-height, 72px) + ${HEADER_OFFSET_BUFFER_PX}px)`

  return (
    <nav
      aria-label="Abschnitte dieser Seite"
      className="sticky z-20 py-4 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)] transition-[top] duration-[var(--duration-normal)]"
      style={{ top: topValue }}
    >
      <div className="mx-auto px-6 md:px-8 max-w-[1280px] overflow-x-auto">
        <ul className="flex flex-nowrap lg:flex-wrap items-center justify-center gap-x-2 gap-y-2 min-w-max lg:min-w-0">
          {PRICING_SECTION_IDS.map((item, i) => (
            <li key={item.id} className="inline-flex items-center gap-x-2 flex-shrink-0">
              <Link
                href={`/preise-und-pakete#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
                className={cn(
                  'inline-flex px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-[var(--duration-fast)] whitespace-nowrap',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]',
                  activeId === item.id
                    ? 'text-[var(--foreground)] border-b-2 border-[var(--primary)] -mb-0.5'
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)] border-b-2 border-transparent'
                )}
              >
                {item.label}
              </Link>
              {i < PRICING_SECTION_IDS.length - 1 && (
                <span className="text-[var(--border)] hidden lg:inline" aria-hidden>·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
