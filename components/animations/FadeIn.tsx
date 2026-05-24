'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MOTION_DURATION, MOTION_EASE } from '@/lib/motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  /** Above-the-fold content: animate on mount instead of waiting for scroll */
  eager?: boolean
}

export function FadeIn({ children, delay = 0, direction = 'up', className, eager = false }: FadeInProps) {
  const reduced = useReducedMotion()
  const dirs = {
    up: { y: 16 },
    down: { y: -16 },
    left: { x: 16 },
    right: { x: -16 },
    none: {},
  }
  const duration = reduced ? 0 : eager ? MOTION_DURATION.revealFast : MOTION_DURATION.reveal
  const hidden = { opacity: 0, ...dirs[direction] }
  const visible = { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      initial={hidden}
      {...(eager
        ? { animate: visible }
        : { whileInView: visible, viewport: { once: true, margin: '-8%' } })}
      transition={{
        duration,
        delay: reduced ? 0 : delay,
        ease: MOTION_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
