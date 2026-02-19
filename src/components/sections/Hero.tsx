import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const trustItems = ["50+ Projekte", "8+ Jahre Erfahrung", "AT & DE Region"];

export default function Hero() {
  return (
    <section
      className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
      aria-labelledby="hero-heading"
    >
      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left: text content */}
          <div className="relative">
            {/* Optional: subtle radial glow behind text column */}
            <div
              className="absolute -inset-x-8 top-1/2 -translate-y-1/2 h-[120%] w-[140%] max-w-none pointer-events-none opacity-[0.04] dark:opacity-[0.06] hidden lg:block"
              aria-hidden
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 30% 50%, var(--foreground), transparent 70%)',
              }}
            />

            <div className="relative space-y-6">
              <h1
                id="hero-heading"
                className={cn(
                  'font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08]',
                  'text-4xl sm:text-5xl lg:text-6xl'
                )}
              >
                Websites, die Entscheidungen führen.
              </h1>

              <p className="text-xl lg:text-2xl font-medium text-[var(--muted-foreground)] leading-snug space-y-1">
                <span className="block">Die meisten Websites sind nicht falsch.</span>
                <span className="block">Sie sind nur unklar.</span>
              </p>

              <p className="text-base text-[var(--muted-foreground-strong)] leading-relaxed max-w-[520px]">
                Wir bauen Entscheidungsarchitektur für KMU in Österreich und Deutschland: Klarheit, Struktur, messbare Wirkung.
              </p>

              {/* CTA block — clear separation from paragraph */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                <Link
                  href="/kontakt"
                  className={cn(
                    'inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base',
                    'bg-[var(--primary)] text-[var(--primary-foreground)]',
                    'hover:opacity-95 transition-opacity duration-200',
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

              {/* Trust strip — below CTAs, inline, dot separators, label style */}
              <div
                className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-8 pt-2 text-[var(--muted-foreground)] text-sm tracking-wide"
                role="list"
                aria-label="Erfahrung und Reichweite"
              >
                {trustItems.map((item, i) => (
                  <span key={i} className="inline-flex items-center" role="listitem">
                    <span className="uppercase tracking-wider font-medium">
                      {item}
                    </span>
                    {i < trustItems.length - 1 && (
                      <span className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]" aria-hidden>
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: image panel — calm surface, slight vertical offset */}
          <div className="relative w-full lg:pt-8">
            <div
              className="relative w-full overflow-hidden rounded-[24px] bg-[var(--surface-2)] border border-[var(--border)]"
              style={{
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
              }}
            >
              <div className="aspect-[4/3] lg:aspect-[3/2] relative">
                <Image
                  src="/img/hero-image-webdesign.jpg"
                  alt="Beispiel einer klaren Website-Struktur"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[center_20%] brightness-[0.92] contrast-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
