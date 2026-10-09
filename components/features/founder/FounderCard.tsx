'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { FadeIn } from '@/components/animations/FadeIn'
import { usePrefersFinePointer } from '@/hooks/usePrefersFinePointer'
import { SITE, SOCIAL_LINKS } from '@/lib/constants'

const ProfileCard = dynamic(() => import('@/components/features/profile-card/ProfileCard'), { ssr: false })

const PROFILE_INNER_GRADIENT = 'linear-gradient(145deg,#f4f7fb 0%,#dfeaf8 100%)'

export function FounderCard() {
  const router = useRouter()
  const enableTilt = usePrefersFinePointer()

  return (
    <section className="section-pad relative overflow-hidden bg-[#E0E5EC]">
      <div className="container relative z-10 mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
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
            <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-[#6C63FF]">Meet the founder</p>
            <h2 className="mb-2 font-display text-3xl font-bold text-[#3D4852] sm:text-4xl md:text-5xl">
              {SITE.founder}
            </h2>
            <p className="mb-6 text-base text-[#6B7280] sm:text-lg">Founder & CEO, {SITE.name}</p>
            <p className="mb-8 text-base leading-relaxed text-[#3D4852]/80 sm:text-lg">
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
                  className="rounded-xl bg-[#E0E5EC] px-4 py-2 text-sm text-[#6B7280] shadow-[7px_7px_14px_rgba(163,177,198,0.6),-7px_-7px_14px_rgba(255,255,255,0.5)] transition-colors hover:text-[#3D4852]"
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
