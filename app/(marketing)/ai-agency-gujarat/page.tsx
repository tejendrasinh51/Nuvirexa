import { generatePageMetadata } from '@/lib/metadata'
import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'
import { ArrowRight, MapPin, Bot, Cpu } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'AI Agency Gujarat | Automation & AI Integrations',
  description: 'Leading AI Agency in Gujarat. We specialize in AI automation, custom LLM agents, and business process optimization using cutting-edge artificial intelligence.',
  path: '/ai-agency-gujarat',
})

export default function GujaratAIPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Nuvirexa AI Agency Gujarat',
    image: `${SITE.url}/images/og-image.png`,
    '@id': `${SITE.url}/ai-agency-gujarat`,
    url: `${SITE.url}/ai-agency-gujarat`,
    areaServed: {
      '@type': 'State',
      name: 'Gujarat'
    },
    description: 'Enterprise AI solutions, chatbots, and automation services in Gujarat.'
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          
          <section className="mb-20 text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan mb-6">
                <MapPin className="w-4 h-4" /> AI Solutions across Gujarat
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                The Premier AI Agency in Gujarat
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Transform your operations with intelligent automation. We build custom AI agents and integrate powerful language models to make your business leaner and faster.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-cyan text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Explore AI Automation <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Bot, title: 'AI Customer Support', desc: 'Custom chatbots trained on your unique data.' },
                  { icon: Cpu, title: 'Workflow Automation', desc: 'Eliminate manual tasks with intelligent pipelines.' }
                ].map((item, i) => (
                  <div key={i} className="glass p-6 rounded-2xl border border-white/5 text-center">
                    <item.icon className="w-8 h-8 text-accent-cyan mx-auto mb-4" />
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <div className="prose prose-invert max-w-none text-white/70 glass p-8 md:p-12 rounded-3xl border border-white/5">
                <h2 className="text-3xl font-bold text-white">Bringing the AI Revolution to Gujarat</h2>
                <p>As the top AI Agency in Gujarat, we help traditional businesses and tech-forward startups alike integrate artificial intelligence into their core processes. Stop losing hours to repetitive tasks and let custom AI handle your tier-1 support, lead generation outreach, and data entry.</p>
              </div>
            </FadeIn>
          </section>

        </div>
      </div>
    </>
  )
}
