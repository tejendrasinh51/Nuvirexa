import { generatePageMetadata } from '@/lib/metadata'
import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'
import { ArrowRight, Code, Layers, ShieldCheck, Rocket } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'Custom Software Development — SaaS & Enterprise Apps | Nuvirexa',
  description: 'End-to-end custom software development services. Build scalable SaaS platforms, robust APIs, and enterprise web portals with modern Next.js and AI integration.',
  path: '/custom-software-development',
})

export default function CustomSoftwarePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development',
    provider: {
      '@type': 'Organization',
      name: 'Nuvirexa',
    },
    description: 'End-to-end custom software development including SaaS platforms, enterprise portals, and complex API integrations.',
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
                <Code className="w-4 h-4" /> Full-Stack Engineering
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Custom Software Development
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Off-the-shelf software holds you back. We engineer custom, scalable, and secure web applications tailored specifically to your unique business logic and operational needs.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-accent-cyan text-black px-8 py-4 rounded-full font-bold hover:bg-white transition-colors">
                Discuss Your Requirements <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeIn>
          </section>

          <section className="mb-20">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-10 text-center">Engineering Excellence</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Layers,
                    title: 'SaaS Product Development',
                    desc: 'From initial MVP to full-scale production. We architect multi-tenant SaaS platforms with secure authentication, billing integrations, and seamless user experiences.'
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Enterprise Web Portals',
                    desc: 'Secure, role-based dashboards and internal tools that unify your data, streamline communication, and enforce operational workflows.'
                  },
                  {
                    icon: Code,
                    title: 'API & Integration Services',
                    desc: 'We build robust RESTful and GraphQL APIs to connect disparate systems, enabling your software to talk to CRMs, ERPs, and third-party services natively.'
                  },
                  {
                    icon: Rocket,
                    title: 'Legacy Modernization',
                    desc: 'Transform slow, monolithic legacy systems into fast, decoupled modern architectures using Next.js, Node, and cloud-native infrastructure.'
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
                <h2 className="text-3xl font-bold text-white">Our Technology Stack</h2>
                <p>We do not compromise on technology. We build on the same robust, modern stacks used by the world&apos;s most innovative tech companies.</p>
                <ul>
                  <li><strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS, Framer Motion.</li>
                  <li><strong>Backend:</strong> Node.js, Express, Python, Serverless Functions.</li>
                  <li><strong>Database:</strong> PostgreSQL, MongoDB, Redis, Pinecone (Vector DBs).</li>
                  <li><strong>Infrastructure & DevOps:</strong> AWS, Vercel, Docker, CI/CD Pipelines.</li>
                </ul>
                <h3 className="text-xl font-bold text-white mt-8 mb-4">The Nuvirexa Difference</h3>
                <p>We treat your product as if it were our own. That means writing clean, maintainable code, prioritizing security from day one, and architecting for the scale you intend to reach tomorrow, not just the users you have today.</p>
              </div>
            </FadeIn>
          </section>

          <section className="text-center">
            <FadeIn>
              <div className="bg-gradient-to-br from-accent-cyan/10 to-transparent p-12 rounded-3xl border border-accent-cyan/20">
                <h2 className="text-3xl font-bold text-white mb-4">Have a Complex Problem to Solve?</h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Let&apos;s architect a custom solution that gives you a definitive competitive advantage.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-accent-cyan transition-colors">
                  Schedule a Technical Discovery
                </Link>
              </div>
            </FadeIn>
          </section>

        </div>
      </div>
    </>
  )
}
