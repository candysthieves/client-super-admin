import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logout } from '@/entities/admin/api'
import { authKeys } from '@/entities/admin/model'
import { ACCESS_TOKEN_LS_KEY } from '@/shared/constants'

export function useLogout() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logout,
    meta: {
      skipGlobalError: true,
    },
    // или возможно onSuccess
    onSettled: () => {
      localStorage.removeItem(ACCESS_TOKEN_LS_KEY)

      queryClient.setQueryData(authKeys.me(), null)
      queryClient.removeQueries({ queryKey: authKeys.me() })
      // add private profile later// check if needed
      queryClient.invalidateQueries({ queryKey: authKeys.me() }) // TODO check if needed
    },
  })
}
