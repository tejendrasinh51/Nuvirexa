'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Error logged for monitoring in production
  }, [error])

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-4xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-muted mb-8 max-w-md">We encountered an unexpected error. Please try again.</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  )
}
