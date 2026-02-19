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
        'mx-auto px-6 md:px-8',
        {
          'max-w-[1280px]': size === 'default',
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