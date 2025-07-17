'use client'

import { Component, ReactNode } from 'react'
import { Container } from './Container'
import Button from './Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo)
    }
    
    // In production, you could send this to an error reporting service
    // like Sentry, LogRocket, etc.
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <Container className="mt-16 sm:mt-32">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              Etwas ist schiefgelaufen
            </h1>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Entschuldigung, es gab einen unerwarteten Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Button href="/" variant="primary">
                Zur Startseite
              </Button>
              <Button href="/kontakt" variant="secondary">
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </Container>
      )
    }

    return this.props.children
  }
} 