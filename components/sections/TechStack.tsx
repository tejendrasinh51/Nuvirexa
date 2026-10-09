'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { ShinyText } from '@/components/animations/ShinyText'
import { Marquee } from '@/components/animations/Marquee'

const allTech = [
  'Next.js', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'Vercel', 'AWS',
  'Figma', 'Framer', 'Gemini', 'OpenAI', 'n8n', 'Redis', 'Docker', 'Prisma',
]

const techCategories = [
  { name: 'Frontend', techs: ['Next.js', 'React', 'TypeScript', 'Tailwind'] },
  { name: 'Backend', techs: ['Node.js', 'PostgreSQL', 'Redis', 'Prisma'] },
  { name: 'Cloud', techs: ['Vercel', 'AWS', 'Docker', 'GitHub'] },
  { name: 'Design', techs: ['Figma', 'Framer', 'Adobe XD'] },
  { name: 'AI/ML', techs: ['Gemini', 'OpenAI', 'n8n', 'LangChain'] },
]

export function TechStack() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#E0E5EC]">
      <div className="container mx-auto">
        <FadeIn className="mb-12 text-center">
          <ShinyText className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-[#6C63FF]">
            Technology
          </ShinyText>
          <BlurReveal as="h2" className="font-display text-display-md font-black text-[#3D4852]">
            Our Tech Stack
          </BlurReveal>
        </FadeIn>

        <Marquee duration={50} pauseOnHover className="mb-16 opacity-80 transition-opacity hover:opacity-100">
          {allTech.map((tech) => (
            <span
              key={tech}
              className="whitespace-nowrap rounded-full bg-[#E0E5EC] px-5 py-2 text-sm font-mono text-[#6B7280] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)]"
            >
              {tech}
            </span>
          ))}
        </Marquee>

        <div className="mx-auto max-w-4xl space-y-10">
          {techCategories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.08}>
              <div className="rounded-[24px] bg-[#E0E5EC] p-5 shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] sm:p-6">
                <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                  <span className="h-px w-8 bg-gradient-to-r from-[#6C63FF] to-[#38B2AC]" />
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.techs.map((tech) => (
                    <div
                      key={tech}
                      className="group flex h-11 items-center gap-2 rounded-xl bg-[#E0E5EC] px-4 py-2.5 shadow-[inset_4px_4px_8px_rgba(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)]"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#38B2AC]" />
                      <span className="text-sm text-[#6B7280] transition-colors group-hover:text-[#3D4852]">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
