import { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'outlined' | 'elevated'
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl',
        {
          'bg-white dark:bg-gray-900': variant === 'default',
          'border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900':
            variant === 'outlined',
          'bg-white dark:bg-gray-900 shadow-lg':
            variant === 'elevated',
        },
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx('p-6 pb-4', className)}>
      {children}
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={clsx('p-6 pt-4', className)}>
      {children}
    </div>
  )
}

