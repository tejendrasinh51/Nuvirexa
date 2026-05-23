'use client'

import { useEffect, useState } from 'react'
import { useScrolledNav } from '@/hooks/useScrolledNav'
import { motion, AnimatePresence } from 'framer-motion'
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent-violet focus:rounded-lg focus:text-white"
      >
        Skip to main content
      </a>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-10 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]',
          scrolled
            ? 'bg-[rgba(10,8,28,0.55)] backdrop-blur-xl backdrop-saturate-150 backdrop-brightness-90 border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04),0_4px_40px_rgba(0,0,0,0.4)] py-4'
            : 'bg-transparent backdrop-blur-none border-b border-transparent py-6'
        )}
      >
        <nav className="container mx-auto flex items-center justify-between safe-top" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-1.5 group no-underline hover:opacity-85 transition-opacity">
            <span className="font-display font-extrabold text-[1.15rem] text-white tracking-[-0.02em]">
              Nuvirexa
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[0.9rem] font-medium text-white/70 hover:text-white tracking-[0.01em] transition-colors group py-1 no-underline"
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-px bg-gradient-to-r from-accent-violet to-accent-cyan transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 rounded-xl bg-accent-violet/30 animate-ping opacity-75" style={{ animationDuration: '2s' }} />
            <Button
              size="sm"
              className="relative"
              data-cal-namespace="discovery-call"
              data-cal-link={SITE.calLink}
              data-cal-config='{"layout":"month_view","theme":"dark"}'
            >
              Schedule Call
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl lg:hidden pt-[env(safe-area-inset-top)]"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-2xl sm:text-3xl font-bold text-white hover:text-gradient transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button
                data-cal-namespace="discovery-call"
                data-cal-link={SITE.calLink}
                data-cal-config='{"layout":"month_view","theme":"dark"}'
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
