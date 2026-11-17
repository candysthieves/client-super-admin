'use client'

import { ReactNode } from 'react'
import { QueryProviders } from '@/app/providers'
import { ToastContainer } from '@/shared/ui'

export const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProviders>
      <ToastContainer />
      {children}
    </QueryProviders>
  )
}
