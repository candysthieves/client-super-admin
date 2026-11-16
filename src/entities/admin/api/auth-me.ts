import { userResponseSchema } from '@/entities/admin/model/schemas/admin-schemas'
import { requestValidated } from '@/shared/api'
import { UserResponse } from '@/shared/types'

// method: 'GET'
export const authMe = (): Promise<UserResponse> => requestValidated('/auth/me', userResponseSchema)
