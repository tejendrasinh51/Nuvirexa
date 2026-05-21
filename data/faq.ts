export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    id: '1',
    question: 'How much does a website cost?',
    answer:
      'Website projects typically start from $2,000 for marketing sites and scale based on complexity, integrations, and custom features. We provide detailed quotes after a discovery call to understand your exact requirements.',
  },
  {
    id: '2',
    question: 'What is your typical project timeline?',
    answer:
      'Marketing websites take 2–6 weeks. Web applications range from 6–16 weeks depending on scope. We provide a clear timeline during the strategy phase with milestone-based delivery.',
  },
  {
    id: '3',
    question: 'Do you work with startups and enterprises?',
    answer:
      'Yes. We partner with SMBs, startups, scale-ups, and enterprise teams. Our process adapts to your stage — from MVP launches to large-scale digital transformations.',
  },
  {
    id: '4',
    question: 'What technologies do you use?',
    answer:
      'We specialize in Next.js, React, TypeScript, Node.js, PostgreSQL, and cloud platforms like Vercel and AWS. For design we use Figma; for AI we integrate Gemini, OpenAI, and custom pipelines.',
  },
  {
    id: '5',
    question: 'Can you redesign an existing website?',
    answer:
      'Absolutely. We audit your current site, identify performance and UX gaps, and deliver a modern redesign that preserves SEO equity while dramatically improving conversion.',
  },
  {
    id: '6',
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. We offer maintenance retainers, SEO packages, and growth partnerships. Many clients stay with us long-term for continuous optimization and feature development.',
  },
  {
    id: '7',
    question: 'How do we get started?',
    answer:
      'Book a free discovery call via our scheduling link. We discuss your goals, timeline, and budget, then send a tailored proposal within 48 hours.',
  },
  {
    id: '8',
    question: 'Do you sign NDAs?',
    answer:
      'Yes. We routinely work under NDAs for sensitive projects and treat all client information with strict confidentiality.',
  },
]
