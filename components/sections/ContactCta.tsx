'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { CalButton } from '@/components/features/schedule/CalButton'
import { SITE } from '@/lib/constants'

export function ContactCta() {
  return (
    <section className="relative border-t border-white/60 bg-[#E0E5EC] py-14 sm:py-20">
      <div className="container relative z-10 mx-auto text-center">
        <FadeIn>
          <p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-[#6C63FF]">Ready to start?</p>
          <a
            href={`mailto:${SITE.email}`}
            className="mb-4 block break-all px-2 font-display text-2xl font-black text-[#3D4852] transition-opacity hover:opacity-80 sm:text-3xl md:text-4xl sm:break-normal"
          >
            {SITE.email}
          </a>
          <p className="mb-8 text-[#6B7280]">or schedule a discovery call</p>
          <CalButton size="lg" className="mx-auto w-full max-w-xs sm:w-auto">
            Schedule a Discovery Call
          </CalButton>
        </FadeIn>
      </div>
    </section>
  )
}
