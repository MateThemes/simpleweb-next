'use client'

import clsx from 'clsx'

export function CookieSettingsOpener() {
  return (
    <button
      onClick={() => {
        const event = new CustomEvent('openCookiePreferences')
        window.dispatchEvent(event)
      }}
      className={clsx(
        'inline-flex items-center rounded-md bg-blue-600 px-4 py-2',
        'text-sm font-semibold text-white shadow-sm hover:bg-blue-500',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        'focus-visible:outline-blue-600'
      )}
    >
      Cookie-Einstellungen öffnen
    </button>
  )
}
