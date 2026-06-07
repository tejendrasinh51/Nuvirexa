import { generatePageMetadata } from '@/lib/metadata'
import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'
import { ArrowRight, MapPin, Code2, Rocket, TrendingUp } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'Web Development Company Gujarat — Enterprise Web Solutions | Nuvirexa',
  description: 'Leading web development company in Gujarat. Nuvirexa engineers high-performance web applications, corporate websites, and SaaS platforms for modern enterprises.',
  path: '/web-development-company-gujarat',
})

export default function GujaratWebDevPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Nuvirexa Web Development Gujarat',
    image: `${SITE.url}/images/og-image.png`,
    '@id': `${SITE.url}/web-development-company-gujarat`,
    url: `${SITE.url}/web-development-company-gujarat`,
    areaServed: {
      '@type': 'State',
      name: 'Gujarat'
    },
    description: 'Enterprise web development and software engineering for businesses across Gujarat.'
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
                <MapPin className="w-4 h-4" /> Serving All of Gujarat
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Premium Web Development Company in Gujarat
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Empowering Gujarat&apos;s enterprises and startups with world-class, high-performance web engineering. Next.js, React, and tailored digital strategy.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-cyan text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Book a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Code2, title: 'Enterprise Architecture', desc: 'Secure, scalable, and robust codebases.' },
                  { icon: TrendingUp, title: 'Performance Driven', desc: 'Perfect Core Web Vitals scores.' },
                  { icon: Rocket, title: 'Modern UI/UX', desc: 'Designs that demand attention.' }
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
                <h2 className="text-3xl font-bold text-white">Scaling Gujarat&apos;s Digital Economy</h2>
                <p>Gujarat is rapidly transforming into a global tech and business hub. To compete on this level, your business needs more than a digital brochure—it needs a digital product.</p>
                <p>We work with manufacturing giants in Ahmedabad, diamond traders in Surat, and IT innovators in Vadodara to digitize their operations and enhance their global marketing footprint through premium web development.</p>
              </div>
            </FadeIn>
          </section>

        </div>
      </div>
    </>
  )
}
