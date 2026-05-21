import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Careers',
  description: 'Join Nuvirexa Agency. Open applications for designers, developers, and strategists.',
  path: '/careers',
})

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children
}
