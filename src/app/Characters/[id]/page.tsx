import Character from "../components/Character"

export default async function CharacterPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params
  if (!id) return

  return <Character id={id} />
}
