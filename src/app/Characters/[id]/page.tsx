import Character from "../components/Character"

const CharacterPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params

  return <Character id={id} />
}

export default CharacterPage
