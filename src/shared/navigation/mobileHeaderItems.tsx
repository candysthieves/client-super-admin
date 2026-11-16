import type { ReactNode } from 'react'
import { LogOutOutline } from '@candy.thieves/ui-kit-lumos'

type NavigationItem = {
  id: string
  label: string
  href?: ((userId: string) => string) | string
  icon: ReactNode
  activeIcon: ReactNode
}

export const mobileHeaderItems: NavigationItem[] = [
  {
    activeIcon: <LogOutOutline />,
    icon: <LogOutOutline />,
    id: 'logOut',
    label: 'Log Out',
  },
]
