import { Container } from '@/components/ui/Container'

export default function ProjectTestimonial() {
  return (
    <section
      className="py-20 lg:py-24 bg-[var(--background)]"
      aria-labelledby="customer-voice-heading"
    >
      <Container>
        <div className="max-w-[1280px] mx-auto">
          <header className="max-w-[650px] mb-12 lg:mb-14">
            <p className="text-sm font-medium uppercase tracking-wider text-[var(--muted-foreground)] mb-3">
              Stimme aus einem Projekt
            </p>
            <h2
              id="customer-voice-heading"
              className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] mb-4"
            >
              Erste Rückmeldungen aus Kundenprojekten
            </h2>
            <p className="text-lg text-[var(--muted-foreground)] leading-relaxed">
              Auch wenn jedes Projekt unterschiedlich ist, zeigen Rückmeldungen aus echten Projekten oft das gleiche Muster: Klarere Struktur führt zu mehr Orientierung und Vertrauen bei Besuchern.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Testimonial */}
            <div className="flex flex-col">
              <blockquote
                className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1 flex-1 flex flex-col"
                cite="https://www.google.com/"
              >
                <p className="text-xl lg:text-[1.25rem] text-[var(--foreground)] leading-relaxed mb-6">
                  „Sehr zu empfehlen !"
                </p>
                <footer className="border-t border-[var(--border)] pt-5 mt-auto">
                  <p className="text-[var(--foreground)] font-medium">
                    — Parkett Stelzl
                  </p>
                  <p className="text-sm text-[var(--muted-foreground)] mt-0.5">
                    Google-Rezension
                  </p>
                </footer>
              </blockquote>
              <p className="mt-5 text-[15px] text-[var(--muted-foreground)] leading-relaxed">
                Aktuell arbeiten wir am Redesign der Website im Rahmen eines Relaunch-Projekts.
              </p>
            </div>

            {/* Card 2: Project */}
            <article
              className="rounded-[var(--radius-2xl)] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-1 flex flex-col"
              aria-labelledby="project-card-heading"
            >
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--muted-foreground)] mb-3">
                Aktuelles Projekt
              </p>
              <h3
                id="project-card-heading"
                className="font-display text-lg lg:text-xl font-semibold tracking-tight text-[var(--foreground)] mb-4"
              >
                Website Relaunch – Parkett Stelzl
              </h3>
              <p className="text-[var(--foreground)] text-[15px] lg:text-base leading-relaxed flex-1">
                Im Rahmen eines Relaunch-Projekts entsteht aktuell eine neue Website für Parkett Stelzl.
                Ziel ist eine klarere Struktur, bessere Besucherführung und mehr qualifizierte Anfragen über die Website.
              </p>
              <div className="mt-6 pt-5 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--muted-foreground)] mb-3">
                  Projektstatus: in Umsetzung
                </p>
                <p className="text-sm font-medium text-[var(--primary)]">
                  Projekt später ansehen
                </p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  )
}
