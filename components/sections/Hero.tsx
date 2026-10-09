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
    <section className="hero relative bg-[#E0E5EC] text-[#3D4852]">
      <Aurora />
      <Particles />
      <GradientOrbs variant="hero" />
      <NoiseOverlay opacity={0.04} />

      <div className="absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-[#dfe4eb] via-[#e0e5ec]/80 to-transparent" aria-hidden />

      <div className="hero-content relative z-10 text-center">
        <SlideUp delay={0}>
          <div className="hero-badge">
            <span className="h-2 w-2 rounded-full bg-[#6C63FF]" />
            <ShinyText className="font-mono uppercase text-[#3D4852]">✦ Nuvirexa Agency</ShinyText>
          </div>
        </SlideUp>

        <h1 className="px-1 font-display text-balance text-[#3D4852]">
          <SlideUp delay={0.15}>
            <span className="block">We Build Brands</span>
          </SlideUp>
          <SlideUp delay={0.3}>
            <span className="block text-center">
              <BlurReveal as="span">That Dominate</BlurReveal>
            </span>
          </SlideUp>
          <SlideUp delay={0.45}>
            <span className="mt-2 block">
              <ScrambleText text="Online." className="font-black" />
            </span>
          </SlideUp>
        </h1>

        <SlideUp delay={0.65}>
          <p className="hero-subtitle mx-auto mt-6 max-w-2xl px-2 text-lg text-[#6B7280]">
            Premium websites, AI tools, and digital strategies for ambitious brands ready to dominate their market.
          </p>
        </SlideUp>

        <SlideUp delay={0.75}>
          <div className="mx-auto mb-12 flex w-full max-w-md flex-col items-stretch justify-center gap-3 px-2 sm:max-w-none sm:flex-row">
            <MagneticButton className="w-full sm:w-auto">
              <CalButton size="lg" className="w-full sm:w-auto">
                Schedule a Call
              </CalButton>
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto">
              <Link href="/portfolio" className="block w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Our Work
                </Button>
              </Link>
            </MagneticButton>
          </div>
        </SlideUp>

        <SlideUp delay={0.95}>
          <div className="mb-20 flex flex-col items-center gap-4">
            <p className="font-mono text-sm tracking-[0.2em] text-[#6B7280] uppercase">Trusted by 50+ ambitious brands</p>
            <div className="flex -space-x-3">
              {['AC', 'BL', 'CX', 'DV', 'EW', 'FX'].map((initials, i) => (
                <div
                  key={initials}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#E0E5EC] bg-[#E0E5EC] text-xs font-mono font-bold text-[#3D4852] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)]"
                  style={{ zIndex: 6 - i }}
                >
                  {initials}
                </div>
              ))}
            </div>
          </div>
        </SlideUp>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 px-2 sm:grid-cols-3 sm:gap-4 sm:px-0">
          {heroStats.map((stat, i) => (
            <SlideUp key={stat.label} delay={1.1 + i * 0.18}>
              <div className="hero-stat flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E0E5EC] text-[#6C63FF] shadow-[inset_7px_7px_14px_rgba(163,177,198,0.6),inset_-7px_-7px_14px_rgba(255,255,255,0.6)]">
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="font-display text-2xl font-bold text-[#3D4852]">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-[#6B7280]">{stat.label}</p>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6B7280]">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-[#6C63FF] to-transparent" />
      </motion.div>
    </section>
  )
}
