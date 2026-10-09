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
    <section className="section-pad relative overflow-hidden bg-[#E0E5EC]">
      <div className="container relative z-10 mx-auto">
        <FadeIn className="mb-12 sm:mb-16">
          <ShinyText className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-[#6C63FF]">
            Portfolio
          </ShinyText>
          <BlurReveal as="h2" className="font-display text-display-md font-black text-[#3D4852]">
            Featured Work
          </BlurReveal>
          <p className="mt-4 max-w-xl text-lg text-[#6B7280]">Selected projects that showcase our craft and measurable impact.</p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08} className={i === 0 ? 'md:col-span-2' : ''}>
              <SpotlightCard spotlightColor="rgba(108, 99, 255, 0.12)">
                <TiltCard>
                  <Link href={`/case-studies/${project.slug}`}>
                    <article className="group neu-card rounded-[28px] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_20px_rgb(163,177,198,0.7),-12px_-12px_20px_rgba(255,255,255,0.6)] sm:p-8">
                      <span className="mb-4 block text-xs font-mono uppercase tracking-[0.2em] text-[#6C63FF]">
                        {project.category}
                      </span>
                      <h3 className="mb-3 font-display text-2xl font-bold text-[#3D4852] transition-colors group-hover:text-[#6C63FF] md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mb-6 leading-relaxed text-[#6B7280]">{project.description}</p>
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="rounded-full bg-[#E0E5EC] px-3 py-1 text-xs font-mono text-[#6B7280] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.5)]">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-[#6C63FF] transition-colors group-hover:text-[#3D4852]">
                        View case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </article>
                  </Link>
                </TiltCard>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 text-center">
          <Link href="/portfolio" className="inline-flex items-center gap-2 font-medium text-[#6C63FF] transition-colors hover:text-[#3D4852] group">
            View All Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
