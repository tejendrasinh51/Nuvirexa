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
    <section className="section-pad relative overflow-hidden bg-[#E0E5EC]">
      <DotMatrix opacity={0.08} />

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <ShinyText className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-[#6C63FF]">
              About Us
            </ShinyText>
            <BlurReveal as="h2" className="mb-6 font-display text-display-md font-black leading-tight text-[#3D4852]">
              We turn ambitious visions into digital reality
            </BlurReveal>
            <p className="mb-4 text-lg leading-relaxed text-[#3D4852]/80">
              Founded by <strong className="text-[#3D4852]">Tejendrasinh Sisodia</strong>, Nuvirexa was built on a simple belief: every business deserves a digital presence as
              exceptional as their product. We combine cinematic design, engineering excellence, and AI innovation.
            </p>
            <p className="leading-relaxed text-[#6B7280]">
              From startups launching their first site to enterprises scaling complex platforms <strong className="text-[#3D4852]">across India</strong>, we deliver
              measurable results with transparency, speed, and world-class craftsmanship.
            </p>
          </FadeIn>

          <div className="grid gap-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="neu-card rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)]">
                  <p className="mb-2 font-display text-5xl font-black text-[#3D4852]">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="font-medium text-[#6B7280]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
