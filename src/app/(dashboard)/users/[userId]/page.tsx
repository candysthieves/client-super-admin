type Params = { userId: string }

type ProfilePageProps = {
  params: Params | Promise<Params>
}

export default async function UserProfile({ params }: ProfilePageProps) {
  const { userId } = await params

  return <div>{`User: ${userId}`}</div>
}
