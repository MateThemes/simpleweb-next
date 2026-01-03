'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Container } from '../ui/Container'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 }
}

const handleScrollToKlarheit = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  const element = document.getElementById('klarheit')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const features = [
  'Klarer Fokus: Wer ist hier richtig – und warum?',
  'Struktur, die Besucher führt (statt informiert).',
  'Messbar: Anfragen, Termine oder Verkäufe – je nach Ziel.'
]

export default function ModernHero() {
  const heroRef = useRef<HTMLElement>(null)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })

  // Smooth spring for parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Transform: translateY from 0 to -16px (subtle upward movement)
  const yTransform = useTransform(
    smoothProgress,
    [0, 1],
    isReducedMotion || isMobile ? [0, 0] : [0, -16]
  )

  return (
    <motion.section
      ref={heroRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-blue-200 dark:border-slate-700">
              <SparklesIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Websites, die Entscheidungen erleichtern – nicht nur gut aussehen.
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                Viele Websites sehen gut aus – und bringen trotzdem keine Anfragen.
              </h1>
              {/* LLM-friendly summary block */}
              <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl space-y-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                <p>
                  SimpleWebDesign baut Websites für KMU in Österreich und Deutschland, die nicht nur gut aussehen, sondern messbare Ergebnisse bringen. Wir schaffen Klarheit, Struktur und Orientierung – damit Besucher zu Anfragen werden.
                </p>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Das Problem ist selten Design oder Technik. Meist fehlt Klarheit.
              </p>
            </div>

            {/* Primary CTA */}
            <div>
              <Link
                href="#klarheit"
                onClick={handleScrollToKlarheit}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span>Woran du erkennst, ob deine Website arbeitet</span>
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={scaleIn}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="relative"
            >
              {/* Main image with parallax */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  y: yTransform,
                  scale: isReducedMotion || isMobile ? 1 : 1.02,
                }}
              >
                <Image
                  src="/img/hero.png"
                  alt="Webdesign Agentur für KMU - Moderne Websites Österreich Deutschland"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </motion.div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4 border border-slate-200 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Websites, die Orientierung geben.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Nachgelagerter Container mit Bulletpoints, Trust-Line und Secondary CTA */}
      <Container className="relative pt-12 pb-8">
        <div className="space-y-8">
          {/* Features/Bulletpoints */}
          <div className="space-y-3 max-w-2xl">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* Trust indicators und Secondary CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              ✓ 50+ erfolgreiche Projekte ✓ Zufriedene Kunden ✓ Schnelle Umsetzung
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/seo-audit"
                className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
              >
                Kostenlose SEO-Analyse
              </Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Wenn du direkt sprechen willst:{' '}
            <Link href="/kontakt" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline">
              Beratung anfragen
            </Link>
          </p>
        </div>
      </Container>
    </motion.section>
  )
}
