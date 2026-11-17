import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { PhotosTab, UsersTab } from '@/widgets/settings-content'
import { StatisticsTabs } from './StatisticsTabs'
import { DEFAULT_STATISTICS_PART, STATISTICS_PARTS, type StatisticsPart } from './tabs'

type SearchParams = { part?: string }

type StatisticsPageProps = {
  searchParams: Promise<SearchParams> | SearchParams
}

const CONTENT: Record<StatisticsPart, ReactNode> = {
  users: <UsersTab />,
  photos: <PhotosTab />,
}

export default async function StatisticsPage({ searchParams }: StatisticsPageProps) {
  const { part } = await searchParams

  const isStatisticsPart = (value: string | undefined): value is StatisticsPart =>
    !!value && STATISTICS_PARTS.includes(value as StatisticsPart)

  if (!isStatisticsPart(part)) {
    redirect(`/statistics?part=${DEFAULT_STATISTICS_PART}`)
  }

  return (
    <main>
      <StatisticsTabs part={part} />
      <div>{CONTENT[part]}</div>
    </main>
  )
}
