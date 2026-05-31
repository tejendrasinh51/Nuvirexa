import { generatePageMetadata } from '@/lib/metadata'
import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'Web Development Company Gujarat',
  description: 'Nuvirexa is a premium web development company in Gujarat. We build high-performance, SEO-optimized, and conversion-focused websites.',
  path: '/web-development',
})

export default function WebDevelopmentPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Development',
    provider: {
      '@type': 'Organization',
      name: 'Nuvirexa',
    },
    areaServed: {
      '@type': 'State',
      name: 'Gujarat'
    },
    description: 'Premium website and web application development services focusing on performance, SEO, and conversions.',
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
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Web Development Company in Gujarat
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                We do not just build websites; we engineer digital growth engines. From high-converting marketing sites to complex web applications, Nuvirexa delivers world-class web development tailored for modern businesses.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-cyan text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <div className="glass p-8 md:p-12 rounded-3xl border border-white/5">
                <h2 className="text-3xl font-bold text-white mb-6">Why Your Business Needs a Premium Website</h2>
                <div className="prose prose-invert max-w-none text-white/70">
                  <p>In today&apos;s digital-first economy, your website is often the first interaction a potential client has with your brand. A slow, outdated, or poorly structured website doesn&apos;t just look bad—it actively loses you money and damages your credibility.</p>
                  <p>As a leading web development company in Gujarat, we understand that a website must serve a specific business goal: generating leads, closing sales, or streamlining operations.</p>
                  
                  <h3 className="text-xl font-bold text-white mt-8 mb-4">The Cost of a Cheap Website</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent-cyan shrink-0" /> <span><strong>High Bounce Rates:</strong> Users leave if a site takes more than 3 seconds to load.</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent-cyan shrink-0" /> <span><strong>Poor SEO:</strong> Search engines penalize sites with bad Core Web Vitals and unoptimized structure.</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-accent-cyan shrink-0" /> <span><strong>Low Trust:</strong> A generic template fails to communicate authority and brand value.</span></li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-10 text-center">Our Web Development Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Corporate Websites',
                    desc: 'High-performance marketing sites that communicate authority, capture leads, and rank highly on search engines.'
                  },
                  {
                    title: 'E-Commerce Solutions',
                    desc: 'Scalable, secure, and blazing-fast online stores engineered to maximize conversion rates and average order value.'
                  },
                  {
                    title: 'Custom Web Applications',
                    desc: 'Complex, data-driven applications built with Next.js and React, tailored perfectly to your operational needs.'
                  },
                  {
                    title: 'Landing Pages',
                    desc: 'Hyper-focused, conversion-optimized pages designed for specific marketing campaigns and paid ad traffic.'
                  }
                ].map((service, i) => (
                  <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-accent-cyan/30 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-white/70 leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <div className="prose prose-invert max-w-none text-white/70">
                <h2 className="text-3xl font-bold text-white">Our Technology Stack</h2>
                <p>We leverage the modern web ecosystem to build sites that are orders of magnitude faster and more secure than traditional WordPress builds. We specialize in:</p>
                <ul>
                  <li><strong>Next.js & React:</strong> For lightning-fast page loads and dynamic user interfaces.</li>
                  <li><strong>Tailwind CSS:</strong> For highly customizable, maintainable, and responsive design systems.</li>
                  <li><strong>Headless CMS (Sanity, Contentful):</strong> Giving you the power to manage content easily without compromising site performance.</li>
                  <li><strong>Vercel & AWS:</strong> Enterprise-grade hosting ensuring 99.99% uptime and global edge delivery.</li>
                </ul>
              </div>
            </FadeIn>
          </section>

          <section className="text-center">
            <FadeIn>
              <div className="bg-gradient-to-br from-accent-cyan/10 to-transparent p-12 rounded-3xl border border-accent-cyan/20">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Digital Presence?</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Partner with the best web development company in Gujarat. Let&apos;s engineer a platform that drives real business results.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-accent-cyan transition-colors">
                  Get a Free Consultation
                </Link>
              </div>
            </FadeIn>
          </section>

        </div>
      </div>
    </>
  )
}
