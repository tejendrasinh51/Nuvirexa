export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export interface ChatApiMessage {
  role: 'user' | 'assistant'
  content: string
}
