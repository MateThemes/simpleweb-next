'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { 
  Bars3Icon, 
  XMarkIcon, 
  SunIcon, 
  MoonIcon, 
  ComputerDesktopIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  RocketLaunchIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [mounted, setMounted] = useState(false)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrollingDown(currentScrollY > lastScrollY.current && currentScrollY > 0)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <header 
      className={`w-full bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 transition-transform duration-300 ${
        isScrollingDown ? '-translate-y-full' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Main navigation">
        {/* Mobile menu button */}
        <div className="flex xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            aria-expanded={isOpen}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            {!isOpen ? (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 xl:static xl:left-auto xl:translate-x-0 xl:w-1/4">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SimpleWebDesign</span>
            <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200 tracking-tight">
              SimpleWebDesign
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden xl:flex xl:flex-1 xl:justify-center">
          <div className="flex items-center gap-x-8">
            <Link
              href="/"
              className="text-base font-medium leading-6 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200"
            >
              Home
            </Link>
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                type="button"
                className="flex items-center gap-x-1 text-base font-medium leading-6 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200"
                aria-expanded={isServicesOpen}
              >
                Services
                <svg
                  className={`h-5 w-5 flex-none text-gray-400 dark:text-gray-500 transition-transform ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2">
                  <div className="overflow-hidden rounded-xl bg-white dark:bg-slate-900 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
                    <div className="p-4">
                      {/* Services Menu Items */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-slate-800">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700">
                          <ComputerDesktopIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/webdesign"
                            className="font-display text-lg font-medium text-gray-900 dark:text-white"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Webdesign
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Professionelle Websites für Ihren Erfolg
                          </p>
                        </div>
                      </div>
                      {/* SEO */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-slate-800">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700">
                          <ArrowTrendingUpIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-green-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/seo"
                            className="font-display text-lg font-medium text-gray-900 dark:text-white"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            SEO
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Suchmaschinenoptimierung für Ihren Erfolg
                          </p>
                        </div>
                      </div>
                      {/* Marketing */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-slate-800">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700">
                          <ChartBarIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/marketing"
                            className="font-display text-lg font-medium text-gray-900 dark:text-white"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Marketing
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Digitales Marketing für Ihren Erfolg
                          </p>
                        </div>
                      </div>
                      {/* Redesign */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-slate-800">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700">
                          <PaintBrushIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/redesign"
                            className="font-display text-lg font-medium text-gray-900 dark:text-white"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Redesign
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Professionelles Redesign für Ihren Erfolg
                          </p>
                        </div>
                      </div>
                      {/* Performance */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-slate-800">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700">
                          <RocketLaunchIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-orange-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/performance"
                            className="font-display text-lg font-medium text-gray-900 dark:text-white"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Performance
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Professionelle Performanceoptimierung für Ihren Erfolg
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/ueber-uns"
              className="text-base font-medium leading-6 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200"
            >
              Über uns
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium leading-6 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200"
            >
              Blog
            </Link>
            <Link
              href="/portfolio"
              className="text-base font-medium leading-6 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-200"
            >
              Portfolio
            </Link>
          </div>
        </div>

        {/* Desktop Navigation - Right Side */}
        <div className="flex items-center justify-end xl:w-1/4">
          <Link
            href="/kontakt"
            className="hidden xl:flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-800 mr-2"
          >
            Kontakt
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-md p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <span className="sr-only">Toggle theme</span>
            {theme === 'dark' ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50">
            {/* Overlay */}
            <div className="fixed inset-0 bg-white dark:bg-slate-950">
              {/* Header */}
              <div className="flex items-center justify-between p-4">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setIsOpen(false)}>
                  <span className="sr-only">SimpleWebDesign</span>
                  <h1 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                    SimpleWebDesign
                  </h1>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-6 px-4 overflow-y-auto">
                <div className="flex flex-col gap-y-4">
                  <Link
                    href="/"
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Mobile Services Accordion */}
                  <div>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <span>Services</span>
                      <svg
                        className={`h-5 w-5 flex-none text-gray-400 dark:text-gray-500 transition-transform ${
                          isMobileServicesOpen ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Services Submenu */}
                    <div className={`space-y-1 pl-3 ${isMobileServicesOpen ? '' : 'hidden'}`}>
                      <Link
                        href="/services/webdesign"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <ComputerDesktopIcon className="h-5 w-5 text-blue-600" />
                        Webdesign
                      </Link>
                      <Link
                        href="/services/seo"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
                        SEO
                      </Link>
                      <Link
                        href="/services/marketing"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <ChartBarIcon className="h-5 w-5 text-indigo-600" />
                        Marketing
                      </Link>
                      <Link
                        href="/services/redesign"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <PaintBrushIcon className="h-5 w-5 text-purple-600" />
                        Redesign
                      </Link>
                      <Link
                        href="/services/performance"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <RocketLaunchIcon className="h-5 w-5 text-orange-600" />
                        Performance
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/ueber-uns"
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Über uns
                  </Link>

                  <Link
                    href="/blog"
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>

                  <Link
                    href="/portfolio"
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>
                </div>
              </div>

              {/* Fixed Footer with Contact Button */}
              <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950 p-4">
                <Link
                  href="/kontakt"
                  className="flex w-full items-center justify-center rounded-full bg-gray-900 dark:bg-white px-4 py-3 text-base font-semibold text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white focus:ring-offset-2"
                  onClick={() => setIsOpen(false)}
                >
                  Kontaktiere uns
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}