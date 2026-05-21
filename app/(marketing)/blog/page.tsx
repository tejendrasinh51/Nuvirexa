import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { blogPosts } from '@/data/blog'
import { FEATURES } from '@/lib/constants'
import { notFound } from 'next/navigation'

export const metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Insights on web development, AI, design, and digital growth from Nuvirexa Agency.',
  path: '/blog',
})

export default function BlogPage() {
  if (!FEATURES.blog) notFound()

  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <>
      <PageHeader badge="Blog" title="Insights & ideas" subtitle="Thoughts on building better digital products." />

      {featured && (
        <section className="py-8 container mx-auto px-6">
          <FadeIn>
            <Link href={`/blog/${featured.slug}`}>
              <article className="glass rounded-2xl p-8 md:p-12 hover:shadow-card-hover transition-all group">
                <span className="text-xs font-mono text-accent-cyan">{featured.category}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-4 mb-4 group-hover:text-gradient transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted text-lg mb-4">{featured.excerpt}</p>
                <p className="text-sm text-muted">
                  {featured.readTime} · {featured.publishedAt}
                </p>
              </article>
            </Link>
          </FadeIn>
        </section>
      )}

      <section className="py-8 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <FadeIn key={post.id} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}`}>
                <article className="glass rounded-2xl p-6 hover:shadow-card-hover transition-all h-full group">
                  <span className="text-xs font-mono text-accent-cyan">{post.category}</span>
                  <h3 className="font-display text-xl font-bold text-white mt-3 mb-2 group-hover:text-gradient transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm mb-4">{post.excerpt}</p>
                  <p className="text-xs text-muted">
                    {post.readTime} · {post.publishedAt}
                  </p>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
