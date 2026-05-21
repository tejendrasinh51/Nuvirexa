import { NextRequest, NextResponse } from 'next/server'
import { newsletterSchema } from '@/lib/validations'
import { z } from 'zod'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    newsletterSchema.parse(body)
    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
