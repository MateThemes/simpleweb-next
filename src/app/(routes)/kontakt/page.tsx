import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/ui/ContactForm'
import { contactSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'Kontakt | Webdesign Anfrage',
  description: 'Kontaktieren Sie uns für Ihr Webdesign-Projekt. Wir beraten Sie gerne und erstellen ein individuelles Angebot.',
  openGraph: {
    title: 'Kontakt | Webdesign Anfrage',
    description: 'Kontaktieren Sie uns für Ihr Webdesign-Projekt. Wir beraten Sie gerne und erstellen ein individuelles Angebot.',
    url: 'https://simplewebdesign.de/kontakt',
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
    title: 'Kontakt | Webdesign Anfrage',
    description: 'Kontaktieren Sie uns für Ihr Webdesign-Projekt.',
    images: ['/img/contact/office.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.de/kontakt'
  }
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            contactSchema({
              name: 'SimpleWeb Design',
              email: 'info@simplewebdesign.de',
              phone: '+49 (0) 123 456789',
              address: {
                street: 'Musterstraße 123',
                city: 'München',
                postalCode: '80331',
                country: 'Deutschland'
              },
              openingHours: ['Mo-Fr 09:00-18:00', 'Sa-So geschlossen'],
              image: '/img/contact/office.jpg'
            })
          )
        }}
      />
      <main className="flex-auto">
        <Container className="mt-24 sm:mt-32">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              Kontaktieren Sie uns
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
              Erzählen Sie uns von Ihrem Projekt. Wir freuen uns darauf, Ihre Vision kennenzulernen und gemeinsam die beste Lösung zu entwickeln.
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