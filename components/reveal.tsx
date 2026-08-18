'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type RevealProps = {
  children: React.ReactNode
  /** Stagger delay in seconds. */
  delay?: number
  className?: string
}

/**
 * Scroll-driven fade/rise reveal, progressive-enhancement style: content is
 * fully visible in SSR HTML and at first paint (so it can never hurt LCP).
 * After hydration, only elements still below the viewport switch into
 * animated mode and reveal on scroll. Inert under prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (el && el.getBoundingClientRect().top > window.innerHeight) setAnimated(true)
  }, [reduced])

  if (!animated) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
