import { generatePageMetadata } from '@/lib/metadata'
import { PageHeader } from '@/components/layout/PageHeader'
import { WorkflowProcess } from '@/components/sections/WorkflowProcess'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { FadeIn } from '@/components/animations/FadeIn'
import { processSteps } from '@/data/process'

export const metadata = generatePageMetadata({
  title: 'Our Process — How We Build AI & Web Solutions | Nuvirexa',
  description: 'Discover Nuvirexa\'s proven 5-step process: from discovery and strategy to design, development, launch, and sustained growth for AI and web projects.',
  path: '/process',
})

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        badge="How We Work"
        title="A process built for results"
        subtitle="Transparent, structured, and designed to deliver exceptional outcomes on every project."
      />
      <WorkflowProcess />
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {processSteps.map((step) => (
            <FadeIn key={step.number}>
              <div className="glass rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {step.number} — {step.title}
                </h3>
                <p className="text-xs text-accent-cyan font-mono mb-3">{step.duration}</p>
                <ul className="space-y-1">
                  {step.deliverables.map((d) => (
                    <li key={d} className="text-sm text-muted">
                      • {d}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <FaqSection />
      <CtaSection />
    </>
  )
}
