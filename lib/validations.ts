import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10).max(2000),
  budget: z.string().optional(),
})

export const newsletterSchema = z.object({
  email: z.string().email(),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type NewsletterFormData = z.infer<typeof newsletterSchema>
