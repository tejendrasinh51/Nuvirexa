'use client'

import { cn } from '@/lib/utils'
import { MARQUEE_DURATION_DEFAULT } from '@/lib/motion'

interface MarqueeProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  /** Seconds for one full scroll loop (higher = slower) */
  duration?: number
  pauseOnHover?: boolean
  className?: string
}

export function Marquee({
  children,
  direction = 'left',
  duration = MARQUEE_DURATION_DEFAULT,
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className={cn('overflow-hidden', className)}>
      <div
        className={cn(
          'flex w-max gap-12',
          animClass,
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex gap-12 shrink-0">{children}</div>
        <div className="flex gap-12 shrink-0" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
