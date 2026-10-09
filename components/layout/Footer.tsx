'use client'

import Link from 'next/link'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/Button'
import { SITE, SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants'
import { services } from '@/data/services'
import { DotMatrix } from '@/components/backgrounds/DotMatrix'

const footerColumns = [
  {
    title: 'Services',
    links: services.slice(0, 7).map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    title: 'Company',
    links: [
      ...NAV_LINKS.filter((l) => l.href !== '/').map((l) => ({ label: l.label, href: l.href })),
      { label: 'Founder', href: '/founder' },
      { label: 'Careers', href: '/careers' },
      { label: 'Process', href: '/process' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

export function Footer() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success('Subscribed successfully!')
      setEmail('')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="relative overflow-hidden bg-[#E0E5EC] text-[#3D4852]">
      <DotMatrix opacity={0.08} />

      <div className="relative border-b border-white/60 bg-[#E0E5EC] py-12">
        <div className="container relative z-10 mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="mb-1 font-display text-2xl font-bold text-[#3D4852]">Stay in the loop</h3>
            <p className="text-sm text-[#6B7280]">Agency insights, case studies & digital trends.</p>
          </div>
          <form onSubmit={handleNewsletter} className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              aria-label="Email for newsletter"
              className="w-full rounded-2xl border border-white/60 bg-[#E0E5EC] px-4 py-3 text-sm text-[#3D4852] shadow-[inset_8px_8px_16px_rgba(163,177,198,0.6),inset_-8px_-8px_16px_rgba(255,255,255,0.5)] outline-none transition-all placeholder:text-[#6B7280] focus:ring-2 focus:ring-[#6C63FF] md:w-64"
            />
            <Button type="submit" size="md" disabled={loading} className="w-full sm:w-auto">
              {loading ? '...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>

      <div className="relative z-10 container mx-auto py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-6 sm:gap-10">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <span className="font-display text-2xl font-black text-[#3D4852]">Nuvirexa</span>
              <div className="h-2.5 w-2.5 rounded-full bg-[#6C63FF]" />
            </div>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-[#6B7280]">
              Premium digital growth partner serving ambitious businesses across India — building world-class websites, apps, and AI solutions.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#E0E5EC] text-[#3D4852] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[8px_8px_16px_rgba(163,177,198,0.7),-8px_-8px_16px_rgba(255,255,255,0.7)]"
                  aria-label={social.label}
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
            <p className="mt-6">
              <a href={`mailto:${SITE.email}`} className="text-sm text-[#6C63FF] transition-colors hover:text-[#3D4852]">
                {SITE.email}
              </a>
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-[#6B7280]">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[#6B7280] transition-colors hover:text-[#3D4852]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/60 pt-8 md:flex-row">
          <p className="text-sm text-[#6B7280]">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-[#6B7280]">
            <span>Crafted with</span>
            <span className="text-[#E85D75]">♥</span>
            <span>by {SITE.founder}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
