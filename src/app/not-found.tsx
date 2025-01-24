import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Container className="flex flex-col items-center justify-center text-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 dark:text-white">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950 dark:text-white">
          Seite nicht gefunden
        </h1>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Entschuldigung, die von Ihnen gesuchte Seite konnte nicht gefunden werden.
        </p>
        <div className="mt-8 flex space-x-4">
          <Button href="/" variant="primary">
            Zur Startseite
          </Button>
          <Button href="/kontakt" variant="secondary">
            Kontakt aufnehmen
          </Button>
        </div>
      </Container>
    </main>
  )
}
