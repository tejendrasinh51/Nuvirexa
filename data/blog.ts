import type { BlogPost } from '@/types/content'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'why-nextjs-for-agency-sites',
    title: 'Why Next.js Is the Gold Standard for Agency Websites',
    excerpt: 'Performance, SEO, and developer experience — why we build every client site on Next.js.',
    content: 'Full article content...',
    category: 'Development',
    tags: ['Next.js', 'Performance', 'SEO'],
    readTime: '6 min',
    publishedAt: '2025-03-15',
    featured: true,
  },
  {
    id: '2',
    slug: 'ai-chatbots-for-business',
    title: 'How AI Chatbots Transform Customer Support',
    excerpt: 'Real ROI from Gemini-powered assistants that scale with your business.',
    content: 'Full article content...',
    category: 'AI',
    tags: ['AI', 'Gemini', 'Automation'],
    readTime: '8 min',
    publishedAt: '2025-02-28',
  },
  {
    id: '3',
    slug: 'conversion-focused-web-design',
    title: 'Design Principles That Actually Convert',
    excerpt: 'Beyond aesthetics — the UX patterns that drive measurable business results.',
    content: 'Full article content...',
    category: 'Design',
    tags: ['UX', 'Conversion', 'Design'],
    readTime: '5 min',
    publishedAt: '2025-01-20',
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
