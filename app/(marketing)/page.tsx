import { Hero } from '@/components/sections/Hero'
import { AgencyIntro } from '@/components/sections/AgencyIntro'
import { ServicesShowcase } from '@/components/sections/ServicesShowcase'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { ClientResults } from '@/components/sections/ClientResults'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { WorkflowProcess } from '@/components/sections/WorkflowProcess'
import { TechStack } from '@/components/sections/TechStack'
import { CtaSection } from '@/components/sections/CtaSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactCta } from '@/components/sections/ContactCta'
import { SectionDivider } from '@/components/ui/SectionDivider'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider glow />
      <AgencyIntro />
      <SectionDivider />
      <ServicesShowcase />
      <CtaSection />
      <SectionDivider glow />
      <WhyChooseUs />
      <SectionDivider />
      <FeaturedProjects />
      <ClientResults />
      <SectionDivider glow />
      <TestimonialsSection />
      <SectionDivider />
      <WorkflowProcess />
      <SectionDivider />
      <TechStack />
      <CtaSection
        variant="bottom"
        subtitle="Your next chapter starts with a conversation. No obligations — just clarity on what's possible."
      />
      <SectionDivider glow />
      <FaqSection />
      <ContactCta />
    </>
  )
}
