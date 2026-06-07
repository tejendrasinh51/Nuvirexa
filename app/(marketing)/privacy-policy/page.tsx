import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'Privacy Policy — How We Handle Your Data | Nuvirexa',
  description: 'Nuvirexa\'s privacy policy outlines how we collect, use, and protect your personal information when you use our website and services.',
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />
      <section className="py-16 container mx-auto px-6 max-w-3xl prose prose-invert">
        <FadeIn className="space-y-6 text-white/70 leading-relaxed">
          <p>Last updated: May 2025</p>
          <p>
            {SITE.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This policy
            describes how we collect, use, and protect your personal information when you visit our website or use
            our services.
          </p>
          <h2 className="font-display text-xl font-bold text-white">Information we collect</h2>
          <p>
            We may collect your name, email address, company name, and project details when you submit contact
            forms, subscribe to our newsletter, or use our AI chatbot.
          </p>
          <h2 className="font-display text-xl font-bold text-white">How we use your information</h2>
          <p>
            We use collected information to respond to inquiries, provide services, improve our website, and send
            relevant communications with your consent.
          </p>
          <h2 className="font-display text-xl font-bold text-white">Contact</h2>
          <p>
            For privacy-related questions, contact us at{' '}
            <a href={`mailto:${SITE.email}`} className="text-accent-cyan hover:underline">
              {SITE.email}
            </a>
            .
          </p>
        </FadeIn>
      </section>
    </>
  )
}
