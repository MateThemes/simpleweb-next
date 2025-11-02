import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { 
  SearchIcon, 
  PaletteIcon, 
  CodeIcon, 
  RocketLaunchIcon,
  CheckIcon,
  ChatBubbleIcon,
  ClockIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@/components/icons'
import { processSchema, breadcrumbSchema, webPageSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'Webdesign Prozess für KMU | SimpleWebDesign Österreich & Deutschland',
  description: 'Erfahren Sie, wie SimpleWebDesign KMU durch Analyse, Design, Entwicklung und Launch begleitet – mit klarer Struktur, moderner Technik & messbarem Erfolg.',
  openGraph: {
    title: 'Webdesign Prozess für KMU | SimpleWebDesign Österreich & Deutschland',
    description: 'Erfahren Sie, wie SimpleWebDesign KMU durch Analyse, Design, Entwicklung und Launch begleitet – mit klarer Struktur, moderner Technik & messbarem Erfolg.',
    url: 'https://simplewebdesign.at/prozess',
    images: [
      {
        url: '/img/process/workflow.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWebDesign Webdesign-Prozess für KMU in Österreich & Deutschland'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign Prozess für KMU | SimpleWebDesign Österreich & Deutschland',
    description: 'Erfahren Sie, wie SimpleWebDesign KMU durch Analyse, Design, Entwicklung und Launch begleitet – mit klarer Struktur, moderner Technik & messbarem Erfolg.',
    images: ['/img/process/workflow.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/prozess'
  }
}

// Process steps data
const processSteps = [
  {
    name: 'Analyse & Planung',
    description: 'Wir analysieren Ihre Anforderungen, Ziele und Zielgruppen gründlich. Zusammen entwickeln wir eine maßgeschneiderte Strategie, die perfekt auf Ihr KMU zugeschnitten ist. Diese fundierte Analyse bildet die Basis für ein erfolgreiches Projekt.',
    image: '/img/process/analysis.jpg',
    icon: SearchIcon
  },
  {
    name: 'Design & Konzeption',
    description: 'Basierend auf der Analyse erstellen wir ein modernes, benutzerfreundliches Design-Konzept. Ihr Corporate Design wird dabei berücksichtigt, um eine einheitliche Markenpräsenz zu gewährleisten. Sie sehen erste Entwürfe und können frühzeitig Feedback geben.',
    image: '/img/process/design.jpg',
    icon: PaletteIcon
  },
  {
    name: 'Entwicklung',
    description: 'Mit modernsten Technologien wie Next.js entwickeln wir Ihre Website leistungsstark und SEO-optimiert. Dabei setzen wir auf sauberen Code, schnelle Ladezeiten und mobile Optimierung – alles für die bestmögliche Nutzererfahrung.',
    image: '/img/process/development.jpg',
    icon: CodeIcon
  },
  {
    name: 'Testing & Launch',
    description: 'Umfangreiche Tests stellen sicher, dass alle Funktionen einwandfrei arbeiten und die Website auf allen Geräten perfekt dargestellt wird. Nach dem Launch bieten wir kontinuierlichen Support und stehen Ihnen bei Fragen zur Verfügung.',
    image: '/img/process/launch.jpg',
    icon: RocketLaunchIcon
  }
]

// Benefits data
const benefits = [
  {
    title: 'Transparente Kommunikation',
    description: 'Regelmäßige Updates und klare Absprachen in jeder Projektphase',
    icon: ChatBubbleIcon
  },
  {
    title: 'Effiziente Projektabwicklung',
    description: 'Strukturierter Workflow ohne unnötige Verzögerungen',
    icon: ClockIcon
  },
  {
    title: 'Qualitätssicherung',
    description: 'Regelmäßige Reviews und Tests für höchste Qualitätsstandards',
    icon: ShieldCheckIcon
  },
  {
    title: 'Termingerechte Fertigstellung',
    description: 'Zuverlässige Einhaltung von Deadlines und Projektzeiten',
    icon: CheckIcon
  }
]

export default function ProcessPage() {
  // Schema.org Structured Data
  const schemas = [
    processSchema({
      name: 'SimpleWebDesign Webdesign-Prozess',
      description: 'Unser strukturierter Webdesign-Prozess von der Analyse bis zum Launch für KMU in Österreich & Deutschland.',
      image: '/img/process/workflow.jpg',
      steps: processSteps.map(step => ({
        name: step.name,
        description: step.description,
        image: step.image
      }))
    }),
    breadcrumbSchema({
      items: [
        { name: 'Home', url: 'https://simplewebdesign.at' },
        { name: 'Prozess', url: 'https://simplewebdesign.at/prozess' }
      ]
    }),
    webPageSchema({
      name: 'Webdesign Prozess für KMU',
      description: 'Erfahren Sie, wie SimpleWebDesign KMU durch Analyse, Design, Entwicklung und Launch begleitet – mit klarer Struktur, moderner Technik & messbarem Erfolg.',
      url: 'https://simplewebdesign.at/prozess',
      image: 'https://simplewebdesign.at/img/process/workflow.jpg'
    })
  ]

  return (
    <>
      {/* Schema.org JSON-LD */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="flex-auto">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
          <Container className="max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full border border-indigo-200 dark:border-indigo-800 mb-8">
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">🔄 Strukturierter Prozess</span>
              </div>
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
                Unser strukturierter Webdesign-Prozess
              </h1>
              <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                Von der Idee bis zum erfolgreichen Launch – so begleiten wir KMU in Österreich & Deutschland durch jeden Schritt des Webdesign-Prozesses. Mit klarer Struktur, moderner Technik und messbarem Erfolg.
              </p>
              <div className="mt-8">
                <Button 
                  href="/kontakt"
                  variant="primary"
                  className="text-lg px-8 py-4"
                >
                  Kostenlose Erstberatung sichern
                  <ArrowRightIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Process Steps Section */}
        <section className="py-16 lg:py-24">
          <Container className="max-w-5xl mx-auto">
            <div className="space-y-16 lg:space-y-24">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={step.name} className="relative">
                    {/* Step 1 – Analyse & Planung */}
                    {/* Step 2 – Design & Konzeption */}
                    {/* Step 3 – Entwicklung */}
                    {/* Step 4 – Testing & Launch */}
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Content */}
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                              Schritt {index + 1}
                            </span>
                          </div>
                        </div>
                        <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white mb-4">
                          {step.name}
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Image */}
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                          <Image
                            src={step.image}
                            alt={step.name}
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-slate-900">
          <Container className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 dark:text-white sm:text-4xl mb-4">
                Ihre Vorteile
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                Unser strukturierter Prozess garantiert Ihnen höchste Qualität und Zuverlässigkeit in jeder Phase.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700"
                  >
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
                )
              })}
            </div>
          </Container>
        </section>

        {/* Statistics Section */}
        <section className="py-16 lg:py-24">
          <Container className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">50+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">KMU-Projekte</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Jahre Erfahrung</div>
              </div>
              <div className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Zufriedenheit</div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-indigo-600 to-purple-600">
          <Container className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl px-8 py-16 lg:px-16 lg:py-20">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
              <div className="relative text-center">
                <h2 className="text-3xl font-bold text-white mb-4 sm:text-4xl">
                  Bereit, Ihr Projekt zu starten?
                </h2>
                <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                  Lassen Sie uns gemeinsam Ihre Website zum Erfolg führen.
                </p>
                <Link
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>Kostenlose Erstberatung buchen</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}
