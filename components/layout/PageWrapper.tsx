interface PageWrapperProps {
  children: React.ReactNode
  className?: string
}

export function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`relative min-h-screen ${className}`}>
      <div className="absolute inset-0 bg-mesh-1 pointer-events-none" aria-hidden />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
