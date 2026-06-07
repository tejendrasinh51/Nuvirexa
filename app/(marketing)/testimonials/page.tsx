import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata = generatePageMetadata({
  title: 'Client Testimonials — What Our Clients Say | Nuvirexa',
  description: 'Hear from founders and teams who partnered with Nuvirexa for AI development, web design, AEO, and digital growth solutions.',
  path: '/testimonials',
})

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        badge="Testimonials"
        title="Trusted by ambitious brands"
        subtitle="Real feedback from founders and teams we've helped grow."
      />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
