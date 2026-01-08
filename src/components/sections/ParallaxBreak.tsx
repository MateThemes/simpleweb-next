'use client'

import Image from 'next/image'

export default function ParallaxBreak() {
  return (
    <section 
      className="relative overflow-hidden"
      aria-hidden="true"
    >
      {/* Static wrapper */}
      <div
        className="parallax-wrapper"
      >
        {/* Background image with overlay */}
        <div className="relative h-[200px] md:h-[300px] lg:h-[400px] w-full">
          <Image
            src="/img/about/workspace.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            quality={75}
            aria-hidden="true"
          />
          {/* Subtle overlay for better blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-transparent to-slate-50/20 dark:from-slate-900/40 dark:via-transparent dark:to-slate-900/40" />
        </div>
      </div>
    </section>
  )
}
