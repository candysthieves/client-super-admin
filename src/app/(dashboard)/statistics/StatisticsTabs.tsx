'use client'

import { Tabs } from '@candy.thieves/ui-kit-lumos'
import { useRouter } from 'next/navigation'
import s from './StatisticsTabs.module.scss'
import {
  STATISTICS_PARTS,
  STATISTICS_TAB_ICONS,
  STATISTICS_TAB_LABELS,
  type StatisticsPart,
} from './tabs'

type StatisticsTabsProps = {
  part: StatisticsPart
}

export const StatisticsTabs = ({ part }: StatisticsTabsProps) => {
  const router = useRouter()

  const tabs = STATISTICS_PARTS.map(value => {
    const IconComponent = STATISTICS_TAB_ICONS[value] // Get icon

    return {
      value,
      label: STATISTICS_TAB_LABELS[value],
      // Если иконка есть в объекте, рендерим её как JSX-компонент
      icon: IconComponent ? <IconComponent /> : null,
      content: null,
    }
  })

  const handleValueChange = (value: string) => {
    router.replace(`/statistics?part=${value}`)
  }

  return <Tabs className={s.tabs} onValueChange={handleValueChange} tabs={tabs} value={part} />
}
