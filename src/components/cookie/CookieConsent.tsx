'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { hasConsented, setCookiePreferences } from './CookieStore'
import { CookiePreferences } from './CookiePreferences'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    // Show banner only if user hasn't consented yet
    const timer = setTimeout(() => {
      if (!hasConsented()) {
        setShowBanner(true)
      }
    }, 1000) // Delay banner appearance for better UX

    // Listen for custom event to open preferences
    const handleOpenPreferences = () => {
      setShowPreferences(true)
    }
    window.addEventListener('openCookiePreferences', handleOpenPreferences)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('openCookiePreferences', handleOpenPreferences)
    }
  }, [])

  const handleAcceptAll = () => {
    setCookiePreferences({
      analytics: true,
      marketing: true,
    })
    setShowBanner(false)
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
      detail: { analytics: true, marketing: true }
    }))
  }

  const handleAcceptNecessary = () => {
    setCookiePreferences({
      analytics: false,
      marketing: false,
    })
    setShowBanner(false)
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', {
      detail: { analytics: false, marketing: false }
    }))
  }

  const handleShowPreferences = () => {
    setShowPreferences(true)
    setShowBanner(false)
  }

  if (!showBanner && !showPreferences) return null

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-50 pb-2 sm:pb-5">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-4 shadow-[var(--shadow-3)] sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex min-w-0 flex-1 items-center">
                  <p className="ml-0 truncate font-medium text-[var(--foreground)] sm:ml-3">
                    <span className="inline">
                      Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.{' '}
                      <Link
                        href="/datenschutz"
                        className="font-semibold text-[var(--primary)] hover:opacity-90 transition-opacity"
                      >
                        Mehr erfahren
                      </Link>
                    </span>
                  </p>
                </div>
                <div className="w-full flex-shrink-0 sm:w-auto">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={handleAcceptAll}
                      className={clsx(
                        'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold',
                        'bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                      )}
                    >
                      Alle akzeptieren
                    </button>
                    <button
                      onClick={handleAcceptNecessary}
                      className={clsx(
                        'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium',
                        'bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--surface)]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                      )}
                    >
                      Nur notwendige
                    </button>
                    <button
                      onClick={handleShowPreferences}
                      className={clsx(
                        'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium',
                        'bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--surface)]',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                      )}
                    >
                      Einstellungen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <CookiePreferences open={showPreferences} onClose={() => setShowPreferences(false)} />
      )}
    </>
  )
}