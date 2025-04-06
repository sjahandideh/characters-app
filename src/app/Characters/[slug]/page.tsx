import Character from "../components/Character"

export default async function CharacterPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params
  if (!slug) return

  return <Character id={slug} />
}
