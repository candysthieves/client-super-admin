'use client'

import { ReactNode, Suspense } from 'react'
import { ProtectedShellContent } from './ProtectedShellContent'

export const ProtectedShell = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={null}>
      <ProtectedShellContent>{children}</ProtectedShellContent>
    </Suspense>
  )
}
