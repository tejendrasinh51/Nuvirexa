'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { CalButton } from '@/components/features/schedule/CalButton'
import { SITE } from '@/lib/constants'

export function ContactCta() {
  return (
    <section className="py-14 sm:py-20 border-t border-white/[0.06] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-violet/5 to-transparent pointer-events-none" />
      <div className="container mx-auto text-center relative z-10">
        <FadeIn>
          <p className="text-accent-cyan font-mono text-sm tracking-widest uppercase mb-2">Ready to start?</p>
          <a
            href={`mailto:${SITE.email}`}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-gradient hover:opacity-80 transition-opacity block mb-4 break-all sm:break-normal px-2"
          >
            {SITE.email}
          </a>
          <p className="text-muted mb-8">or schedule a discovery call</p>
          <CalButton size="lg" className="w-full max-w-xs sm:w-auto mx-auto">
            Schedule a Discovery Call
          </CalButton>
        </FadeIn>
      </div>
    </section>
  )
}
