'use client'

import { accountTypeSchema, emailSchema, useAuthMe, usernameSchema } from '@/entities/admin/model'
import { UserResponse } from '@/shared/types'

type UseAuthReturn = {
  user: null | UserResponse
  isLoading: boolean
  isAuthenticated: boolean
  isHydrated: boolean
}

export function useAuth(): UseAuthReturn {
  const { data: user = null, isLoading, isHydrated } = useAuthMe()

  // return {
  //   user,
  //   isLoading,
  //   isAuthenticated: !!user,
  //   isHydrated,
  //   // isAuthenticated: true,
  // }
  // TODO Temporary solution starts:
  return {
    user: {
      id: '1234',
      email: '1234@test.com',
      username: '1234_User',
      firstName: '1234',
      lastName: '1234',
      isEmailConfirmed: true,
      subscription_type: 'Personal',
    },
    isLoading: false,
    isAuthenticated: true,
    isHydrated: true,
  }
  // TODO Temporary solution ends
}
