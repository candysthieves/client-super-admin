import { CopyOutline, PersonOutline } from '@candy.thieves/ui-kit-lumos'
import { ComponentPropsWithoutRef, ComponentType } from 'react'

export const STATISTICS_PARTS = ['users', 'photos'] as const

export type StatisticsPart = (typeof STATISTICS_PARTS)[number]

export const DEFAULT_STATISTICS_PART: StatisticsPart = 'users'

export const STATISTICS_TAB_LABELS: Record<StatisticsPart, string> = {
  users: 'Users',
  photos: 'Photos',
}

type TabIconComponent = ComponentType<ComponentPropsWithoutRef<'svg'>> // или ComponentType<{}>

export const STATISTICS_TAB_ICONS: Record<StatisticsPart, TabIconComponent> = {
  users: PersonOutline,
  photos: CopyOutline,
}
