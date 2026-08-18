'use client'

import { motion, useReducedMotion } from 'motion/react'

/**
 * Route-change fade for client-side navigations. Full page loads get the
 * CSS @view-transition cross-fade instead (see globals.css) — the two
 * never fire together, so this is the safe fallback path.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion()

  if (reduced) return <>{children}</>

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.div>
  )
}
