import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata = generatePageMetadata({
  title: 'Testimonials',
  description: 'See what clients say about working with Nuvirexa Agency.',
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
