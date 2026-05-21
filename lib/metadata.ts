import type { Metadata } from 'next'
import { SITE } from './constants'

export function generatePageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const url = `${SITE.url}${path}`
  const ogImage = image || '/images/og-image.svg'
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/logo/logo.svg`,
  sameAs: ['https://twitter.com/nuvirexa', 'https://linkedin.com/company/nuvirexa'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: SITE.email,
  },
  founder: { '@type': 'Person', name: SITE.founder },
}
