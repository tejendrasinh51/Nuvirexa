'use client'

import { useEffect, useState } from 'react'
import { useScrolledNav } from '@/hooks/useScrolledNav'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navbar() {
  const scrolled = useScrolledNav(50)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#6C63FF] focus:rounded-2xl focus:text-white"
      >
        Skip to main content
      </a>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-500 ease-out md:px-8',
          scrolled
            ? 'border-b border-white/40 bg-[#E0E5EC]/80 py-3 shadow-[0_8px_30px_rgba(163,177,198,0.35)] backdrop-blur-xl'
            : 'bg-transparent py-6'
        )}
      >
        <nav className="container mx-auto flex items-center justify-between safe-top" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2 group no-underline transition-opacity hover:opacity-80">
            <span className="font-display text-[1.15rem] font-extrabold tracking-[-0.02em] text-[#3D4852]">
              Nuvirexa
            </span>
            <motion.div
              className="h-2.5 w-2.5 rounded-full bg-[#6C63FF]"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch
                  className="relative py-1 text-[0.9rem] font-medium tracking-[0.01em] text-[#3D4852]/75 transition-colors hover:text-[#3D4852]"
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-px bg-[#6C63FF] transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:block">
            <Button
              size="sm"
              data-cal-namespace="discovery-call"
              data-cal-link={SITE.calLink}
              data-cal-config='{"layout":"month_view","theme":"light"}'
            >
              Schedule Call
            </Button>
          </div>

          <button
            type="button"
            className="rounded-2xl bg-[#E0E5EC] p-2 text-[#3D4852] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.5)] transition-all hover:shadow-[8px_8px_16px_rgba(163,177,198,0.7),-8px_-8px_16px_rgba(255,255,255,0.7)] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#E0E5EC]/95 pt-[env(safe-area-inset-top)] lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="flex h-full flex-col items-center justify-center gap-8"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={link.href} className="text-2xl font-bold text-[#3D4852]">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button
                data-cal-namespace="discovery-call"
                data-cal-link={SITE.calLink}
                data-cal-config='{"layout":"month_view","theme":"light"}'
              >
                Schedule Call
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
