'use client'

import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'

export function CalInitializer() {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: 'discovery-call' })
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#7C3AED' } },
      })
    })()
  }, [])

  return null
}
