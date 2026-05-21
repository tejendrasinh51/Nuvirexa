'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MOTION_DURATION, MOTION_EASE } from '@/lib/motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  const reduced = useReducedMotion()
  const dirs = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {},
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{
        duration: reduced ? 0 : MOTION_DURATION.reveal,
        delay: reduced ? 0 : delay,
        ease: MOTION_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
