'use client'

import { useState } from 'react'
import toast from 'react-hot-toast'
import { PageHeader } from '@/components/layout/PageHeader'
import { FadeIn } from '@/components/animations/FadeIn'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Heart, Zap, Globe, Coffee } from 'lucide-react'

const benefits = [
  { icon: Globe, title: 'Remote-first', desc: 'Work from anywhere with flexible hours.' },
  { icon: Zap, title: 'Cutting-edge projects', desc: 'Next.js, AI, and premium design work.' },
  { icon: Heart, title: 'Growth culture', desc: 'Learn, experiment, and level up continuously.' },
  { icon: Coffee, title: 'Work-life balance', desc: 'Sustainable pace, no burnout culture.' },
]

export default function CareersPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: `Career Application:\n${form.get('message')}`,
          service: 'Careers',
        }),
      })
      if (!res.ok) throw new Error('Failed')
      toast.success('Application submitted! We will be in touch.')
      e.currentTarget.reset()
    } catch {
      toast.error('Failed to submit. Please email hello@nuvirexa.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader
        badge="Careers"
        title="Join our team"
        subtitle="We are always looking for exceptional talent — even when we have no open listings."
      />

      <section className="py-16 container mx-auto px-6 max-w-3xl text-center">
        <FadeIn>
          <Card>
            <p className="text-white/80 text-lg mb-2">No open positions right now</p>
            <p className="text-muted">
              But we are always interested in hearing from talented designers, developers, and strategists.
            </p>
          </Card>
        </FadeIn>
      </section>

      <section className="py-16 bg-surface/30">
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold">Why Nuvirexa?</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <FadeIn key={b.title}>
                <Card className="text-center">
                  <b.icon className="w-8 h-8 text-accent-violet mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-muted">{b.desc}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6 max-w-xl">
        <FadeIn>
          <h2 className="font-display text-2xl font-bold text-center mb-8">Open application</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input name="name" label="Full Name" required />
            <Input name="email" type="email" label="Email" required />
            <Textarea name="message" label="Tell us about yourself" required rows={5} />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Application'}
            </Button>
          </form>
        </FadeIn>
      </section>
    </>
  )
}
