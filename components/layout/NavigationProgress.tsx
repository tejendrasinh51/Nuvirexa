'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export function NavigationProgress() {
  const pathname = usePathname()
  const [active, setActive] = useState(false)
  const prevPath = useRef(pathname)

  useEffect(() => {
    if (prevPath.current === pathname) return
    prevPath.current = pathname

    setActive(true)
    window.scrollTo(0, 0)

    const done = window.setTimeout(() => setActive(false), 280)
    return () => window.clearTimeout(done)
  }, [pathname])

  return (
    <div
      aria-hidden
      className={`navigation-progress fixed top-0 left-0 right-0 z-[100] h-0.5 origin-left bg-gradient-to-r from-accent-violet to-accent-cyan pointer-events-none transition-opacity duration-150 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    />
  )
}
