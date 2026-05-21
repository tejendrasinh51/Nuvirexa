import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300',
        hover && 'hover:shadow-card-hover hover:border-white/[0.1] hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
