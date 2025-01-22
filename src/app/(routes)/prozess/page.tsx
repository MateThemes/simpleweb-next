import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ProcessStep } from '@/components/ui/ProcessStep'
import { TechStack } from '@/components/ui/TechStack'
import {
  ChatBubbleLeftRightIcon,
  PresentationChartBarIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  CpuChipIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Unser Prozess | SimpleWebDesign',
  description: 'Erfahren Sie mehr über unseren Entwicklungsprozess und die Technologien, die wir für Ihr Projekt einsetzen.',
}

const processSteps = [
  {
    number: 1,
    title: 'Beratung & Anforderungsanalyse',
    description: 'Wir beginnen mit einem ausführlichen Gespräch, um Ihre Anforderungen, Ziele und Wünsche zu verstehen. Dabei beraten wir Sie auch zu technischen Möglichkeiten und optimalen Lösungen für Ihr Projekt.',
    icon: <ChatBubbleLeftRightIcon className="h-4 w-4 text-white dark:text-gray-900" />,
  },
  {
    number: 2,
    title: 'Konzeption & Planung',
    description: 'Basierend auf der Analyse erstellen wir ein detailliertes Konzept. Dies umfasst die Informationsarchitektur, Wireframes und die Auswahl der passenden Technologien für Ihr Projekt.',
    icon: <PresentationChartBarIcon className="h-4 w-4 text-white dark:text-gray-900" />,
  },
  {
    number: 3,
    title: 'Design',
    description: 'Wir gestalten das visuelle Erscheinungsbild Ihrer Website. Dabei achten wir auf moderne Designtrends, Ihre CI und eine optimale Benutzerführung.',
    icon: <PaintBrushIcon className="h-4 w-4 text-white dark:text-gray-900" />,
  },
  {
    number: 4,
    title: 'Entwicklung',
    description: 'Die technische Umsetzung erfolgt mit modernen Frameworks und Tools. Wir entwickeln responsive, performante und SEO-optimierte Websites.',
    icon: <CodeBracketIcon className="h-4 w-4 text-white dark:text-gray-900" />,
  },
  {
    number: 5,
    title: 'Testing & Optimierung',
    description: 'Umfangreiche Tests auf verschiedenen Geräten und Browsern stellen die einwandfreie Funktion sicher. Performance und SEO werden kontinuierlich optimiert.',
    icon: <CpuChipIcon className="h-4 w-4 text-white dark:text-gray-900" />,
  },
  {
    number: 6,
    title: 'Launch & Support',
    description: 'Nach erfolgreicher Abnahme geht Ihre Website online. Wir unterstützen Sie auch nach dem Launch mit Updates, Wartung und Weiterentwicklung.',
    icon: <RocketLaunchIcon className="h-4 w-4 text-white dark:text-gray-900" />,
  },
]

const techStacks = [
  {
    title: 'Next.js',
    description: 'Das React Framework für produktionsbereite Websites',
    imageUrl: '/images/tech/nextjs.svg',
    features: [
      {
        name: 'Server-Side Rendering & Static Generation',
        description: 'Optimale Performance und SEO durch serverseitiges Rendering und statische Generierung.',
      },
      {
        name: 'Moderne Entwicklung',
        description: 'Schnelle Entwicklung mit React, TypeScript und modernen Web-APIs.',
      },
      {
        name: 'Skalierbarkeit',
        description: 'Perfekt für kleine Websites bis hin zu großen Enterprise-Anwendungen.',
      },
    ],
  },
  {
    title: 'Nuxt.js',
    description: 'Das intuitive Vue.js Framework',
    imageUrl: '/images/tech/nuxt.svg',
    features: [
      {
        name: 'Vue.js Ökosystem',
        description: 'Volle Integration mit Vue.js und seinem reichhaltigen Ökosystem.',
      },
      {
        name: 'Auto-Import & Modular',
        description: 'Effiziente Entwicklung durch automatische Imports und modularen Aufbau.',
      },
      {
        name: 'Entwicklerfreundlich',
        description: 'Hervorragende Developer Experience und umfangreiche Dokumentation.',
      },
    ],
  },
  {
    title: 'Astro',
    description: 'Framework für content-fokussierte Websites',
    imageUrl: '/images/tech/astro.svg',
    features: [
      {
        name: 'Content-First',
        description: 'Optimiert für content-lastige Websites wie Blogs und Dokumentationen.',
      },
      {
        name: 'Partial Hydration',
        description: 'Lädt JavaScript nur dort, wo es wirklich benötigt wird.',
      },
      {
        name: 'Framework-Agnostisch',
        description: 'Unterstützt React, Vue, Svelte und andere Frameworks.',
      },
    ],
  },
  {
    title: 'Headless CMS',
    description: 'Flexible Content Management Systeme',
    imageUrl: '/images/tech/cms.svg',
    features: [
      {
        name: 'Content Management',
        description: 'Einfache Verwaltung von Inhalten über benutzerfreundliche Oberflächen.',
      },
      {
        name: 'API-First',
        description: 'Flexible Integration durch moderne APIs und GraphQL.',
      },
      {
        name: 'Skalierbar & Sicher',
        description: 'Enterprise-ready mit rollenbasierter Zugriffskontrolle.',
      },
    ],
  },
]

export default function ProzessPage() {
  return (
    <main className="flex-auto">
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Unser Entwicklungsprozess
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Von der ersten Idee bis zum erfolgreichen Launch begleiten wir Sie mit einem
            strukturierten und transparenten Prozess. Erfahren Sie, wie wir arbeiten und
            welche Technologien wir für Ihr Projekt einsetzen.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16 max-w-3xl">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={step.number}
              {...step}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>

        {/* Tech Stack Section */}
        <div className="mt-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Unsere Technologie-Stack
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Wir setzen auf moderne und zukunftssichere Technologien, die sich bereits
              in vielen Projekten bewährt haben. Je nach Anforderung wählen wir die
              optimale Lösung für Ihr Projekt.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {techStacks.map((tech) => (
              <TechStack key={tech.title} {...tech} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 rounded-2xl bg-gray-50 dark:bg-gray-800/50 p-8 md:p-12">
          <div className="md:text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Bereit für Ihr Projekt?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Lassen Sie uns gemeinsam Ihr Projekt planen. Wir beraten Sie gerne zu den
              besten Technologien und Lösungen für Ihre Anforderungen.
            </p>
            <div className="mt-8">
              <a
                href="/kontakt"
                className="inline-block rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                Projekt besprechen
              </a>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
