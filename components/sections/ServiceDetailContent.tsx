'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import type { Service } from '@/types/content'
import { Check } from 'lucide-react'

export function ServiceDetailContent({ service }: { service: Service }) {
  return (
    <>
      {service.tagline && (
        <FadeIn>
          <p className="text-xl text-white/90 font-display font-semibold mb-6">{service.tagline}</p>
        </FadeIn>
      )}

      <FadeIn>
        <p className="text-white/70 text-lg leading-relaxed mb-12">{service.fullDescription}</p>
      </FadeIn>

      {service.idealFor && service.idealFor.length > 0 && (
        <FadeIn delay={0.05}>
          <h2 className="font-display text-2xl font-bold mb-4">Who this is for</h2>
          <ul className="space-y-3 mb-12">
            {service.idealFor.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/75">
                <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      )}

      {service.offerings && service.offerings.length > 0 && (
        <FadeIn delay={0.1}>
          <h2 className="font-display text-2xl font-bold mb-6">What we deliver</h2>
          <div className="space-y-8 mb-12">
            {service.offerings.map((offering) => (
              <div key={offering.title} className="glass border border-white/[0.08] rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-white mb-2">{offering.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{offering.description}</p>
                {offering.bullets && (
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {offering.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-white/75">
                        <Check className="w-4 h-4 text-accent-violet flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.1}>
        <h2 className="font-display text-2xl font-bold mb-6">What&apos;s included</h2>
        <ul className="grid sm:grid-cols-2 gap-4 mb-12">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-white/80">
              <Check className="w-5 h-5 text-accent-cyan flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </FadeIn>

      {service.processSteps && service.processSteps.length > 0 && (
        <FadeIn delay={0.15}>
          <h2 className="font-display text-2xl font-bold mb-6">How it works</h2>
          <ol className="space-y-4 mb-12">
            {service.processSteps.map((step) => (
              <li
                key={step.title}
                className="border-l-2 border-accent-violet/40 pl-5 py-1"
              >
                <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </FadeIn>
      )}

      <FadeIn delay={0.2}>
        <h2 className="font-display text-2xl font-bold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-3 mb-12">
          {service.technologies.map((t) => (
            <span key={t} className="px-4 py-2 glass rounded-xl text-sm font-mono text-muted">
              {t}
            </span>
          ))}
        </div>
      </FadeIn>

      {service.pricingNotes && service.pricingNotes.length > 0 && (
        <FadeIn delay={0.22}>
          <h2 className="font-display text-2xl font-bold mb-4">Investment</h2>
          <ul className="space-y-2 mb-12">
            {service.pricingNotes.map((note) => (
              <li key={note} className="text-white/70 text-sm font-mono">
                {note}
              </li>
            ))}
          </ul>
        </FadeIn>
      )}

      {service.testimonials && service.testimonials.length > 0 && (
        <FadeIn delay={0.25}>
          <h2 className="font-display text-2xl font-bold mb-6">What clients say</h2>
          <div className="grid gap-4 mb-12">
            {service.testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="glass border border-white/[0.08] rounded-2xl p-6 text-white/75 italic"
              >
                <p className="mb-3">&ldquo;{t.quote}&rdquo;</p>
                <footer className="text-sm text-accent-cyan not-italic font-medium">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </FadeIn>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <FadeIn delay={0.28}>
          <h2 className="font-display text-2xl font-bold mb-6">FAQ</h2>
          <dl className="space-y-6 mb-12">
            {service.faqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold text-white mb-2">{faq.question}</dt>
                <dd className="text-white/60 text-sm leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      )}
    </>
  )
}
