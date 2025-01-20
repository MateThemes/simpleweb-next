import Link from 'next/link'

interface ButtonProps {
  href?: string
  variant?: 'primary' | 'secondary'
  block?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({ href, variant = 'primary', block = false, children, onClick, className = '' }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-center font-medium transition'
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
  }
  const blockClass = block ? 'w-full' : ''
  const classes = `${baseClasses} ${variantClasses[variant]} ${blockClass} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}