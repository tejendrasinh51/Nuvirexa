import { DM_Sans, JetBrains_Mono, Sora } from 'next/font/google'

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const clashDisplay = Sora({
  subsets: ['latin'],
  variable: '--font-clash',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})
