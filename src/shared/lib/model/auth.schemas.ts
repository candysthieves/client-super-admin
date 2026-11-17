import { z } from 'zod'

export const errorMessageSchema = z.object({
  field: z.string(),
  message: z.string(),
})
