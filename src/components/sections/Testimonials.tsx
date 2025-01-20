'use client'

import { Container } from '../ui/Container'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import { getPlaceholderAvatar } from '@/lib/utils'

const testimonials = [
  {
    body: 'SimpleWebDesign hat unsere Erwartungen übertroffen. Die neue Website ist nicht nur optisch ansprechend, sondern auch technisch auf dem neuesten Stand.',
    author: {
      name: 'Sarah Weber',
      handle: 'Geschäftsführerin',
      company: 'Weber & Partner GmbH',
      imageUrl: getPlaceholderAvatar('Sarah Weber', { style: 'personas' })
    },
  },
  {
    body: 'Professionelle Beratung von Anfang bis Ende. Das Team hat unsere Vision perfekt umgesetzt und war immer erreichbar für Fragen.',
    author: {
      name: 'Michael Schmidt',
      handle: 'Marketing Manager',
      company: 'TechStart Solutions',
      imageUrl: getPlaceholderAvatar('Michael Schmidt', { style: 'personas' })
    },
  },
  {
    body: 'Dank der neuen Website haben wir unseren Online-Umsatz um 40% steigern können. Die Investition hat sich mehr als gelohnt.',
    author: {
      name: 'Lisa Müller',
      handle: 'E-Commerce Leiterin',
      company: 'Fashion Store 24',
      imageUrl: getPlaceholderAvatar('Lisa Müller', { style: 'personas' })
    },
  },
]

export default function Testimonials() {
  return (
    <section className="relative scroll-mt-[72px] bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 py-section-xl">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-section-lg"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
            Erfahren Sie, wie wir unseren Kunden zu mehr Erfolg im Web verholfen haben
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-7xl">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, testimonialIdx) => (
                <motion.div
                  key={testimonialIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.1 * testimonialIdx }}
                  className="relative h-full"
                >
                  <div className="relative h-full bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg shadow-gray-900/5 dark:shadow-none ring-1 ring-gray-900/5 dark:ring-white/10">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                      {testimonial.body}
                    </p>
                    <div className="mt-auto border-t border-gray-100 dark:border-gray-800 pt-6">
                      <div className="flex items-center gap-4">
                        <Image
                          src={testimonial.author.imageUrl}
                          alt={testimonial.author.name}
                          className="h-10 w-10 rounded-full bg-gray-50"
                          width={40}
                          height={40}
                        />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white">
                            {testimonial.author.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.author.handle} • {testimonial.author.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}