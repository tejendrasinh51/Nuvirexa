'use client'

import { useEffect, useState } from 'react'

/** True on desktops with mouse/trackpad — false on most phones/tablets */
export function usePrefersFinePointer() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return enabled
}
