import type { ProcessStep } from '@/types/content'

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We dive deep into your business goals, audience, competitors, and success metrics to build a strategic foundation.',
    duration: '1–2 weeks',
    deliverables: ['Project brief', 'Competitive analysis', 'Technical audit'],
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We define the roadmap — information architecture, tech stack, timelines, and KPIs aligned with your growth objectives.',
    duration: '1 week',
    deliverables: ['Project roadmap', 'Wireframes', 'Tech specification'],
  },
  {
    number: '03',
    title: 'Design',
    description:
      'High-fidelity UI designs and interactive prototypes that capture your brand essence and optimize user flows.',
    duration: '2–4 weeks',
    deliverables: ['UI designs', 'Design system', 'Interactive prototype'],
  },
  {
    number: '04',
    title: 'Development',
    description:
      'Agile development with weekly demos, rigorous testing, and performance optimization at every milestone.',
    duration: '2–12 weeks',
    deliverables: ['Working builds', 'QA reports', 'Documentation'],
  },
  {
    number: '05',
    title: 'Launch & Growth',
    description:
      'Deployment, monitoring, SEO setup, and ongoing optimization to ensure sustained performance and ROI.',
    duration: 'Ongoing',
    deliverables: ['Live deployment', 'Analytics setup', 'Growth plan'],
  },
]
