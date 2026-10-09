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
    <section className="relative section-pad overflow-hidden bg-[#E0E5EC]">
      <GridPattern opacity={0.04} />
      <NoiseOverlay opacity={0.02} />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="neu-card relative overflow-hidden rounded-[32px] p-6 sm:p-10 md:p-16">
            <div className="absolute inset-0 rounded-[32px] border border-white/40" aria-hidden />
            <div className="absolute left-0 top-0 h-14 w-14 rounded-br-[24px] border-b border-r border-white/60 bg-[#E0E5EC]/40" aria-hidden />
            <div className="absolute bottom-0 right-0 h-14 w-14 rounded-tl-[24px] border-l border-t border-white/60 bg-[#E0E5EC]/40" aria-hidden />

            <div className="relative z-10 text-center">
              <h2 className="mb-4 px-1 font-display text-2xl font-black leading-tight text-[#3D4852] sm:text-display-sm md:text-display-md">
                <BlurReveal as="span" className="justify-center">
                  {title || (isBottom ? 'Ready to Build Something Extraordinary?' : 'Ready to Transform Your Digital Presence?')}
                </BlurReveal>
              </h2>

              <FadeIn delay={0.3}>
                <p className="mx-auto mb-8 max-w-2xl px-2 text-base leading-relaxed text-[#6B7280] sm:text-lg md:text-xl">
                  {subtitle}
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="mx-auto flex w-full max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
                  <MagneticButton className="w-full sm:w-auto">
                    <CalButton size="xl" className="group w-full sm:w-auto">
                      Schedule a Discovery Call
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </CalButton>
                  </MagneticButton>
                  <MagneticButton className="w-full sm:w-auto">
                    <Link href={isBottom ? '/portfolio' : '/contact'} className="block w-full sm:w-auto">
                      <Button size="xl" variant="secondary" className="w-full sm:w-auto">
                        {isBottom ? 'View Case Studies' : 'Contact Us'}
                      </Button>
                    </Link>
                  </MagneticButton>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B7280] md:gap-8">
                  <span className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-[#38B2AC]" /> Free Discovery Call
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-[#38B2AC]" /> No Commitment
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-[#38B2AC]" /> 48hr Response
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
