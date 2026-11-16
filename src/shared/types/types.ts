import { z } from 'zod'
import {
  accessTokenResponseSchema,
  apiErrorResponseSchema,
  loginResponseSchema,
  loginSchema,
  userResponseSchema,
} from '@/entities/admin/model/schemas/admin-schemas'
import { errorMessageSchema } from '@/shared/lib'

// Auth
export type AccessTokenResponse = z.infer<typeof accessTokenResponseSchema>
export type ErrorMessageResponse = z.infer<typeof errorMessageSchema>
export type ApiErrorResponse = z.infer<typeof apiErrorResponseSchema>
export type LoginRequest = z.infer<typeof loginSchema>
export type LoginResponse = z.infer<typeof loginResponseSchema>
export type UserResponse = z.infer<typeof userResponseSchema>
export type LoginErrorField = 'credentials' | 'email'
export type LoginField = keyof LoginRequest
