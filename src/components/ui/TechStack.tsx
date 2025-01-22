import Image from 'next/image'

interface TechFeature {
  name: string
  description: string
}

interface TechStackProps {
  title: string
  description: string
  features: TechFeature[]
  imageUrl: string
}

export function TechStack({
  title,
  description,
  features,
  imageUrl,
}: TechStackProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="p-8">
        <div className="flex items-center gap-4">
          {/* Tech Logo */}
          <div className="h-12 w-12 flex-none relative">
            <Image
              src={imageUrl}
              alt={`${title} logo`}
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          
          {/* Title and Description */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid gap-6">
          {features.map((feature, index) => (
            <div key={index}>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                {feature.name}
              </h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
