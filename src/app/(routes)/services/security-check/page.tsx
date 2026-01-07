import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { ShieldCheckIcon, CheckIcon } from '@/components/icons'
import { breadcrumbSchema } from '@/app/schema'
import { getServicePageDC } from '@/lib/dublinCore'

export const metadata: Metadata = {
  title: 'Website Security Check für KMU: Klarheit, Risiko-Einordnung, Maßnahmen | SimpleWebDesign',
  description: 'Website Security Check für KMU in Österreich & Deutschland: Legal, kontrolliert, transparent. Kein Hacking, keine Angstmache. Klare Risiko-Einordnung und konkrete Maßnahmen.',
  openGraph: {
    title: 'Website Security Check für KMU: Klarheit, Risiko-Einordnung, Maßnahmen | SimpleWebDesign',
    description: 'Website Security Check für KMU in Österreich & Deutschland: Legal, kontrolliert, transparent. Kein Hacking, keine Angstmache. Klare Risiko-Einordnung und konkrete Maßnahmen.',
    url: 'https://simplewebdesign.at/services/security-check',
    images: [
      {
        url: '/img/services/security-check.jpg',
        width: 1200,
        height: 630,
        alt: 'Website Security Check Services für KMU'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Security Check für KMU: Klarheit, Risiko-Einordnung, Maßnahmen | SimpleWebDesign',
    description: 'Website Security Check für KMU in Österreich & Deutschland: Legal, kontrolliert, transparent. Kein Hacking, keine Angstmache.',
    images: ['/img/services/security-check.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/security-check'
  },
  // Dublin Core Metadata
  other: {
    ...getServicePageDC({
      title: 'Website Security Check für KMU: Klarheit, Risiko-Einordnung, Maßnahmen',
      description: 'Website Security Check für KMU in Österreich & Deutschland: Legal, kontrolliert, transparent. Kein Hacking, keine Angstmache. Klare Risiko-Einordnung und konkrete Maßnahmen.',
      url: 'https://simplewebdesign.at/services/security-check',
    }),
  },
}

const features = [
  {
    title: 'Technische Analyse',
    description: 'Prüfung von Konfiguration, Updates und grundlegenden Sicherheitsaspekten – ohne Angriffe oder Exploits.',
  },
  {
    title: 'Risiko-Einordnung',
    description: 'Klare Bewertung gefundener Punkte: Was ist kritisch, was ist verbesserungswürdig, was ist unbedenklich.',
  },
  {
    title: 'Maßnahmenplan',
    description: 'Konkrete, umsetzbare Schritte zur Behebung – verständlich erklärt, ohne technisches Vorwissen.',
  },
  {
    title: 'Optionaler Retest',
    description: 'Nach Umsetzung der Maßnahmen prüfen wir erneut – damit Sie sicher sein können, dass alles passt.',
  },
]

const benefits = [
  'Klarheit über den aktuellen Sicherheitsstand',
  'Verständliche Einordnung statt technischem Jargon',
  'Konkrete Maßnahmen statt allgemeiner Ratschläge',
  'Transparenz über den gesamten Prozess',
]

const process = [
  {
    title: 'Auftragsklärung',
    description: 'Wir klären gemeinsam, was geprüft werden soll. Schriftliche Freigabe, klarer Scope, keine Überraschungen.',
  },
  {
    title: 'Kontrollierte Prüfung',
    description: 'Technische Analyse mit professionellen Tools – legal, kontrolliert, ohne Beeinträchtigung des laufenden Betriebs.',
  },
  {
    title: 'Auswertung & Einordnung',
    description: 'Gefundene Punkte werden eingeordnet: Was ist kritisch, was ist verbesserungswürdig, was ist unbedenklich.',
  },
  {
    title: 'Kurzbericht & Maßnahmenplan',
    description: 'Verständlicher Bericht mit konkreten Maßnahmen – ohne technisches Vorwissen nachvollziehbar.',
  },
  {
    title: 'Optional: Retest nach Umsetzung',
    description: 'Nach Umsetzung der Maßnahmen prüfen wir erneut – damit Sie sicher sein können, dass alles passt.',
  },
]

export default function SecurityCheckPage() {
  // Schema.org Structured Data
  const schemas = [
    // BreadcrumbList Schema
    breadcrumbSchema({
      items: [
        { name: "Home", url: "https://simplewebdesign.at" },
        { name: "Services", url: "https://simplewebdesign.at/services" },
        { name: "Security Check", url: "https://simplewebdesign.at/services/security-check" },
      ],
    }),
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://simplewebdesign.at/services/security-check#webpage",
      "name": "Website Security Check für KMU: Klarheit, Risiko-Einordnung, Maßnahmen",
      "description": "Website Security Check für KMU in Österreich & Deutschland: Legal, kontrolliert, transparent. Kein Hacking, keine Angstmache. Klare Risiko-Einordnung und konkrete Maßnahmen.",
      "url": "https://simplewebdesign.at/services/security-check",
      "image": "https://simplewebdesign.at/img/services/security-check.jpg",
      "publisher": {
        "@id": "https://simplewebdesign.at/#org",
        "@type": "Organization",
        "name": "SimpleWebDesign",
        "url": "https://simplewebdesign.at",
        "logo": {
          "@type": "ImageObject",
          "url": "https://simplewebdesign.at/img/logo.png"
        }
      }
    },
    // Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://simplewebdesign.at/services/security-check#service",
      "name": "Website Security Check",
      "serviceType": "Website Security Check",
      "url": "https://simplewebdesign.at/services/security-check",
      "provider": {
        "@id": "https://simplewebdesign.at/#org",
        "@type": "Organization",
        "name": "SimpleWebDesign",
        "url": "https://simplewebdesign.at",
        "logo": {
          "@type": "ImageObject",
          "url": "https://simplewebdesign.at/img/logo.png"
        }
      },
      "areaServed": ["AT", "DE"]
    },
  ];

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
        <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
          <Container className="relative">
            <div className="lg:flex lg:items-center lg:gap-x-10">
              <div className="max-w-2xl lg:max-w-lg">
                <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
                  Website Security Check für KMU
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Ein Security Check ist kein Pentest und kein Hacking. Es ist eine kontrollierte, legale Prüfung Ihrer Website – mit klarer Risiko-Einordnung und konkreten Maßnahmen. Keine Angstmache, sondern Klarheit.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/kontakt">Security Check anfragen</Button>
                  <Button href="#features" variant="secondary">Mehr erfahren</Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img/services/security-check.jpg"
                    alt="Website Security Check Services für KMU - Sicherheitsprüfung und Risikoanalyse"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl"
                    priority
                  />
                  <div className="absolute -bottom-8 -left-8">
                    <div className="bg-green-600 rounded-xl shadow-lg p-6 text-white">
                      <ShieldCheckIcon className="h-8 w-8 mb-2" />
                      <div className="text-2xl font-bold">Legal</div>
                      <div className="text-sm opacity-90">Kontrolliert & Transparent</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Features Section */}
        <div id="features" className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Was ein Security Check leistet
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Ein Security Check ist keine Penetrationstest. Es ist eine kontrollierte, legale Prüfung Ihrer Website – mit klarer Risiko-Einordnung und konkreten Maßnahmen. Kein Hacking, keine Angstmache, sondern Klarheit. Kombinieren Sie dies mit unserem <a href="/services/webdesign" className="text-green-600 hover:text-green-500 underline">Webdesign</a>, <a href="/services/redesign" className="text-green-600 hover:text-green-500 underline">Redesign</a> und <a href="/services/performance" className="text-green-600 hover:text-green-500 underline">Performance-Optimierung</a> für eine vollständige Website-Betreuung.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                  <ShieldCheckIcon className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Process Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  Unser Security Check Prozess
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                  Wir beginnen nicht mit Tests oder Tools, sondern mit Klärung: Was soll geprüft werden? Erst dann folgen kontrollierte Prüfung, Einordnung und konkrete Maßnahmen – transparent und nachvollziehbar.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckIcon className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">{step.title}</h3>
                      <p className="mt-2 text-neutral-600 dark:text-neutral-300">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* Security Trust Section */}
        <div className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 sm:p-12 shadow-sm border border-neutral-200 dark:border-neutral-700">
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  Security Check – legal, kontrolliert, transparent
                </h2>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Ein Security Check ist kein Penetrationstest. Es ist eine kontrollierte, legale Prüfung Ihrer Website – mit klarer Risiko-Einordnung und konkreten Maßnahmen. Kein Hacking, keine Angstmache, sondern Klarheit.
                </p>
                <ul className="mt-10 space-y-5 text-neutral-600 dark:text-neutral-300">
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Tests nur mit schriftlicher Freigabe und klar definiertem Scope</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Keine Beeinträchtigung des laufenden Betriebs</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Kein Social Engineering, kein DDoS, kein Test außerhalb der Freigabe</span>
                  </li>
                  <li className="flex gap-4">
                    <CheckIcon className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg">Fokus auf Konfiguration, Updates und grundlegende Sicherheitsaspekte</span>
                  </li>
                </ul>
                <p className="mt-10 text-xl text-neutral-600 dark:text-neutral-300">
                  Reagieren Schutzsysteme wie Firewalls oder Sicherheits-Plugins, wird der Check bewusst beendet. Das ist kein Fehler, sondern ein positives Zeichen: Die Schutzmechanismen greifen.
                </p>
                <p className="mt-8 text-base text-neutral-500 dark:text-neutral-400">
                  Dieser Security Check ersetzt keinen Penetrationstest. Für weitergehende Tests sind abgestimmte Prüfungen mit Freigabe erforderlich.
                </p>
              </div>
            </div>
          </Container>
        </div>

        {/* Benefits Section with Image */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:flex-1">
                <div className="max-w-2xl">
                  <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                    Ihre Vorteile
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Mit unserem Security Check erhalten Sie Klarheit über den aktuellen Sicherheitsstand Ihrer Website – ohne technisches Vorwissen. Kombinieren Sie dies mit unserem <Link href="/services/webdesign" className="text-green-600 hover:text-green-500 underline">Webdesign</Link>, <Link href="/services/redesign" className="text-green-600 hover:text-green-500 underline">Redesign</Link> und <Link href="/services/performance" className="text-green-600 hover:text-green-500 underline">Performance-Optimierung</Link> für eine vollständige Website-Betreuung.
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <CheckIcon className="h-8 w-8 text-green-600 flex-shrink-0" />
                      <span className="text-lg font-semibold text-neutral-950 dark:text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:flex-1">
                <div className="relative aspect-square">
                  <Image
                    src="/img/services/security-check.jpg"
                    alt="Website Security Check und Sicherheitsprüfung für KMU in Österreich und Deutschland"
                    fill
                    className="rounded-2xl object-cover shadow-xl"
                    quality={60}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* CTA Section */}
        <div className="relative py-24 bg-green-600 overflow-hidden">
          <div className="absolute inset-0 mix-blend-multiply opacity-40">
            <Image
              src="/img/services/security-check.webp"
              alt="Background Pattern"
              fill
              className="object-cover"
              quality={60}
            />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Bereit für Klarheit über Ihre Website-Sicherheit?
              </h2>
              <p className="mt-4 text-lg text-green-100">
                Lass uns kurz einordnen, welche Prüfung für deine Website wirklich Sinn ergibt.
              </p>
              <div className="mt-8">
                <Button href="/kontakt" variant="secondary" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-green-600">
                  Unverbindliche Einschätzung erhalten
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}

