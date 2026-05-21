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
    <section className="section-pad relative section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <ShinyText className="font-mono text-sm text-accent-cyan tracking-widest uppercase mb-4 block">
            Our Process
          </ShinyText>
          <BlurReveal as="h2" className="font-display text-display-md font-black text-white justify-center">
            How We Work
          </BlurReveal>
          <p className="text-muted text-lg max-w-xl mx-auto mt-6">
            A proven five-step process from discovery to sustained growth.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0.1 : 3, ease: 'easeInOut' }}
              style={{ transformOrigin: 'left' }}
            />
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.15}>
                <div className="relative text-center md:text-left group">
                  <div className="relative inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-accent-violet to-violet-900 border border-accent-violet/40 items-center justify-center mb-6 shadow-glow-violet mx-auto md:mx-0 group-hover:scale-105 transition-transform">
                    <span className="font-display font-black text-xl text-white">{step.number}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
                    <Clock className="w-3 h-3 text-accent-cyan" />
                    <span className="text-accent-cyan text-xs font-mono">{step.duration}</span>
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
