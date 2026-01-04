'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const handleScrollToKlarheit = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  const element = document.getElementById('klarheit')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function HeroCtaLink() {
  return (
    <Link
      href="#klarheit"
      onClick={handleScrollToKlarheit}
      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
    >
      <span>Woran du erkennst, ob deine Website arbeitet</span>
      <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
    </Link>
  )
}

