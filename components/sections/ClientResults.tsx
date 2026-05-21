'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { CountUp } from '@/components/animations/CountUp'
import { NoiseOverlay } from '@/components/backgrounds/NoiseOverlay'
import { cn } from '@/lib/utils'

const metrics = [
  { value: 2, prefix: '$', suffix: 'M+', label: 'Revenue Generated', sublabel: 'For our clients' },
  { value: 50, suffix: '+', label: 'Brands Served', sublabel: 'Across 12+ countries' },
  { value: 99, suffix: '.9%', label: 'Average Uptime', sublabel: 'Production systems' },
  { value: 40, suffix: '%', label: 'Conversion Lift', sublabel: 'Average improvement' },
]

export function ClientResults() {
  return (
    <section className="relative section-pad overflow-hidden bg-gradient-to-b from-background via-violet-950/10 to-background">
      <NoiseOverlay opacity={0.04} />

      <div className="container mx-auto relative z-10">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <BlurReveal
            as="h2"
            className="font-display text-display-sm sm:text-display-md font-black text-white justify-center text-balance px-2"
          >
            Our Work Speaks in Numbers
          </BlurReveal>
          <p className="text-muted text-lg mt-4">Measurable impact across every engagement.</p>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 max-w-5xl mx-auto">
          {metrics.map((m, i) => (
            <FadeIn
              key={m.label}
              delay={i * 0.1}
              className={cn(
                'relative p-8 md:p-10 group cursor-default text-center lg:text-left',
                i % 4 !== 3 && 'lg:border-r border-white/[0.06]',
                i < 2 && 'border-b lg:border-b-0 border-white/[0.06]'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              <div className="relative">
                <p className="font-display font-black leading-none mb-3">
                  <CountUp
                    end={m.value}
                    prefix={m.prefix}
                    suffix={m.suffix}
                    className="text-5xl md:text-7xl text-gradient"
                  />
                </p>
                <p className="text-white/60 text-sm font-medium">{m.label}</p>
                <p className="text-white/30 text-xs mt-1 font-mono">{m.sublabel}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
