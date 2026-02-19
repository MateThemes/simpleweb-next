import { forwardRef } from 'react'
import clsx from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string
  error?: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  rows?: number
  required?: boolean
}

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ className, label, error, type = 'text', rows = 4, required, ...props }, ref) => {
    const inputClasses = clsx(
      'block w-full min-h-[3rem] rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3',
      'text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]',
      'transition-[box-shadow,border-color] duration-[var(--duration-normal)]',
      'hover:border-[var(--muted-foreground)]/40',
      'focus:outline-none focus:border-[var(--ring)] focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-[var(--ring-offset)]',
      'disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-[var(--surface-2)]',
      error && 'border-[var(--danger)] focus:border-[var(--danger)] focus:ring-[var(--danger)]',
      type === 'textarea' && 'min-h-[8rem] resize-y',
      className
    )

    const labelClasses = clsx(
      'block text-sm font-medium text-[var(--foreground)] mb-2'
    )

    const errorClasses = clsx(
      'mt-1.5 text-sm text-[var(--danger)]'
    )

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className={labelClasses}>
            {label}
            {required && <span className="text-[var(--danger)] ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <div className="relative">
          {type === 'textarea' ? (
            <textarea
              ref={ref as React.RefObject<HTMLTextAreaElement>}
              rows={rows}
              className={clsx(inputClasses, 'py-3')}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.RefObject<HTMLInputElement>}
              type={type}
              className={clsx(inputClasses, 'h-12 min-h-0')}
              {...props}
            />
          )}
        </div>
        {error && <p className={errorClasses}>{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'