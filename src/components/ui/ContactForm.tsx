'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Input } from '@/components/ui/Input'
import { sendEmail } from '@/app/(routes)/kontakt/actions'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  projectType: 'website' | 'shop' | 'seo' | 'marketing' | 'other'
  budget: '' | 'small' | 'medium' | 'large' | 'xlarge'
  timeline: '' | 'urgent' | 'month' | 'quarter' | 'flexible'
  description: string
  privacyAccepted: boolean
  _honeypot: string
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  description?: string;
  privacyAccepted?: string;
}

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
  privacyAccepted: false,
  _honeypot: ''
}

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [formStartTime] = useState<number>(Date.now())

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | 
    { target: { name: string; value: string | boolean } }
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName) newErrors.firstName = 'Bitte geben Sie Ihren Vornamen ein'
    if (!formData.lastName) newErrors.lastName = 'Bitte geben Sie Ihren Nachnamen ein'
    if (!formData.email) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    }
    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = 'Bitte akzeptieren Sie die Datenschutzerklärung'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    // Check if form was filled too quickly (likely a bot)
    const timeDiff = Date.now() - formStartTime
    if (timeDiff < 5000) { // Less than 5 seconds
      setSubmitStatus('error')
      setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
      return
    }

    // Check honeypot
    if (formData._honeypot) {
      setSubmitStatus('error')
      setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendEmail(formData)
      if (result.success) {
        setSubmitStatus('success')
        setFormData(initialFormData)
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={clsx('grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2', className)}>
      {/* 1. First Name, Last Name - 2 fields */}
      <Input
        label="Vorname"
        name="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
        required
      />
      <Input
        label="Nachname"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
        required
      />

      {/* 2. Email, Phone - 2 fields */}
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
      />
      <Input
        label="Telefon"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      {/* 3. Company - 1 field */}
      <div className="sm:col-span-2">
        <Input
          label="Firma"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
        />
      </div>

      {/* 4. Project Type, Budget - 2 fields */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
          Projektart
        </label>
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border-0 py-2.5 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-200 focus:ring-2 focus:ring-inset focus:ring-neutral-950 dark:bg-white/5 dark:text-white dark:ring-neutral-800 dark:focus:ring-white"
        >
          <option value="website">Website</option>
          <option value="shop">Online-Shop</option>
          <option value="seo">SEO</option>
          <option value="marketing">Marketing</option>
          <option value="other">Sonstiges</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
          Budget
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border-0 py-2.5 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-200 focus:ring-2 focus:ring-inset focus:ring-neutral-950 dark:bg-white/5 dark:text-white dark:ring-neutral-800 dark:focus:ring-white"
        >
          <option value="">Bitte wählen</option>
          <option value="small">bis 5.000€</option>
          <option value="medium">5.000€ - 10.000€</option>
          <option value="large">10.000€ - 20.000€</option>
          <option value="xlarge">über 20.000€</option>
        </select>
      </div>

      {/* 5. Timeline - 1 field */}
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
          Zeitrahmen
        </label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border-0 py-2.5 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-200 focus:ring-2 focus:ring-inset focus:ring-neutral-950 dark:bg-white/5 dark:text-white dark:ring-neutral-800 dark:focus:ring-white"
        >
          <option value="">Bitte wählen</option>
          <option value="urgent">Dringend</option>
          <option value="month">Innerhalb eines Monats</option>
          <option value="quarter">Innerhalb von 3 Monaten</option>
          <option value="flexible">Flexibel</option>
        </select>
      </div>

      {/* 6. Project Description - 1 field */}
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
          Projektbeschreibung
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Beschreiben Sie Ihr Projekt und Ihre Ziele..."
          className="mt-2 block w-full rounded-md border-0 px-4 py-3.5 text-base text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-200 placeholder:text-neutral-500 focus:ring-2 focus:ring-inset focus:ring-neutral-950 dark:bg-white/5 dark:text-white dark:ring-neutral-800 dark:placeholder:text-neutral-400 dark:focus:ring-white"
        />
      </div>

      {/* Honeypot field - hidden from real users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_honeypot">Leave this field empty</label>
        <input
          type="text"
          id="_honeypot"
          name="_honeypot"
          value={formData._honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Privacy Policy Checkbox */}
      <div className="sm:col-span-2">
        <div className="flex items-start">
          <div className="flex items-center h-6">
            <input
              id="privacy"
              name="privacyAccepted"
              type="checkbox"
              checked={formData.privacyAccepted}
              onChange={(e) => handleChange({ 
                target: { 
                  name: 'privacyAccepted', 
                  value: e.target.checked 
                } 
              })}
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:focus:ring-blue-600"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
              Ich stimme der Datenverarbeitung gemäß <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">Datenschutzerklärung</a> zu.
            </label>
            {errors.privacyAccepted && (
              <p className="mt-1 text-sm text-red-600">{errors.privacyAccepted}</p>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button and Status Messages */}
      <div className="sm:col-span-2 flex flex-col space-y-4">
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={clsx(
              'flex-1 rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200',
              isSubmitting && 'opacity-50 cursor-not-allowed'
            )}
          >
            {isSubmitting ? 'Wird gesendet...' : 'Projekt anfragen'}
          </button>
          <button
            type="button"
            onClick={() => {
              setFormData(initialFormData)
              setErrors({})
              setSubmitStatus(null)
            }}
            className="px-8 py-4 text-base font-semibold rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-colors duration-200"
          >
            Zurücksetzen
          </button>
        </div>
        {submitStatus === 'success' && (
          <p className="text-sm text-green-600">Ihre Nachricht wurde erfolgreich gesendet!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    </form>
  )
}
