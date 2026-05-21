'use client'

import dynamic from 'next/dynamic'
import { Star } from 'lucide-react'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { ShinyText } from '@/components/animations/ShinyText'
import { Marquee } from '@/components/animations/Marquee'
import { testimonials } from '@/data/testimonials'
import type { Testimonial } from '@/types/content'

const DotMatrix = dynamic(() => import('@/components/backgrounds/DotMatrix').then((m) => m.DotMatrix), { ssr: false })

function TestimonialCard({ name, role, company, quote, rating }: Testimonial) {
  return (
    <div className="w-[min(380px,calc(100vw-3rem))] flex-shrink-0 mx-2 sm:mx-3 glass border border-white/[0.08] hover:border-accent-violet/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-white/70 text-sm leading-relaxed mb-5">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-white/40 text-xs">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const row1 = [...testimonials, ...testimonials]
  const row2 = [...testimonials.slice().reverse(), ...testimonials.slice().reverse()]

  return (
    <section className="relative section-pad overflow-hidden section-alt-2">
      <DotMatrix opacity={0.08} />

      <div className="container mx-auto mb-12 sm:mb-16 text-center relative z-10">
        <ShinyText className="font-mono text-sm text-accent-cyan tracking-widest uppercase mb-4 block">
          Client Love
        </ShinyText>
        <BlurReveal as="h2" className="font-display text-display-md font-black text-white justify-center">
          What Clients Say
        </BlurReveal>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <Marquee direction="left" duration={45} className="mb-4 relative z-0">
        {row1.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} {...t} />
        ))}
      </Marquee>

      <Marquee direction="right" duration={50} className="relative z-0">
        {row2.map((t, i) => (
          <TestimonialCard key={`${t.id}-r-${i}`} {...t} />
        ))}
      </Marquee>
    </section>
  )
}
