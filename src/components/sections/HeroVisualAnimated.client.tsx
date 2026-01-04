'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function HeroVisualAnimated() {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we should animate:
    // 1. Desktop only (min-width: 1024px)
    // 2. No reduced motion preference
    // 3. Wait for idle
    
    const checkConditions = () => {
      // Check desktop
      if (window.innerWidth < 1024) {
        return false
      }

      // Check reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        return false
      }

      return true
    }

    // Use requestIdleCallback with fallback
    const scheduleAnimation = () => {
      if (typeof window.requestIdleCallback !== 'undefined') {
        window.requestIdleCallback(
          () => {
            if (checkConditions()) {
              setShouldAnimate(true)
              // Small delay to ensure smooth animation start
              setTimeout(() => setIsVisible(true), 50)
            }
          },
          { timeout: 1000 }
        )
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          if (checkConditions()) {
            setShouldAnimate(true)
            setTimeout(() => setIsVisible(true), 50)
          }
        }, 100)
      }
    }

    scheduleAnimation()
  }, [])

  // If conditions not met, render static (no animation classes)
  if (!shouldAnimate) {
    return (
      <div className="relative w-full">
        <div className="relative w-full rounded-2xl overflow-hidden md:shadow-2xl shadow-xl">
          <Image
            src="/img/hero.png"
            alt="Webdesign Agentur für KMU - Moderne Websites Österreich Deutschland"
            width={920}
            height={520}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>
        <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700">
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Websites, die Orientierung geben.</p>
        </div>
      </div>
    )
  }

  // Animated version (only on desktop, no reduced motion)
  return (
    <div className="relative w-full">
      <div className={`relative w-full rounded-2xl overflow-hidden md:shadow-2xl shadow-xl transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`transition-transform duration-700 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-4'}`}>
          <Image
            src="/img/hero.png"
            alt="Webdesign Agentur für KMU - Moderne Websites Österreich Deutschland"
            width={920}
            height={520}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-auto w-full rounded-2xl"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
      </div>
      <div className={`absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700 transition-opacity duration-700 ease-out delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Websites, die Orientierung geben.</p>
      </div>
    </div>
  )
}

