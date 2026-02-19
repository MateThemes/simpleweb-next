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
  budget: '' | 'unclear' | 'small' | 'medium' | 'large' | 'xlarge'
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
    if (!formData.email) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    }
    if (!formData.description || formData.description.trim().length === 0) {
      newErrors.description = 'Bitte beschreiben Sie kurz Ihr Anliegen'
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

  const selectClasses = clsx(
    'select-arrow-spaced',
    'block w-full h-12 rounded-xl border border-[var(--border)] bg-[var(--background)] pl-4 pr-12 py-3',
    'text-[var(--foreground)] transition-[box-shadow,border-color] duration-[var(--duration-normal)]',
    'hover:border-[var(--muted-foreground)]/40',
    'focus:outline-none focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-[var(--ring-offset)]',
    'disabled:cursor-not-allowed disabled:opacity-60'
  )
  const labelClasses = 'block text-sm font-medium text-[var(--foreground)] mb-2'
  const textareaClasses = clsx(
    'block w-full min-h-[8.5rem] rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3.5',
    'text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] resize-y',
    'transition-[box-shadow,border-color] duration-[var(--duration-normal)]',
    'hover:border-[var(--muted-foreground)]/40',
    'focus:outline-none focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-[var(--ring-offset)]',
    'disabled:cursor-not-allowed disabled:opacity-60'
  )

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
        label="Nachname (optional)"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
      />

      {/* 2. Email, Phone - 2 fields */}
      <Input
        label="E-Mail"
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
        <label htmlFor="projectType" className={labelClasses}>
          Projektart (optional)
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className={selectClasses}
        >
          <option value="website">Website</option>
          <option value="shop">Online-Shop</option>
          <option value="seo">SEO</option>
          <option value="marketing">Marketing</option>
          <option value="other">Sonstiges</option>
        </select>
      </div>
      <div>
        <label htmlFor="budget" className={labelClasses}>
          Investitionsrahmen (optional)
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={selectClasses}
        >
          <option value="">Bitte wählen</option>
          <option value="unclear">Noch unklar</option>
          <option value="small">bis 5.000€</option>
          <option value="medium">5.000€ - 10.000€</option>
          <option value="large">10.000€ - 20.000€</option>
          <option value="xlarge">über 20.000€</option>
        </select>
      </div>

      {/* 5. Timeline - 1 field */}
      <div className="sm:col-span-2">
        <label htmlFor="timeline" className={labelClasses}>
          Zeitrahmen
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className={selectClasses}
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
        <label htmlFor="description" className={labelClasses}>
          Projektbeschreibung <span className="text-[var(--danger)]" aria-hidden="true">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          placeholder="Beschreibe kurz, wo du stehst und was du dir vorstellst..."
          required
          className={clsx(textareaClasses, errors.description && 'border-[var(--danger)] focus:border-[var(--danger)] focus:ring-[var(--danger)]')}
        />
        {errors.description && (
          <p className="mt-1.5 text-sm text-[var(--danger)]">{errors.description}</p>
        )}
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
        <div className="flex items-start gap-3">
          <div className="flex items-center h-6 flex-shrink-0 pt-0.5">
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
              className={clsx(
                'h-4 w-4 rounded border-2 border-[var(--border)] bg-[var(--background)] text-[var(--primary)]',
                'transition-colors duration-[var(--duration-normal)]',
                'hover:border-[var(--muted-foreground)]/60',
                'focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-[var(--ring-offset)]',
                'disabled:cursor-not-allowed disabled:opacity-60',
                errors.privacyAccepted && 'border-[var(--danger)]'
              )}
            />
          </div>
          <div className="min-w-0">
            <label htmlFor="privacy" className="text-sm text-[var(--muted-foreground)] leading-relaxed cursor-pointer">
              Ich stimme der Datenverarbeitung gemäß{' '}
              <a
                href="/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] underline underline-offset-2 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)] rounded"
              >
                Datenschutzerklärung
              </a>{' '}
              zu.
            </label>
            {errors.privacyAccepted && (
              <p className="mt-1.5 text-sm text-[var(--danger)]">{errors.privacyAccepted}</p>
            )}
          </div>
        </div>
      </div>

      {/* Submit Button and Status Messages */}
      <div className="sm:col-span-2 flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={clsx(
              'inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-semibold text-base',
              'bg-[var(--primary)] text-[var(--primary-foreground)]',
              'hover:opacity-95 transition-opacity duration-[var(--duration-normal)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]',
              'disabled:opacity-60 disabled:cursor-not-allowed',
              'min-w-[200px] flex-1'
            )}
          >
            {isSubmitting ? 'Wird gesendet...' : 'Einschätzung anfragen'}
          </button>
          <button
            type="button"
            onClick={() => {
              setFormData(initialFormData)
              setErrors({})
              setSubmitStatus(null)
            }}
            className={clsx(
              'inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-xl font-medium text-base',
              'bg-transparent text-[var(--foreground)] border-2 border-[var(--border)]',
              'hover:border-[var(--muted-foreground)] hover:bg-[var(--surface-2)] transition-colors duration-[var(--duration-normal)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ring-offset)]'
            )}
          >
            Zurücksetzen
          </button>
        </div>

        {/* Trust Microcopy */}
        <div className="text-sm text-[var(--muted-foreground)] space-y-1 pt-1">
          <p>Antwort in 1–2 Werktagen.</p>
          <p>Kein Spam. Kein Newsletter.</p>
          <p>Wenn es nicht passt, sagen wir es ehrlich.</p>
        </div>

        {submitStatus === 'success' && (
          <p className="text-sm text-[var(--success)]">Ihre Nachricht wurde erfolgreich gesendet!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-sm text-[var(--danger)]">{errorMessage}</p>
        )}
      </div>
    </form>
  )
}
