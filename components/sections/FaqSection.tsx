'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { ShinyText } from '@/components/animations/ShinyText'
import { faqItems } from '@/data/faq'

export function FaqSection() {
  return (
    <section className="section-pad relative section-alt">
      <div className="container mx-auto max-w-3xl relative z-10">
        <FadeIn className="text-center mb-12 sm:mb-16">
          <ShinyText className="font-mono text-sm text-accent-cyan tracking-widest uppercase mb-4 block">
            FAQ
          </ShinyText>
          <BlurReveal
            as="h2"
            className="font-display text-display-sm sm:text-display-md font-black text-white justify-center text-balance"
          >
            Frequently Asked Questions
          </BlurReveal>
          <p className="text-muted text-lg mt-4">Everything you need to know before we build together.</p>
        </FadeIn>

        <FadeIn>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqItems.map((item) => (
              <Accordion.Item
                key={item.id}
                value={item.id}
                className="glass border border-white/[0.06] hover:border-accent-violet/20 rounded-xl overflow-hidden transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-5 text-left font-medium text-white hover:bg-white/[0.04] transition-colors group">
                    {item.question}
                    <ChevronDown className="w-5 h-5 text-accent-cyan shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-white/[0.04] pt-4">
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </FadeIn>
      </div>
    </section>
  )
}
