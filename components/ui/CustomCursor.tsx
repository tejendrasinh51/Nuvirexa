'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 1024) return
    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const updatePos = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
          target.closest('a, button, [role="button"]') !== null
      )
    }

    window.addEventListener('mousemove', updatePos)
    return () => {
      window.removeEventListener('mousemove', updatePos)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: isPointer ? 0 : 1 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 40 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/40 pointer-events-none z-[9998]"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: isPointer ? 1.8 : 1,
          opacity: isPointer ? 0.6 : 0.3,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      />
    </>
  )
}
