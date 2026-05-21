'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(124, 58, 237, 0.15)',
}: {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [hovering, setHovering] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden rounded-2xl', className)}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: hovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
