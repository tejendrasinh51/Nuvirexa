'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight, Check } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { MagneticButton } from '@/components/animations/MagneticButton'
import { CalButton } from '@/components/features/schedule/CalButton'
import { Button } from '@/components/ui/Button'
import { NoiseOverlay } from '@/components/backgrounds/NoiseOverlay'

const GridPattern = dynamic(() => import('@/components/backgrounds/GridPattern').then((m) => m.GridPattern), { ssr: false })

interface CtaSectionProps {
  title?: string
  subtitle?: string
  variant?: 'mid' | 'bottom'
}

export function CtaSection({
  title,
  subtitle = "Join the brands that chose excellence. Let's transform your digital presence starting today.",
  variant = 'mid',
}: CtaSectionProps) {
  const isBottom = variant === 'bottom'

  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/60 via-background to-cyan-950/30" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[280px] sm:w-[600px] h-[280px] sm:h-[600px] rounded-full bg-accent-violet/20 blur-[80px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-accent-cyan/10 blur-[60px] sm:blur-[120px] pointer-events-none" />
      <GridPattern opacity={0.05} />
      <NoiseOverlay opacity={0.04} />

      <div className="container mx-auto relative z-10">
        <div className="relative max-w-4xl mx-auto">
          <div className="relative p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl overflow-hidden animate-breathing">
            <div className="absolute inset-0 rounded-3xl p-px bg-gradient-to-br from-accent-violet/50 via-transparent to-accent-cyan/30">
              <div className="absolute inset-0 rounded-3xl bg-[#0A0A14]/90 backdrop-blur-xl" />
            </div>

            <div className="absolute top-0 left-0 w-12 h-12 sm:w-20 sm:h-20 border-t-2 border-l-2 border-accent-violet/60 rounded-tl-2xl sm:rounded-tl-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 border-b-2 border-r-2 border-accent-cyan/40 rounded-br-2xl sm:rounded-br-3xl pointer-events-none" />

            <div className="relative z-10 text-center">
              <h2 className="font-display text-2xl sm:text-display-sm md:text-display-md font-black text-white leading-tight mb-4 sm:mb-6 text-balance px-1">
                <BlurReveal as="span" className="justify-center">
                  {title || (isBottom ? 'Ready to Build Something Extraordinary?' : 'Ready to Transform Your Digital Presence?')}
                </BlurReveal>
              </h2>

              <FadeIn delay={0.3}>
                <p className="text-white/60 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                  {subtitle}
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-md sm:max-w-none mx-auto">
                  <MagneticButton className="w-full sm:w-auto">
                    <CalButton size="xl" className="group w-full sm:w-auto">
                      Schedule a Discovery Call
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </CalButton>
                  </MagneticButton>
                  <MagneticButton className="w-full sm:w-auto">
                    <Link href={isBottom ? '/portfolio' : '/contact'} className="block w-full sm:w-auto">
                      <Button size="xl" variant="secondary" className="w-full">
                        {isBottom ? 'View Case Studies' : 'Contact Us'}
                      </Button>
                    </Link>
                  </MagneticButton>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-10 text-white/40 text-sm">
                  <span className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-400" /> Free Discovery Call
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-400" /> No Commitment
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-400" /> 48hr Response
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
