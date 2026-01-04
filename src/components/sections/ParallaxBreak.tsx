'use client'

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
        <div 
          className="relative h-[200px] md:h-[300px] lg:h-[400px] w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/about/workspace.jpg)',
          }}
        >
          {/* Subtle overlay for better blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-transparent to-slate-50/20 dark:from-slate-900/40 dark:via-transparent dark:to-slate-900/40" />
        </div>
      </div>
    </section>
  )
}
