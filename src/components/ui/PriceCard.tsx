import { CheckIcon } from '../icons'
import clsx from 'clsx'

interface Feature {
  name: string
  included: boolean
}

interface PriceCardProps {
  name: string
  price: string
  description: string
  features: Feature[]
  popular?: boolean
  ctaText?: string
  ctaLink?: string
  targetAudience?: string
}

export function PriceCard({
  name,
  price,
  description,
  features,
  popular = false,
  ctaText = 'Jetzt starten',
  ctaLink = '/kontakt',
  targetAudience,
}: PriceCardProps) {
  return (
    <div
      className={clsx(
        'relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm flex flex-col',
        popular && 'border-2 border-blue-500 dark:border-blue-400'
      )}
    >
      {popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-blue-500 rounded-full font-medium">
          Beliebt
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">{description}</p>
        {targetAudience && (
          <p className="mt-2 text-xs text-gray-600 dark:text-gray-500 italic">{targetAudience}</p>
        )}
      </div>

      <div className="mt-2 mb-8">
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-4xl font-bold tracking-tight">{price}</span>
          {price !== 'Individuell' && <span className="ml-1 text-sm font-semibold">€</span>}
        </div>
      </div>

      <ul role="list" className="mt-6 space-y-4 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-3">
            <CheckIcon 
              className={clsx(
                'h-5 w-5 flex-shrink-0',
                feature.included 
                  ? 'text-blue-500 dark:text-blue-400' 
                  : 'text-gray-300 dark:text-gray-600'
              )} 
            />
            <span 
              className={clsx(
                'text-sm',
                feature.included 
                  ? 'text-gray-700 dark:text-gray-300' 
                  : 'text-gray-400 dark:text-gray-500'
              )}
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={ctaLink}
        className={clsx(
          'mt-8 block rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
          popular
            ? 'bg-blue-500 text-white hover:bg-blue-600 focus-visible:outline-blue-600'
            : 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
        )}
      >
        {ctaText}
      </a>
    </div>
  )
}
