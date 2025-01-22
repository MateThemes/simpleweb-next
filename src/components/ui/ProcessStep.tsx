import { ReactNode } from 'react'
import clsx from 'clsx'

interface ProcessStepProps {
  title: string
  description: string
  number: number
  icon: ReactNode
  isLast?: boolean
}

export function ProcessStep({
  title,
  description,
  number,
  icon,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className={clsx(
      'relative flex gap-6',
      !isLast && 'pb-12'
    )}>
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-14 -bottom-1 w-px bg-gray-200 dark:bg-gray-800" />
      )}
      
      {/* Step number and icon */}
      <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800/50">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 dark:bg-white">
          {icon}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-auto">
        <div className="flex items-center gap-4">
          <div className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {number}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}
