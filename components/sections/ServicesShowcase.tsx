'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { BlurReveal } from '@/components/animations/BlurReveal'
import { ShinyText } from '@/components/animations/ShinyText'
import { SpotlightCard } from '@/components/animations/SpotlightCard'
import { TiltCard } from '@/components/animations/TiltCard'
import { services } from '@/data/services'
import { getServiceIcon } from '@/lib/icons'
import { cn } from '@/lib/utils'

const GridPattern = dynamic(() => import('@/components/backgrounds/GridPattern').then((m) => m.GridPattern), { ssr: false })
const GradientOrbs = dynamic(() => import('@/components/backgrounds/GradientOrbs').then((m) => m.GradientOrbs), { ssr: false })

function ServiceCard({ service, index, large = false }: { service: (typeof services)[0]; index: number; large?: boolean }) {
  const Icon = getServiceIcon(service.icon)

  return (
    <SpotlightCard className="h-full">
      <TiltCard className="h-full">
        <Link href={`/services/${service.slug}`} className="block h-full group">
          <div
            className={cn(
              'absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-violet/20 via-transparent to-accent-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none'
            )}
          />
          <div
            className={cn(
              'relative glass border border-white/[0.08] group-hover:border-accent-violet/30 rounded-2xl transition-all duration-500 group-hover:shadow-card-hover h-full',
              large ? 'p-8' : 'p-6'
            )}
          >
            <span className="absolute top-5 right-5 font-mono text-xs text-white/20">
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="relative mb-5 inline-block">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-violet/20 to-accent-cyan/10 border border-accent-violet/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-accent-violet group-hover:text-accent-cyan transition-colors" />
              </div>
              <div className="absolute inset-0 blur-xl bg-accent-violet/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            </div>

            <h3
              className={cn(
                'font-display font-bold text-white mb-2 group-hover:text-gradient transition-all',
                large ? 'text-2xl' : 'text-lg'
              )}
            >
              {service.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">{service.shortDescription}</p>

            <div className="flex items-center gap-1 text-accent-cyan text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </TiltCard>
    </SpotlightCard>
  )
}

export function ServicesShowcase() {
  return (
    <section className="section-pad relative overflow-hidden section-alt">
      <GridPattern opacity={0.06} />
      <GradientOrbs variant="services" />

      <div className="container mx-auto relative z-10">
        <FadeIn className="text-center mb-12 sm:mb-20">
          <ShinyText className="font-mono text-sm text-accent-cyan tracking-widest uppercase mb-4 block">
            Our Services
          </ShinyText>
          <BlurReveal
            as="h2"
            className="font-display text-display-sm sm:text-display-md lg:text-display-lg font-black text-white justify-center text-balance px-2"
          >
            What We Do
          </BlurReveal>
          <p className="text-muted text-lg max-w-2xl mx-auto mt-6">
            End-to-end digital services engineered for growth, performance, and lasting impact.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <FadeIn key={service.id} delay={i * 0.05} className={i === 0 ? 'lg:col-span-2' : ''}>
              <ServiceCard service={service} index={i} large={i === 0} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="text-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent-cyan hover:text-white transition-colors font-medium group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
