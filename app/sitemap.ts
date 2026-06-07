import { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { services } from '@/data/services'
import { projects } from '@/data/projects'
import { blogPosts } from '@/data/blog'

type RouteConfig = { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url

  const staticRoutes: RouteConfig[] = [
    { path: '', priority: 1.0, freq: 'weekly' },
    { path: '/services', priority: 0.9, freq: 'weekly' },
    { path: '/about', priority: 0.7, freq: 'monthly' },
    { path: '/founder', priority: 0.6, freq: 'monthly' },
    { path: '/portfolio', priority: 0.8, freq: 'weekly' },
    { path: '/case-studies', priority: 0.5, freq: 'monthly' },
    { path: '/blog', priority: 0.8, freq: 'daily' },
    { path: '/process', priority: 0.6, freq: 'monthly' },
    { path: '/testimonials', priority: 0.5, freq: 'monthly' },
    { path: '/pricing', priority: 0.7, freq: 'monthly' },
    { path: '/contact', priority: 0.6, freq: 'monthly' },
    { path: '/careers', priority: 0.4, freq: 'monthly' },
    { path: '/privacy-policy', priority: 0.3, freq: 'yearly' },
    { path: '/terms', priority: 0.3, freq: 'yearly' },
    { path: '/web-development', priority: 0.8, freq: 'monthly' },
    { path: '/ai-solutions', priority: 0.8, freq: 'monthly' },
    { path: '/seo-services', priority: 0.8, freq: 'monthly' },
    { path: '/custom-software-development', priority: 0.7, freq: 'monthly' },
    { path: '/web-development-company-vadodara', priority: 0.6, freq: 'monthly' },
    { path: '/web-development-company-gujarat', priority: 0.6, freq: 'monthly' },
    { path: '/ai-agency-gujarat', priority: 0.6, freq: 'monthly' },
    { path: '/seo-company-vadodara', priority: 0.6, freq: 'monthly' },
  ]

  const serviceRoutes: RouteConfig[] = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.8,
    freq: 'monthly' as const,
  }))

  const projectRoutes: RouteConfig[] = projects.map((p) => ({
    path: `/case-studies/${p.slug}`,
    priority: 0.7,
    freq: 'monthly' as const,
  }))

  const blogRoutes: RouteConfig[] = blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.6,
    freq: 'monthly' as const,
  }))

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes]

  return allRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.freq,
    priority: route.priority,
  }))
}
