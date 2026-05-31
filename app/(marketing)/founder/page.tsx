import { generatePageMetadata } from '@/lib/metadata'
import { FadeIn } from '@/components/animations/FadeIn'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code2, Database, LineChart, Globe, Briefcase, User, Lightbulb } from 'lucide-react'
import { SITE } from '@/lib/constants'

export const metadata = generatePageMetadata({
  title: 'Tejendrasinh Sisodia | Founder & CEO',
  description: 'Tejendrasinh Sisodia is the Founder & CEO of Nuvirexa, specializing in Web Development, AI Solutions, SEO and Digital Growth.',
  path: '/founder',
})

const skills = [
  { name: 'Next.js', icon: Globe },
  { name: 'React', icon: Code2 },
  { name: 'Node.js', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Python', icon: Code2 },
  { name: 'Data Analytics', icon: LineChart },
  { name: 'SEO', icon: Lightbulb },
]

const projects = [
  {
    name: 'Nuvirexa',
    description: 'Premium Digital Growth Partner specializing in Web Dev & AI.',
    link: '/',
  },
  {
    name: 'Portfolio',
    description: 'Personal web development and design portfolio.',
    link: '#',
  },
  {
    name: 'Analytics Portfolio',
    description: 'Data analytics projects, dashboards, and insights.',
    link: '#',
  },
]

export default function FounderPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tejendrasinh Sisodia',
    jobTitle: 'Founder & CEO',
    worksFor: {
      '@type': 'Organization',
      name: 'Nuvirexa',
    },
    url: `${SITE.url}/founder`,
    sameAs: [
      'https://linkedin.com/in/tejendrasinh',
      'https://github.com/tejendrasinh51'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Hero Section */}
          <section className="mb-24 flex flex-col md:flex-row items-center gap-12">
            <FadeIn className="flex-shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 relative">
                {/* Placeholder for founder image */}
                <div className="w-full h-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center">
                  <User size={80} className="text-white/50" />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="flex-1 text-center md:text-left">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Tejendrasinh Sisodia
              </h1>
              <h2 className="text-xl md:text-2xl text-accent-cyan font-mono mb-6">
                Founder & CEO of Nuvirexa
              </h2>
              <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
                I build digital solutions that drive growth. Specializing in high-performance web development, 
                intelligent AI integrations, and technical SEO to help businesses scale in the modern digital economy.
              </p>
            </FadeIn>
          </section>

          {/* About Section */}
          <section className="mb-24">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <Briefcase className="w-6 h-6 text-accent-cyan" />
                <h2 className="font-display text-3xl font-bold text-white">About Me</h2>
              </div>
              <div className="glass p-8 rounded-2xl border border-white/5">
                <ul className="space-y-4 text-white/80 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-cyan mt-1">▹</span>
                    <span><strong>BCA Honours Student</strong> building a strong foundation in computer science and application architecture.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-cyan mt-1">▹</span>
                    <span><strong>Full Stack Developer</strong> crafting scalable, modern web applications from frontend to database.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-cyan mt-1">▹</span>
                    <span><strong>Data Analyst</strong> extracting actionable insights from complex datasets to drive business decisions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-cyan mt-1">▹</span>
                    <span><strong>Entrepreneur</strong> passionate about building products and agencies that solve real-world problems.</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </section>

          {/* Skills Section */}
          <section className="mb-24">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <Code2 className="w-6 h-6 text-accent-cyan" />
                <h2 className="font-display text-3xl font-bold text-white">Technical Arsenal</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.name} className="flex items-center gap-2 glass px-4 py-3 rounded-xl border border-white/5 hover:border-accent-cyan/50 transition-colors">
                      <Icon className="w-5 h-5 text-accent-cyan" />
                      <span className="text-white/90 font-medium">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </FadeIn>
          </section>

          {/* Journey Section */}
          <section className="mb-24">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <LineChart className="w-6 h-6 text-accent-cyan" />
                <h2 className="font-display text-3xl font-bold text-white">The Journey</h2>
              </div>
              <div className="prose prose-invert max-w-none text-white/70 text-lg leading-relaxed">
                <p>
                  My journey in technology started with a deep curiosity about how digital systems work. Pursuing my BCA Honours gave me the academic rigor, but I quickly realized that true mastery comes from building.
                </p>
                <p>
                  I transitioned into full-stack development and data analytics, learning to not just write code, but to engineer solutions that make business sense. After working on multiple personal and client projects, I founded Nuvirexa to bring enterprise-grade web and AI solutions to ambitious businesses.
                </p>
                <p>
                  Today, I spend my time leading technical strategy at Nuvirexa, staying on the bleeding edge of Next.js and AI integrations, and ensuring every project we ship is optimized for maximum organic growth.
                </p>
              </div>
            </FadeIn>
          </section>

          {/* Projects Section */}
          <section>
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <Lightbulb className="w-6 h-6 text-accent-cyan" />
                <h2 className="font-display text-3xl font-bold text-white">Featured Projects</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Link href={project.link} key={project.name} className="group block">
                    <div className="glass p-6 rounded-2xl border border-white/5 h-full transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/30">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">{project.name}</h3>
                      <p className="text-white/60 mb-6">{project.description}</p>
                      <div className="flex items-center gap-2 text-accent-cyan text-sm font-medium mt-auto">
                        View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </section>

        </div>
      </div>
    </>
  )
}
