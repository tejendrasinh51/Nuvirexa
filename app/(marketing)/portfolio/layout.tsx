import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Portfolio',
  description: 'Explore our featured web development, app, design, and AI projects.',
  path: '/portfolio',
})

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
