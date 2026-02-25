'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Input } from '@/components/ui/Input'
import { Accordion } from '@/components/ui/Accordion'
import { PricingCard } from '@/components/ui/PricingCard'
import {
  CheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  SearchIcon,
  CodeIcon,
  RocketLaunchIcon,
  ChatBubbleIcon,
  RouteIcon,
  FileTextIcon,
  LightBulbIcon,
} from '@/components/icons'

// Problem → Lösung Data
const problems = [
  'Stunden mit manuellen Angeboten vergeudet',
  'Anfragen per E-Mail, WhatsApp, Facebook – alles manuell',
  'Termine vergessen, Kunden unzufrieden',
  'Fehlerhafte Preisberechnungen durch Stress',
]

const solutions = [
  'Workflows: Formular → sofortige Antwort → CRM-Eintrag',
  'Chat/Telegram-Bots: 24/7 Antworten, Übergabe an Mensch',
  'Automatische E-Mails: Terminerinnerungen, Follow-ups',
  'KI-Offer: Richtwert-Angebote als Rohentwurf, Sie prüfen',
]

// Leistungen Data – 4 Kernbereiche, ohne Tool-Nennung
const services = [
  {
    title: 'Anfrage- & Lead-Automatisierung',
    description:
      'Eingehende Anfragen werden erfasst, ins CRM überführt und der Kunde erhält eine sofortige Bestätigung – Sie behalten die Übersicht.',
    icon: RouteIcon,
  },
  {
    title: 'Angebots- & Dokument-Automatisierung',
    description:
      'Automatisierte Angebotserstellung als Rohentwurf aus Kundendaten, PDF-Vorlagen und Dokumente – Sie prüfen und finalisieren.',
    icon: FileTextIcon,
  },
  {
    title: 'Chatbot & Kommunikation',
    description:
      'Automatische Antworten auf häufige Fragen, bei Bedarf nahtlose Übergabe an Sie – auch außerhalb der Geschäftszeiten.',
    icon: ChatBubbleIcon,
  },
  {
    title: 'CRM & Follow-up Automatisierung',
    description:
      'Lead-Routing, Terminerinnerungen und Follow-ups per E-Mail oder Nachricht – damit nichts liegen bleibt.',
    icon: RouteIcon,
  },
]

// Use-Cases Data
const useCases = [
  {
    title: 'Bodenleger',
    description:
      'Anfrage → Besichtigungstermin-Vorschlag → Richtwert-Angebot (mit Hinweis auf Untergrundprüfung)',
    icon: RouteIcon,
  },
  {
    title: 'Maler',
    description:
      'Quadratmeter + Untergrund → Materialliste + E-Mail-Entwurf an Kunde',
    icon: SparklesIcon,
  },
  {
    title: 'Dienstleister',
    description:
      'Website-Chat → Terminbuchung + automatischer Reminder per SMS',
    icon: ChatBubbleIcon,
  },
]

// Ablauf Data
const processSteps = [
  {
    title: 'Analyse',
    description:
      'Wir analysieren Ihre aktuellen Prozesse und identifizieren Automatisierungspotenziale.',
    icon: SearchIcon,
  },
  {
    title: 'Konzept',
    description:
      'Gemeinsam entwickeln wir eine maßgeschneiderte Automatisierungsstrategie für Ihr KMU.',
    icon: LightBulbIcon,
  },
  {
    title: 'Umsetzung',
    description:
      'Wir setzen die Workflows um – mit etablierten Workflow- und KI-Systemen, auf Wunsch EU-gehostet.',
    icon: CodeIcon,
  },
  {
    title: 'Support & Optimierung',
    description:
      'Nach dem Launch begleiten wir Sie und optimieren die Automatisierungen kontinuierlich.',
    icon: RocketLaunchIcon,
  },
]

// Vorteile Data
const benefits = [
  {
    title: 'Zeit & Kosten sparen',
    description: 'Weniger manuelle Arbeit bedeutet mehr Zeit für Ihr Kerngeschäft.',
    icon: ClockIcon,
  },
  {
    title: 'Weniger Fehler',
    description:
      'Automatisierte Prozesse reduzieren menschliche Fehlerquellen deutlich.',
    icon: ShieldCheckIcon,
  },
  {
    title: '24/7 Reaktionsfähigkeit',
    description:
      'Ihre Kunden erhalten sofort Antworten – auch außerhalb der Geschäftszeiten.',
    icon: ClockIcon,
  },
  {
    title: 'Bessere Kundenerfahrung',
    description:
      'Schnelle, professionelle Kommunikation steigert die Zufriedenheit Ihrer Kunden.',
    icon: ChatBubbleIcon,
  },
  {
    title: 'Messbare Prozesse',
    description:
      'Alle Automatisierungen liefern Metriken – Sie sehen, wo Zeit gespart wird.',
    icon: RouteIcon,
  },
]

