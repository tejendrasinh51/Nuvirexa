'use client'

import dynamic from 'next/dynamic'
import { NoiseOverlay } from '@/components/backgrounds/NoiseOverlay'

const Galaxy = dynamic(() => import('@/components/backgrounds/Galaxy'), { ssr: false })

export function ContactGalaxyBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 opacity-70 mix-blend-screen">
        <Galaxy
          starSpeed={0.35}
          density={1}
          hueShift={140}
          speed={0.6}
          glowIntensity={0.3}
          saturation={0}
          mouseRepulsion
          repulsionStrength={2}
          twinkleIntensity={0.3}
          rotationSpeed={0.06}
          transparent
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="absolute inset-0 bg-mesh-1 opacity-40" />
      <div className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full bg-accent-violet/15 blur-[120px]" />
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-accent-cyan/10 blur-[100px]" />
      <NoiseOverlay opacity={0.03} />
    </div>
  )
}
