export function DotMatrix({ opacity = 0.12 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden
      style={{
        opacity,
        backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 75%)',
      }}
    />
  )
}
