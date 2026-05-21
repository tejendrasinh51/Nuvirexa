import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'gradient'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono',
        variant === 'gradient'
          ? 'bg-gradient-to-r from-accent-violet/20 to-accent-cyan/20 border border-accent-violet/30 text-white'
          : 'glass text-muted',
        className
      )}
    >
      {children}
    </span>
  )
}
