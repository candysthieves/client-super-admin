import type { z } from 'zod'
import { ResponseValidationError } from '@/shared/api'

export const validateResponse = <S extends z.ZodTypeAny>(
  url: string,
  schema: S,
  response: unknown
): z.infer<S> => {
  const result = schema.safeParse(response)

  if (!result.success) {
    throw new ResponseValidationError(url, result.error.issues, response)
  }

  return result.data
}
