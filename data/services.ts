import type { Service } from '@/types/content'

export const services: Service[] = [
  {
    id: 'web-dev',
    slug: 'web-development',
    title: 'Premium Website Development',
    shortDescription: 'High-performance marketing sites and landing pages built to convert visitors into customers.',
    fullDescription:
      'We craft cinematic, conversion-focused websites using Next.js, optimized for speed, SEO, and brand storytelling. Every page is engineered for performance and measurable growth.',
    icon: 'Globe',
    features: ['Next.js & React', 'CMS Integration', 'Performance Optimization', 'Responsive Design'],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    startingPrice: 'From $2,000',
    deliveryTime: '2–6 weeks',
  },
  {
    id: 'fullstack',
    slug: 'fullstack',
    title: 'Full Stack Web Applications',
    shortDescription: 'Scalable SaaS platforms, dashboards, and custom web apps with robust architecture.',
    fullDescription:
      'From MVP to enterprise-grade applications, we build secure, scalable full-stack solutions with modern APIs, authentication, and real-time features.',
    icon: 'Layers',
    features: ['API Development', 'Database Design', 'Auth & Security', 'Cloud Deployment'],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    startingPrice: 'From $5,000',
    deliveryTime: '6–16 weeks',
  },
  {
    id: 'uiux',
    slug: 'ui-ux-design',
    title: 'UI/UX Design & Prototyping',
    shortDescription: 'User-centered interfaces that balance beauty, usability, and business goals.',
    fullDescription:
      'We design intuitive digital experiences through research, wireframes, high-fidelity prototypes, and design systems that scale with your product.',
    icon: 'Palette',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    technologies: ['Figma', 'Framer', 'Adobe XD'],
    startingPrice: 'From $1,500',
    deliveryTime: '2–8 weeks',
  },
  {
    id: 'branding',
    slug: 'branding',
    title: 'Brand Identity & Strategy',
    shortDescription: 'Distinctive visual identities and brand narratives that stand out in crowded markets.',
    fullDescription:
      'We develop cohesive brand systems — logos, typography, color palettes, and guidelines — that communicate authority and memorability.',
    icon: 'Sparkles',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
    technologies: ['Figma', 'Illustrator'],
    startingPrice: 'From $1,200',
    deliveryTime: '2–4 weeks',
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'SEO Optimization',
    shortDescription: 'Technical and content SEO strategies that drive organic traffic and qualified leads.',
    fullDescription:
      'Our SEO approach combines technical audits, on-page optimization, content strategy, and performance monitoring to grow your search visibility.',
    icon: 'TrendingUp',
    features: ['Technical SEO', 'Keyword Strategy', 'Content Optimization', 'Analytics'],
    technologies: ['Google Search Console', 'Ahrefs', 'Screaming Frog'],
    startingPrice: 'From $800/mo',
    deliveryTime: 'Ongoing',
  },
  {
    id: 'social',
    slug: 'social-media',
    title: 'Social Media Management',
    shortDescription: 'Strategic content and community management that builds brand authority across platforms.',
    fullDescription:
      'We create and manage social campaigns, content calendars, and engagement strategies tailored to your audience and growth goals.',
    icon: 'Share2',
    features: ['Content Strategy', 'Post Creation', 'Community Management', 'Analytics'],
    technologies: ['Instagram', 'LinkedIn', 'Twitter/X'],
    startingPrice: 'From $600/mo',
    deliveryTime: 'Ongoing',
  },
  {
    id: 'ai',
    slug: 'ai-integrations',
    title: 'AI Integrations & Custom Tools',
    shortDescription: 'Intelligent chatbots, automation, and AI-powered features that give you a competitive edge.',
    fullDescription:
      'We integrate cutting-edge AI — from Gemini and OpenAI to custom workflows — into your products and operations for smarter customer experiences.',
    icon: 'Brain',
    features: ['AI Chatbots', 'Custom LLM Tools', 'Workflow Automation', 'API Integration'],
    technologies: ['Gemini', 'OpenAI', 'LangChain', 'n8n'],
    startingPrice: 'From $3,000',
    deliveryTime: '3–10 weeks',
  },
  {
    id: 'marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing Campaigns',
    shortDescription: 'Data-driven campaigns across paid and organic channels that maximize ROI.',
    fullDescription:
      'We plan and execute multi-channel marketing campaigns — paid ads, email, and funnels — optimized for acquisition and retention.',
    icon: 'Megaphone',
    features: ['Paid Ads', 'Email Marketing', 'Funnel Design', 'Conversion Optimization'],
    technologies: ['Google Ads', 'Meta Ads', 'Mailchimp'],
    startingPrice: 'From $1,000/mo',
    deliveryTime: 'Ongoing',
  },
  {
    id: 'automation',
    slug: 'automation',
    title: 'Automation Solutions',
    shortDescription: 'Streamline operations with n8n, Zapier, and custom automation pipelines.',
    fullDescription:
      'We connect your tools and eliminate manual work through intelligent automation — saving time and reducing errors across your business.',
    icon: 'Zap',
    features: ['Workflow Automation', 'CRM Integration', 'Data Pipelines', 'Custom Scripts'],
    technologies: ['n8n', 'Zapier', 'Make', 'Node.js'],
    startingPrice: 'From $1,500',
    deliveryTime: '2–6 weeks',
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
