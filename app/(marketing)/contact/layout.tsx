import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Contact Us — Start Your AI or Web Project | Nuvirexa',
  description: 'Ready to build your AI product, website, or digital strategy? Contact Nuvirexa for a free discovery call. We respond within 24 hours.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
