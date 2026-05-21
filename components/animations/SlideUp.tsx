'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MOTION_DURATION, MOTION_EASE } from '@/lib/motion'

interface SlideUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function SlideUp({ children, delay = 0, className }: SlideUpProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: reduced ? 0 : MOTION_DURATION.slide,
        delay: reduced ? 0 : delay,
        ease: MOTION_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
