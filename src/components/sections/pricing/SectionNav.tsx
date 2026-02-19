'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

/** Optionaler Puffer unter dem Header; 0 = nur gemessene --header-height (vom Layout-Header). */
const HEADER_OFFSET_BUFFER_PX = 0

export const PRICING_SECTION_IDS = [
  { id: 'webdesign-pakete', label: 'Webdesign' },
  { id: 'redesign-pakete', label: 'Redesign' },
  { id: 'ki-automatisierung', label: 'KI' },
  { id: 'stundensaetze', label: 'Stundensätze' },
] as const

export function SectionNav() {
  const pathname = usePathname()
  const isPricingPage = pathname === '/preise-und-pakete'
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const lastScrollY = useRef(0)

  // Gleiche Scroll-Logik wie Header: beim Runterscrollen „Header versteckt“ → Nav rückt auf top: 0
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

  // --header-height wird in Header.tsx gesetzt (immer aktuelle Höhe, Desktop höher als Tablet)
  const topValue = isScrollingDown ? 0 : `calc(var(--header-height, 72px) + ${HEADER_OFFSET_BUFFER_PX}px)`

  return (
    <nav
      aria-label="Abschnitte dieser Seite"
      className="sticky z-20 hidden lg:block py-4 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)] transition-[top] duration-[var(--duration-normal)]"
      style={{ top: topValue }}
    >
      <div className="mx-auto px-6 md:px-8 max-w-[1280px]">
        <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
          {PRICING_SECTION_IDS.map((item, i) => (
            <li key={item.id} className="inline-flex items-center gap-x-2">
              <Link
                href={`#${item.id}`}
                className={cn(
                  'inline-flex px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-[var(--duration-fast)]',
                  'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--surface-2)]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                )}
              >
                {item.label}
              </Link>
              {i < PRICING_SECTION_IDS.length - 1 && (
                <span className="text-[var(--border)]" aria-hidden>·</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
