export function GridPattern({ opacity = 0.08 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden
      style={{
        opacity,
        backgroundImage: `
          linear-gradient(65deg, rgba(124,58,237,0.4) 1px, transparent 1px),
          linear-gradient(155deg, rgba(124,58,237,0.4) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }}
    />
  )
}
