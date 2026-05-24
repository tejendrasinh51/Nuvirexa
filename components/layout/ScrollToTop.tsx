'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** Instant scroll on route change — avoids smooth-scroll lag from global CSS. */
export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
