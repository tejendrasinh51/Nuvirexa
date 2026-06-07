import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { Card } from '@/components/ui/Card'
import { CtaSection } from '@/components/sections/CtaSection'
import { services } from '@/data/services'
import { getServiceIcon } from '@/lib/icons'
import { ArrowRight } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'Services — AI Development, Web, AEO & Digital Growth | Nuvirexa',
  description:
    '13 specialized services including AI SaaS development, Voice AI agents, Answer Engine Optimization (AEO), Next.js web development, UI/UX design, SEO, and automation.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Our Services"
        title="Everything you need to grow"
        subtitle="Thirteen specialized services — from AI products to answer-engine visibility — one team committed to your growth."
      />

      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = getServiceIcon(service.icon)
            return (
              <FadeIn key={service.id} delay={i * 0.05}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full group">
                    <Icon className="w-8 h-8 text-accent-violet mb-4" />
                    <h2 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-gradient transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted text-sm mb-4">{service.shortDescription}</p>
                    {service.startingPrice && (
                      <p className="text-xs font-mono text-accent-cyan mb-4">{service.startingPrice}</p>
                    )}
                    <span className="inline-flex items-center gap-1 text-sm text-accent-violet">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </Card>
                </Link>
              </FadeIn>
            )
          })}
        </div>
      </section>

      <CtaSection />
    </>
  )
}
