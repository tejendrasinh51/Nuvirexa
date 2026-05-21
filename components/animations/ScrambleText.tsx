'use client'

import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MOTION_DURATION } from '@/lib/motion'
import { cn } from '@/lib/utils'

const CHARS = '.:@#$%^&*!?'

export function ScrambleText({
  text,
  className,
  duration = MOTION_DURATION.scramble,
}: {
  text: string
  className?: string
  duration?: number
}) {
  const [display, setDisplay] = useState(text)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      setDisplay(text)
      return
    }

    let frame = 0
    const totalFrames = Math.floor(duration / 30)
    const interval = setInterval(() => {
      frame++
      if (frame >= totalFrames) {
        setDisplay(text)
        clearInterval(interval)
        return
      }
      const progress = frame / totalFrames
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < progress * text.length) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )
    }, 30)

    return () => clearInterval(interval)
  }, [text, duration, reduced])

  return <span className={cn('text-gradient-animated inline-block', className)}>{display}</span>
}
