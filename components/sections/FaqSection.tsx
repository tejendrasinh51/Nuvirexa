'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { ShinyText } from '@/components/animations/ShinyText'
import { faqItems } from '@/data/faq'
import { createFaqSchema } from '@/lib/metadata'
import { JsonLd } from '@/components/seo/JsonLd'

export function FaqSection() {
  const faqSchema = createFaqSchema(faqItems.map((f) => ({ question: f.question, answer: f.answer })))

  return (
    <section className="section-pad relative bg-[#E0E5EC]">
      <JsonLd data={faqSchema} />
      <div className="container relative z-10 mx-auto max-w-3xl">
        <FadeIn className="mb-12 text-center sm:mb-16">
          <ShinyText className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-[#6C63FF]">
            FAQ
          </ShinyText>
          <BlurReveal
            as="h2"
            className="font-display text-display-sm font-black text-[#3D4852] sm:text-display-md"
          >
            Frequently Asked Questions
          </BlurReveal>
          <p className="mt-4 text-lg text-[#6B7280]">Everything you need to know before we build together.</p>
        </FadeIn>

        <FadeIn>
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqItems.map((item) => (
              <Accordion.Item
                key={item.id}
                value={item.id}
                className="overflow-hidden rounded-[24px] bg-[#E0E5EC] shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] transition-all duration-300 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between px-6 py-5 text-left font-medium text-[#3D4852] transition-colors hover:bg-[#E8EDF4]">
                    {item.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-[#6C63FF] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="border-t border-white/50 px-6 pb-5 pt-4 text-sm leading-relaxed text-[#6B7280]">
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
