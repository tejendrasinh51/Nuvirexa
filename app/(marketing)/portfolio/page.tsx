'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { projects } from '@/data/projects'
import { cn } from '@/lib/utils'

const categories = ['All', 'Web', 'Apps', 'Design', 'AI']

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All')
  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <PageHeader
        badge="Portfolio"
        title="Work that delivers"
        subtitle="Selected projects showcasing design excellence, engineering rigor, and measurable results."
      />

      <section className="py-8 container mx-auto px-6">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                filter === cat
                  ? 'bg-accent-violet text-white shadow-glow-violet'
                  : 'glass text-muted hover:text-white'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.05}>
              <Link href={`/case-studies/${project.slug}`}>
                <article className="glass rounded-2xl p-8 hover:shadow-card-hover transition-all hover:-translate-y-1 h-full group">
                  <span className="text-xs font-mono text-accent-cyan">{project.category}</span>
                  <h2 className="font-display text-2xl font-bold text-white mt-2 mb-3 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span key={t} className="text-xs font-mono glass px-2 py-1 rounded text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
