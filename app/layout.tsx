import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ClientWidgets } from '@/components/layout/ClientWidgets'
import { NavigationProgress } from '@/components/layout/NavigationProgress'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { Toaster } from 'react-hot-toast'
import { GoogleAnalytics } from '@next/third-parties/google'
import { clashDisplay, dmSans, jetbrainsMono } from '@/lib/fonts'
import { organizationSchema, websiteSchema, localBusinessSchema, founderSchema } from '@/lib/metadata'
import { SITE } from '@/lib/constants'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  verification: {
    google: '0mBpKdCUxN6qwC-ZJBZ_OFg9NrJIFs9FwNXrSNV2orQ',
  },
  title: {
    default: 'Nuvirexa — Premium Digital Growth Partner | AI, Web & AEO Agency India',
    template: '%s | Nuvirexa',
  },
  description:
    "Nuvirexa is India's premium digital growth agency. We build AI-powered SaaS, Voice AI agents, stunning Next.js websites, and deliver Answer Engine Optimization (AEO) for ambitious businesses across India.",
  keywords: [
    'digital agency india',
    'ai development company',
    'aeo agency',
    'answer engine optimization',
    'voice ai agents',
    'saas development india',
    'nextjs development company',
    'web development agency',
    'ui ux design agency',
    'Nuvirexa',
    'Tejendrasinh Sisodia',
  ],
  authors: [{ name: SITE.founder, url: `${SITE.url}/founder` }],
  creator: SITE.founder,
  publisher: SITE.shortName,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: SITE.url,
    languages: {
      'en-IN': SITE.url,
      'x-default': SITE.url,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.shortName,
    title: 'Nuvirexa — Premium Digital Growth Partner | AI, Web & AEO Agency India',
    description:
      "India's premium digital growth agency. AI development, AEO, Voice AI agents, SaaS/MVP builds, UI/UX, and brand strategy for ambitious businesses across India.",
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'Nuvirexa Agency' }],
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nuvirexa',
    creator: '@tejendrasinh51',
    title: 'Nuvirexa — Premium Digital Growth Partner',
    description:
      "India's premier digital growth agency — AI, AEO, Voice AI, Web Development. Serving ambitious businesses across India.",
    images: ['/images/og-image.png'],
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
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': SITE.themeColor,
    'msapplication-TileColor': SITE.themeColor,
  },
  category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://api.cal.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <NavigationProgress />
        <ScrollToTop />
        <Navbar />
        <main id="main-content">{children}</main>
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
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  )
}
