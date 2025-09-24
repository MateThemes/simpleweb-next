'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPinIcon } from '../icons'
import { Container } from '../ui/Container'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-slate-950 pt-section-sm lg:pt-section-xl">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-blue-50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <Container>
        <div className="pb-section-lg pt-section-sm lg:flex lg:py-section-2xl">
          <div
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
          >
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <div className="inline-flex space-x-6">
                <span
                  className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-blue-600"
                >
                  Webdesign & SEO
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  <span>Made im Waldviertel</span>
                  <MapPinIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </div>
            </div>
            
            <h1 className="mt-10 font-display text-4xl font-bold tracking-tighter text-gray-900 dark:text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
              Individuelle Websites mit Fokus auf SEO
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl">
              Modern, funktional und optimiert für maximale Sichtbarkeit und nachhaltigen Erfolg. Ihre Webagentur aus dem Waldviertel, Niederösterreich – regional verwurzelt, digital vernetzt.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-4">
                <Link
                  href="/kontakt"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200"
                >
                  Kostenloses Erstgespräch
                </Link>
                <Link
                  href="/seo-audit"
                  className="rounded-xl bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors duration-200"
                >
                  Kostenlose SEO-Analyse
                </Link>
              </div>
              <Link
                href="/preise-und-pakete"
                className="text-base font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
              >
                Unsere Preise <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          
          <div className="mx-auto mt-16 flex max-w-4xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-4xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="relative">
                <Image
                  src="/img/hero-image-optimized.jpg"
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-full h-auto max-w-5xl rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 60vw"
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-100 to-blue-50 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  )
}