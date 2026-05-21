import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ClientWidgets } from '@/components/layout/ClientWidgets'
import { PageTransition } from '@/components/layout/PageTransition'
import { Toaster } from 'react-hot-toast'
import { clashDisplay, dmSans, jetbrainsMono } from '@/lib/fonts'
import { organizationSchema } from '@/lib/metadata'
import { SITE } from '@/lib/constants'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Nuvirexa Agency — Premium Digital Growth Partner',
    template: '%s | Nuvirexa Agency',
  },
  description:
    'Nuvirexa Agency builds world-class websites, web apps, and AI solutions that help businesses grow. Premium development, design, SEO, and digital marketing.',
  keywords: [
    'web development agency',
    'UI UX design',
    'AI integration',
    'SEO agency',
    'digital marketing',
    'Next.js development',
    'branding agency',
    'Nuvirexa',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Nuvirexa Agency — Premium Digital Growth Partner',
    description: 'Transforming businesses through premium web development, AI, and digital strategy.',
    images: [{ url: '/images/og-image.svg', width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuvirexa Agency — Premium Digital Growth Partner',
    description: 'Transforming businesses through premium web development, AI, and digital strategy.',
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ClientWidgets />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#13131F',
              color: '#F8FAFC',
              border: '1px solid rgba(255,255,255,0.08)',
            },
          }}
        />
      </body>
    </html>
  )
}
