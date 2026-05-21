'use client'

import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { usePrefersFinePointer } from '@/hooks/usePrefersFinePointer'

export function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const canTilt = usePrefersFinePointer()
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)')

  if (!canTilt) {
    return <div className={className}>{children}</div>
  }

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTransform(
      `perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.02)`
    )
  }

  const handleLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)')
  }

  return (
    <div
      ref={ref}
      className={cn('transition-transform duration-300 ease-out', className)}
      style={{ transform, willChange: 'transform' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  )
}
