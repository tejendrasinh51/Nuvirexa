'use client'

type OrbVariant = 'hero' | 'cta' | 'services'

const configs: Record<
  OrbVariant,
  { color: string; size: string; x: string; y: string; delay: string }[]
> = {
  hero: [
    { color: 'rgba(124,58,237,0.25)', size: '600px', x: '15%', y: '20%', delay: '0s' },
    { color: 'rgba(6,182,212,0.15)', size: '500px', x: '75%', y: '60%', delay: '3s' },
    { color: 'rgba(79,70,229,0.2)', size: '400px', x: '50%', y: '80%', delay: '1.5s' },
  ],
  cta: [
    { color: 'rgba(124,58,237,0.35)', size: '700px', x: '20%', y: '50%', delay: '0s' },
    { color: 'rgba(6,182,212,0.2)', size: '500px', x: '80%', y: '30%', delay: '2s' },
  ],
  services: [
    { color: 'rgba(124,58,237,0.1)', size: '400px', x: '5%', y: '30%', delay: '0s' },
    { color: 'rgba(6,182,212,0.08)', size: '350px', x: '95%', y: '70%', delay: '4s' },
  ],
}

export function GradientOrbs({ variant = 'hero' }: { variant?: OrbVariant }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {configs[variant].map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-[120px] animate-orb-float"
          style={{
            background: orb.color,
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: 'translate(-50%, -50%)',
            animationDelay: orb.delay,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}
