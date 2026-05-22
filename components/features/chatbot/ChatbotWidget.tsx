'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
import type { ChatMessage } from '@/types/chat'
import { FEATURES } from '@/lib/constants'

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '0',
      role: 'assistant',
      content:
        "Hi! I'm Nuvix, Nuvirexa's AI assistant. How can I help you today? Ask me about our services, pricing, or how we can help grow your business.",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (!FEATURES.chatbot) return null

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setInput('')
    setIsLoading(true)

    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: '',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, assistantMessage])

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error((err as { error?: string }).error || 'Request failed')
      }

      if (!res.body) throw new Error('No stream')
      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantMessage.id ? { ...m, content: m.content + chunk } : m))
        )
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMessage.id
            ? { ...m, content: 'Sorry, I encountered an error. Please try again or email tejendrasinh51@gmail.com.' }
            : m
        )
      )
    } finally {
      setIsLoading(false)
    }
  }

  const toggleOpen = () => {
    setIsOpen((prev) => {
      if (!prev) setHasOpened(true)
      return !prev
    })
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 safe-bottom">
        <div className="absolute inset-0 rounded-full bg-accent-violet/30 animate-ping pointer-events-none" style={{ animationDuration: '2s' }} />
        <div className="absolute inset-0 scale-110 rounded-full border border-accent-violet/20 animate-pulse pointer-events-none" />

        <motion.button
          type="button"
          onClick={toggleOpen}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent-violet to-violet-800 flex items-center justify-center shadow-lg shadow-accent-violet/30 border border-accent-violet/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-6 h-6 text-white" />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        <AnimatePresence>
          {!hasOpened && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap glass border border-white/10 rounded-xl px-3 py-2 text-sm text-white pointer-events-none"
            >
              💬 Chat with Nuvix AI
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-24 z-50 sm:w-[380px] w-auto max-w-none h-[min(520px,calc(100dvh-6rem))] glass rounded-2xl flex flex-col shadow-2xl overflow-hidden"
            role="dialog"
            aria-label="Nuvix AI Chat"
          >
            <div className="relative p-4 border-b border-white/[0.06] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 via-transparent to-cyan-900/20" />
              <div className="relative flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center shadow-glow-violet">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-surface-2" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Nuvix AI</p>
                  <p className="text-xs text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse inline-block" />
                    Ready to help
                  </p>
                </div>
                <div className="ml-auto text-white/20 text-xs font-mono">
                  <span className="text-white/40"></span>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-accent-violet to-accent-indigo text-white rounded-br-sm'
                        : 'bg-white/[0.06] text-white/90 rounded-bl-sm'
                    }`}
                  >
                    {message.content || (isLoading && message.role === 'assistant' && <span className="animate-pulse">...</span>)}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/[0.06]">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && void sendMessage()}
                  placeholder="Ask anything..."
                  aria-label="Chat message"
                  className="form-field py-2.5 text-sm"
                />
                <button
                  type="button"
                  onClick={() => void sendMessage()}
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet to-accent-indigo flex items-center justify-center disabled:opacity-40 transition-opacity"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
