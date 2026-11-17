import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login } from '@/entities/admin/api'
import { authKeys } from '@/entities/admin/model'
import { ACCESS_TOKEN_LS_KEY } from '@/shared/constants'
import { LoginRequest } from '@/shared/types'

export function useLogin() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    meta: {
      skipGlobalError: true,
    },
    onSuccess: response => {
      localStorage.setItem(ACCESS_TOKEN_LS_KEY, response.accessToken)

      queryClient.invalidateQueries({
        queryKey: authKeys.me(),
      })
      // queryClient.removeQueries({
      //   queryKey: profileKeys.all,
      // })
    },
  })
}
