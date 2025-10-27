'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-gray-200 dark:border-slate-800 not-prose bg-white dark:bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300">
        <div className="flex justify-between items-center py-6">
          <div className="text-sm leading-relaxed text-gray-900 dark:text-slate-300">
            &copy; {currentYear} - SimpleWebDesign. Alle Rechte vorbehalten.
          </div>
          <div className="text-sm leading-relaxed text-gray-900 dark:text-slate-300 flex gap-4">
            <Link
              className="text-gray-900 hover:text-gray-700 dark:text-slate-300 dark:hover:text-gray-400 hover:underline transition duration-150 ease-in-out"
              href="/impressum"
            >
              Impressum
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-700 dark:text-slate-300 dark:hover:text-gray-400 hover:underline transition duration-150 ease-in-out"
              href="/datenschutz"
            >
              Datenschutz
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-700 dark:text-slate-300 dark:hover:text-gray-400 hover:underline transition duration-150 ease-in-out"
              href="/agb"
            >
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}