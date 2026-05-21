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
    <section className="pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-20 relative overflow-hidden min-h-[32vh] sm:min-h-[40vh] flex items-end">
      <GradientOrbs variant="hero" />
      <NoiseOverlay opacity={0.03} />
      <div className="absolute inset-0 bg-mesh-1 pointer-events-none opacity-60" aria-hidden />
      <div className="container mx-auto relative z-10 text-center pb-6 sm:pb-8">
        <FadeIn>
          {badge && (
            <ShinyText className="font-mono text-sm text-accent-cyan tracking-widest uppercase mb-4 block">
              {badge}
            </ShinyText>
          )}
          <BlurReveal
            as="h1"
            className="font-display text-display-sm sm:text-display-md lg:text-display-lg font-black text-white mb-4 justify-center text-balance px-2"
          >
            {title}
          </BlurReveal>
          {subtitle && (
            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">{subtitle}</p>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
