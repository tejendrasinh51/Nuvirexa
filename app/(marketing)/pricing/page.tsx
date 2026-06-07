import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { Card } from '@/components/ui/Card'
import { CalButton } from '@/components/features/schedule/CalButton'
import { FaqSection } from '@/components/sections/FaqSection'
import { Check } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Pricing — AI Development, Web & Digital Services | Nuvirexa',
  description: 'Custom pricing for AI development, web development, AEO, voice AI agents, and digital services. Transparent quotes tailored to your project scope.',
  path: '/pricing',
})

const tiers = [
  {
    name: 'Starter',
    desc: 'Perfect for new businesses launching their digital presence.',
    features: ['Marketing website', 'Up to 5 pages', 'Mobile responsive', 'Basic SEO setup', '2-week delivery'],
  },
  {
    name: 'Growth',
    desc: 'For scale-ups ready to invest in performance and conversion.',
    features: ['Custom web app or site', 'CMS integration', 'Advanced SEO', 'Analytics setup', 'AI chatbot option', '6-week delivery'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    desc: 'Full-scale digital transformation for established organizations.',
    features: ['Complex applications', 'Dedicated team', 'SLA & support', 'AI & automation', 'Ongoing optimization', 'Custom timeline'],
  },
]

export default function PricingPage() {
  return (
    <>
      <PageHeader
        badge="Pricing"
        title="Invest in growth"
        subtitle="Every project is unique. We provide custom quotes after understanding your goals — these tiers illustrate typical scopes."
      />

      <section className="py-16 container mx-auto px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-muted">
            Pricing depends on scope, complexity, and timeline. Contact us for an accurate quote tailored to your
            project.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <Card
                className={`h-full flex flex-col ${tier.highlighted ? 'border-accent-violet/50 shadow-glow-violet' : ''}`}
              >
                {tier.highlighted && (
                  <span className="text-xs font-mono text-accent-cyan mb-4">Most Popular</span>
                )}
                <h2 className="font-display text-2xl font-bold text-white mb-2">{tier.name}</h2>
                <p className="text-muted text-sm mb-6">{tier.desc}</p>
                <p className="font-display text-3xl font-bold text-gradient mb-6">Custom</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <CalButton variant={tier.highlighted ? 'primary' : 'secondary'} className="w-full">
                  Get a Quote
                </CalButton>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <FaqSection />
    </>
  )
}
