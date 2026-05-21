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
    links: services.slice(0, 5).map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    title: 'Company',
    links: [
      ...NAV_LINKS.filter((l) => l.href !== '/').map((l) => ({ label: l.label, href: l.href })),
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
    <footer className="relative border-t border-white/[0.06] overflow-hidden bg-[#0A0A14]">
      <DotMatrix opacity={0.06} />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[18vw] font-display font-black text-white/[0.02] whitespace-nowrap tracking-tighter">
          NUVIREXA
        </span>
      </div>

      <div className="relative border-b border-white/[0.06] py-12 bg-gradient-to-r from-violet-950/30 via-[#0A0A14] to-cyan-950/20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div>
            <h3 className="font-display font-bold text-2xl text-white mb-1">Stay in the loop</h3>
            <p className="text-white/50 text-sm">Agency insights, case studies & digital trends.</p>
          </div>
          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              aria-label="Email for newsletter"
              className="form-field flex-1 md:w-64 text-sm"
            />
            <Button type="submit" size="md" disabled={loading} className="w-full sm:w-auto shrink-0">
              {loading ? '...' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>

      <div className="relative container mx-auto py-12 sm:py-16 z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-black text-2xl text-white">Nuvirexa</span>
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan animate-pulse" />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
              Premium digital growth partner building world-class websites, apps, and AI solutions.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 glass border border-white/[0.08] hover:border-accent-violet/40 rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-all hover:shadow-glow-violet-sm text-xs font-mono"
                  aria-label={social.label}
                >
                  {social.label[0]}
                </a>
              ))}
            </div>
            <p className="mt-6">
              <a href={`mailto:${SITE.email}`} className="text-accent-cyan text-sm hover:text-white transition-colors">
                {SITE.email}
              </a>
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs text-white/30 tracking-widest uppercase mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-accent-cyan transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-sm font-mono">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1">
            <span>Crafted with</span>
            <span className="text-red-400">♥</span>
            <span>by {SITE.founder}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
