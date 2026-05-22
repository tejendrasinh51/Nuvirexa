'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FadeIn } from '@/components/animations/FadeIn'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { ContactGalaxyBackground } from '@/components/backgrounds/ContactGalaxyBackground'
import { SITE, SOCIAL_LINKS } from '@/lib/constants'
import { services } from '@/data/services'
import { Mail, Clock, MapPin, Send, User, Building2, Briefcase } from 'lucide-react'

const CalEmbed = dynamic(
  () => import('@/components/features/schedule/CalEmbed').then((m) => m.CalEmbed),
  { ssr: false, loading: () => <div className="h-[600px] glass rounded-2xl animate-pulse" /> }
)

const selectClass = 'form-field appearance-none cursor-pointer'

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setErrors({})
    const form = new FormData(e.currentTarget)
    const data = {
      name: form.get('name') as string,
      email: form.get('email') as string,
      company: form.get('company') as string,
      service: form.get('service') as string,
      budget: form.get('budget') as string,
      message: form.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) {
        setErrors({ form: 'Please check your inputs and try again.' })
        toast.error('Failed to send. Please email us directly.')
        return
      }
      toast.success('Message sent! We will respond within 24 hours.')
      e.currentTarget.reset()
    } catch {
      toast.error('Failed to send. Please email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="relative pt-28 sm:pt-32 pb-6 sm:pb-8 overflow-hidden">
        <ContactGalaxyBackground />
        <div className="container mx-auto relative z-10 text-center">
          <FadeIn>
            <p className="text-accent-cyan font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">Contact</p>
            <h1 className="font-display text-display-sm sm:text-display-md font-black text-white mb-4 text-balance px-2">
              Let&apos;s build something great
            </h1>
            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Share your project details and our team will respond within 24 hours. Prefer a call? Book a discovery
              session below.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="relative py-10 sm:py-16 md:py-20 overflow-hidden">
        <ContactGalaxyBackground />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 xl:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 xl:gap-16 items-start">
            <FadeIn>
              <div
                id="contact-form"
                className="relative rounded-3xl border border-white/[0.08] bg-[#0c0c16]/90 backdrop-blur-xl shadow-card overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-violet/60 to-transparent" />
                <div className="p-5 sm:p-8 md:p-10">
                  <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <div className="p-3 rounded-xl bg-accent-violet/15 border border-accent-violet/20">
                      <Send className="w-5 h-5 text-accent-violet" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">Project inquiry</h2>
                      <p className="text-muted text-sm">
                        All fields marked with <span className="text-accent-cyan">*</span> are required.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-mono text-accent-cyan uppercase tracking-wider mb-4">
                        <User className="w-4 h-4" />
                        Your details
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Input name="name" label="Full Name *" required placeholder="John Smith" />
                        <Input name="email" type="email" label="Work Email *" required placeholder="you@company.com" />
                        <div className="sm:col-span-2">
                          <Input name="company" label="Company" placeholder="Your company name" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-mono text-accent-cyan uppercase tracking-wider mb-4">
                        <Briefcase className="w-4 h-4" />
                        Project scope
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="service" className="block text-sm text-muted mb-2">
                            Service of Interest
                          </label>
                          <select id="service" name="service" className={selectClass}>
                            <option value="">Select a service</option>
                            {services.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm text-muted mb-2">
                            Budget Range
                          </label>
                          <select id="budget" name="budget" className={selectClass}>
                            <option value="">Select budget</option>
                            <option value="under-5k">Under $5,000</option>
                            <option value="5k-15k">$5,000 – $15,000</option>
                            <option value="15k-50k">$15,000 – $50,000</option>
                            <option value="50k+">$50,000+</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-2 text-sm font-mono text-accent-cyan uppercase tracking-wider mb-4">
                        <Building2 className="w-4 h-4" />
                        Tell us more
                      </h3>
                      <Textarea
                        name="message"
                        label="Project Details *"
                        required
                        rows={6}
                        placeholder="Goals, timeline, tech stack, or links to references..."
                      />
                    </div>

                    {errors.form && <p className="text-red-400 text-sm">{errors.form}</p>}

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <Button type="submit" className="w-full sm:flex-1" disabled={loading} size="lg">
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                      <Link
                        href={`mailto:${SITE.email}`}
                        className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg rounded-xl border border-accent-violet/50 text-accent-violet hover:bg-accent-violet/10 transition-all font-semibold"
                      >
                        Email directly
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-8">
              <FadeIn delay={0.1}>
                <div className="glass rounded-2xl p-6 space-y-6 border border-white/[0.06]">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-accent-violet shrink-0" />
                    <div>
                      <p className="text-sm text-muted">Email</p>
                      <a href={`mailto:${SITE.email}`} className="text-white hover:text-accent-cyan transition-colors">
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-accent-violet shrink-0" />
                    <div>
                      <p className="text-sm text-muted">Response time</p>
                      <p className="text-white">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-accent-violet shrink-0" />
                    <div>
                      <p className="text-sm text-muted">Location</p>
                      <p className="text-white">Remote — Global clients</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div>
                  <p className="text-sm text-muted mb-4">Follow us</p>
                  <div className="flex flex-wrap gap-3">
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
          </div>

          <FadeIn delay={0.3} className="mt-16">
            <div className="text-center mb-8">
              <p className="text-accent-cyan font-mono text-xs tracking-widest uppercase mb-2">Schedule</p>
              <h2 className="font-display text-2xl font-bold text-white">Book a discovery call</h2>
              <p className="text-muted text-sm mt-2">Pick a time that works for you — no back-and-forth emails.</p>
            </div>
            <div className="h-[min(520px,75vh)] sm:h-[520px] glass rounded-2xl overflow-hidden border border-white/[0.06]">
              <CalEmbed />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}