export const SITE = {
  name: 'Nuvirexa Agency',
  shortName: 'Nuvirexa',
  tagline: 'Premium Digital Growth Partner',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nuvirexa.tech',
  email: 'tejendrasinh51@gmail.com',
  founder: 'Tejendrasinh Sisodia',
  founderAvatar: '/images/founder/tejendrasinh.png',
  founderHandle: 'tejendrasinh',
  profileCardIcon: '/images/profile/icon-pattern.png',
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || 'nuvirexa/discovery-call',
  locale: 'en_US',
  themeColor: '#0A0A14',
  address: {
    locality: 'Gujarat',
    country: 'India',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/nuvirexa',
    twitter: 'https://x.com/nuvirexa',
    github: 'https://github.com/tejendrasinh51',
    instagram: 'https://instagram.com/nuvirexa',
  },
} as const

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tejendrasinh-sisodia-243a5a293/' },
  { label: 'X', href: 'https://x.com/tejendrasinh51' },
  { label: 'Instagram', href: 'https://instagram.com/tejendrasinhsisodia' },
  { label: 'GitHub', href: 'https://github.com/tejendrasinh51' },
] as const

export const FEATURES = {
  chatbot: process.env.NEXT_PUBLIC_ENABLE_CHATBOT !== 'false',
  blog: process.env.NEXT_PUBLIC_ENABLE_BLOG !== 'false',
} as const
