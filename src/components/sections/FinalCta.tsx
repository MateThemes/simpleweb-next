import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

export default function FinalCta() {
  return (
    <section
      className="relative w-full min-h-[420px] overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background image layer */}
      <div className="absolute inset-0">
        <Image
          src="/img/cta-home-bg.jpg"
          fill
          className="object-cover object-[55%_50%]"
          alt=""
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark overlay – AAA contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60"
        aria-hidden
      />

      {/* Subtle top blend from previous white section */}
      <div
        className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 to-transparent pointer-events-none"
        aria-hidden
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.35) 100%)',
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center py-24 lg:py-28 min-h-[420px]">
        <Container>
          <div className="max-w-[720px] mx-auto text-center">
            <h2
              id="final-cta-heading"
              className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8"
            >
              Bereit für Klarheit?
            </h2>
            <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
              Ein Gespräch – unverbindlich, ohne Verkaufsdruck.
            </p>
            <Link
              href="/kontakt"
              className={cn(
                'inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl',
                'bg-white text-gray-900 font-semibold text-lg',
                'transition-all duration-200',
                'hover:-translate-y-0.5 hover:shadow-lg',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
              )}
            >
              Strategie-Gespräch anfragen
            </Link>
          </div>
        </Container>
      </div>
    </section>
  )
}
