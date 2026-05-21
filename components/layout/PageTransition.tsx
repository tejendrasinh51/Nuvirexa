'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MOTION_DURATION, MOTION_EASE } from '@/lib/motion'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0.1 : MOTION_DURATION.page, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  )
}
