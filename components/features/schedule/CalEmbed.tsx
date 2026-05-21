'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { SITE } from '@/lib/constants'

export function CalEmbed() {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: 'discovery-call' })
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#7C3AED' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <Cal
      namespace="discovery-call"
      calLink={SITE.calLink}
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view', theme: 'dark' }}
    />
  )
}
