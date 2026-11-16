import type { ReactNode } from 'react'
import { CreditCardOutline, ImageOutline, Person, TrendingUp } from '@candy.thieves/ui-kit-lumos'

type NavigationItem = {
  id: string
  label: string
  href?: ((userId: string) => string) | string
  icon: ReactNode
  activeIcon: ReactNode
}

export const mobileMenuItems: NavigationItem[] = [
  {
    activeIcon: <Person />,
    href: '/users',
    icon: <Person />,
    id: 'users list',
    label: 'Users list',
  },
  {
    activeIcon: <TrendingUp />,
    href: '/statistics',
    icon: <TrendingUp />,
    id: 'statistics',
    label: 'Statistics',
  },

  {
    activeIcon: <CreditCardOutline />,
    href: '/payments',
    icon: <CreditCardOutline />,
    id: 'payments list',
    label: 'Payments list',
  },
  {
    activeIcon: <ImageOutline />,
    href: '/posts',
    icon: <ImageOutline />,
    id: 'posts list',
    label: 'Posts list',
  },
]
