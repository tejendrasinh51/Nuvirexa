'use client'

import dynamic from 'next/dynamic'
import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { CountUp } from '@/components/animations/CountUp'
import { ShinyText } from '@/components/animations/ShinyText'

const DotMatrix = dynamic(() => import('@/components/backgrounds/DotMatrix').then((m) => m.DotMatrix), { ssr: false })

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
]

export function AgencyIntro() {
  return (
    <section className="section-pad relative overflow-hidden">
      <DotMatrix opacity={0.06} />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <FadeIn>
            <ShinyText className="font-mono text-sm text-accent-cyan tracking-widest uppercase mb-4 block">
              About Us
            </ShinyText>
            <BlurReveal as="h2" className="font-display text-display-md font-black text-white mb-6 leading-tight">
              We turn ambitious visions into digital reality
            </BlurReveal>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Founded by <strong className="text-white">Tejendrasinh Sisodia</strong>, Nuvirexa was built on a simple belief: every business deserves a digital presence as
              exceptional as their product. We combine cinematic design, engineering excellence, and AI innovation.
            </p>
            <p className="text-muted leading-relaxed">
              From startups launching their first site to enterprises scaling complex platforms <strong className="text-white">across India</strong>, we deliver
              measurable results with transparency, speed, and world-class craftsmanship.
            </p>
          </FadeIn>

          <div className="grid gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="glass border border-white/[0.08] hover:border-accent-violet/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-glow-violet hover:-translate-y-1">
                  <p className="font-display text-5xl font-black text-gradient mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-muted font-medium">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
