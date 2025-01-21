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
  }

  const handleAcceptNecessary = () => {
    setCookiePreferences({
      analytics: false,
      marketing: false,
    })
    setShowBanner(false)
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
            <div className="rounded-lg bg-white p-2 shadow-lg sm:p-3 dark:bg-gray-800">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex w-0 flex-1 items-center">
                  <p className="ml-3 truncate font-medium text-gray-900 dark:text-gray-100">
                    <span className="inline">
                      Diese Website verwendet Cookies, um Ihre Erfahrung zu verbessern.{' '}
                      <Link
                        href="/datenschutz"
                        className="font-bold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Mehr erfahren
                      </Link>
                    </span>
                  </p>
                </div>
                <div className="mt-2 w-full flex-shrink-0 sm:mt-0 sm:w-auto">
                  <div className="flex space-x-2">
                    <button
                      onClick={handleAcceptAll}
                      className={clsx(
                        'flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
                        'bg-blue-600 text-white hover:bg-blue-500',
                        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                      )}
                    >
                      Alle akzeptieren
                    </button>
                    <button
                      onClick={handleAcceptNecessary}
                      className={clsx(
                        'flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
                        'bg-gray-100 text-gray-900 hover:bg-gray-200',
                        'dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
                        'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
                      )}
                    >
                      Nur notwendige
                    </button>
                    <button
                      onClick={handleShowPreferences}
                      className={clsx(
                        'flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
                        'bg-gray-100 text-gray-900 hover:bg-gray-200',
                        'dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
                        'focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'
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