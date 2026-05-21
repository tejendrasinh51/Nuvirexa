'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { FadeIn } from '@/components/animations/FadeIn'
import { usePrefersFinePointer } from '@/hooks/usePrefersFinePointer'
import { SITE, SOCIAL_LINKS } from '@/lib/constants'

const ProfileCard = dynamic(() => import('@/components/features/profile-card/ProfileCard'), { ssr: false })

const PROFILE_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)'

export function FounderCard() {
  const router = useRouter()
  const enableTilt = usePrefersFinePointer()

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-2 opacity-30 pointer-events-none" aria-hidden />
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        <FadeIn direction="left" className="flex justify-center">
          <ProfileCard
            className="profile-card--founder"
            name={SITE.founder}
            splitName={false}
            title="Founder & CEO"
            handle={SITE.founderHandle}
            status="Available for projects"
            contactText="Contact Me"
            avatarUrl={SITE.founderAvatar}
            miniAvatarUrl={SITE.founderAvatar}
            iconUrl={SITE.profileCardIcon}
            showUserInfo
            enableTilt={enableTilt}
            enableMobileTilt={false}
            behindGlowEnabled
            innerGradient={PROFILE_INNER_GRADIENT}
            onContactClick={() => router.push('/contact')}
          />
        </FadeIn>

        <FadeIn direction="right" delay={0.1}>
          <div>
            <p className="text-accent-cyan font-mono text-sm mb-3">Meet the founder</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-balance">{SITE.founder}</h2>
            <p className="text-muted text-base sm:text-lg mb-6">Founder & CEO, {SITE.name}</p>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
              A passionate technologist and entrepreneur dedicated to helping businesses unlock their digital
              potential. With deep expertise in modern web development and AI, Tejendrasinh founded Nuvirexa to
              bridge the gap between great ideas and exceptional digital execution.
            </p>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-4 py-2 rounded-lg text-sm text-muted hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
