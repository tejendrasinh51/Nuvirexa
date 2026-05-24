export interface ServiceOffering {
  title: string
  description: string
  bullets?: string[]
}

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceTestimonial {
  quote: string
  author: string
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  features: string[]
  technologies: string[]
  startingPrice?: string
  deliveryTime?: string
  tagline?: string
  idealFor?: string[]
  offerings?: ServiceOffering[]
  processSteps?: { title: string; description: string }[]
  pricingNotes?: string[]
  testimonials?: ServiceTestimonial[]
  faqs?: ServiceFaq[]
}

export interface Project {
  id: string
  slug: string
  title: string
  client: string
  category: string
  description: string
  challenge: string
  solution: string
  results: string[]
  technologies: string[]
  images: string[]
  liveUrl?: string
  featured: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  rating: number
  service: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
  deliverables: string[]
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  readTime: string
  publishedAt: string
  featured?: boolean
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
}
