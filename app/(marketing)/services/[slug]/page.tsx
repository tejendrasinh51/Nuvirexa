import { notFound } from 'next/navigation'
import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { CtaSection } from '@/components/sections/CtaSection'
import { CalButton } from '@/components/features/schedule/CalButton'
import { getServiceBySlug, services } from '@/data/services'
import { getServiceIcon } from '@/lib/icons'
import { Check } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return generatePageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  })
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const Icon = getServiceIcon(service.icon)

  return (
    <>
      <PageHeader badge="Service" title={service.title} subtitle={service.shortDescription} />

      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-xl bg-accent-violet/20 flex items-center justify-center">
              <Icon className="w-7 h-7 text-accent-violet" />
            </div>
            {service.startingPrice && (
              <span className="font-mono text-accent-cyan">{service.startingPrice}</span>
            )}
            {service.deliveryTime && (
              <span className="text-muted text-sm">· {service.deliveryTime}</span>
            )}
          </div>
          <p className="text-white/70 text-lg leading-relaxed mb-12">{service.fullDescription}</p>
        </FadeIn>

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

        <FadeIn className="text-center">
          <CalButton size="lg">Schedule a Discovery Call</CalButton>
        </FadeIn>
      </section>

      <CtaSection />
    </>
  )
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}