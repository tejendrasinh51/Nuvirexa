import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { ShinyText } from '@/components/animations/ShinyText'
import { GradientOrbs } from '@/components/backgrounds/GradientOrbs'
import { NoiseOverlay } from '@/components/backgrounds/NoiseOverlay'

interface PageHeaderProps {
  title: string
  subtitle?: string
  badge?: string
}

export function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[32vh] items-end overflow-hidden pb-14 pt-28 sm:min-h-[40vh] sm:pb-20 sm:pt-32 md:pt-36">
      <GradientOrbs variant="hero" />
      <NoiseOverlay opacity={0.03} />
      <div className="absolute inset-0 bg-[#e8edf5]/60" aria-hidden />
      <div className="container relative z-10 mx-auto pb-6 text-center sm:pb-8">
        <FadeIn eager>
          {badge && (
            <ShinyText className="mb-4 block font-mono text-sm uppercase tracking-[0.2em] text-[#6C63FF]">
              {badge}
            </ShinyText>
          )}
          <BlurReveal
            as="h1"
            priority
            className="mb-4 justify-center px-2 font-display text-display-sm font-black text-[#3D4852] sm:text-display-md lg:text-display-lg"
          >
            {title}
          </BlurReveal>
          {subtitle && (
            <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-[#6B7280] sm:text-lg">{subtitle}</p>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
