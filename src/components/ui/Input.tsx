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
      'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm',
      'ring-1 ring-inset ring-gray-300',
      'placeholder:text-gray-400',
      'focus:ring-2 focus:ring-inset focus:ring-blue-600',
      'dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:placeholder:text-slate-400',
      'dark:focus:ring-blue-500',
      error && 'ring-red-300 focus:ring-red-500 dark:ring-red-500/50 dark:focus:ring-red-500',
      className
    )

    const labelClasses = clsx(
      'block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200 mb-2'
    )

    const errorClasses = clsx(
      'mt-2 text-sm text-red-600 dark:text-red-400'
    )

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className={labelClasses}>
            {label}
            {required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <div className="relative">
          {type === 'textarea' ? (
            <textarea
              ref={ref as React.RefObject<HTMLTextAreaElement>}
              rows={rows}
              className={inputClasses}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.RefObject<HTMLInputElement>}
              type={type}
              className={inputClasses}
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