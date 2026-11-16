import { LoginErrorField, LoginField } from '@/shared/types'

export const APP_NAME = 'LumosSuperAdmin'
export const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL
export const USERNAME_PATTERN = /^[A-Za-z0-9_-]+$/
export const USERNAME_PATTERN_MESSAGE =
  'Username may only include letters, numbers, underscores, and hyphens'

export const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_{|}~]+$/

export const PASSWORD_PATTERN_MESSAGE = `Password must contain at least one uppercase / lowercase letter, one digit and may have one special character`

export const VALID_LOGIN_FIELDS: LoginField[] = ['email', 'password'] as const
export const VALID_LOGIN_ERROR_FIELDS: LoginErrorField[] = ['email', 'credentials'] as const

export const ACCESS_TOKEN_LS_KEY = 'accessToken'

export const SIGN_IN_SUCCESS_TITLE = 'Welcome to Lumos SuperAdmin!'
export const SIGN_IN_SUCCESS_MESSAGE = 'Authentication Successful'
