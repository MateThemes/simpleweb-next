'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Input } from '@/components/ui/Input'
import { Accordion } from '@/components/ui/Accordion'
import { PriceCard } from '@/components/ui/PriceCard'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import {
  SparklesIcon,
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

// Leistungen Data
const services = [
  {
    title: 'Anfrage-Workflow',
    description:
      'Formular/Website → Google Sheet/CRM → Sofort-Antwort per E-Mail/SMS',
    icon: RouteIcon,
  },
  {
    title: 'Richtwert-Angebote mit KI',
    description:
      'Rohtext + PDF-Entwurf basierend auf Kundendaten, Sie prüfen & finalisieren',
    icon: SparklesIcon,
  },
  {
    title: 'Chatbot/Telegram-Bot',
    description:
      '24/7 automatische Antworten, bei Bedarf Übergabe an menschlichen Ansprechpartner',
    icon: ChatBubbleIcon,
  },
  {
    title: 'Lead-Routing & Follow-ups',
    description:
      'Facebook/Website-Leads automatisch verteilen → E-Mail/SMS/WhatsApp-Benachrichtigungen',
    icon: RouteIcon,
  },
  {
    title: 'Dokument-Automatisierung',
    description:
      'PDF-Erstellung, Vorlagen, E-Signaturen – alles automatisiert',
    icon: FileTextIcon,
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
      'Wir setzen die Workflows und Bots um – mit modernen Tools wie n8n/Make und OpenAI.',
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
      { name: 'Einrichtung mit n8n/Make/Zapier', included: true },
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
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
        <Container className="max-w-5xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-8">
              <SparklesIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                KI-Automatisierung
              </span>
            </div>
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              KI-Automatisierung für KMU: weniger Handarbeit, mehr Ergebnis.
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Wir digitalisieren Routineaufgaben – von Anfrage-Antworten bis
              Angebots-Vorbereitung. Speziell für Handwerker & lokale
              Dienstleister.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => scrollToSection('contact-form')}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-medium transition bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Kostenlosen KI-Check anfordern
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('use-cases')}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-lg font-medium transition bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Beispiele ansehen
              </button>
            </div>
            <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
              DSGVO-bedacht • Erprobt für kleine Betriebe • Schnelle Umsetzung
            </p>
          </div>
        </Container>
      </section>

      {/* Problem → Lösung Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-900">
        <Container className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Probleme */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white mb-6">
                Probleme, die wir lösen
              </h2>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-red-500 dark:text-red-400 flex-shrink-0 mt-1">
                      ×
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {problem}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lösungen */}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white mb-6">
                Unsere Lösungen
              </h2>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex gap-3">
                    <CheckIcon className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1 w-5 h-5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Leistungen Section */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Automatisierungslösungen speziell für KMU in Österreich &
              Deutschland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} variant="elevated" className="p-6">
                  <CardHeader className="p-0 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-950 dark:text-white">
                        {service.title}
                      </h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Use-Cases Section */}
      <section
        id="use-cases"
        className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-900"
      >
        <Container className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl mb-4">
              Anwendungsbeispiele
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              So setzen Handwerker & Dienstleister KI-Automatisierung ein
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <Card key={index} variant="outlined" className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-950 dark:text-white">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {useCase.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Ablauf Section */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl mb-4">
              Unser Vorgehen
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Von der Analyse bis zur Implementierung – in 4 klaren Schritten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      Schritt {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-950 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Vorteile Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-900">
        <Container className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl mb-4">
              Ihre Vorteile
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Warum KMU auf KI-Automatisierung setzen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} variant="outlined" className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-950 dark:text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Pakete & Preise Section */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl mb-4">
              Pakete & Preise
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Wählen Sie das passende Paket für Ihr KMU
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {packages.map((pkg, index) => (
              <PriceCard
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

          <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
            Laufende Betreuung ab 59 €/Monat (Monitoring & kleine Anpassungen)
          </p>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-900">
        <Container className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl mb-4">
              Häufige Fragen
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Antworten auf die wichtigsten Fragen zur KI-Automatisierung
            </p>
          </div>

          <Accordion items={faqs} />
        </Container>
      </section>

      {/* CTA / Kontakt Section */}
      <section
        id="contact-form"
        className="py-16 lg:py-24 bg-gradient-to-r from-indigo-600 to-purple-600"
      >
        <Container className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-neutral-950 dark:text-white mb-4">
                Jetzt kostenlosen KI-Check anfordern
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Wir analysieren Ihr Automatisierungspotenzial und zeigen
                Ihnen, wo Sie Zeit sparen können.
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

