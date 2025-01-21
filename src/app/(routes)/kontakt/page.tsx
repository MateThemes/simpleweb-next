'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/ui/Container'
import { Input } from '@/components/ui/Input'
import { sendEmail } from './actions'

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  projectType: 'website',
  budget: '',
  timeline: '',
  description: '',
}

export default function KontaktPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.firstName) newErrors.firstName = 'Bitte geben Sie Ihren Vornamen ein'
    if (!formData.lastName) newErrors.lastName = 'Bitte geben Sie Ihren Nachnamen ein'
    if (!formData.email) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    }
    if (!formData.description) newErrors.description = 'Bitte beschreiben Sie Ihr Projekt'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendEmail({
        firstName: formData.firstName as string,
        lastName: formData.lastName as string,
        email: formData.email as string,
        phone: formData.phone as string,
        company: formData.company as string,
        projectType: formData.projectType as ProjectType,
        budget: formData.budget as '' | 'small' | 'medium' | 'large' | 'xlarge',
        timeline: formData.timeline as '' | 'urgent' | 'month' | 'quarter' | 'flexible',
        description: formData.description as string,
      })
      
      if (result.success) {
        setSubmitStatus('success')
        setFormData(initialFormData)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        throw new Error('Failed to send email')
      }
    } catch (err) {
      console.error('Error submitting form:', err)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container className="py-16 sm:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 dark:text-white mb-6">
          Kontaktieren Sie uns
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Erzählen Sie uns von Ihrem Projekt. Wir freuen uns darauf, Ihre Vision kennenzulernen und gemeinsam
          die beste Lösung zu entwickeln.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="Vorname"
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              required
            />
            <Input
              label="Nachname"
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input
              label="E-Mail"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            <Input
              label="Telefon"
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>

          <Input
            label="Firma"
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-900 dark:text-slate-200 mb-2">
                Projektart
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-slate-800 dark:text-white dark:ring-slate-700"
              >
                <option value="website">Webseite</option>
                <option value="shop">Online-Shop</option>
                <option value="seo">SEO-Optimierung</option>
                <option value="marketing">Online-Marketing</option>
                <option value="other">Sonstiges</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-900 dark:text-slate-200 mb-2">
                Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-slate-800 dark:text-white dark:ring-slate-700"
              >
                <option value="">Bitte auswählen</option>
                <option value="small">Bis 2.000 €</option>
                <option value="medium">2.000 € - 5.000 €</option>
                <option value="large">5.000 € - 10.000 €</option>
                <option value="xlarge">Über 10.000 €</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-900 dark:text-slate-200 mb-2">
              Zeitrahmen
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-slate-800 dark:text-white dark:ring-slate-700"
            >
              <option value="">Bitte auswählen</option>
              <option value="urgent">So schnell wie möglich</option>
              <option value="month">Innerhalb eines Monats</option>
              <option value="quarter">Innerhalb von 3 Monaten</option>
              <option value="flexible">Flexibel</option>
            </select>
          </div>

          <Input
            label="Projektbeschreibung"
            id="description"
            name="description"
            type="textarea"
            rows={6}
            value={formData.description}
            onChange={handleChange}
            error={errors.description}
            placeholder="Beschreiben Sie Ihr Projekt und Ihre Ziele..."
            required
          />

          {submitStatus === 'success' && (
            <div className="rounded-md bg-green-50 dark:bg-green-900/30 p-4">
              <p className="text-sm text-green-800 dark:text-green-400">
                Vielen Dank für Ihre Anfrage! Wir werden uns schnellstmöglich bei Ihnen melden.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="rounded-md bg-red-50 dark:bg-red-900/30 p-4">
              <p className="text-sm text-red-800 dark:text-red-400">
                Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.
              </p>
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={clsx(
                'rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'transition duration-150 ease-in-out w-full sm:w-auto'
              )}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Anfrage senden'}
            </button>
          </div>
        </form>
      </div>
    </Container>
  )
}

type ProjectType = 'website' | 'shop' | 'seo' | 'marketing' | 'other'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  projectType: ProjectType
  budget: '' | 'small' | 'medium' | 'large' | 'xlarge'
  timeline: '' | 'urgent' | 'month' | 'quarter' | 'flexible'
  description: string
}