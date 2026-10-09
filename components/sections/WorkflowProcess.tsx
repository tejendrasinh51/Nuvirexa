'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { ShinyText } from '@/components/animations/ShinyText'
import { processSteps } from '@/data/process'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function WorkflowProcess() {
  const reduced = useReducedMotion()

  return (
    <section className="section-pad relative bg-[#E0E5EC]">
      <div className="container mx-auto">
        <div className="mb-12 text-center sm:mb-20">
          <ShinyText className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-[#6C63FF]">
            Our Process
          </ShinyText>
          <BlurReveal as="h2" className="font-display text-display-md font-black text-[#3D4852]">
            How We Work
          </BlurReveal>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[#6B7280]">
            A proven five-step process from discovery to sustained growth.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-[#d9dde5] md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6C63FF] to-[#38B2AC]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0.1 : 3, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid gap-8 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="group relative text-center md:text-left">
                  <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)]">
                    <span className="font-display text-xl font-black text-[#3D4852]">{step.number}</span>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-[#3D4852]">{step.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-[#6B7280]">{step.description}</p>
                  <div className="inline-flex items-center gap-1 rounded-full bg-[#E0E5EC] px-2 py-1 shadow-[inset_4px_4px_8px_rgba(163,177,198,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]">
                    <Clock className="h-3 w-3 text-[#6C63FF]" />
                    <span className="font-mono text-xs text-[#6C63FF]">{step.duration}</span>
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
