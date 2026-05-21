'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { usePrefersFinePointer } from '@/hooks/usePrefersFinePointer'
import { cn } from '@/lib/utils'

export function MagneticButton({
  children,
  className,
  padding = 80,
}: {
  children: React.ReactNode
  className?: string
  padding?: number
}) {
  const canMagnet = usePrefersFinePointer()
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  if (!canMagnet) {
    return <div className={cn(className)}>{children}</div>
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distX = e.clientX - centerX
    const distY = e.clientY - centerY
    const dist = Math.sqrt(distX * distX + distY * distY)
    if (dist > padding + Math.max(width, height) / 2) {
      setPosition({ x: 0, y: 0 })
      return
    }
    setPosition({ x: distX * 0.25, y: distY * 0.25 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 28 }}
      className={className}
      style={{ padding: padding / 4 }}
    >
      {children}
    </motion.div>
  )
}
