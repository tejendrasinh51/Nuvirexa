import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'Terms of Service',
  description: 'Terms of service for Nuvirexa Agency website and services.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms of Service" />
      <section className="py-16 container mx-auto px-6 max-w-3xl">
        <FadeIn className="space-y-6 text-white/70 leading-relaxed">
          <p>Last updated: May 2025</p>
          <p>
            By accessing {SITE.url}, you agree to these terms. {SITE.name} provides web development, design, and
            digital marketing services subject to separate project agreements.
          </p>
          <h2 className="font-display text-xl font-bold text-white">Use of website</h2>
          <p>
            You may not misuse our website, attempt unauthorized access, or use our content without permission.
          </p>
          <h2 className="font-display text-xl font-bold text-white">Limitation of liability</h2>
          <p>
            Our website is provided as-is. We are not liable for indirect damages arising from use of this site.
          </p>
          <h2 className="font-display text-xl font-bold text-white">Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href={`mailto:${SITE.email}`} className="text-accent-cyan hover:underline">
              {SITE.email}
            </a>
          </p>
        </FadeIn>
      </section>
    </>
  )
}
