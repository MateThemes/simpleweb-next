'use client'

import { OPEN_COOKIE_SETTINGS_EVENT } from '@/components/cookie/constants'

export function FooterCookieButton() {
  const openCookieSettings = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT))
    }
  }

  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-[var(--duration-normal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] rounded"
    >
      Cookie-Einstellungen
    </button>
  )
}
