import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { FounderCard } from '@/components/features/founder/FounderCard'
import { FadeIn } from '@/components/animations/FadeIn'
import { Card } from '@/components/ui/Card'
import { CountUp } from '@/components/animations/CountUp'
import { CtaSection } from '@/components/sections/CtaSection'
import { team } from '@/data/team'
import { Target, Heart, Lightbulb, Users, Rocket, Award } from 'lucide-react'

export const metadata = generatePageMetadata({
  title: 'About Nuvirexa — AI & Digital Growth Agency India | Our Story',
  description: 'Learn about Nuvirexa, India\'s premium AI and digital growth agency. Meet founder Tejendrasinh Sisodia and discover our mission to build world-class AI, web, and AEO solutions.',
  path: '/about',
})

const values = [
  { icon: Target, title: 'Excellence', desc: 'We hold every deliverable to world-class standards.' },
  { icon: Heart, title: 'Partnership', desc: 'Your success is our success — we grow together.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace AI and emerging tech to stay ahead.' },
  { icon: Users, title: 'Transparency', desc: 'Honest communication at every stage of the project.' },
  { icon: Rocket, title: 'Velocity', desc: 'Fast execution without sacrificing quality.' },
  { icon: Award, title: 'Impact', desc: 'Measurable results that move your business forward.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About Nuvirexa"
        title="Building the future of digital"
        subtitle="A premium creative tech agency obsessed with helping ambitious brands win online."
      />

      <section className="py-16 container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Nuvirexa Agency was born from a frustration with mediocre digital work. We saw too many businesses
            held back by slow, generic websites and disconnected strategies — so we built an agency that does it
            differently.
          </p>
          <p className="text-muted leading-relaxed">
            Today, we partner with startups, SMBs, and enterprise teams worldwide — delivering cinematic websites,
            scalable applications, and AI-powered tools that drive real growth.
          </p>
        </FadeIn>
      </section>

      <FounderCard />

      <section className="py-24 bg-surface/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Our values</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <FadeIn key={v.title}>
                <Card>
                  <v.icon className="w-8 h-8 text-accent-violet mb-4" />
                  <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-muted">{v.desc}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold">Our team</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <FadeIn key={member.id}>
                <Card className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="font-semibold text-white">{member.name}</h3>
                  <p className="text-accent-cyan text-sm mb-3">{member.role}</p>
                  <p className="text-sm text-muted">{member.bio}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          <FadeIn>
            <p className="font-display text-4xl font-bold text-gradient">
              <CountUp end={50} suffix="+" />
            </p>
            <p className="text-muted text-sm mt-2">Projects</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-display text-4xl font-bold text-gradient">
              <CountUp end={3} suffix="+" />
            </p>
            <p className="text-muted text-sm mt-2">Years</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-display text-4xl font-bold text-gradient">
              <CountUp end={12} suffix="+" />
            </p>
            <p className="text-muted text-sm mt-2">Countries</p>
          </FadeIn>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
