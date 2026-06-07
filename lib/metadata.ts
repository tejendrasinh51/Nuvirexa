import type { Metadata } from 'next'
import { SITE } from './constants'

export function generatePageMetadata({
  title,
  description,
  path,
  image,
  keywords,
}: {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string[]
}): Metadata {
  const url = `${SITE.url}${path}`
  const ogImage = image || '/images/og-image.png'
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
    ...(keywords && { keywords }),
  }
}

export function createBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  }
}

export function createFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function createArticleSchema(post: {
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  category: string
  tags: string[]
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `${SITE.url}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author || SITE.founder,
      url: `${SITE.url}/founder`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.shortName,
      url: SITE.url,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
  }
}

export function createServiceSchema(service: {
  name: string
  description: string
  slug: string
  category?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${SITE.url}/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: SITE.shortName,
      url: SITE.url,
    },
    ...(service.category && { serviceType: service.category }),
    areaServed: 'IN',
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.shortName,
  alternateName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/favicon-512x512.png`,
  description: SITE.tagline,
  sameAs: [
    SITE.social.linkedin,
    SITE.social.twitter,
    SITE.social.github,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: SITE.email,
    availableLanguage: ['English', 'Hindi', 'Gujarati'],
    areaServed: 'IN',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.locality,
    addressCountry: SITE.address.country,
  },
  founder: {
    '@type': 'Person',
    name: SITE.founder,
    jobTitle: 'Founder & CEO',
    url: `${SITE.url}/founder`,
    sameAs: [
      'https://linkedin.com/in/tejendrasinh-sisodia-243a5a293/',
      'https://github.com/tejendrasinh51',
    ],
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.shortName,
  url: SITE.url,
  description: SITE.tagline,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE.url}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: SITE.shortName,
  url: SITE.url,
  logo: `${SITE.url}/favicon-512x512.png`,
  image: `${SITE.url}/images/og-image.png`,
  description: 'Nuvirexa is a premium digital growth agency offering AI development, AEO, Voice AI agents, web development, and digital strategy services.',
  areaServed: [
    { '@type': 'Country', name: 'India' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.locality,
    addressCountry: SITE.address.country,
  },
  priceRange: '$$$',
  telephone: SITE.email,
  email: SITE.email,
  sameAs: [
    SITE.social.linkedin,
    SITE.social.twitter,
    SITE.social.github,
  ],
  foundingDate: '2025',
  founder: {
    '@type': 'Person',
    name: SITE.founder,
  },
}
