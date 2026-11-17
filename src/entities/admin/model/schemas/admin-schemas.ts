import { z } from 'zod'
import { ErrorStatus } from '@/shared/api'
import {
  PASSWORD_PATTERN,
  PASSWORD_PATTERN_MESSAGE,
  USERNAME_PATTERN,
  USERNAME_PATTERN_MESSAGE,
} from '@/shared/constants'

export const usernameSchema = z
  .string()
  .min(6, 'Username must be longer than or equal to 6 characters')
  .max(30, 'Username must be shorter than or equal to 30 characters')
  .regex(USERNAME_PATTERN, USERNAME_PATTERN_MESSAGE)

export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .pipe(z.email('The email must match the format example@example.com'))

export const passwordBaseSchema = z
  .string()
  .min(6, 'Password must be longer than or equal to 6 characters')
  .max(20, 'Password must be shorter than or equal to 20 characters')

export const passwordSchema = passwordBaseSchema.regex(PASSWORD_PATTERN, PASSWORD_PATTERN_MESSAGE)

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordBaseSchema,
})

export const accessTokenResponseSchema = z.object({
  accessToken: z.string(),
})

export const loginResponseSchema = accessTokenResponseSchema

export const errorMessageSchema = z.object({
  field: z.string(),
  message: z.string(),
})

export const apiErrorResponseSchema = z.object({
  code: z.enum(ErrorStatus),
  errorsMessages: z.array(errorMessageSchema),
})

export const accountTypeSchema = z.enum(['Personal', 'Business'], {
  error: 'Please select an account type',
})

export const userResponseSchema = z.object({
  id: z.string(),
  email: emailSchema,
  username: usernameSchema,
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  isEmailConfirmed: z.boolean(),
  subscription_type: accountTypeSchema,
})
