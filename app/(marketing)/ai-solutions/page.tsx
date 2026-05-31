import { generatePageMetadata } from '@/lib/metadata'
import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'
import { ArrowRight, Bot, Cpu, Zap, Database } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'AI Automation Services & Solutions',
  description: 'Nuvirexa builds custom AI agents, automated workflows, and intelligent SaaS products to scale your business operations.',
  path: '/ai-solutions',
})

export default function AISolutionsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Automation Services',
    provider: {
      '@type': 'Organization',
      name: 'Nuvirexa',
    },
    description: 'Custom AI agents, LLM integrations, and automated workflows to scale business operations without scaling headcount.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <section className="mb-20 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan mb-6">
                <Bot className="w-4 h-4" /> AI Engineering
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Enterprise AI Automation Services
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Stop doing robotic work. We build autonomous AI agents and intelligent systems that handle customer support, sales outreach, and back-office operations 24/7.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-cyan text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Automate Your Business <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-10 text-center">What We Build</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Bot,
                    title: 'Customer Support Agents',
                    desc: 'AI agents trained on your knowledge base that resolve up to 80% of tier-1 support tickets instantly across website chat, WhatsApp, and Email.'
                  },
                  {
                    icon: Zap,
                    title: 'Sales & Lead Gen Automation',
                    desc: 'Intelligent systems that research prospects, send personalized outreach, and book meetings directly into your calendar.'
                  },
                  {
                    icon: Cpu,
                    title: 'Custom AI SaaS & MVPs',
                    desc: 'Full-stack software products powered by LLMs (OpenAI, Gemini). We take your idea from concept to a production-ready application in weeks.'
                  },
                  {
                    icon: Database,
                    title: 'Internal Workflow Agents',
                    desc: 'Connect your fragmented tools (CRM, Slack, Sheets) with AI pipelines that automate reporting, data entry, and analysis.'
                  }
                ].map((service, i) => {
                  const Icon = service.icon
                  return (
                    <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-accent-cyan/30 transition-colors">
                      <Icon className="w-8 h-8 text-accent-cyan mb-4" />
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/70 leading-relaxed">{service.desc}</p>
                    </div>
                  )
                })}
              </div>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <div className="prose prose-invert max-w-none text-white/70 glass p-8 md:p-12 rounded-3xl border border-white/5">
                <h2 className="text-3xl font-bold text-white">Why Invest in AI Automation Now?</h2>
                <p>The business landscape is shifting rapidly. Companies that leverage AI are moving faster, operating leaner, and out-competing those relying purely on manual human labor.</p>
                <ul>
                  <li><strong>Infinite Scalability:</strong> An AI agent can handle 1 conversation or 10,000 simultaneously without a drop in quality.</li>
                  <li><strong>Cost Reduction:</strong> Automate repetitive tasks and allow your human team to focus on high-value, strategic work.</li>
                  <li><strong>24/7 Operation:</strong> Your business never sleeps when AI handles after-hours inquiries and global lead follow-ups.</li>
                  <li><strong>Zero Errors:</strong> Once programmed correctly, automated workflows eliminate the costly mistakes of manual data entry.</li>
                </ul>
              </div>
            </FadeIn>
          </section>

          <section className="text-center">
            <FadeIn>
              <div className="bg-gradient-to-br from-accent-cyan/10 to-transparent p-12 rounded-3xl border border-accent-cyan/20">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your AI Workforce?</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Book a free discovery call to identify the highest ROI automation opportunities in your business.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-accent-cyan transition-colors">
                  Get a Free AI Audit
                </Link>
              </div>
            </FadeIn>
          </section>

        </div>
      </div>
    </>
  )
}
