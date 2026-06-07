import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Portfolio — AI, Web & Design Projects | Nuvirexa',
  description: 'Explore Nuvirexa\'s featured portfolio of web development, AI, SaaS, and design projects. See how we deliver measurable results for ambitious brands.',
  path: '/portfolio',
})

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
