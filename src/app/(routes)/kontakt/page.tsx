import { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/ui/ContactForm'
import { contactSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'Kontakt für KMU Webdesign | Beratung Österreich & Deutschland',
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            contactSchema({
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
            })
          )
        }}
      />
      <main className="flex-auto">
        <Container className="mt-24 sm:mt-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800 mb-8">
              <span className="text-blue-600 dark:text-blue-400 font-medium">📞 Kostenlose Beratung</span>
            </div>
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              Kontakt für KMU Webdesign
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Erzählen Sie uns von Ihrem KMU-Projekt in Wien, München, Waldviertel oder ganz Österreich & Deutschland. Wir freuen uns darauf, Ihre Vision kennenzulernen und gemeinsam die beste Webdesign-Lösung zu entwickeln.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
              <a href="/services/webdesign" className="hover:text-blue-600 dark:hover:text-blue-400 underline">Webdesign-Services</a>
              <span>•</span>
              <a href="/preise-und-pakete" className="hover:text-blue-600 dark:hover:text-blue-400 underline">Preise</a>
              <span>•</span>
              <a href="/portfolio" className="hover:text-blue-600 dark:hover:text-blue-400 underline">Portfolio</a>
            </div>
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