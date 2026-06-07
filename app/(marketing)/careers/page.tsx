'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Heart, Zap, Globe, Coffee, ChevronDown, Briefcase } from 'lucide-react'

const benefits = [
  { icon: Globe, title: 'Remote-first', desc: 'Work from anywhere with flexible hours.' },
  { icon: Zap, title: 'Cutting-edge projects', desc: 'Next.js, AI, and premium design work.' },
  { icon: Heart, title: 'Growth culture', desc: 'Learn, experiment, and level up continuously.' },
  { icon: Coffee, title: 'Work-life balance', desc: 'Sustainable pace, no burnout culture.' },
]

const positions = [
  {
    title: 'Full-Stack Developer (Next.js)',
    type: 'Full-time / Remote',
    description:
      'Build premium web applications, landing pages, and SaaS platforms for our clients using Next.js, TypeScript, Tailwind CSS, and Node.js.',
    requirements: [
      'Proficient in Next.js, TypeScript, and Tailwind CSS',
      'Experience with PostgreSQL or MongoDB',
      'Familiar with Git, CI/CD, and Vercel deployments',
      'Eye for design and performance optimisation',
    ],
  },
  {
    title: 'AI/ML Engineer',
    type: 'Full-time / Remote',
    description:
      'Develop voice AI agents, chatbot systems, and intelligent automation tools. Work with LLMs, RAG pipelines, and real-time AI inference.',
    requirements: [
      'Experience with Python and TypeScript',
      'Hands-on with LangChain, OpenAI APIs, or open-source LLMs',
      'Knowledge of RAG, vector databases, and embeddings',
      'Interest in voice AI and real-time agent architectures',
    ],
  },
  {
    title: 'UI/UX Designer',
    type: 'Full-time / Remote',
    description:
      'Design cinematic, conversion-optimised interfaces for web apps, SaaS dashboards, and marketing sites. Own the visual identity of client projects.',
    requirements: [
      'Strong portfolio showcasing web and SaaS design',
      'Proficient in Figma with component-driven workflow',
      'Understanding of motion design and micro-interactions',
      'Ability to collaborate directly with developers',
    ],
  },
  {
    title: 'Digital Marketing & SEO Strategist',
    type: 'Full-time / Remote',
    description:
      'Own client SEO strategy, content planning, and AEO (Answer Engine Optimization). Drive organic growth for Nuvirexa and our clients.',
    requirements: [
      'Deep understanding of technical SEO and content strategy',
      'Experience with AEO and AI-powered search optimisation',
      'Analytical mindset with proficiency in Google Search Console, Ahrefs, etc.',
      'Excellent written communication skills',
    ],
  },
  {
    title: 'Content Writer / Copywriter',
    type: 'Contract / Remote',
    description:
      'Write compelling blog posts, case studies, landing page copy, and social content that positions Nuvirexa and our clients as industry leaders.',
    requirements: [
      'Portfolio of published tech or business content',
      'Understanding of SEO and content marketing principles',
      'Ability to translate technical concepts into clear, persuasive copy',
      'Experience with AEO / voice-search optimised writing is a plus',
    ],
  },
  {
    title: 'Business Development Associate',
    type: 'Full-time / Remote',
    description:
      'Drive pipeline growth through outreach, partnerships, and inbound conversion. Own the full sales cycle from prospecting to close.',
    requirements: [
      'Experience in B2B sales or business development',
      'Comfortable with cold outreach (email, LinkedIn)',
      'Understanding of web development and AI services',
      'Strong negotiation and relationship-building skills',
    ],
  },
]

export default function CareersPage() {
  const [loading, setLoading] = useState(false)
  const [expanded, setExpanded] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: `Career Application:\n${form.get('message')}`,
          service: 'Careers',
        }),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success('Application submitted! We will be in touch.')
      e.currentTarget.reset()
    } catch {
      toast.error('Failed to submit. Please email tejendrasinh51@gmail.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader
        badge="We are hiring"
        title="Join our team"
        subtitle="Help us build the future of digital growth. Remote roles for ambitious builders."
      />

      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <div className="space-y-4">
          {positions.map((pos, i) => (
            <FadeIn key={pos.title} delay={i * 0.05}>
              <div
                className="glass border border-white/[0.06] hover:border-accent-violet/30 rounded-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="p-6 flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="font-display text-xl font-bold text-white">{pos.title}</h3>
                      <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-full border border-accent-cyan/20">
                        {pos.type}
                      </span>
                    </div>
                    <p className="text-white/70">{pos.description}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted mt-1 shrink-0 transition-transform duration-300 ${expanded === i ? 'rotate-180' : ''}`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${expanded === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 border-t border-white/[0.06] pt-4">
                    <p className="text-sm font-semibold text-white/80 mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-accent-cyan" />
                      Requirements
                    </p>
                    <ul className="space-y-2">
                      {pos.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-white/60">
                          <span className="text-accent-cyan mt-1">▹</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="py-16 bg-surface/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold">Why Nuvirexa?</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <FadeIn key={b.title}>
                <Card className="text-center">
                  <b.icon className="w-8 h-8 text-accent-violet mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-muted">{b.desc}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6 max-w-xl">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-center mb-8">Open application</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input name="name" label="Full Name" required />
            <Input name="email" type="email" label="Email" required />
            <Textarea name="message" label="Tell us about yourself" required rows={5} />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </FadeIn>
      </section>
    </>
  )
}
