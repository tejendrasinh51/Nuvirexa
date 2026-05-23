'use client'

import { useEffect, useState } from 'react'

export function useScrolledNav(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const update = () => {
      setScrolled(window.scrollY > threshold)
      ticking = false
    }

    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', handler, { passive: true })
    update()

    return () => window.removeEventListener('scroll', handler)
  }, [threshold])

  return scrolled
}
