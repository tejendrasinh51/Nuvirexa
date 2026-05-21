'use client'

import dynamic from 'next/dynamic'
import { FEATURES } from '@/lib/constants'

const ChatbotWidget = dynamic(
  () => import('@/components/features/chatbot/ChatbotWidget').then((m) => m.ChatbotWidget),
  { ssr: false }
)

const CalInitializer = dynamic(
  () => import('@/components/features/schedule/CalInitializer').then((m) => m.CalInitializer),
  { ssr: false }
)

const CustomCursor = dynamic(
  () => import('@/components/ui/CustomCursor').then((m) => m.CustomCursor),
  { ssr: false }
)

const ScrollProgress = dynamic(
  () => import('@/components/ui/ScrollProgress').then((m) => m.ScrollProgress),
  { ssr: false }
)

const BackToTop = dynamic(
  () => import('@/components/ui/BackToTop').then((m) => m.BackToTop),
  { ssr: false }
)

export function ClientWidgets() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <BackToTop />
      <CalInitializer />
      {FEATURES.chatbot && <ChatbotWidget />}
    </>
  )
}
