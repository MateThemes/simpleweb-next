'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBreak() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Track scroll progress of the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Very subtle parallax: translate only 8-12px
  const y = useTransform(scrollYProgress, [0, 1], [0, -12])

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden"
      aria-hidden="true"
    >
      {/* Parallax wrapper - only active on desktop without reduced motion */}
      <motion.div
        style={{ y }}
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
      </motion.div>

      <style jsx>{`
        /* Disable parallax on mobile and for users with reduced motion preference */
        @media (max-width: 768px) {
          .parallax-wrapper {
            transform: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .parallax-wrapper {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
