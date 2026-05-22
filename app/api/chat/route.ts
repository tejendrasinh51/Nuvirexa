import { NextRequest } from 'next/server'
import { getGeminiClient, SYSTEM_PROMPT } from '@/lib/gemini'
import type { ChatApiMessage } from '@/types/chat'

export async function POST(req: NextRequest) {
  try {
    const genAI = getGeminiClient()
    if (!genAI) {
      return new Response(JSON.stringify({ error: 'Chat service not configured' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const { messages } = (await req.json()) as { messages: ChatApiMessage[] }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: SYSTEM_PROMPT,
    })

    // Gemini requires history to start with a 'user' message — strip leading assistant messages
    const history = messages.slice(0, -1)
    const firstUserIdx = history.findIndex((m) => m.role === 'user')
    const chat = model.startChat({
      history: (firstUserIdx === -1 ? [] : history.slice(firstUserIdx)).map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      })),
    })

    const lastMessage = messages[messages.length - 1]?.content
    if (!lastMessage) {
      return new Response(JSON.stringify({ error: 'No message provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const result = await chat.sendMessageStream(lastMessage)

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const text = chunk.text()
          if (text) controller.enqueue(new TextEncoder().encode(text))
        }
        controller.close()
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Gemini error:', message)
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}