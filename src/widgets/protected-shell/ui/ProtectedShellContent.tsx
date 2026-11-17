'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useAuth } from '@/features/auth/model/hooks'
import s from './ProtectedShellContent.module.scss'

export const ProtectedShellContent = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const router = useRouter()
  // TODO Temporary solution starts:
  // const { isAuthenticated, isLoading, isHydrated } = useAuth() // uncomment
  const isHydrated = true // comment
  const isAuthenticated = true // comment
  const isLoading = false // comment
  // TODO Temporary solution ends

  const isPublicRoute = pathname === '/'

  useEffect(() => {
    if (isHydrated && !isLoading && !isAuthenticated && !isPublicRoute) {
      router.replace('/')
    }
  }, [isAuthenticated, isHydrated, isLoading, isPublicRoute, router])

  if (!isHydrated || isLoading || (!isAuthenticated && !isPublicRoute)) {
    return <div>Loading....</div> // change Loading... later
  }

  return <main className={s.content}>{children}</main>
}
