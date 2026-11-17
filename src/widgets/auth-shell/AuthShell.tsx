'use client'

import { Suspense, ReactNode } from 'react'
import { useAuth } from '@/features/auth/model/hooks'
import { AppHeader, GlobalLoader } from '@/shared/ui'
import s from './AuthShell.module.scss'
import { AuthShellContent } from './AuthShellContent'

export function AuthShell({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading, isHydrated } = useAuth()

  /**
   * Server cannot read localStorage, so auth state is unknown during SSR and
   * the first client render. Until it is resolved we render children as-is,
   * otherwise the whole page would be replaced by a loading stub and SSR HTML would be lost.
   */
  const isSessionResolved = isHydrated && !isLoading
  // if (!isHydrated || isLoading) return <GlobalSpinner />

  return (
    <>
      <div className={s.headerWrapper}>
        {isSessionResolved ? <AppHeader /> : <div className={s.headerPlaceholder} />}
        <GlobalLoader />
      </div>

      <div className={s.layout}>
        {isSessionResolved && isAuthenticated ? (
          <Suspense fallback={null}>
            <AuthShellContent>{children}</AuthShellContent>
          </Suspense>
        ) : (
          'children'
        )}
      </div>
    </>
  )
}
