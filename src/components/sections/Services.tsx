'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../ui/Container'
import { 
  DeviceLaptopIcon, 
  ChartBarIcon, 
  ChartArrowsVerticalIcon,
  BrushIcon,
  RocketIcon,
  CheckIcon,
  ArrowRightIcon,
  ServerIcon,
  SparklesIcon
} from '../icons'

const services = [
  {
    id: 'webdesign',
    title: 'Responsive Webdesign für KMU',
    description: 'Moderne Websites mit Next.js und React, die auf allen Geräten perfekt funktionieren. Speziell entwickelt für kleine und mittlere Unternehmen, die online erfolgreich sein wollen.',
    icon: DeviceLaptopIcon,
    bgColor: 'bg-blue-600',
    image: '/img/services/responsive.jpg',
    link: '/services/webdesign',
    features: [
      'Next.js & React Entwicklung',
      'Mobile-First Design für KMU',
      'Schnelle Ladezeiten & Performance',
      'Terminbuchung & Kontaktformulare'
    ]
  },
  {
    id: 'marketing',
    title: 'Online Marketing für KMU',
    description: 'Digitale Marketing-Strategien, die zu Ihrem Budget passen. Wir helfen KMU dabei, online sichtbar zu werden und neue Kunden zu gewinnen.',
    icon: ChartBarIcon,
    bgColor: 'bg-indigo-600',
    image: '/img/services/marketing.jpg',
    link: '/services/marketing',
    features: [
      'Google Ads & Facebook Marketing',
      'Lokale SEO für KMU',
      'Social Media Management',
      'E-Mail Marketing & Newsletter'
    ]
  },
  {
    id: 'seo',
    title: 'SEO-Optimierung für KMU',
    description: 'Lokale SEO-Strategien, die Ihr Unternehmen in der Region sichtbar machen. Perfekt für Handwerker, Dienstleister und lokale Geschäfte.',
    icon: ChartArrowsVerticalIcon,
    bgColor: 'bg-green-600',
    image: '/img/services/seo.jpg',
    link: '/services/seo',
    features: [
      'Lokale Google-Suche optimieren',
      'Google My Business Optimierung',
      'Keyword-Recherche für KMU',
      'Bewertungen & Testimonials'
    ]
  },
  {
    id: 'redesign',
    title: 'Website Redesign für KMU',
    description: 'Ihre bestehende Website auf den neuesten Stand bringen. Wir modernisieren Ihren Webauftritt, ohne dass Sie Kunden verlieren.',
    icon: BrushIcon,
    bgColor: 'bg-purple-600',
    image: '/img/services/redesign.jpg',
    link: '/services/redesign',
    features: [
      'Schrittweise Modernisierung',
      'Mobile-Optimierung nachrüsten',
      'SEO-Verbesserungen',
      'Kontinuierlicher Betrieb'
    ]
  },
  {
    id: 'performance',
    title: 'Performance & Speed für KMU',
    description: 'Schnelle Ladezeiten, die Ihre Besucher begeistern und Google überzeugen. Essentiell für erfolgreiche KMU-Websites.',
    icon: RocketIcon,
    bgColor: 'bg-orange-600',
    image: '/img/services/performance.jpg',
    link: '/services/performance',
    features: [
      'Google Core Web Vitals optimieren',
      'Bild- und Datei-Optimierung',
      'Schnelle Ladezeiten garantieren',
      'Mobile Performance verbessern'
    ]
  },
  {
    id: 'hosting',
    title: 'Hosting & Wartung für KMU',
    description: 'Zuverlässiges Hosting mit Vercel und IONOS sowie regelmäßige Wartung, damit Ihre Website immer erreichbar und sicher bleibt.',
    icon: ServerIcon,
    bgColor: 'bg-teal-600',
    image: '/img/services/hosting.jpg',
    link: '/services/hosting',
    features: [
      'Vercel & IONOS Partner-Hosting',
      'Strapi CMS Integration',
      'SSL-Zertifikate & Sicherheit',
      '24/7 Monitoring & Support'
    ]
  },
  {
    id: 'ki-automatisierung',
    title: 'KI-Automatisierung für KMU',
    description: 'Automatisierung von Routineaufgaben – von Anfrage-Antworten bis Angebots-Vorbereitung. Speziell für Handwerker & lokale Dienstleister.',
    icon: SparklesIcon,
    bgColor: 'bg-indigo-600',
    image: '/img/services/ki-automatisierung.jpg',
    link: '/ki-automatisierung',
    features: [
      'Workflow-Automatisierung',
      'Chatbot & Telegram-Bot',
      'Angebotsgenerator mit KI',
      'DSGVO-konform & effizient'
    ]
  }
]


export default function Services() {
  return (
    <section 
      id="services"
      className="relative scroll-mt-[72px] bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 py-section-xl" 
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-section-lg">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Webdesign-Lösungen für KMU in Österreich & Deutschland
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Moderne Websites, die Ihr Unternehmen digital voranbringen. Von der ersten Idee bis zum erfolgreichen Online-Auftritt – wir begleiten KMU durch die digitale Transformation.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-2xl shadow-lg shadow-gray-900/5 dark:shadow-none ring-1 ring-gray-900/5 dark:ring-white/10 hover:shadow-xl dark:hover:ring-white/20 transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - Webdesign Service für KMU in Österreich und Deutschland`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    quality={60}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <div className={`p-2 rounded-lg ${service.bgColor}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    {service.description}
                    {service.id === 'webdesign' && (
                      <span className="block mt-2">
                        <a href="/services/performance" className="text-blue-600 hover:text-blue-700 underline">Performance optimieren →</a>
                      </span>
                    )}
                    {service.id === 'seo' && (
                      <span className="block mt-2">
                        <a href="/seo-audit" className="text-green-600 hover:text-green-700 underline">Kostenlose SEO-Analyse →</a>
                      </span>
                    )}
                    {service.id === 'marketing' && (
                      <span className="block mt-2">
                        <a href="/services/webdesign" className="text-blue-600 hover:text-blue-700 underline">Webdesign für Marketing →</a>
                      </span>
                    )}
                    {service.id === 'hosting' && (
                      <span className="block mt-2">
                        <a href="/services/performance" className="text-orange-600 hover:text-orange-700 underline">Performance & Hosting →</a>
                      </span>
                    )}
                    {service.id === 'ki-automatisierung' && (
                      <span className="block mt-2">
                        <a href="/preise-und-pakete#ki" className="text-indigo-600 hover:text-indigo-700 underline">KI-Preise & Pakete →</a>
                      </span>
                    )}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className="inline-flex items-center text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/link"
                  >
                    Mehr erfahren
                    <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}