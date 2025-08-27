import { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { CheckIcon, StarIcon, MapPinIcon, PhoneIcon, CalendarIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Webdesign für Handwerker | Moderne Websites, lokale Sichtbarkeit, mehr Anfragen',
  description: 'Professionelles Webdesign für Handwerker in Österreich & Deutschland. Schnelle, mobile Websites, lokale SEO, DSGVO & Support. Jetzt kostenloses Erstgespräch sichern.',
  openGraph: {
    title: 'Webdesign für Handwerker | Moderne Websites, lokale Sichtbarkeit, mehr Anfragen',
    description: 'Professionelles Webdesign für Handwerker in Österreich & Deutschland. Schnelle, mobile Websites, lokale SEO, DSGVO & Support.',
    url: 'https://simplewebdesign.at/services/webdesign-handwerker',
    images: [
      {
        url: '/img/services/webdesign-handwerker.jpg',
        width: 1200,
        height: 1200,
        alt: 'Webdesign für Handwerker - Moderne Websites mit lokaler SEO-Optimierung'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign für Handwerker | Moderne Websites, lokale Sichtbarkeit, mehr Anfragen',
    description: 'Professionelles Webdesign für Handwerker in Österreich & Deutschland. Schnelle, mobile Websites, lokale SEO, DSGVO & Support.',
    images: ['/img/services/webdesign-handwerker.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/services/webdesign-handwerker'
  }
}

const services = [
  {
    title: 'One-Page Website',
    description: 'Professionelle Einseiten-Website mit allen wichtigen Informationen für Ihre Handwerksbetrieb.',
    icon: '🏠'
  },
  {
    title: 'Mehrseitige Website',
    description: 'Umfassende Website mit mehreren Unterseiten für detaillierte Dienstleistungspräsentation.',
    icon: '🏗️'
  },
  {
    title: 'SEO-Grundoptimierung',
    description: 'Von Grund auf für Suchmaschinen optimiert, damit lokale Kunden Sie finden.',
    icon: '🔍'
  },
  {
    title: 'DSGVO & Cookie Banner',
    description: 'Rechtssichere Website mit allen notwendigen Datenschutz-Features.',
    icon: '🛡️'
  },
  {
    title: 'Wartung & Support',
    description: 'Laufende Betreuung und Updates für Ihre Website.',
    icon: '⚙️'
  }
]

const process = [
  {
    title: 'Beratung',
    description: 'Wir analysieren Ihre Ziele und entwickeln eine maßgeschneiderte Lösung.'
  },
  {
    title: 'Konzept',
    description: 'Wir erstellen ein Konzept, das Ihre Handwerksleistungen perfekt präsentiert.'
  },
  {
    title: 'Design',
    description: 'Wir entwickeln ein modernes, responsives Design für alle Geräte.'
  },
  {
    title: 'Entwicklung',
    description: 'Wir setzen Ihr Projekt professionell um und testen alle Funktionen.'
  },
  {
    title: 'Go-Live',
    description: 'Wir bringen Ihre neue Website online und optimieren die Performance.'
  },
  {
    title: 'Betreuung',
    description: 'Wir unterstützen Sie bei der laufenden Website-Pflege und Optimierung.'
  }
]

const faqs = [
  {
    question: 'Wie lange dauert die Erstellung einer Website für Handwerker?',
    answer: 'Eine One-Page Website ist in 2-3 Wochen fertig, eine mehrseitige Website in 4-6 Wochen. Wir arbeiten schnell und effizient.'
  },
  {
    question: 'Kostet die Website-Wartung monatlich?',
    answer: 'Ja, wir bieten flexible Wartungspakete ab 49€ monatlich. Das beinhaltet Updates, Backups und technischen Support.'
  },
  {
    question: 'Wird meine Website auch auf dem Smartphone gut angezeigt?',
    answer: 'Absolut! Alle unsere Websites sind mobile-first entwickelt und funktionieren perfekt auf allen Geräten.'
  },
  {
    question: 'Kann ich meine Website später selbst bearbeiten?',
    answer: 'Ja, wir bieten ein benutzerfreundliches CMS, mit dem Sie Inhalte selbst aktualisieren können.'
  },
  {
    question: 'Hilft die Website bei der lokalen Google-Suche?',
    answer: 'Ja, wir optimieren Ihre Website für lokale Suchanfragen und integrieren Google Business Profile optimal.'
  },
  {
    question: 'Gibt es versteckte Kosten?',
    answer: 'Nein, alle Preise sind transparent und endgültig. Wir besprechen alle Kosten im Vorfeld.'
  }
]

export default function WebdesignHandwerkerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Webdesign für Handwerker",
            "description": "Professionelles Webdesign für Handwerker in Österreich & Deutschland. Schnelle, mobile Websites, lokale SEO, DSGVO & Support.",
            "image": "/img/services/webdesign-handwerker.jpg",
            "provider": {
              "@type": "Organization",
              "name": "SimpleWebDesign",
              "url": "https://simplewebdesign.at",
              "logo": "https://simplewebdesign.at/img/logo.png"
            },
            "areaServed": [
              {
                "@type": "Country",
                "name": "Austria"
              },
              {
                "@type": "Country", 
                "name": "Germany"
              }
            ],
            "serviceType": ["Web Design", "Local SEO", "Website Development", "Mobile Design", "Handwerker Websites"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Handwerker Webdesign Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "One-Page Website für Handwerker"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mehrseitige Website für Handwerker"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lokale SEO-Optimierung"
                  }
                }
              ]
            }
          })
        }}
      />
      <main className="flex-auto">
        {/* Hero Section */}
        <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
          <Container className="relative">
            <div className="lg:flex lg:items-center lg:gap-x-10">
              <div className="max-w-2xl lg:max-w-lg">
                <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
                  Webdesign für Handwerker
                </h1>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-300">
                  Professionelle Websites, die Handwerker in Österreich & Deutschland erfolgreich machen. Mehr Anfragen durch lokale Sichtbarkeit und moderne Webpräsenz.
                </p>
                <div className="mt-8 flex gap-4">
                  <Button href="/kontakt">Kostenloses Erstgespräch</Button>
                  <Button href="#referenzen" variant="secondary">Referenzen ansehen</Button>
                </div>
              </div>
              <div className="mt-16 lg:mt-0">
                <div className="relative">
                  <Image
                    src="/img/services/webdesign-handwerker.jpg"
                    alt="Webdesign für Handwerker - Moderne Websites mit lokaler SEO-Optimierung"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-xl"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Pain → Outcome Section */}
        <div className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Von Problemen zu Lösungen
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Wir lösen die typischen Herausforderungen von Handwerkern im digitalen Zeitalter.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-red-600 dark:text-red-400 mb-4">
                  ❌ Typische Probleme
                </h3>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Veraltete Website ohne mobile Optimierung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Keine Anfragen aus dem Internet</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Schlechte Google-Sichtbarkeit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Verpasste Chancen bei lokalen Kunden</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-green-600 dark:text-green-400 mb-4">
                  ✅ Unsere Lösungen
                </h3>
                <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Moderne, mobile Websites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Mehr Anfragen durch lokale SEO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Bessere Google-Sichtbarkeit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Lokale Kunden finden Sie leichter</span>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        {/* Services Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Unsere Leistungen
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Alles was Handwerker für eine erfolgreiche Online-Präsenz brauchen.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col gap-6 rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-300">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Process Section */}
        <div className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                  Unser Prozess
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                  Wir begleiten Sie Schritt für Schritt zu Ihrer erfolgreichen Handwerker-Website.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                      {index + 1}
                    </div>
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

        {/* Local SEO Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl lg:max-w-none lg:flex lg:items-center lg:gap-x-16">
              <div className="lg:flex-1">
                <div className="max-w-2xl">
                  <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                    Lokale SEO für Handwerker
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                    Wir optimieren Ihre Website für lokale Suchanfragen, damit Kunden in Ihrer Region Sie finden.
                  </p>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPinIcon className="h-6 w-6 text-blue-600" />
                      <span className="text-neutral-600 dark:text-neutral-300">Google Business Profile Optimierung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <StarIcon className="h-6 w-6 text-blue-600" />
                      <span className="text-neutral-600 dark:text-neutral-300">Bewertungen & Kundenrezensionen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon className="h-6 w-6 text-blue-600" />
                      <span className="text-neutral-600 dark:text-neutral-300">NAP-Konsistenz (Name, Adresse, Telefon)</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button href="/services/seo" variant="secondary">
                      Mehr über lokale SEO erfahren
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mt-16 lg:mt-0 lg:flex-1">
                <div className="relative aspect-square">
                  <Image
                    src="/img/services/seo.jpg"
                    alt="Lokale SEO-Optimierung für Handwerker - Google Business Profile und lokale Sichtbarkeit"
                    fill
                    className="rounded-2xl object-cover shadow-xl"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* References/Trust Section */}
        <div id="referenzen" className="py-24 bg-neutral-50 dark:bg-neutral-900">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Das sagen unsere Kunden
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Handwerker vertrauen uns bei ihrer Online-Präsenz.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  &ldquo;Endlich eine Website, die funktioniert! Seit dem Relaunch bekommen wir deutlich mehr Anfragen aus dem Internet.&rdquo;
                </p>
                <div className="font-semibold text-neutral-950 dark:text-white">- Tischlerei Müller</div>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  &ldquo;Professioneller Service von A bis Z. Unsere neue Website lädt schnell und sieht auf allen Geräten perfekt aus.&rdquo;
                </p>
                <div className="font-semibold text-neutral-950 dark:text-white">- Elektro Huber</div>
              </div>
              <div className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                  &ldquo;Die lokale SEO-Optimierung hat uns geholfen, von lokalen Kunden gefunden zu werden. Sehr empfehlenswert!&rdquo;
                </p>
                <div className="font-semibold text-neutral-950 dark:text-white">- Sanitär Wagner</div>
              </div>
            </div>
          </Container>
        </div>

        {/* FAQ Section */}
        <div className="py-24">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="font-display text-4xl font-medium tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
                Häufige Fragen
              </h2>
              <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
                Antworten auf die wichtigsten Fragen zum Webdesign für Handwerker.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Final CTA Section */}
        <div className="relative py-24 bg-blue-600 overflow-hidden">
          <div className="absolute inset-0 mix-blend-multiply opacity-40">
            <Image
              src="/img/services/webdesign-handwerker.jpg"
              alt="Background Pattern"
              fill
              className="object-cover"
              quality={60}
            />
          </div>
          <Container className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                Bereit für Ihre Handwerker-Website?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Lassen Sie uns gemeinsam Ihre Online-Präsenz entwickeln und mehr lokale Kunden gewinnen.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/kontakt" variant="secondary" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-600">
                  <PhoneIcon className="h-5 w-5" />
                  Kostenloses Erstgespräch
                </Button>
                <Button href="/services/webdesign" variant="secondary" className="text-white border-white hover:bg-white hover:text-blue-600">
                  <CalendarIcon className="h-5 w-5" />
                  Alle Webdesign-Services
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}
