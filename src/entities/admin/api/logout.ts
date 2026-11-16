import { request } from '@/shared/api'

export const logout = () =>
  request<void>('/auth/logout', {
    method: 'POST',
  })
