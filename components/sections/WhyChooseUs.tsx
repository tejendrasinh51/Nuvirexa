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
  { icon: Globe, title: 'Global Standards', description: 'World-class craftsmanship inspired by Linear, Vercel, and top-tier agencies.' },
]

export function WhyChooseUs() {
  const reduced = useReducedMotion()

  return (
    <section className="relative section-pad overflow-hidden">
      <GridPattern opacity={0.06} />
      <GradientOrbs variant="services" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <ShinyText className="font-mono text-sm text-accent-cyan tracking-widest uppercase mb-4 block">
            Why Nuvirexa
          </ShinyText>
          <BlurReveal as="h2" className="font-display text-display-lg font-black text-white leading-tight justify-center">
            The Nuvirexa Difference
          </BlurReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {bigStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="group glass border border-white/[0.06] hover:border-accent-violet/30 rounded-2xl p-8 transition-all duration-500 hover:shadow-glow-violet cursor-default">
                  <div className="flex justify-between mb-3">
                    <span className="text-white font-semibold">{stat.label}</span>
                    <span className="text-accent-cyan font-bold font-mono">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full"
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
                <div className="flex gap-4 group">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-accent-violet/40 bg-accent-violet/10 flex items-center justify-center group-hover:bg-accent-violet/30 transition-colors">
                    <Check className="w-3 h-3 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-accent-violet" />
                      {item.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
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
