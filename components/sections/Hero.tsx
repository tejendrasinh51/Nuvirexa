'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Rocket, Star, Heart } from 'lucide-react'
import { SlideUp } from '@/components/animations/SlideUp'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { ShinyText } from '@/components/animations/ShinyText'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { ScrambleText } from '@/components/animations/ScrambleText'
import { CountUp } from '@/components/animations/CountUp'
import { CalButton } from '@/components/features/schedule/CalButton'
import { Button } from '@/components/ui/Button'
import { NoiseOverlay } from '@/components/backgrounds/NoiseOverlay'

const Aurora = dynamic(() => import('@/components/backgrounds/Aurora').then((m) => m.Aurora), { ssr: false })
const Particles = dynamic(() => import('@/components/backgrounds/Particles').then((m) => m.Particles), { ssr: false })
const GradientOrbs = dynamic(() => import('@/components/backgrounds/GradientOrbs').then((m) => m.GradientOrbs), { ssr: false })

const heroStats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', icon: Rocket },
  { value: 3, suffix: '+', label: 'Years Experience', icon: Star },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: Heart },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Aurora />
      <Particles />
      <GradientOrbs variant="hero" />
      <NoiseOverlay opacity={0.04} />

      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-[3] pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 container mx-auto pt-28 sm:pt-32 md:pt-36 pb-20 sm:pb-28 md:pb-32 text-center">
        <SlideUp delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-violet/30 bg-accent-violet/10 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" />
            <ShinyText className="text-sm font-mono text-white/80 tracking-widest uppercase">
              ✦ Nuvirexa Agency
            </ShinyText>
          </div>
        </SlideUp>

        <h1 className="font-display font-black leading-[0.92] tracking-tight mb-6 sm:mb-8 text-[clamp(2.25rem,10vw,9.5rem)] text-balance px-1">
          <SlideUp delay={0.15}>
            <span className="block text-white">We Build Brands</span>
          </SlideUp>
          <SlideUp delay={0.3}>
            <span className="block text-center text-white">
              <BlurReveal as="span">That Dominate</BlurReveal>
            </span>
          </SlideUp>
          <SlideUp delay={0.45}>
            <span className="block mt-2">
              <ScrambleText text="Online." className="font-black" />
            </span>
          </SlideUp>
        </h1>

        <SlideUp delay={0.65}>
          <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed px-2">
            Premium websites, AI tools, and digital strategies for ambitious brands ready to dominate their market.
          </p>
        </SlideUp>

        <SlideUp delay={0.6}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 w-full max-w-md sm:max-w-none mx-auto px-2 sm:px-0">
            <MagneticButton className="w-full sm:w-auto">
              <CalButton size="lg" className="w-full sm:w-auto">
                Schedule a Call
              </CalButton>
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto">
              <Link href="/portfolio" className="block w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full">
                  View Our Work
                </Button>
              </Link>
            </MagneticButton>
          </div>
        </SlideUp>

        <SlideUp delay={0.95}>
          <div className="flex flex-col items-center gap-4 mb-20">
            <p className="text-sm text-muted font-mono tracking-wide">Trusted by 50+ ambitious brands</p>
            <div className="flex -space-x-3">
              {['AC', 'BL', 'CX', 'DV', 'EW', 'FX'].map((initials, i) => (
                <div
                  key={initials}
                  className="w-11 h-11 rounded-full glass-strong flex items-center justify-center text-xs font-mono text-white border-2 border-background shadow-glow-violet-sm"
                  style={{ zIndex: 6 - i }}
                >
                  {initials}
                </div>
              ))}
            </div>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto px-2 sm:px-0">
          {heroStats.map((stat, i) => (
            <SlideUp key={stat.label} delay={1.1 + i * 0.18}>
              <div className="glass border border-white/10 hover:border-accent-violet/40 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:shadow-glow-violet hover:-translate-y-1 text-left">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-violet/30 to-accent-cyan/20 border border-accent-violet/20 flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5 text-accent-violet" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-gradient">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>

      <motion.div
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-mono text-white/30 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent-cyan/50 to-transparent" />
      </motion.div>
    </section>
  )
}
