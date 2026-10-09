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
    <div className="mx-2 w-[min(380px,calc(100vw-3rem))] flex-shrink-0 rounded-[28px] bg-[#E0E5EC] p-5 shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] sm:mx-3 sm:p-6">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]" />
        ))}
      </div>
      <p className="mb-5 text-sm leading-relaxed text-[#6B7280]">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E0E5EC] text-sm font-bold text-[#3D4852] shadow-[inset_6px_6px_12px_rgba(163,177,198,0.6),inset_-6px_-6px_12px_rgba(255,255,255,0.5)]">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#3D4852]">{name}</p>
          <p className="text-xs text-[#6B7280]">
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
    <section className="relative section-pad overflow-hidden bg-[#E0E5EC]">
      <DotMatrix opacity={0.06} />

      <div className="container relative z-10 mx-auto mb-12 text-center sm:mb-16">
        <ShinyText className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-[#6C63FF]">
          Client Love
        </ShinyText>
        <BlurReveal as="h2" className="font-display text-display-md font-black text-[#3D4852]">
          What Clients Say
        </BlurReveal>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-[#E0E5EC] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-[#E0E5EC] to-transparent sm:w-32" />

      <Marquee direction="left" duration={45} className="relative z-0 mb-4">
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
