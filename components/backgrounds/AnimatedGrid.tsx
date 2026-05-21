'use client'

export function AnimatedGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.15]"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  )
}
