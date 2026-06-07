import { generatePageMetadata } from '@/lib/metadata'
import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'
import { ArrowRight, MapPin, Code2, Rocket, TrendingUp } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'Web Development Company Vadodara — Premium Websites | Nuvirexa',
  description: 'Best web development company in Vadodara. Nuvirexa builds high-performance, conversion-focused Next.js websites and web apps that drive real business results.',
  path: '/web-development-company-vadodara',
})

export default function VadodaraWebDevPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Nuvirexa Web Development Vadodara',
    image: `${SITE.url}/images/og-image.png`,
    '@id': `${SITE.url}/web-development-company-vadodara`,
    url: `${SITE.url}/web-development-company-vadodara`,
    areaServed: {
      '@type': 'City',
      name: 'Vadodara'
    },
    description: 'Premium web development services for businesses in Vadodara.'
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
                <MapPin className="w-4 h-4" /> Serving Vadodara & Beyond
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Top Web Development Company in Vadodara
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Elevate your brand with a premium digital presence. We build fast, secure, and SEO-optimized websites that turn Vadodara businesses into industry leaders.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-cyan text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Code2, title: 'Modern Tech Stack', desc: 'Next.js & React for blazing speed.' },
                  { icon: TrendingUp, title: 'SEO Optimized', desc: 'Built to rank on page one.' },
                  { icon: Rocket, title: 'Conversion Focused', desc: 'Designed to turn clicks into clients.' }
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
                <h2 className="text-3xl font-bold text-white">Why Choose Us in Vadodara?</h2>
                <p>As Vadodara&apos;s tech and business landscape evolves, your digital presence must lead the charge. We are not just another agency pumping out templates. We engineer bespoke digital solutions that solve actual business problems.</p>
                <p>Whether you&apos;re a local manufacturer needing a corporate portal, or a startup looking for a full-stack SaaS MVP, we bring Silicon Valley engineering standards directly to Vadodara.</p>
                <p>Partnering with us means transparent communication, cutting-edge technology, and a relentless focus on your ROI.</p>
              </div>
            </FadeIn>
          </section>

        </div>
      </div>
    </>
  )
}
