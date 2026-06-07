import { notFound } from 'next/navigation'
import { generatePageMetadata, createBreadcrumbSchema, createFaqSchema } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { CtaSection } from '@/components/sections/CtaSection'
import { CalButton } from '@/components/features/schedule/CalButton'
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent'
import { getServiceBySlug, services } from '@/data/services'
import { getServiceIcon } from '@/lib/icons'
import { JsonLd } from '@/components/seo/JsonLd'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return generatePageMetadata({
    title: `${service.title} Services India | Nuvirexa`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  })
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const Icon = getServiceIcon(service.icon)
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.title, path: `/services/${service.slug}` },
  ])

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {service.faqs && service.faqs.length > 0 && (
        <JsonLd data={createFaqSchema(service.faqs)} />
      )}
      <PageHeader badge="Service" title={service.title} subtitle={service.shortDescription} />

      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-4 mb-8">
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
        </FadeIn>

        <ServiceDetailContent service={service} />

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