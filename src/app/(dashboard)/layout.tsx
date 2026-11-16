import { ReactNode } from 'react'
import { ProtectedShell } from '@/widgets/protected-shell'

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return <ProtectedShell>{children}</ProtectedShell>
}
