import type { Service } from '@/types/content'

const aiServices: Service[] = [
  {
    id: 'ai-saas-mvp',
    slug: 'ai-saas-mvp-development',
    title: 'AI-Powered SaaS & MVP Development',
    tagline: 'We build your AI product — from idea to paying customers.',
    shortDescription:
      'From zero to live MVP in 6–10 weeks. Full-stack AI SaaS, MVPs, feature integrations, and internal tools — production-grade and scalable.',
    fullDescription:
      'You have a vision for an AI-powered product. We have the engineers, designers, and AI architects to build it — fast, clean, and ready to scale. Every project runs on production-grade Next.js, Node.js, and PostgreSQL — not no-code wrappers.',
    icon: 'Rocket',
    features: [
      'Discovery & technical architecture',
      'High-fidelity UI/UX in Figma',
      'Full-stack Next.js + PostgreSQL build',
      'OpenAI / Gemini / RAG integration',
      'QA, security review & deployment',
      '30 days post-launch support',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'OpenAI',
      'Gemini',
      'LangChain',
      'Pinecone',
      'Vercel',
      'AWS',
      'Stripe',
    ],
    startingPrice: 'From ₹3,00,000',
    deliveryTime: '6–16 weeks',
    idealFor: [
      'Founders launching an AI SaaS to market',
      'Teams validating an idea with a working MVP before fundraising',
      'Products adding AI modules to an existing platform',
      'Businesses replacing manual processes with custom AI tools',
    ],
    offerings: [
      {
        title: 'AI SaaS Products',
        description:
          'Full-stack SaaS platforms with AI at the core — auth, billing, dashboards, APIs, and intelligent features.',
        bullets: [
          'AI analytics dashboards',
          'Document intelligence (contract Q&A)',
          'AI writing & content tools',
          'Intelligent CRM & sales platforms',
          'EdTech & healthcare AI tools',
        ],
      },
      {
        title: 'MVP Development',
        description: 'Lean, functional MVPs that prove your value proposition — shipped in 6–10 weeks.',
        bullets: [
          'Feature prioritisation workshop',
          'High-fidelity design (not wireframes only)',
          'Weekly demos & agile sprints',
          'Investor-ready codebase & documentation',
        ],
      },
      {
        title: 'AI Feature Integration',
        description: 'Add AI to an existing product without rebuilding what already works.',
        bullets: [
          'RAG-powered knowledge bases',
          'Intelligent search & recommendations',
          'Automated insights & anomaly detection',
          'Predictive lead, churn & demand scoring',
        ],
      },
      {
        title: 'Internal AI Tools',
        description: 'High-ROI internal tools that make teams faster and operations leaner.',
        bullets: [
          'Company knowledge chatbots',
          'AI proposal & contract generators',
          'Automated ops reporting',
          'AI-assisted hiring & CV screening',
        ],
      },
    ],
    processSteps: [
      {
        title: 'Week 1–2: Discovery & Architecture',
        description:
          'Structured discovery — users, use cases, data flows, and AI requirements. Technical architecture and roadmap for your approval.',
      },
      {
        title: 'Week 2–3: Design',
        description: 'Full UI/UX in Figma — every screen, state, and interaction — iterated until you approve.',
      },
      {
        title: 'Week 3–8: Development',
        description: 'Agile sprints with weekly demos. Backend, frontend, and AI built in parallel.',
      },
      {
        title: 'Week 8–9: QA & Performance',
        description: 'Functional, security, load, and cross-device testing before production ship.',
      },
      {
        title: 'Week 9–10: Launch',
        description: 'Production deploy, monitoring, alerts, documentation, and 30 days post-launch support.',
      },
    ],
    pricingNotes: [
      'Focused MVP (3–5 features): ₹3,00,000 – ₹5,00,000 · 6–8 weeks',
      'Full-featured SaaS (10+ features): ₹5,00,000 – ₹10,00,000 · 10–16 weeks',
      'Enterprise AI platform: ₹10,00,000+ · 16+ weeks',
      'AI feature on existing product: ₹1,50,000 – ₹3,00,000 · 3–6 weeks',
      'Post-launch retainers from ₹25,000/month',
    ],
    faqs: [
      {
        question: 'Do you sign NDAs?',
        answer: 'Yes, always. Your idea is protected before the first conversation.',
      },
      {
        question: 'Who owns the code?',
        answer:
          'You do, 100%. We transfer full ownership of the codebase, assets, and infrastructure at project close.',
      },
      {
        question: 'Can you work with my existing team?',
        answer:
          'Yes. We work alongside in-house developers or CTOs to accelerate teams already in place.',
      },
      {
        question: 'I have an idea but no technical background — can you help?',
        answer:
          'Absolutely. You need a clear problem and target user — we handle architecture, design, and build.',
      },
    ],
  },
  {
    id: 'ai-agents',
    slug: 'ai-agents',
    title: 'AI Agents',
    tagline: 'Autonomous agents that work for your business — 24/7, no breaks, no mistakes.',
    shortDescription:
      'Custom AI agents that browse the web, qualify leads, handle support, monitor competitors, and run operations — without manual work.',
    fullDescription:
      'An AI agent thinks, decides, and acts on your behalf — not just answering questions. We build production agents with OpenAI, Gemini, LangChain, n8n, and custom APIs that integrate with your existing stack.',
    icon: 'Bot',
    features: [
      'Discovery & agent blueprint',
      'Sales & lead generation agents',
      'Customer support agents (70–80% deflection)',
      'Research & monitoring agents',
      'Operations & workflow automation',
      '30 days post-launch support',
    ],
    technologies: ['OpenAI', 'Gemini', 'LangChain', 'n8n', 'HubSpot', 'Salesforce', 'Slack', 'Notion'],
    startingPrice: 'From ₹40,000',
    deliveryTime: '2–10 weeks',
    idealFor: [
      'Teams drowning in manual prospecting and follow-up',
      'Support teams handling repetitive tier-1 tickets',
      'Founders who want competitor and market intelligence on autopilot',
      'Operations leads automating back-office workflows',
    ],
    offerings: [
      {
        title: 'Sales & Lead Generation Agents',
        description:
          'Find ideal customers, send personalised outreach, follow up automatically, and book meetings into your calendar.',
        bullets: [
          'Automated prospect research & list building',
          'Email / LinkedIn outreach sequences',
          'CRM auto-logging (HubSpot, Salesforce, Notion)',
          'Meeting booking & calendar sync',
        ],
      },
      {
        title: 'Customer Support Agents',
        description:
          'Handle tier-1 support — FAQs, order status, troubleshooting — trained on your docs and products.',
        bullets: [
          'Website, WhatsApp, or in-app deployment',
          '70–80% resolution without human input',
          'Escalation with full conversation context',
          'Volume, resolution rate & CSAT analytics',
        ],
      },
      {
        title: 'Research & Monitoring Agents',
        description:
          'Monitor competitors, scrape news, track keywords, and deliver intelligence to inbox or Slack.',
        bullets: [
          'Competitor price & content monitoring',
          'Industry news aggregation',
          'Custom alert rules',
          'Weekly digest reports',
        ],
      },
      {
        title: 'Operations & Workflow Agents',
        description: 'Automate onboarding, invoicing, form processing, and cross-tool data sync.',
        bullets: [
          'Multi-tool integrations (Notion, Slack, Google Workspace, Stripe)',
          'Human-in-the-loop for high-stakes actions',
          'n8n / Make / custom API pipelines',
          'Ongoing monitoring & maintenance',
        ],
      },
      {
        title: 'Voice AI Agents',
        description:
          'AI that answers calls, qualifies callers, and books appointments in natural voice — English, Hindi, Gujarati, and more.',
        bullets: [
          'Custom voice persona',
          'Inbound handling & qualification',
          'Call transcripts & CRM integration',
        ],
      },
    ],
    processSteps: [
      {
        title: '1. Discovery call (free)',
        description: 'We map workflows, pain points, and which processes suit an AI agent best.',
      },
      {
        title: '2. Agent blueprint',
        description: 'Logic, integrations, and decision tree — approved before development.',
      },
      {
        title: '3. Build & test',
        description: 'Most focused agents go live in 2–4 weeks.',
      },
      {
        title: '4. Deploy & handover',
        description: 'Full docs, dashboard access, and direct support line.',
      },
      {
        title: '5. Ongoing optimisation',
        description: 'Monthly monitoring and improvements as agents learn.',
      },
    ],
    pricingNotes: [
      'Starting from ₹40,000 per project',
      'Typical range: ₹40,000 (single-task) to ₹2,00,000+ (multi-agent systems)',
      'Maintenance retainers from ₹12,000/month',
    ],
    testimonials: [
      {
        quote:
          'The sales agent Nuvirexa built books 8–12 calls per week completely on its own. It paid for itself in the first month.',
        author: 'Founder, B2B SaaS startup',
      },
      {
        quote:
          'Our support agent handles 70% of tickets without any human involvement. Our team finally has time to focus on real problems.',
        author: 'Operations Lead, E-commerce brand',
      },
    ],
    faqs: [
      {
        question: 'Do I need technical knowledge to use the agent?',
        answer:
          'No. You interact via Slack, WhatsApp, a dashboard, or let it run in the background.',
      },
      {
        question: 'Which tools can the agent connect to?',
        answer:
          'Almost anything with an API — HubSpot, Salesforce, Notion, Airtable, Google Workspace, Slack, WhatsApp, Stripe, Shopify, and more.',
      },
      {
        question: 'Can I start small and scale later?',
        answer:
          'Absolutely. Most clients start with one focused agent and expand once they see results.',
      },
    ],
  },
  {
    id: 'voice-ai',
    slug: 'voice-ai-agents',
    title: 'Voice AI Agents',
    tagline: 'Your business answers every call — even at 2am, even when your team is busy.',
    shortDescription:
      'Custom AI phone agents for inbound handling, outbound follow-up, appointment reminders, and voice support — natural, human-like conversations.',
    fullDescription:
      'Unlike old IVR (“Press 1 for sales…”), our voice agents hold natural conversations, adapt to callers, and take action — booking, qualifying, routing, or escalating with full context. Every call answered. Zero missed opportunities.',
    icon: 'Mic',
    features: [
      'Inbound call handling & qualification',
      'Outbound lead follow-up within minutes',
      'Appointment reminders & rescheduling',
      'Tier-1 voice support with live handoff',
      'Multilingual (English, Hindi, Gujarati, Marathi)',
      'Call transcripts, recordings & analytics',
    ],
    technologies: [
      'OpenAI GPT-4o',
      'Gemini',
      'Deepgram',
      'ElevenLabs',
      'Twilio',
      'LiveKit',
      'n8n',
      'HubSpot',
    ],
    startingPrice: 'From ₹50,000',
    deliveryTime: '3–5 weeks',
    idealFor: [
      'Clinics, real estate, law firms, and service businesses',
      'EdTech, financial services, and B2B sales teams',
      'Healthcare, salons, coaching, and consulting practices',
      'SaaS and e-commerce with phone-based support volume',
    ],
    offerings: [
      {
        title: 'Inbound Call Handler',
        description:
          'Your AI receptionist — qualifies callers, answers FAQs, routes or books per your rules, 24/7.',
        bullets: [
          'Custom voice persona & language',
          'Calendar sync (Google Cal, Calendly, Cal.com)',
          'Unlimited concurrent calls',
        ],
      },
      {
        title: 'Outbound Lead Follow-Up Agent',
        description:
          'Calls warm leads within minutes of form fill — qualifies interest and books sales meetings.',
        bullets: [
          'CRM-triggered outbound (HubSpot, Salesforce)',
          'Personalised opening from lead data',
          'SMS follow-up if call is missed',
        ],
      },
      {
        title: 'Appointment Reminder & Confirmation',
        description: 'Reduce no-shows up to 60% with automated confirmation and rescheduling.',
        bullets: [
          '24hr & 2hr reminder calls',
          'Live slot availability for reschedules',
          'Calendar & CRM sync',
        ],
      },
      {
        title: 'Customer Support Voice Agent',
        description:
          'Order status, account questions, and troubleshooting over the phone with live agent handoff.',
        bullets: [
          'Trained on products & policies',
          'Order/account lookup via API',
          'Resolution rate dashboard',
        ],
      },
    ],
    processSteps: [
      {
        title: '1. Discovery call (free)',
        description: 'Map call flows, caller types, and required actions.',
      },
      {
        title: '2. Script & flow design',
        description: 'Every branch, fallback, and escalation path — approved before build.',
      },
      {
        title: '3. Voice & persona setup',
        description: 'Pre-built or custom voice — language, tone, and pace configured.',
      },
      {
        title: '4. Integration & testing',
        description: 'Phone number, CRM, calendar, and API connections — edge-case tested.',
      },
      {
        title: '5. Go live & optimise',
        description: 'Close monitoring for 2 weeks, then monthly transcript-based improvements.',
      },
    ],
    pricingNotes: [
      'Starter (inbound FAQ + booking): from ₹50,000',
      'Growth (inbound + outbound + CRM): from ₹1,00,000',
      'Enterprise (multi-language, multi-department): ₹2,00,000+',
      'Hosting & optimisation from ₹12,000/month',
    ],
    testimonials: [
      {
        quote:
          'Our voice agent books 15–20 appointments a week on its own. We haven\'t missed a single inbound lead since we launched it.',
        author: 'Clinic Owner, Ahmedabad',
      },
      {
        quote:
          'Follow-up calls used to take our sales team 3 hours a day. Our show rate went from 40% to 71%.',
        author: 'Sales Director, EdTech company',
      },
    ],
    faqs: [
      {
        question: 'Does it sound robotic?',
        answer:
          'No. ElevenLabs and Play.ai voices are near-indistinguishable from human — most callers don\'t realise it\'s AI.',
      },
      {
        question: 'Can it handle Indian accents and English?',
        answer: 'Yes. Speech recognition is tuned for Indian accents and local phrasing.',
      },
      {
        question: 'Do I need to change my phone number?',
        answer: 'No. We use your existing number or set up a new one seamlessly.',
      },
      {
        question: 'How quickly can it be live?',
        answer: 'Most standard voice agents are live in 3–5 weeks.',
      },
    ],
  },
  {
    id: 'aeo',
    slug: 'aeo-answer-engine-optimization',
    title: 'AEO — Answer Engine Optimization',
    tagline: 'SEO is evolving. The new game is getting your brand inside the AI answer.',
    shortDescription:
      'Structure your content and brand so ChatGPT, Gemini, Perplexity, and Copilot recommend and cite your business in AI-generated answers.',
    fullDescription:
      'Traditional SEO gets you on Google\'s first page. AEO gets you inside the answer itself — before the user clicks a link. We combine technical SEO, LLM architecture knowledge, and content strategy so AI systems recognise and recommend your brand.',
    icon: 'ScanSearch',
    features: [
      'AI visibility audit across 50+ queries',
      'Entity & authority building',
      'LLM-optimised content strategy',
      'Technical AEO (schema, llms.txt, crawlability)',
      'Monthly AI visibility reporting',
      'Competitor AI mention tracking',
    ],
    technologies: [
      'ChatGPT',
      'Google Gemini',
      'Perplexity',
      'Schema.org',
      'Google Search Console',
      'Ahrefs',
    ],
    startingPrice: 'Audit from ₹15,000',
    deliveryTime: '3–6 month compounding',
    idealFor: [
      'Brands invisible in ChatGPT, Gemini, and Perplexity today',
      'Companies ranking on Google but missing AI discovery',
      'Founders who want first-mover advantage in Indian niches',
      'Teams running SEO who need the full search visibility stack',
    ],
    offerings: [
      {
        title: 'AEO Audit & Gap Analysis',
        description:
          'Test how AI responds to queries in your niche and identify where your brand is missing.',
        bullets: [
          '50+ target query visibility tests',
          'Competitor AI mention analysis',
          'Structured data & schema audit',
          'Prioritised action plan',
        ],
      },
      {
        title: 'Entity & Authority Building',
        description: 'Build entity signals so LLMs recognise and trust your brand.',
        bullets: [
          'Knowledge Panel & Wikidata optimisation',
          'Organisation, FAQ, HowTo schema',
          'Authoritative brand mentions & directories',
        ],
      },
      {
        title: 'LLM-Optimised Content Strategy',
        description: 'Content formatted for AI citation — factual, structured, and authoritative.',
        bullets: [
          'Q&A and definitional pillar content',
          'Data-backed, citable statistics',
          '4–8 pieces/month content calendar',
        ],
      },
      {
        title: 'Technical AEO Implementation',
        description: 'Structural work for AI crawlers and knowledge graphs.',
        bullets: [
          'llms.txt setup',
          'Sitemap & AI bot crawlability',
          'Core Web Vitals & internal linking',
        ],
      },
      {
        title: 'AEO Monitoring & Reporting',
        description: 'Track AI visibility month over month as algorithms evolve.',
        bullets: [
          'Brand mention frequency in AI answers',
          'New query opportunity identification',
          'Quarterly strategy reviews',
        ],
      },
    ],
    processSteps: [
      {
        title: 'Month 1–2',
        description: 'Audit complete, entity signals established, technical fixes live.',
      },
      {
        title: 'Month 3–4',
        description: 'Brand begins appearing in AI answers for niche queries.',
      },
      {
        title: 'Month 5–6',
        description: 'Consistent citations across ChatGPT, Gemini, and Perplexity.',
      },
      {
        title: 'Month 6+',
        description: 'Organic AI-referred traffic and inbound leads increase.',
      },
    ],
    pricingNotes: [
      'AEO Audit (one-time): ₹15,000',
      'AEO Retainer: from ₹30,000/month',
      'AEO + SEO Bundle: from ₹45,000/month',
    ],
    testimonials: [
      {
        quote:
          'After 3 months, ChatGPT now recommends us by name for HR software in India. Competitors haven\'t thought about this channel yet.',
        author: 'Co-founder, HR SaaS startup',
      },
      {
        quote:
          'We ranked on Google but were invisible on AI. Nuvirexa changed that completely within one quarter.',
        author: 'Marketing Head, D2C brand',
      },
    ],
    faqs: [
      {
        question: 'Does AEO replace SEO?',
        answer:
          'No — not yet. We recommend both in parallel. Google still drives significant traffic; AI search is growing too fast to ignore.',
      },
      {
        question: 'How do you measure AEO results?',
        answer:
          'We test target queries in ChatGPT, Gemini, and Perplexity monthly and track mention frequency plus AI browser referral traffic.',
      },
      {
        question: 'How soon will I see results?',
        answer:
          'Entity and technical work shows impact in 4–8 weeks. Content-driven authority compounds over 3–6 months.',
      },
    ],
  },
]

const coreServices: Service[] = [
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

export const services: Service[] = [...aiServices, ...coreServices]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
