import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps {
  className?: string
  children: ReactNode
  size?: 'default' | 'small' | 'large'
}

export function Container({ className, children, size = 'default' }: ContainerProps) {
  return (
    <div 
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        {
          'max-w-7xl': size === 'default',
          'max-w-5xl': size === 'small',
          'max-w-screen-2xl': size === 'large',
        },
        className
      )}
    >
      {children}
    </div>
  )
}