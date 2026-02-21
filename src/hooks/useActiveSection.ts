'use client'

import { useState, useEffect, useCallback } from 'react'

const SECTION_IDS = ['webdesign-pakete', 'redesign-pakete', 'ki', 'stundensaetze'] as const

export type PricingSectionId = (typeof SECTION_IDS)[number]

const observerOpts: IntersectionObserverInit = {
  root: null,
  rootMargin: '-20% 0px -60% 0px',
  threshold: 0,
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useActiveSection() {
  const [activeId, setActiveId] = useState<PricingSectionId | null>(null)

  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
    if (hash && SECTION_IDS.includes(hash as PricingSectionId)) {
      setActiveId(hash as PricingSectionId)
      const el = document.getElementById(hash)
      if (el) {
        const behavior = prefersReducedMotion() ? 'auto' : 'smooth'
        const scroll = () => el.scrollIntoView({ behavior, block: 'start' })
        if (document.readyState === 'complete') requestAnimationFrame(scroll)
        else window.addEventListener('load', () => requestAnimationFrame(scroll), { once: true })
      }
    }
  }, [])

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting && SECTION_IDS.includes(e.target.id as PricingSectionId))
        if (visible.length === 0) return
        const byTop = [...visible].sort(
          (a, b) => (a.target.getBoundingClientRect().top ?? 0) - (b.target.getBoundingClientRect().top ?? 0)
        )
        const id = byTop[0].target.id as PricingSectionId
        setActiveId(id)
        if (typeof history !== 'undefined' && history.replaceState) {
          const url = new URL(window.location.href)
          url.hash = id
          history.replaceState(null, '', url.toString())
        }
      },
      observerOpts
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = useCallback((id: PricingSectionId) => {
    const el = document.getElementById(id)
    if (!el) return
    const behavior = prefersReducedMotion() ? 'auto' : 'smooth'
    el.scrollIntoView({ behavior, block: 'start' })
    setActiveId(id)
    const url = new URL(window.location.href)
    url.hash = id
    window.history.replaceState(null, '', url.toString())
  }, [])

  return { activeId, scrollToSection, sectionIds: SECTION_IDS }
}
