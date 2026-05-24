'use client'

import { useEffect, useState } from 'react'
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
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const enable = () => setReady(true)
    if (typeof requestIdleCallback === 'function') {
      const id = requestIdleCallback(enable, { timeout: 2000 })
      return () => cancelIdleCallback(id)
    }
    const t = setTimeout(enable, 1200)
    return () => clearTimeout(t)
  }, [])

  if (!ready) return null

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
