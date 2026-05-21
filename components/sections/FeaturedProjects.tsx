'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { ShinyText } from '@/components/animations/ShinyText'
import { SpotlightCard } from '@/components/animations/SpotlightCard'
import { TiltCard } from '@/components/animations/TiltCard'
import { projects } from '@/data/projects'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="section-pad relative overflow-hidden bg-mesh-2">
      <div className="container mx-auto relative z-10">
        <FadeIn className="mb-12 sm:mb-16">
          <ShinyText className="font-mono text-sm text-accent-cyan tracking-widest uppercase mb-4 block">
            Portfolio
          </ShinyText>
          <BlurReveal as="h2" className="font-display text-display-md font-black text-white">
            Featured Work
          </BlurReveal>
          <p className="text-muted text-lg max-w-xl mt-4">Selected projects that showcase our craft and measurable impact.</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08} className={i === 0 ? 'md:col-span-2' : ''}>
              <SpotlightCard spotlightColor="rgba(6, 182, 212, 0.12)">
                <TiltCard>
                  <Link href={`/case-studies/${project.slug}`}>
                    <article className="group glass border border-white/[0.08] hover:border-accent-cyan/30 rounded-2xl p-5 sm:p-8 transition-all duration-300 hover:shadow-card-hover sm:hover:-translate-y-1 h-full">
                      <span className="text-xs font-mono text-accent-cyan mb-4 block tracking-widest uppercase">
                        {project.category}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono glass text-muted border border-white/[0.06]">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm text-accent-cyan group-hover:text-white transition-colors font-medium">
                        View case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </article>
                  </Link>
                </TiltCard>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-14">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-accent-cyan hover:text-white transition-colors font-medium group">
            View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
