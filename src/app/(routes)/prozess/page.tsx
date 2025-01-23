import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { Container } from '@/components/ui/Container'
import { processSchema } from '@/app/schema'

export const metadata: Metadata = {
  title: 'Unser Prozess | Webdesign Workflow',
  description: 'Erfahren Sie mehr über unseren bewährten Webdesign-Prozess. Von der ersten Konzeption bis zum Launch Ihrer Website - transparent und effizient.',
  openGraph: {
    title: 'Unser Prozess | Webdesign Workflow',
    description: 'Erfahren Sie mehr über unseren bewährten Webdesign-Prozess. Von der ersten Konzeption bis zum Launch Ihrer Website - transparent und effizient.',
    url: 'https://simplewebdesign.at/prozess',
    images: [
      {
        url: '/img/process/workflow.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleWeb Design Workflow'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unser Prozess | Webdesign Workflow',
    description: 'Erfahren Sie mehr über unseren bewährten Webdesign-Prozess.',
    images: ['/img/process/workflow.jpg']
  },
  alternates: {
    canonical: 'https://simplewebdesign.de/prozess'
  }
}

const steps = [
  {
    name: 'Analyse & Planung',
    description: 'Wir analysieren Ihre Anforderungen und entwickeln eine maßgeschneiderte Strategie.',
    image: '/img/process/analysis.jpg'
  },
  {
    name: 'Design & Konzeption',
    description: 'Wir erstellen ein modernes Design, das Ihre Marke perfekt repräsentiert.',
    image: '/img/process/design.jpg'
  },
  {
    name: 'Entwicklung',
    description: 'Ihre Website wird mit modernsten Technologien entwickelt.',
    image: '/img/process/development.jpg'
  },
  {
    name: 'Testing & Launch',
    description: 'Umfangreiche Tests und ein reibungsloser Launch Ihrer Website.',
    image: '/img/process/launch.jpg'
  }
]

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            processSchema({
              name: 'SimpleWeb Design Workflow',
              description: 'Unser bewährter Webdesign-Prozess von der Konzeption bis zum Launch.',
              image: '/img/process/workflow.jpg',
              steps: steps
            })
          )
        }}
      />
      <main className="flex-auto">
        {/* Hero Section */}
        <Container className="mt-24 sm:mt-32">
          <div className="max-w-3xl">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 dark:text-white [text-wrap:balance] sm:text-7xl">
              Unser Prozess
            </h1>
            <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
              Von der ersten Idee bis zum erfolgreichen Launch - wir begleiten Sie durch jeden Schritt.
            </p>
          </div>
        </Container>

        {/* Process Steps */}
        <Container className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            {steps.map((step, index) => (
              <div key={step.name} className="relative">
                <div className="relative h-[400px] overflow-hidden rounded-2xl">
                  <Image
                    src={step.image}
                    alt={step.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/0" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                        <span className="text-xl font-semibold text-white">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{step.name}</h3>
                    </div>
                    <p className="mt-2 text-white/90">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* Benefits Section */}
        <Container className="mt-24 sm:mt-32 pb-24">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              Ihre Vorteile
            </h2>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Unser strukturierter Prozess garantiert Ihnen:
            </p>
            <ul className="mt-10 space-y-8 text-neutral-600 dark:text-neutral-400">
              <li className="flex gap-x-3">
                <span className="text-neutral-950 dark:text-white">01.</span>
                <span>Transparente Kommunikation in jeder Phase</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950 dark:text-white">02.</span>
                <span>Effiziente Projektabwicklung ohne Verzögerungen</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950 dark:text-white">03.</span>
                <span>Qualitätssicherung durch regelmäßige Reviews</span>
              </li>
              <li className="flex gap-x-3">
                <span className="text-neutral-950 dark:text-white">04.</span>
                <span>Termingerechte Fertigstellung Ihres Projekts</span>
              </li>
            </ul>
          </div>
        </Container>
      </main>
    </>
  )
}
