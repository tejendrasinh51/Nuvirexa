'use client'

import { cn } from '@/lib/utils'

export function ShinyText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'relative inline-block bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer',
        'bg-gradient-to-r from-white/60 via-white to-white/60',
        className
      )}
    >
      {children}
    </span>
  )
}
