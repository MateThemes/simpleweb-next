import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const trustItems = ['50+ Projekte', 'AT & DE', 'Antwort in 1–2 Werktagen']

export default function Hero() {
  return (
    <section
      className={cn(
        'relative pt-24 sm:pt-28 lg:pt-32 pb-24 lg:pb-32',
        'bg-[var(--background)] dark:bg-[var(--surface-2)]'
      )}
      aria-labelledby="hero-heading"
    >
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-x-16 xl:gap-x-24 lg:gap-y-16 items-center lg:min-h-[min(72vh,680px)]">
          {/* Left: typography + CTAs — constrained so it never overlaps the visual */}
          <div className="relative z-10 lg:col-span-6 xl:col-span-7 space-y-8 lg:space-y-10 max-w-[90vw] sm:max-w-none">
            <h1
              id="hero-heading"
              className="font-display font-semibold text-[var(--foreground)] leading-[1.05] min-w-0 max-w-full break-words"
              style={{
                letterSpacing: '-0.02em',
                fontSize: 'clamp(2.75rem, 5.5vw + 1.5rem, 4.5rem)',
              }}
            >
              Entscheidungs{'\u00AD'}architektur für KMU.
            </h1>

            <p
              className="text-lg lg:text-xl text-[var(--muted-foreground)] leading-snug max-w-[40ch]"
              style={{ letterSpacing: '-0.01em' }}
            >
              Websites, die nicht nur gut aussehen – sondern führen.
            </p>

            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted-foreground)] font-medium opacity-80">
              Klarheit · Struktur · Wirkung
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 flex-wrap">
              <Link
                href="/kontakt"
                className={cn(
                  'inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base',
                  'bg-[var(--primary)] text-[var(--primary-foreground)]',
                  'hover:opacity-95 transition-opacity duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                )}
              >
                Strategie-Gespräch anfragen
              </Link>
              <Link
                href="/seo-audit"
                className={cn(
                  'inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base',
                  'bg-transparent text-[var(--foreground)] border-2 border-[var(--border)]',
                  'hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                )}
              >
                Kostenlose Analyse
              </Link>
            </div>

            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2 text-[var(--muted-foreground)] text-sm tracking-wide"
              role="list"
              aria-label="Erfahrung und Reichweite"
            >
              {trustItems.map((item, i) => (
                <span key={i} className="inline-flex items-center" role="listitem">
                  <span className="uppercase tracking-wider font-medium opacity-90">{item}</span>
                  {i < trustItems.length - 1 && (
                    <span className="mx-2 opacity-50" aria-hidden>
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Right: abstract decision-architecture visual — contained, does not bleed left */}
          <div className="relative z-0 w-full overflow-hidden lg:col-span-6 xl:col-span-5 flex items-center justify-center min-h-[280px] sm:min-h-[320px] lg:min-h-0">
            <div
              className={cn(
                'relative w-full max-w-[min(100%,22rem)] sm:max-w-md lg:max-w-none aspect-square rounded-[24px] p-8 lg:p-10',
                'bg-[var(--surface-2)] dark:bg-[var(--surface)] border border-[var(--border)]',
                'shadow-elev-2 dark:shadow-elev-3'
              )}
            >
              {/* Subtle glow behind diagram — theme-aware (stärker in Light Mode für Sichtbarkeit) */}
              <div
                className="absolute inset-0 rounded-[24px] opacity-[0.22] dark:opacity-[0.25] pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 70% 60% at 50% 50%, var(--primary), transparent 70%)',
                }}
                aria-hidden
              />

              {/* Layered rectangles + connection lines (decision architecture) — currentColor for theme, Light Mode besser lesbar */}
              <div className="relative w-full h-full flex items-center justify-center hero-visual-motion text-[var(--foreground)]">
                <svg
                  viewBox="0 0 280 280"
                  fill="none"
                  className="w-full h-full opacity-[0.2] dark:opacity-[0.12]"
                  aria-hidden
                >
                  {/* Connection lines */}
                  <path
                    d="M70 80 L140 140 L210 80"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    strokeOpacity="0.4"
                  />
                  <path
                    d="M70 200 L140 140 L210 200"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    strokeOpacity="0.25"
                  />
                  <path
                    d="M140 60 L140 140"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.3"
                  />
                  <path
                    d="M140 140 L140 220"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeOpacity="0.2"
                  />
                  {/* Center node (decision) */}
                  <rect
                    x="110"
                    y="115"
                    width="60"
                    height="50"
                    rx="6"
                    fill="currentColor"
                    fillOpacity="0.06"
                    stroke="currentColor"
                    strokeOpacity="0.12"
                    strokeWidth="0.75"
                  />
                  {/* Top layer */}
                  <rect
                    x="95"
                    y="45"
                    width="90"
                    height="36"
                    rx="4"
                    fill="currentColor"
                    fillOpacity="0.04"
                    stroke="currentColor"
                    strokeOpacity="0.08"
                    strokeWidth="0.5"
                  />
                  {/* Side nodes */}
                  <rect
                    x="35"
                    y="65"
                    width="70"
                    height="32"
                    rx="4"
                    fill="currentColor"
                    fillOpacity="0.03"
                    stroke="currentColor"
                    strokeOpacity="0.06"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="175"
                    y="65"
                    width="70"
                    height="32"
                    rx="4"
                    fill="currentColor"
                    fillOpacity="0.03"
                    stroke="currentColor"
                    strokeOpacity="0.06"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="35"
                    y="183"
                    width="70"
                    height="32"
                    rx="4"
                    fill="currentColor"
                    fillOpacity="0.02"
                    stroke="currentColor"
                    strokeOpacity="0.05"
                    strokeWidth="0.5"
                  />
                  <rect
                    x="175"
                    y="183"
                    width="70"
                    height="32"
                    rx="4"
                    fill="currentColor"
                    fillOpacity="0.02"
                    stroke="currentColor"
                    strokeOpacity="0.05"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
