import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Careers — Join the Nuvirexa Team | AI & Web Agency',
  description: 'Join Nuvirexa — India\'s premium AI and digital growth agency. We\'re always looking for talented developers, designers, and strategists.',
  path: '/careers',
})

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
