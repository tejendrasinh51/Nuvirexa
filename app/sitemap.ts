import { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { blogPosts } from '@/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/founder',
    '/web-development',
    '/ai-solutions',
    '/seo-services',
    '/custom-software-development',
    '/web-development-company-vadodara',
    '/web-development-company-gujarat',
    '/ai-agency-gujarat',
    '/seo-company-vadodara',
    '/portfolio',
    '/case-studies',
    '/process',
    '/testimonials',
    '/pricing',
    '/blog',
    '/careers',
    '/contact',
    '/privacy-policy',
    '/terms',
  ]

  const serviceRoutes = services.map((s) => `/services/${s.slug}`)
  const projectRoutes = projects.map((p) => `/case-studies/${p.slug}`)
  const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`)

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes]

  return allRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}
