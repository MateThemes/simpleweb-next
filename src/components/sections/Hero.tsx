import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const trustItems = ['50+ Projekte', 'Österreich & Deutschland', 'Antwort in 1–2 Werktagen']

export default function Hero() {
  return (
    <section
      className={cn(
        'relative min-h-[640px] sm:min-h-[680px] pt-24 sm:pt-28 lg:pt-32 pb-24 lg:pb-32',
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
              Webdesign für KMU in Österreich & Deutschland
            </h1>

            <p
              className="text-lg lg:text-xl text-[var(--muted-foreground)] leading-snug max-w-[40ch]"
              style={{ letterSpacing: '-0.01em' }}
            >
              Strukturierte, conversion-optimierte Websites, die mehr Anfragen und Termine bringen.
            </p>

            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300 font-medium">
              Klarheit · Struktur · Conversion
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2 flex-wrap">
              <div>
                <Link
                  href="/kontakt"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base',
                    'bg-[var(--primary)] text-[var(--primary-foreground)]',
                    'hover:opacity-95 transition-opacity duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                  )}
                >
                  Kostenloses Strategiegespräch anfragen
                </Link>
                <p className="text-sm text-[var(--muted-foreground)] mt-2">
                  Unverbindlich. Ohne Verkaufsdruck.
                </p>
                <p className="text-xs text-[var(--muted-foreground)] mt-1">
                  Besonders sinnvoll, wenn deine Website zu wenig Anfragen bringt.
                </p>
              </div>
              <Link
                href="/seo-audit"
                className={cn(
                  'inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base',
                  'bg-transparent text-[var(--foreground)] border-2 border-[var(--border)]',
                  'hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-150',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
                )}
              >
                Kostenlose Website-Analyse anfordern
              </Link>
            </div>

            <ul
              className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-2 text-[var(--muted-foreground)] text-sm tracking-wide list-none p-0 m-0"
              aria-label="Erfahrung und Reichweite"
            >
              {trustItems.map((item, i) => (
                <li key={i} className="inline-flex items-center">
                  <span className="uppercase tracking-wider font-medium opacity-90">{item}</span>
                  {i < trustItems.length - 1 && (
                    <span className="mx-2 opacity-50" aria-hidden>
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: hero image — aspect-square reserves space to prevent CLS */}
          <div className="relative z-0 w-full overflow-hidden lg:col-span-6 xl:col-span-5 flex items-center justify-center min-h-[280px] sm:min-h-[320px] lg:min-h-0">
            <div
              className={cn(
                'relative w-full max-w-[min(100%,22rem)] sm:max-w-md lg:max-w-none aspect-square rounded-[24px] overflow-hidden',
                'border border-[var(--border)] shadow-elev-2 dark:shadow-elev-3'
              )}
            >
              <Image
                src="/img/hero-new-abstract.jpg"
                alt="Webdesign für KMU – conversion-optimierte Websites in Österreich und Deutschland"
                fill
                priority
                fetchPriority="high"
                quality={75}
                sizes="(max-width: 640px) 22rem, (max-width: 1024px) 28rem, 449px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
