import type { z } from 'zod'
import { request, validateResponse } from '@/shared/api'

export const requestValidated = async <S extends z.ZodTypeAny>(
  url: string,
  schema: S,
  init?: RequestInit
): Promise<z.infer<S>> => validateResponse(url, schema, await request<unknown>(url, init))
