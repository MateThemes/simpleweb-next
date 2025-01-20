'use client'

import { Container } from '../ui/Container'
import { motion } from 'framer-motion'

const stats = [
  { id: 1, name: 'Zufriedene Kunden', value: '100+' },
  { id: 2, name: 'Erfolgreiche Projekte', value: '200+' },
  { id: 3, name: 'Jahre Erfahrung', value: '10+' },
  { id: 4, name: 'Support-Anfragen gelöst', value: '1000+' },
]

export default function Stats() {
  return (
    <section className="relative py-section-xl">
      <Container>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-section-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-section-md"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Zahlen, die überzeugen
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Unsere Erfolge sprechen für sich. Entdecken Sie, was wir für unsere Kunden erreicht haben.
            </p>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 * stat.id }}
                className="flex flex-col items-center"
              >
                <dd className="text-4xl font-display font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </dd>
                <dt className="mt-4 text-base font-medium text-gray-900 dark:text-white text-center">
                  {stat.name}
                </dt>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                  Und wachsend
                </p>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </Container>
    </section>
  )
}