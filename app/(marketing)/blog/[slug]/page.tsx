import { notFound } from 'next/navigation'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { FadeIn } from '@/components/animations/FadeIn'
import { getBlogPostBySlug, blogPosts } from '@/data/blog'
import { ArrowLeft } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted hover:text-white text-sm mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to blog
        </Link>
        <FadeIn>
          <span className="text-xs font-mono text-accent-cyan">{post.category}</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">{post.title}</h1>
          <p className="text-muted mb-8">
            {post.readTime} · {post.publishedAt}
          </p>
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 glass rounded-full text-xs text-muted">
                {tag}
              </span>
            ))}
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 text-lg leading-relaxed mb-6">{post.excerpt}</p>
            <p className="text-muted leading-relaxed">
              This article explores key strategies and insights for {post.category.toLowerCase()} in the modern
              digital landscape. Nuvirexa Agency helps businesses implement these practices through premium web
              development, design, and AI solutions. Contact us to discuss how these approaches can accelerate your
              growth.
            </p>
          </div>
        </FadeIn>
      </div>
    </article>
  )
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}