// FAQ Data
const faqs = [
  {
    question: 'Ersetzt KI meinen Fachverstand?',
    answer:
      'Nein. KI erstellt lediglich Rohentwürfe für Angebote oder Antworten. Sie als Fachkraft prüfen, korrigieren und entscheiden. Die KI ist Ihr Assistent, nicht Ihr Ersatz.',
  },
  {
    question: 'DSGVO & Hosting – wo liegen die Daten?',
    answer:
      'Wir können EU-Hosting (z. B. Hetzner) nutzen. Wir arbeiten datensparsam und können auf Wunsch eine Auftragsverarbeitungsvereinbarung (AVV) erstellen.',
  },
  {
    question: 'Welche Tools nutzt ihr?',
    answer:
      'Wir arbeiten mit n8n/Make für Workflows, OpenAI/Claude für KI-Textgenerierung, Mautic für E-Mail-Marketing, Resend für Transaktions-E-Mails und Google-Integrationen (Sheets, Drive, Calendar).',
  },
  {
    question: 'Wie schnell starten wir?',
    answer:
      'Nach dem Kick-off haben Sie in der Regel innerhalb von 7–14 Werktagen erste funktionierende Automatisierungen. Komplexere Workflows benötigen 3–4 Wochen.',
  },
]

// Pakete Data - synchronisiert mit Preise & Pakete Seite
const packages = [
  {
    name: 'KI Basic',
    description: 'Einfache Automatisierung für den Einstieg – perfekt für erste Schritte in die Digitalisierung.',
    price: '690',
    features: [
      { name: 'Einfache Automatisierung', included: true },
      { name: 'E-Mail → Google Sheet', included: true },
      { name: 'Kontaktformular → CRM', included: true },
      { name: 'Etablierte Workflow-Systeme', included: true },
      { name: 'Basis-Dokumentation', included: true },
    ],
    popular: false,
  },
  {
    name: 'KI Advanced',
    description: 'Mehrstufige Automatisierungen mit Workflow-Management – für komplexere Prozesse.',
    price: '1.290',
    features: [
      { name: 'Mehrstufige Automatisierungen', included: true },
      { name: 'Workflow-Management', included: true },
      { name: 'Angebotsworkflow', included: true },
      { name: 'Automatische Benachrichtigungen', included: true },
      { name: 'GPT-Integration möglich', included: true },
      { name: 'Dokumentation & Einweisung', included: true },
    ],
    popular: true,
  },
  {
    name: 'KI Komplettsystem',
    description: 'Individuelle KI-Lösungen mit Schulung – für anspruchsvolle Automatisierungsprojekte.',
    price: '2.490',
    features: [
      { name: 'Individuelle KI-Lösungen', included: true },
      { name: 'Chatbot oder Telegram-Integration', included: true },
      { name: 'Angebotsgenerator mit KI', included: true },
      { name: 'Schulung & Onboarding', included: true },
      { name: 'Laufender Support (3 Monate)', included: true },
      { name: 'Monitoring-Dashboard', included: true },
    ],
    popular: false,
  },
]

