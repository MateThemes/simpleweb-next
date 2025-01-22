'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../ui/Container'
import { motion } from 'framer-motion'
import { 
  DeviceLaptopIcon, 
  ChartBarIcon, 
  ChartArrowsVerticalIcon,
  BrushIcon,
  RocketIcon,
  CheckIcon,
  ArrowRightIcon,
  ServerIcon
} from '../icons'

const services = [
  {
    id: 'webdesign',
    title: 'Responsive Webdesign',
    description: 'Ihre Website passt sich perfekt an alle Geräte an - vom Smartphone bis zum Desktop.',
    icon: DeviceLaptopIcon,
    bgColor: 'bg-blue-600',
    image: '/img/services/responsive.jpg',
    link: '/services/webdesign',
    features: [
      'Optimiert für alle Bildschirmgrößen',
      'Moderne Designprinzipien',
      'Intuitive Benutzerführung'
    ]
  },
  {
    id: 'marketing',
    title: 'Online Marketing',
    description: 'Steigern Sie Ihre digitale Reichweite mit maßgeschneiderten Marketing-Strategien.',
    icon: ChartBarIcon,
    bgColor: 'bg-indigo-600',
    image: '/img/services/marketing.jpg',
    link: '/services/marketing',
    features: [
      'Social Media Marketing',
      'Content Marketing',
      'Performance Marketing'
    ]
  },
  {
    id: 'seo',
    title: 'SEO-Optimierung',
    description: 'Verbessern Sie Ihre Online-Sichtbarkeit durch modernste SEO-Techniken.',
    icon: ChartArrowsVerticalIcon,
    bgColor: 'bg-green-600',
    image: '/img/services/seo.jpg',
    link: '/services/seo',
    features: [
      'Google-optimierte Struktur',
      'Keyword-Recherche',
      'Performance-Optimierung'
    ]
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    description: 'Modernisieren Sie Ihren bestehenden Webauftritt für mehr Erfolg.',
    icon: BrushIcon,
    bgColor: 'bg-purple-600',
    image: '/img/services/redesign.jpg',
    link: '/services/redesign',
    features: [
      'Moderne Neugestaltung',
      'Verbesserte Conversion',
      'Optimierte Nutzerführung'
    ]
  },
  {
    id: 'performance',
    title: 'Performance & Speed',
    description: 'Schnelle Ladezeiten und optimale Performance für zufriedene Besucher.',
    icon: RocketIcon,
    bgColor: 'bg-orange-600',
    image: '/img/services/performance.jpg',
    link: '/services/performance',
    features: [
      'Core Web Vitals',
      'Asset-Optimierung',
      'Caching-Strategien'
    ]
  },
  {
    id: 'hosting',
    title: 'Hosting-Beratung',
    description: 'Professionelle Beratung für die optimale Hosting-Lösung Ihres Projekts.',
    icon: ServerIcon,
    bgColor: 'bg-teal-600',
    image: '/img/services/hosting.jpg',
    link: '/services/hosting',
    features: [
      'Vercel & IONOS Partner',
      'SSL & Sicherheit',
      'Performance-Optimierung'
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function Services() {
  return (
    <section 
      id="services"
      className="relative scroll-mt-[72px] bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 py-section-xl" 
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-section-lg"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Professionelles Webdesign für Ihren Erfolg
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Nutzen Sie die neuesten Webtechnologien für Ihren Geschäftserfolg
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-2xl shadow-lg shadow-gray-900/5 dark:shadow-none ring-1 ring-gray-900/5 dark:ring-white/10 hover:shadow-xl dark:hover:ring-white/20 transition-all duration-300"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <div className={`p-2 rounded-lg ${service.bgColor}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className="inline-flex items-center text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/link"
                  >
                    Mehr erfahren
                    <ArrowRightIcon className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}