import { loginResponseSchema } from '@/entities/admin/model'
import { requestValidated } from '@/shared/api'
import { LoginRequest, LoginResponse } from '@/shared/types'

export const login = (data: LoginRequest): Promise<LoginResponse> => {
  return requestValidated('/auth/login', loginResponseSchema, {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
