'use client'

import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import { Button, type ButtonProps } from '@/components/ui/Button'
import { SITE } from '@/lib/constants'

export function CalButton({ children, ...props }: ButtonProps & { children: React.ReactNode }) {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi({ namespace: 'discovery-call' })
      cal('ui', { theme: 'dark', styles: { branding: { brandColor: '#7C3AED' } } })
    })()
  }, [])

  return (
    <Button
      data-cal-namespace="discovery-call"
      data-cal-link={SITE.calLink}
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      {...props}
    >
      {children}
    </Button>
  )
}
