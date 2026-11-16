import { ErrorStatus } from '@/shared/api'
import { isErrorResponse } from '@/shared/lib/utils/isErrorResponse'
import { ApiErrorResponse } from '@/shared/types'

export function isAccessTokenError(value: unknown): value is ApiErrorResponse {
  if (!isErrorResponse(value)) {
    return false
  }

  return (
    value.code === ErrorStatus.AccessTokenInvalid || value.code === ErrorStatus.AccessTokenExpired
  )
}

export function isSessionAuthError(value: unknown): value is ApiErrorResponse {
  if (!isErrorResponse(value)) {
    return false
  }

  return [
    ErrorStatus.RefreshTokenInvalid,
    ErrorStatus.RefreshTokenMissing,
    ErrorStatus.RefreshTokenExpired,
    ErrorStatus.SessionNotFound,
    ErrorStatus.SessionUserMismatch,
    ErrorStatus.SessionAccessForbidden,
  ].includes(value.code)
}
