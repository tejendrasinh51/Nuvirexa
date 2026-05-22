import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validations'
import { z } from 'zod'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    const apiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL

    if (!apiKey || !contactEmail) {
      return NextResponse.json(
        { success: true, message: 'Message received. We will get back to you soon.' },
        { status: 200 }
      )
    }

    const resend = new Resend(apiKey)
    await resend.emails.send({
      from: "Nuvirexa <onboarding@resend.dev>",
      to: contactEmail,
      subject: `New Contact: ${data.name} — ${data.service || 'General Inquiry'}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || 'N/A'}\nService: ${data.service || 'N/A'}\nBudget: ${data.budget || 'N/A'}\n\nMessage:\n${data.message}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
