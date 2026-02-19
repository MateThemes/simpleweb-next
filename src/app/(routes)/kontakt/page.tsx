import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/ui/ContactForm'
import { contactSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'Kontakt für KMU Webdesign | Beratung Österreich & Deutschland',
  description: 'Kontakt für eine ehrliche Einschätzung deines Website-Projekts. Beratung für KMU in Österreich & Deutschland – ohne Verkaufsdruck.',
  openGraph: {
    title: 'Kontakt für KMU Webdesign | Beratung Österreich & Deutschland',
    description: 'Kontakt für eine ehrliche Einschätzung deines Website-Projekts. Beratung für KMU in Österreich & Deutschland – ohne Verkaufsdruck.',
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
    description: 'Kontakt für eine ehrliche Einschätzung deines Website-Projekts. Beratung für KMU in Österreich & Deutschland – ohne Verkaufsdruck.',
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
        <section
          className="relative bg-[var(--background)] pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20"
          aria-labelledby="kontakt-heading"
        >
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span className="inline-block px-3 py-1.5 text-sm font-medium text-[var(--primary)] bg-[var(--surface-2)] rounded-full border border-[var(--border)]">
                  Kontakt
                </span>
              </div>
              <h1
                id="kontakt-heading"
                className="font-display font-bold tracking-tight text-[var(--foreground)] leading-[1.08] text-4xl sm:text-5xl lg:text-6xl [text-wrap:balance]"
              >
                Lass uns klären, ob deine Website arbeiten soll.
              </h1>
              <div className="mt-6 text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto rounded-[var(--radius-2xl)] bg-[var(--surface)] p-6 lg:p-8 border border-[var(--border)] shadow-elev-1">
                <p className="leading-relaxed">
                  Kontaktiere SimpleWebDesign für eine ehrliche Einschätzung deines Website-Projekts. Beratung für KMU in Österreich & Deutschland – ohne Verkaufsdruck, ohne Verpflichtung.
                </p>
              </div>
              <p className="mt-6 text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto leading-relaxed">
                Wenn du das Gefühl hast, dass online zu wenig passiert, ist das meist kein Design-Problem.
                <br />
                Schreib uns kurz, wo du stehst – wir melden uns mit einer ehrlichen Einschätzung.
              </p>
            </div>
          </Container>
        </section>

        <Container className="pb-24 lg:pb-28">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-[24px] bg-[var(--surface)] p-8 lg:p-10 border border-[var(--border)] shadow-elev-2">
              <ContactForm className="text-left" />
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}
