import { NextRequest } from 'next/server'
import { getGeminiClient, SYSTEM_PROMPT } from '@/lib/gemini'
import type { ChatApiMessage } from '@/types/chat'

export async function POST(req: NextRequest) {
  try {
    const client = getGeminiClient()
    if (!client) {
      return new Response(JSON.stringify({ error: 'Chat service not configured' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const { messages } = (await req.json()) as { messages: ChatApiMessage[] }

    const stream = await client.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      max_tokens: 1024,
      stream: true,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    })

    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content
          if (text) controller.enqueue(new TextEncoder().encode(text))
        }
        controller.close()
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Groq error:', message)
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}