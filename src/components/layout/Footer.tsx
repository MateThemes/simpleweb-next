'use client'

import Link from 'next/link'
import { OPEN_COOKIE_SETTINGS_EVENT } from '@/components/cookie/CookieSettingsButton'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const openCookieSettings = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(OPEN_COOKIE_SETTINGS_EVENT))
    }
  }

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--surface)] not-prose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            &copy; {currentYear} – SimpleWebDesign. Alle Rechte vorbehalten.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8" aria-label="Rechtliches und Einstellungen">
            <Link
              href="/impressum"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-[var(--duration-normal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] rounded"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-[var(--duration-normal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] rounded"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-[var(--duration-normal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] rounded"
            >
              AGB
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-[var(--duration-normal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] rounded"
            >
              Cookie-Einstellungen
            </button>
          </nav>
        </div>
      </div>
    </footer>
  )
}
