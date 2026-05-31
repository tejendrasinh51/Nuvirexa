import { generatePageMetadata } from '@/lib/metadata'
import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'
import { ArrowRight, MapPin, Search, Target } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'SEO Company Vadodara | Top SEO Agency',
  description: 'Looking for a reliable SEO company in Vadodara? We offer data-driven search engine optimization, local SEO, and AEO strategies to dominate Google rankings.',
  path: '/seo-company-vadodara',
})

export default function VadodaraSEOPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Nuvirexa SEO Company Vadodara',
    image: `${SITE.url}/images/og-image.png`,
    '@id': `${SITE.url}/seo-company-vadodara`,
    url: `${SITE.url}/seo-company-vadodara`,
    areaServed: {
      '@type': 'City',
      name: 'Vadodara'
    },
    description: 'Data-driven Search Engine Optimization services in Vadodara.'
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
                <MapPin className="w-4 h-4" /> SEO Services in Vadodara
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Top SEO Company in Vadodara
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Rank higher, drive organic traffic, and convert visitors into customers. We bring advanced technical and local SEO strategies to Vadodara businesses.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-cyan text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Get a Free SEO Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: 'Local Map Pack SEO', desc: 'Dominate Vadodara local search results.' },
                  { icon: Search, title: 'Technical SEO', desc: 'Perfect site architecture for Google bots.' }
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
                <h2 className="text-3xl font-bold text-white">Why Vadodara Businesses Trust Our SEO</h2>
                <p>Standing out in Vadodara&apos;s competitive market requires more than just keyword stuffing. We take a holistic, data-driven approach to Search Engine Optimization.</p>
                <p>We audit your entire digital footprint, fix underlying technical errors, and execute content strategies that prove your authority to Google—and to your customers.</p>
              </div>
            </FadeIn>
          </section>

        </div>
      </div>
    </>
  )
}
