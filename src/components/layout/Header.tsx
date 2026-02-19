'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // CHANGE: needed to close drawer on route change
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
  PaintBrushIcon,
  ServerIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '../icons'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [mounted, setMounted] = useState(false)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname() // CHANGE: observe route changes to close mobile menu
  const triggerRef = useRef<HTMLButtonElement>(null) // CHANGE: store trigger to return focus
  const panelRef = useRef<HTMLDivElement>(null) // CHANGE: reference to the panel for focus trap
  const previouslyFocusedRef = useRef<HTMLElement | null>(null) // CHANGE: remember previously focused element
  const headerRef = useRef<HTMLElement>(null)

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  // Header-Höhe als CSS-Variable setzen (Desktop vs. Tablet unterschiedlich), für Section-Nav auf /preise-und-pakete
  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const setHeight = () => {
      const h = Math.ceil(header.getBoundingClientRect().height)
      document.documentElement.style.setProperty('--header-height', `${h > 0 ? h : 72}px`)
    }
    setHeight()
    const ro = new ResizeObserver(setHeight)
    ro.observe(header)
    window.addEventListener('resize', setHeight)
    window.addEventListener('load', setHeight)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', setHeight)
      window.removeEventListener('load', setHeight)
    }
  }, [mounted])

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

  // CHANGE: Body scroll lock and focus management when mobile menu opens
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement
      const body = document.body
      const prevOverflow = body.style.overflow
      const prevTouchAction = body.style.touchAction as string
      body.style.overflow = 'hidden' // prevent background scroll
      body.style.touchAction = 'none'

      // Focus the panel itself to start focus within dialog
      const panel = panelRef.current
      requestAnimationFrame(() => {
        panel?.focus()
      })

      // Store current ref values to avoid stale closure issues
      const currentTriggerElement = triggerRef.current
      const currentPreviouslyFocusedElement = previouslyFocusedRef.current

      return () => {
        body.style.overflow = prevOverflow
        body.style.touchAction = prevTouchAction
        // Restore focus to trigger using stored values
        const el = currentTriggerElement || currentPreviouslyFocusedElement
        if (el) {
          el.focus()
        }
      }
    }
  }, [isOpen, triggerRef, previouslyFocusedRef])

  // CHANGE: Close on ESC and keep focus trapped within panel
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        return
      }
      if (e.key === 'Tab' && panelRef.current) {
        const container = panelRef.current
        const focusable = container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (!first || !last) return
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          ;(last as HTMLElement).focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          ;(first as HTMLElement).focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // CHANGE: Close the drawer on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  return (
    <header
      ref={headerRef}
      className={`w-full sticky top-0 z-40 transition-transform duration-[var(--duration-normal)] ${
        isScrollingDown ? '-translate-y-full' : ''
      } bg-[var(--surface)]/95 dark:bg-[var(--surface)]/90 border-b border-[var(--border)] backdrop-blur-md supports-[backdrop-filter]:bg-[var(--surface)]/80`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Hauptnavigation">
        {/* Mobile menu button */}
        <div className="flex xl:hidden">
          <button
            ref={triggerRef} // CHANGE: keep reference to restore focus when closing
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-[var(--radius-md)] p-2.5 text-[var(--foreground)] hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu-dialog" // CHANGE: link trigger with dialog
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
            <h1 className="font-display text-2xl font-bold text-[var(--foreground)] hover:opacity-80 tracking-tight">
              SimpleWebDesign
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden xl:flex xl:flex-1 xl:justify-center">
          <div className="flex items-center gap-x-8">
            <Link
              href="/"
              className="text-base font-medium leading-6 text-[var(--foreground)] hover:text-[var(--muted-foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded"
            >
              Home
            </Link>
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                type="button"
                className="flex items-center gap-x-1 text-base font-medium leading-6 text-[var(--foreground)] hover:text-[var(--muted-foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 rounded"
                aria-expanded={isServicesOpen}
              >
                Services
                <svg
                  className={`h-5 w-5 flex-none text-[var(--muted-foreground)] transition-transform duration-[var(--duration-normal)] ${
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
                <div className="absolute left-1/2 z-10 mt-3 w-screen max-w-4xl -translate-x-1/2 transform px-2">
                  <div className="overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow-4)]">
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Services Menu Items */}
                      <div className="group relative flex items-center gap-x-6 rounded-[var(--radius-lg)] p-4 hover:bg-[var(--surface-2)]">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-lg)] bg-[var(--surface-2)] group-hover:bg-[var(--surface-elevated)]">
                          <ComputerDesktopIcon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/webdesign"
                            className="font-display text-lg font-medium text-[var(--foreground)]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Webdesign
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                            Professionelle Websites für Ihren Erfolg
                          </p>
                        </div>
                      </div>
                      {/* SEO */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-[var(--surface-2)]">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-lg)] bg-[var(--surface-2)] group-hover:bg-[var(--surface-elevated)]">
                          <ArrowTrendingUpIcon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]green-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/seo"
                            className="font-display text-lg font-medium text-[var(--foreground)]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            SEO
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                            Suchmaschinenoptimierung für Ihren Erfolg
                          </p>
                        </div>
                      </div>
                      {/* Marketing */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-[var(--surface-2)]">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-lg)] bg-[var(--surface-2)] group-hover:bg-[var(--surface-elevated)]">
                          <ChartBarIcon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]indigo-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/marketing"
                            className="font-display text-lg font-medium text-[var(--foreground)]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Marketing
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                            Klarheit, Botschaft, Wirkung – System statt Aktionismus
                          </p>
                        </div>
                      </div>
                      {/* Redesign */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-[var(--surface-2)]">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-lg)] bg-[var(--surface-2)] group-hover:bg-[var(--surface-elevated)]">
                          <PaintBrushIcon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]purple-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/redesign"
                            className="font-display text-lg font-medium text-[var(--foreground)]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Redesign
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                            Professionelles Redesign für Ihren Erfolg
                          </p>
                        </div>
                      </div>
                      {/* Performance */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-[var(--surface-2)]">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-lg)] bg-[var(--surface-2)] group-hover:bg-[var(--surface-elevated)]">
                          <RocketLaunchIcon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]orange-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/performance"
                            className="font-display text-lg font-medium text-[var(--foreground)]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Performance
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                            Professionelle Performanceoptimierung für Ihren Erfolg
                          </p>
                        </div>
                      </div>
                      {/* Security Check */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-[var(--surface-2)]">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-lg)] bg-[var(--surface-2)] group-hover:bg-[var(--surface-elevated)]">
                          <ShieldCheckIcon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]green-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/security-check"
                            className="font-display text-lg font-medium text-[var(--foreground)]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Security Check
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                            Website Sicherheitsprüfung für KMU – legal, kontrolliert, transparent
                          </p>
                        </div>
                      </div>
                      {/* Hosting */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-[var(--surface-2)]">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-lg)] bg-[var(--surface-2)] group-hover:bg-[var(--surface-elevated)]">
                          <ServerIcon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]teal-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/hosting"
                            className="font-display text-lg font-medium text-[var(--foreground)]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Hosting
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                            Professionelle Hosting-Beratung für Ihren Erfolg
                          </p>
                        </div>
                      </div>
                      {/* Wartung & Support */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-[var(--surface-2)]">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-lg)] bg-[var(--surface-2)] group-hover:bg-[var(--surface-elevated)]">
                          <RocketLaunchIcon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]yellow-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/wartung"
                            className="font-display text-lg font-medium text-[var(--foreground)]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Wartung & Support
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                            Professionelle Wartung und technischer Support
                          </p>
                        </div>
                      </div>
                      {/* Shopify Experte */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-[var(--surface-2)]">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-lg)] bg-[var(--surface-2)] group-hover:bg-[var(--surface-elevated)]">
                          <ServerIcon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]green-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/services/e-commerce-partner-fuer-shopify"
                            className="font-display text-lg font-medium text-[var(--foreground)]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            Shopify Experte
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                            Professionelle Shopify Agentur für E-Commerce
                          </p>
                        </div>
                      </div>
                      {/* KI-Automatisierung */}
                      <div className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-[var(--surface-2)]">
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-[var(--radius-lg)] bg-[var(--surface-2)] group-hover:bg-[var(--surface-elevated)]">
                          <SparklesIcon className="h-6 w-6 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]indigo-600" aria-hidden="true" />
                        </div>
                        <div>
                          <Link
                            href="/ki-automatisierung"
                            className="font-display text-lg font-medium text-[var(--foreground)]"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            KI-Automatisierung
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                            Automatisierung von Routineaufgaben für KMU
                          </p>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link
              href="/preise-und-pakete"
              className="text-base font-medium leading-6 text-[var(--foreground)] hover:text-[var(--muted-foreground)]"
            >
              Preise
            </Link>
            <Link
              href="/prozess"
              className="text-base font-medium leading-6 text-[var(--foreground)] hover:text-[var(--muted-foreground)]"
            >
              Prozess
            </Link>
            <Link
              href="/portfolio"
              className="text-base font-medium leading-6 text-[var(--foreground)] hover:text-[var(--muted-foreground)]"
            >
              Portfolio
            </Link>
            <Link
              href="/ueber-uns"
              className="text-base font-medium leading-6 text-[var(--foreground)] hover:text-[var(--muted-foreground)]"
            >
              Über mich
            </Link>
            <Link
              href="/blog"
              className="text-base font-medium leading-6 text-[var(--foreground)] hover:text-[var(--muted-foreground)]"
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Desktop Navigation - Right Side */}
        <div className="flex items-center justify-end xl:w-1/4">
          <Link
            href="/kontakt"
            className="hidden xl:flex items-center justify-center rounded-[var(--radius-xl)] px-4 py-2.5 text-sm font-semibold bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-[var(--duration-normal)] mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
          >
            Kontakt
          </Link>
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-[var(--radius-md)] p-2 text-[var(--muted-foreground)] hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
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
            {/* CHANGE: Clickable, non-through overlay to close the panel */}
            <button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 bg-black/40 z-50 cursor-default"
              onClick={() => setIsOpen(false)}
            />

            {/* CHANGE: Right-side fixed panel acts as its own scroll container */}
            <div
              id="mobile-menu-dialog"
              role="dialog" // CHANGE: a11y role
              aria-modal="true" // CHANGE: prevent background from being considered
              aria-label="Hauptmenü"
              ref={panelRef}
              tabIndex={-1} // CHANGE: make focusable container for focus trap start
              className="fixed right-0 top-0 z-[60] h-[100dvh] min-h-svh w-[min(90vw,24rem)] bg-[var(--surface)] shadow-[var(--shadow-4)] outline-none flex flex-col"
            >
              {/* Header inside the panel */}
              <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setIsOpen(false)}>
                  <span className="sr-only">SimpleWebDesign</span>
                  <h2 className="font-display text-2xl font-bold text-[var(--foreground)]">
                    SimpleWebDesign
                  </h2>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-[var(--foreground)]"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* CHANGE: Make the menu list scrollable only within the panel */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-6">
                <div className="flex flex-col gap-y-4">
                  <Link
                    href="/"
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Mobile Services Accordion */}
                  <div>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      aria-expanded={isMobileServicesOpen} // CHANGE: a11y state for accordion
                      aria-controls="mobile-services-submenu" // CHANGE: link to submenu
                    >
                      <span>Services</span>
                      <svg
                        className={`h-5 w-5 flex-none text-[var(--muted-foreground)] transition-transform ${
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
                    <div id="mobile-services-submenu" className={`space-y-1 pl-3 ${isMobileServicesOpen ? '' : 'hidden'}`}>
                      <Link
                        href="/services/webdesign"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <ComputerDesktopIcon className="h-5 w-5 text-blue-600" />
                        Webdesign
                      </Link>
                      <Link
                        href="/services/seo"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
                        SEO
                      </Link>
                      <Link
                        href="/services/marketing"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <ChartBarIcon className="h-5 w-5 text-indigo-600" />
                        Marketing
                      </Link>
                      <Link
                        href="/services/redesign"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <PaintBrushIcon className="h-5 w-5 text-purple-600" />
                        Redesign
                      </Link>
                      <Link
                        href="/services/performance"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <RocketLaunchIcon className="h-5 w-5 text-orange-600" />
                        Performance
                      </Link>
                      <Link
                        href="/services/security-check"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <ShieldCheckIcon className="h-5 w-5 text-green-600" />
                        Security Check
                      </Link>
                      <Link
                        href="/services/hosting"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <ServerIcon className="h-5 w-5 text-teal-600" />
                        Hosting
                      </Link>
                      <Link
                        href="/services/wartung"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <RocketLaunchIcon className="h-5 w-5 text-yellow-600" />
                        Wartung & Support
                      </Link>
                      <Link
                        href="/services/e-commerce-partner-fuer-shopify"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <ServerIcon className="h-5 w-5 text-green-600" />
                        Shopify Experte
                      </Link>
                      <Link
                        href="/ki-automatisierung"
                        className="flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setIsOpen(false)}
                      >
                        <SparklesIcon className="h-5 w-5 text-indigo-600" />
                        KI-Automatisierung
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/preise-und-pakete"
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Preise
                  </Link>

                  <Link
                    href="/prozess"
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Prozess
                  </Link>

                  <Link
                    href="/portfolio"
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>

                  <Link
                    href="/ueber-uns"
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Über mich
                  </Link>

                  <Link
                    href="/blog"
                    className="block px-3 py-3 rounded-md text-lg font-medium text-gray-600 hover:text-[var(--foreground)] dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              </div>

              {/* Footer button inside the panel (sticky) */}
              <div className="sticky bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950 p-4">
                <Link
                  href="/kontakt"
                  className="flex w-full items-center justify-center rounded-full bg-[var(--primary)] px-4 py-3 text-base font-semibold text-[var(--primary-foreground)] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2"
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
