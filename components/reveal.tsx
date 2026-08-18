'use client'

import { motion, useReducedMotion } from 'motion/react'

type RevealProps = {
  children: React.ReactNode
  /** Stagger delay in seconds. */
  delay?: number
  className?: string
}

/** Scroll-driven fade/rise reveal. Renders statically under prefers-reduced-motion. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

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
