import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/ui/ContactForm'
import { contactSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'Kontakt für KMU Webdesign | Beratung Österreich & Deutschland | SimpleWebDesign',
  description: 'Kontaktieren Sie uns für Ihr KMU Webdesign-Projekt in Österreich & Deutschland. Kostenlose Beratung und individuelles Angebot für kleine und mittlere Unternehmen.',
  openGraph: {
    title: 'Kontakt für KMU Webdesign | Beratung Österreich & Deutschland',
    description: 'Kontaktieren Sie uns für Ihr KMU Webdesign-Projekt in Österreich & Deutschland. Kostenlose Beratung und individuelles Angebot für kleine und mittlere Unternehmen.',
    url: 'https://simplewebdesign.at/kontakt',
    images: [
      {
        url: '/img/contact/office.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWeb Design Kontakt'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt für KMU Webdesign | Beratung Österreich & Deutschland',
    description: 'Kontaktieren Sie uns für Ihr KMU Webdesign-Projekt in Österreich & Deutschland.',
    images: ['/img/contact/office.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.at/kontakt'
  }
}

export default function ContactPage() {
  // Enhanced JSON-LD schemas for Contact page
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontakt SimpleWebDesign',
    description: 'Kontaktiere SimpleWebDesign für eine ehrliche Einschätzung deines Website-Projekts für KMU in Österreich & Deutschland.',
    url: 'https://simplewebdesign.at/kontakt',
    mainEntity: {
      '@type': 'Organization',
      name: 'SimpleWebDesign',
      url: 'https://simplewebdesign.at',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'info@simplewebdesign.at',
        telephone: '+436645182696',
        availableLanguage: ['German', 'English'],
        areaServed: ['AT', 'DE']
      }
    }
  };

  const businessSchema = contactSchema({
    name: 'SimpleWebDesign',
    email: 'info@simplewebdesign.at',
    phone: '+43 664 518 26 96',
    address: {
      street: 'Sonnleite 20',
      city: 'Vitis',
      postalCode: '3902',
      country: 'Austria'
    },
    openingHours: ['Mo-Fr 09:00-15:00', 'Sa-So geschlossen'],
    image: '/img/contact/office.jpg'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema)
        }}
      />
      <main className="flex-auto">
        <Container className="mt-24 sm:mt-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-blue-900 dark:text-blue-100 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                Kontakt
              </span>
            </div>
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              Lass uns klären, ob deine Website arbeiten soll.
            </h1>
            {/* LLM-friendly summary block */}
            <div className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800">
              <p>
                Kontaktiere SimpleWebDesign für eine ehrliche Einschätzung deines Website-Projekts. Beratung für KMU in Österreich & Deutschland – ohne Verkaufsgespräch, ohne Verpflichtung.
              </p>
            </div>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Wenn du das Gefühl hast, dass online zu wenig passiert, ist das meist kein Design-Problem.
              <br />
              Schreib uns kurz, wo du stehst – wir melden uns mit einer klaren Einschätzung.
            </p>
          </div>
        </Container>

        <Container className="mt-16 sm:mt-20 pb-24">
          <div className="max-w-3xl mx-auto">
            <ContactForm className="mt-8 text-left" />
          </div>
        </Container>
      </main>
    </>
  )
}
