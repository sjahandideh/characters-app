"use client"

import { GET_CHARACTER_BY_SLUG } from "@/constants/queries"
import { Episode } from "@/constants/types"
import { useQuery } from "@apollo/client"
import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react"

export default function Character({ id }: { id: string }) {
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_SLUG, {
    variables: { id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const character = data.character
  const episodes = character.episode?.map((ep: Episode) => ep.name).join(", ")

  return (
    <Flex direction={"column"} gap="5" alignItems={"start"}>
      <Box>
        <Link href="/Information">
          <Button variant="subtle">Back to all characters</Button>
        </Link>
      </Box>
      <Box>
        <Heading>Character name: {character.name}</Heading>
        <Text>Character type: {character.type}</Text>
        <Text>Episodes: {episodes}</Text>
      </Box>
      <Box>
        <Image
          key={id}
          src={character.image}
          alt={character.name}
          width={500}
          height={500}
          loading="lazy"
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Box>
    </Flex>
  )
}