export function KIAutomatisierungContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    _honeypot: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  )
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      const response = await fetch('/api/lead/ki-automatisierung', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          _honeypot: '',
        })
        // Scroll to form on success
        document
          .getElementById('contact-form')
          ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(
          data.error ||
            'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
        )
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage(
        'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="flex-auto">
      {/* Hero — Struktur wie /services/marketing, Keyfacts, dezente Caption */}
      <section
        className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-20 lg:pb-28"
        aria-labelledby="ki-hero-heading"
      >
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div className="relative w-full">
              <div
                className="absolute -inset-x-8 top-1/2 -translate-y-1/2 h-[120%] w-[140%] max-w-none pointer-events-none opacity-[0.04] dark:opacity-[0.06] hidden lg:block"
                aria-hidden
                style={{
                  background:
                    'radial-gradient(ellipse 70% 60% at 30% 50%, var(--foreground), transparent 70%)',
                }}
              />
              <div className="relative space-y-6 max-w-2xl mx-auto">
                <p className="text-sm font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                  KI-Automatisierung für KMU
                </p>
                <h1
                  id="ki-hero-heading"
                  className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl"
                >
                  KI-Automatisierung für KMU in Österreich & Deutschland
                </h1>
                <p className="mt-10 text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed max-w-xl">
                  Wir automatisieren Routineprozesse – von Anfrage bis Angebot – damit Sie Zeit sparen und strukturierter arbeiten.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact-form')}
                    className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                  >
                    Kostenlosen KI-Check anfordern
                    <ArrowRightIcon className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('use-cases')}
                    className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base bg-transparent text-[var(--foreground)] border-2 border-[var(--border)] hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]"
                  >
                    Beispiele ansehen
                  </button>
                </div>
                <div
                  className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-8 pt-2 text-[var(--muted-foreground)] text-sm tracking-wide"
                  role="list"
                  aria-label="Erfahrung und Reichweite"
                >
                  <span className="uppercase tracking-wider font-medium" role="listitem">
                    50+ Projekte
                  </span>
                  <span className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]" aria-hidden>·</span>
                  <span className="uppercase tracking-wider font-medium" role="listitem">
                    AT & DE
                  </span>
                  <span className="mx-2 text-[var(--border)] dark:text-[var(--muted-foreground)]" aria-hidden>·</span>
                  <span className="uppercase tracking-wider font-medium" role="listitem">
                    Antwort in 1–2 Werktagen
                  </span>
                </div>
                <p className="mt-3 text-xs text-[var(--muted-foreground)]/90">
                  DSGVO-bedacht · Erprobt für kleine Betriebe · Schnelle Umsetzung
                </p>
              </div>
            </div>
            <div className="relative w-full lg:pt-8">
              <div
                className="relative w-full overflow-hidden rounded-[24px] bg-[var(--surface-2)] border border-[var(--border)]"
                style={{
                  boxShadow:
                    '0 4px 6px -1px rgb(0 0 0 / 0.06), 0 2px 4px -2px rgb(0 0 0 / 0.04)',
                }}
              >
                <div className="aspect-square relative">
                  <Image
                    src="/img/services/ki-automatisierung.jpg"
                    alt="KI-Automatisierung und Prozessautomatisierung für KMU in Österreich und Deutschland"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center brightness-[0.92] contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem → Lösung — M3 Cards, klare Trennung, keine Emojis */}
      <section
        className="py-24 lg:py-28 bg-[var(--surface-2)]"
        aria-labelledby="probleme-loesungen-heading"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2
              id="probleme-loesungen-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
            >
              Probleme, die wir lösen
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              Typische Stolpersteine bei Prozessautomatisierung – und wie Workflow-Automatisierung hilft.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none md:grid-cols-2">
            <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
              <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                Typische Probleme
              </h3>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                {problems.map((problem, index) => (
                  <li key={index} className="flex gap-2">
                    <span className="text-red-600 dark:text-red-400 flex-shrink-0" aria-hidden>×</span>
                    {problem}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]">
              <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-3">
                Unsere Lösungen
              </h3>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex gap-2">
                    <CheckIcon className="h-5 w-5 text-[var(--primary)] flex-shrink-0 mt-0.5" aria-hidden />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Leistungen — 4 Kernbereiche, M3 Cards */}
      <section
        className="py-24 lg:py-28 bg-[var(--background)]"
        aria-labelledby="leistungen-heading"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2
              id="leistungen-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
            >
              Unsere Leistungen
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              KI-Automatisierung für KMU in vier Kernbereichen – etablierte Workflow- und KI-Systeme, auf Wunsch EU-gehostet.
            </p>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60">
                    <IconComponent className="h-5 w-5 text-[var(--primary)]" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Use-Cases — Anwendungsbeispiele, SEO: KI für Handwerker */}
      <section
        id="use-cases"
        className="py-24 lg:py-28 bg-[var(--surface-2)]"
        aria-labelledby="use-cases-heading"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2
              id="use-cases-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
            >
              Anwendungsbeispiele
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              KI für Handwerker & Dienstleister: von Workflow-Automatisierung bis Angebotsautomatisierung.
            </p>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-3">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60">
                      <IconComponent className="h-5 w-5 text-[var(--primary)]" aria-hidden />
                    </div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Ablauf Section */}
      <section
        className="py-24 lg:py-28 bg-[var(--background)]"
        aria-labelledby="ablauf-heading"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2
              id="ablauf-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
            >
              Unser Vorgehen
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              Von der Analyse bis zur Implementierung – in 4 klaren Schritten
            </p>
          </div>

          <div className="mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:mt-20">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--muted)]/60 text-[var(--primary)]">
                      <IconComponent className="w-8 h-8" aria-hidden />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-[var(--primary)]">
                      Schritt {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-[var(--foreground)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Vorteile Section — M3 Cards, SEO: Prozessautomatisierung */}
      <section
        className="py-24 lg:py-28 bg-[var(--surface-2)]"
        aria-labelledby="vorteile-heading"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2
              id="vorteile-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
            >
              Ihre Vorteile
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              Warum KMU auf Prozessautomatisierung und KI-Automatisierung setzen
            </p>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="flex gap-5 rounded-2xl bg-[var(--surface)]/80 border border-[var(--border)]/60 p-6 lg:p-8 transition-[box-shadow] duration-200 hover:shadow-[var(--shadow-3)]"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--muted)]/60">
                    <IconComponent className="h-5 w-5 text-[var(--primary)]" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Pakete & Preise — M3 Pricing Cards, Beliebt bei KI Advanced */}
      <section
        className="py-24 lg:py-28 bg-[var(--background)]"
        aria-labelledby="pakete-heading"
      >
        <Container>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2
              id="pakete-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl"
            >
              Pakete & Preise
            </h2>
            <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
              Wählen Sie das passende Paket für Ihr KMU
            </p>
          </div>
          <div className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:mt-20 md:grid-cols-3 mb-8">
            {packages.map((pkg, index) => (
              <PricingCard
                key={index}
                name={pkg.name}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                popular={pkg.popular}
                ctaText="Paket anfragen"
                ctaLink="#contact-form"
              />
            ))}
          </div>
          <p className="text-center text-sm text-[var(--muted-foreground)]">
            Laufende Betreuung ab 59 €/Monat (Monitoring & kleine Anpassungen)
          </p>
        </Container>
      </section>

      {/* FAQ Section — Tools hier erwähnt */}
      <section
        className="py-24 lg:py-28 bg-[var(--surface-2)]"
        aria-labelledby="faq-heading"
      >
        <Container className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl mb-4"
            >
              Häufige Fragen
            </h2>
            <p className="text-lg text-[var(--muted-foreground)]">
              Antworten auf die wichtigsten Fragen zur KI-Automatisierung
            </p>
          </div>
          <Accordion items={faqs} />
        </Container>
      </section>

      {/* CTA / Kontakt — Headline & Subline angepasst */}
      <section
        id="contact-form"
        className="py-24 lg:py-28 bg-[var(--surface-2)]"
        aria-labelledby="cta-heading"
      >
        <Container className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 lg:p-12 shadow-[var(--shadow-1)]">
            <div className="text-center mb-8">
              <h2
                id="cta-heading"
                className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl mb-4"
              >
                Wo verlieren Sie aktuell Zeit?
              </h2>
              <p className="text-lg text-[var(--muted-foreground)]">
                Wir analysieren Ihre Prozesse und zeigen konkrete Automatisierungspotenziale – unverbindlich.
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-sm font-medium">
                  ✓ Vielen Dank für Ihr Interesse! Wir melden uns in Kürze.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                  {errorMessage ||
                    'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Ihr Name"
              />

              <Input
                type="email"
                label="E-Mail"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="ihre@email.at"
              />

              <Input
                type="text"
                label="Unternehmen"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                placeholder="Ihr Unternehmen"
              />

              <Input
                type="tel"
                label="Telefon (optional)"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+43 664 ..."
              />

              <Input
                type="textarea"
                label="Wo wollen Sie Zeit sparen?"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Beschreiben Sie kurz Ihre aktuelle Situation und wo Sie Automatisierungspotenzial sehen..."
              />

              {/* Honeypot field - hidden from real users */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="_honeypot">Leave this field empty</label>
                <input
                  type="text"
                  id="_honeypot"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={handleInputChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-medium transition bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'KI-Potenzial prüfen lassen'}
                {!isSubmitting && <ArrowRightIcon className="w-5 h-5" />}
              </button>

              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">
                Wir verarbeiten Ihre Angaben zur Kontaktaufnahme gemäß{' '}
                <Link
                  href="/datenschutz"
                  className="underline hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </form>
          </div>
        </Container>
      </section>
    </main>
  )
}

