import { generatePageMetadata } from '@/lib/metadata'
import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'
import { ArrowRight, Search, BarChart3, Globe2, Target } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'SEO Services Gujarat — Technical SEO & AEO Agency | Nuvirexa',
  description: 'Data-driven SEO and AEO services in Gujarat. Specializing in Technical SEO, Answer Engine Optimization, content strategy, and local SEO to dominate search results.',
  path: '/seo-services',
})

export default function SEOServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Search Engine Optimization',
    provider: {
      '@type': 'Organization',
      name: 'Nuvirexa',
    },
    areaServed: {
      '@type': 'State',
      name: 'Gujarat'
    },
    description: 'Comprehensive SEO services including Technical SEO, Local SEO, Content Strategy, and Answer Engine Optimization (AEO).',
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
                <Search className="w-4 h-4" /> Organic Growth
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Data-Driven SEO Services in Gujarat
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Stop guessing with your digital marketing. We use advanced technical SEO, strategic content, and AI Answer Engine Optimization (AEO) to dominate search results and drive high-intent traffic.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-cyan text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Get Your Free SEO Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-10 text-center">The Next Generation of Search</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Globe2,
                    title: 'Technical SEO',
                    desc: 'We rebuild your site\'s foundation for perfect crawlability. From Core Web Vitals optimization to advanced Schema markup, we ensure Google understands exactly what you do.'
                  },
                  {
                    icon: Target,
                    title: 'Local SEO Mastery',
                    desc: 'Dominate the map pack and local search results in Gujarat and beyond. We optimize your Google Business Profile and build localized authority.'
                  },
                  {
                    icon: Search,
                    title: 'Answer Engine Optimization (AEO)',
                    desc: 'SEO is evolving. We optimize your brand to be cited and recommended by AI platforms like ChatGPT, Gemini, and Perplexity.'
                  },
                  {
                    icon: BarChart3,
                    title: 'Content Strategy',
                    desc: 'Data-backed content that answers user intent. We don\'t just write articles; we build topical authority that search engines reward.'
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
                <h2 className="text-3xl font-bold text-white">Our Proven SEO Process</h2>
                <ol>
                  <li><strong>Deep Technical Audit:</strong> We identify every bottleneck preventing your site from ranking—from canonical errors to JavaScript rendering issues.</li>
                  <li><strong>Competitor & Keyword Research:</strong> We find the high-intent, low-competition keywords your competitors are missing.</li>
                  <li><strong>On-Page & Architecture Fixes:</strong> We deploy structural fixes, optimize metadata, and implement sophisticated internal linking strategies.</li>
                  <li><strong>Authority Building:</strong> We build digital PR and high-quality backlinks to signal absolute authority in your niche.</li>
                  <li><strong>Transparent Reporting:</strong> Monthly breakdowns of rankings, organic traffic, and most importantly—conversions and ROI.</li>
                </ol>
              </div>
            </FadeIn>
          </section>

          <section className="text-center">
            <FadeIn>
              <div className="bg-gradient-to-br from-accent-cyan/10 to-transparent p-12 rounded-3xl border border-accent-cyan/20">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Dominate Search?</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Partner with an SEO agency that understands both Google&apos;s traditional algorithms and the new era of AI search.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-accent-cyan transition-colors">
                  Start Your Growth Journey
                </Link>
              </div>
            </FadeIn>
          </section>

        </div>
      </div>
    </>
  )
}
