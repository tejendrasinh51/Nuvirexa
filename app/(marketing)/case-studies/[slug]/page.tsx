import { notFound } from 'next/navigation'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { CtaSection } from '@/components/sections/CtaSection'
import { getProjectBySlug, projects } from '@/data/projects'
import { ArrowLeft, ExternalLink } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return generatePageMetadata({
    title: project.title,
    description: project.description,
    path: `/case-studies/${project.slug}`,
  })
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <PageHeader badge={project.category} title={project.title} subtitle={project.description} />
      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/[0.08] pb-8 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-1">Client</span>
              <span className="text-white font-medium">{project.client}</span>
            </div>
            {project.liveUrl && (
              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-accent-cyan/40 hover:shadow-glow-cyan group"
                >
                  <span>Visit Project</span>
                  <ExternalLink className="w-4 h-4 text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            )}
          </div>
          <h2 className="font-display text-2xl font-bold mb-4">The Challenge</h2>
          <p className="text-white/70 leading-relaxed mb-12">{project.challenge}</p>
          <h2 className="font-display text-2xl font-bold mb-4">Our Solution</h2>
          <p className="text-white/70 leading-relaxed mb-12">{project.solution}</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-2xl font-bold mb-6">Results</h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {project.results.map((r) => (
              <div key={r} className="glass rounded-xl p-6 text-center">
                <p className="font-display text-lg font-bold text-gradient">{r}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="font-display text-xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {project.technologies.map((t) => (
              <span key={t} className="px-4 py-2 glass rounded-xl text-sm font-mono">
                {t}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <Link
            href={`/case-studies/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-white transition-colors"
          >
            Next project: {nextProject.title} →
          </Link>
        </FadeIn>
      </section>
      <div className="container mx-auto px-6 pb-8">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-muted hover:text-white text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </Link>
      </div>
      <CtaSection />
    </>
  )
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}