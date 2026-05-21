'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MOTION_DURATION, MOTION_EASE } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface BlurRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'h1' | 'h2' | 'p'
}

export function BlurReveal({ children, className, delay = 0, as = 'div' }: BlurRevealProps) {
  const reduced = useReducedMotion()
  const Component = motion[as]

  const text = typeof children === 'string' ? children : null

  if (text) {
    const words = text.split(' ')
    const needsBlockWrapper = className?.includes('block')
    const viewProps = {
      initial: 'hidden' as const,
      whileInView: 'visible' as const,
      viewport: { once: true, margin: '-10%' },
    }
    const wordSpans = words.map((word, i) => (
      <motion.span
        key={`${word}-${i}`}
        className="inline-block"
        variants={{
          hidden: { opacity: 0, filter: reduced ? 'blur(0px)' : 'blur(12px)', y: reduced ? 0 : 12 },
          visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
              duration: reduced ? 0.1 : MOTION_DURATION.word,
              delay: reduced ? 0 : delay + i * MOTION_DURATION.wordStagger,
              ease: MOTION_EASE,
            },
          },
        }}
      >
        {word}
      </motion.span>
    ))

    if (needsBlockWrapper) {
      return (
        <Component className={cn('block w-full text-center', className)} {...viewProps}>
          <span className="inline-flex flex-wrap items-center justify-center gap-x-[0.35em]">{wordSpans}</span>
        </Component>
      )
    }

    return (
      <Component
        className={cn('inline-flex flex-wrap items-center justify-center gap-x-[0.35em]', className)}
        {...viewProps}
      >
        {wordSpans}
      </Component>
    )
  }

  return (
    <Component
      initial={{ opacity: 0, filter: reduced ? 'blur(0px)' : 'blur(12px)', y: reduced ? 0 : 16 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: reduced ? 0.1 : MOTION_DURATION.reveal, delay, ease: MOTION_EASE }}
      className={className}
    >
      {children}
    </Component>
  )
}
