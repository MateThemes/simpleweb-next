'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { CookiePreferences } from './CookiePreferences'

export function CookieSettingsButton() {
  const [showPreferences, setShowPreferences] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowPreferences(true)}
        className={clsx(
          'fixed bottom-4 right-4 z-40',
          'flex items-center justify-center rounded-full w-12 h-12',
          'bg-white dark:bg-gray-800 shadow-lg',
          'hover:bg-gray-50 dark:hover:bg-gray-700',
          'transition-all duration-200 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
        )}
        aria-label="Cookie-Einstellungen öffnen"
      >
        <svg
          className="w-6 h-6 text-gray-600 dark:text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>

      <CookiePreferences open={showPreferences} onClose={() => setShowPreferences(false)} />
    </>
  )
}