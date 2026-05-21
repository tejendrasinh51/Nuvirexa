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
    <section className="section-pad relative overflow-hidden">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-12">
          <ShinyText className="font-mono text-sm text-accent-cyan tracking-widest uppercase mb-4 block">
            Technology
          </ShinyText>
          <BlurReveal as="h2" className="font-display text-display-md font-black text-white justify-center">
            Our Tech Stack
          </BlurReveal>
        </FadeIn>

        <Marquee duration={50} pauseOnHover className="mb-16 opacity-50 hover:opacity-80 transition-opacity">
          {allTech.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 glass rounded-full text-sm font-mono text-white/60 border border-white/[0.06] whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </Marquee>

        <div className="max-w-4xl mx-auto space-y-10">
          {techCategories.map((cat, i) => (
            <FadeIn key={cat.name} delay={i * 0.08}>
              <div>
                <h3 className="font-mono text-xs text-white/30 tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-gradient-to-r from-accent-violet to-accent-cyan" />
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.techs.map((tech) => (
                    <div
                      key={tech}
                      className="group flex items-center gap-2 glass border border-white/[0.08] hover:border-accent-violet/30 rounded-xl px-4 py-2.5 transition-all duration-300 cursor-default hover:shadow-glow-violet-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent-cyan/60 group-hover:bg-accent-cyan transition-colors" />
                      <span className="text-sm text-white/60 group-hover:text-white transition-colors">{tech}</span>
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
