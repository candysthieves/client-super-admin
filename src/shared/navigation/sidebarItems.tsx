import {
  Bookmark,
  BookmarkOutline,
  CreditCardOutline,
  Home,
  HomeOutline,
  ImageOutline,
  MessageCircle,
  MessageCircleOutline,
  Person,
  PersonOutline,
  PlusSquare,
  PlusSquareOutline,
  Search,
  SearchOutline,
  SidebarItem,
  TrendingUp,
  TrendingUpOutline,
} from '@candy.thieves/ui-kit-lumos'

export const sidebarItems: SidebarItem[] = [
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
