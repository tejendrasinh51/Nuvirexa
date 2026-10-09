'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Check, Zap, Shield, Eye, Brain, Target, Globe } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { ShinyText } from '@/components/animations/ShinyText'
import { CountUp } from '@/components/animations/CountUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const GridPattern = dynamic(() => import('@/components/backgrounds/GridPattern').then((m) => m.GridPattern), { ssr: false })
const GradientOrbs = dynamic(() => import('@/components/backgrounds/GradientOrbs').then((m) => m.GradientOrbs), { ssr: false })

const bigStats = [
  { label: 'On-Time Delivery', value: 98, suffix: '%', percent: 98 },
  { label: 'Client Retention', value: 92, suffix: '%', percent: 92 },
  { label: 'Performance Score', value: 95, suffix: '+', percent: 95 },
]

const differentiators = [
  { icon: Zap, title: 'Speed Without Compromise', description: 'Agile delivery with weekly demos. Most projects ship ahead of schedule.' },
  { icon: Shield, title: 'Enterprise Quality', description: 'Production-grade code, security best practices, and 99.9% uptime standards.' },
  { icon: Eye, title: 'Full Transparency', description: 'Clear timelines, honest pricing, and direct access to your project team.' },
  { icon: Brain, title: 'AI-First Approach', description: 'We integrate cutting-edge AI to give your business a competitive advantage.' },
  { icon: Target, title: 'Results-Driven', description: 'Every decision is measured against KPIs — conversions, performance, and ROI.' },
  { icon: Globe, title: 'National Reach, Global Mindset', description: 'Serving ambitious businesses across India with world-class quality, global standards, and international-ready solutions.' },
]

export function WhyChooseUs() {
  const reduced = useReducedMotion()

  return (
    <section className="relative section-pad overflow-hidden bg-[#E0E5EC]">
      <GridPattern opacity={0.04} />
      <GradientOrbs variant="services" />

      <div className="container relative z-10 mx-auto">
        <div className="mb-12 text-center sm:mb-20">
          <ShinyText className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-[#6C63FF]">
            Why Nuvirexa
          </ShinyText>
          <BlurReveal as="h2" className="font-display text-display-lg font-black leading-tight text-[#3D4852]">
            The Nuvirexa Difference
          </BlurReveal>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            {bigStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="neu-card cursor-default rounded-[28px] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)]">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="font-semibold text-[#3D4852]">{stat.label}</span>
                    <span className="font-mono font-bold text-[#6C63FF]">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#dfe4eb] shadow-[inset_6px_6px_10px_rgba(163,177,198,0.6),inset_-6px_-6px_10px_rgba(255,255,255,0.5)]">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#6C63FF] to-[#38B2AC]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.percent}%` }}
                      transition={{ duration: reduced ? 0.1 : 2, ease: 'easeOut', delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="space-y-5">
            {differentiators.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="group flex gap-4 rounded-[24px] bg-[#E0E5EC] p-4 shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)]">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E0E5EC] text-[#6C63FF] shadow-[inset_5px_5px_10px_rgba(163,177,198,0.6),inset_-5px_-5px_10px_rgba(255,255,255,0.5)]">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="mb-1 flex items-center gap-2 font-semibold text-[#3D4852]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#6B7280]">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
