import Image from 'next/image'
import { Container } from '@/components/ui/Container'

const blocks = [
  {
    title: 'Einordnung',
    text: 'Was soll die Website leisten – und was nicht? Klarheit vor Struktur. Für KMU in Österreich und Deutschland.',
  },
  {
    title: 'Struktur',
    text: 'Strukturierte Website: Seitenlogik, die Besucher führt und zu Anfragen oder Terminen leitet.',
  },
  {
    title: 'Wirkung',
    text: 'Mehr Anfragen, Termine oder Verkäufe – je nach Ziel. Messbar und nachvollziehbar.',
  },
]

export default function Outcomes() {
  return (
    <section
      className="py-20 lg:py-24 bg-[var(--background)]"
      aria-labelledby="thinking-heading"
    >
      <Container>
        <div className="max-w-[1280px] mx-auto">
          {/* Two-column: headline + text left, image right (desktop); stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 mb-16 lg:mb-20">
            <div className="flex flex-col justify-center min-h-0">
              <h2
                id="thinking-heading"
                className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] mb-6"
              >
                Conversion-optimierte Websites mit klarer Struktur.
              </h2>
              <p className="text-[var(--muted-foreground)] text-lg leading-relaxed max-w-[650px] mb-2">
                Website erstellen lassen oder Website Optimierung: Einordnung, Struktur, messbare Wirkung – mehr Anfragen und Termine.
              </p>
              <ul className="mt-6 space-y-2 text-[var(--muted-foreground)]" aria-hidden>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[var(--foreground)]" aria-hidden />
                  Einordnung · Struktur · Conversion
                </li>
              </ul>
            </div>
            <div className="lg:flex lg:items-end lg:min-h-0">
              <div className="w-full rounded-3xl overflow-hidden bg-[var(--surface-2)] p-3 shadow-elev-2 lg:self-end">
                <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                  <Image
                    src="/img/decision-helper.jpg"
                    alt="Wireframe und Struktur einer conversion-optimierten Website: klare Seitenlogik für mehr Anfragen"
                    width={1200}
                    height={675}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {blocks.map((block, index) => (
              <article
                key={index}
                className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1 flex flex-col"
              >
                <span
                  className="font-display text-4xl lg:text-5xl font-light text-[var(--muted-foreground)] tabular-nums mb-5"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-[var(--foreground)] mb-3">
                  {block.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed max-w-[520px] flex-1">
                  {block.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
