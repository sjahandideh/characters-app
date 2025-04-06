"use client"

import { useCharactersPagination } from "@/hooks/useCharactersPagination"
import {
  Alert,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Spinner,
} from "@chakra-ui/react"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"
import CharacterBox from "./components/CharacterBox"
import { Character } from "@/constants/types"

const Information = () => {
  const {
    characters,
    loading,
    error,
    loadNextPage,
    loadPrevPage,
    hasNextPage,
    hasPrevPage,
  } = useCharactersPagination()

  return (
    <Grid gap="1rem" justifyItems="center">
      <GridItem>
        <IconButton
          aria-label="Previous page"
          onClick={loadPrevPage}
          disabled={!hasPrevPage}
        >
          <FaChevronCircleLeft />
        </IconButton>{" "}
        <IconButton
          aria-label="Next page"
          onClick={loadNextPage}
          disabled={!hasNextPage}
        >
          <FaChevronCircleRight />
        </IconButton>
      </GridItem>
      <GridItem>
        {error && !loading && (
          <Alert.Root status="error" title="error">
            <Alert.Indicator />
            <Alert.Title>Oops! There was an issue loading images.</Alert.Title>
          </Alert.Root>
        )}
        {loading && (
          <Spinner size="lg" color="colorPalette.600" colorPalette="yellow" />
        )}
        {!loading && !error && (
          <Flex gap="4" wrap="wrap" justifyContent="center">
            {characters.map((ch: Character, index: number) => (
              <CharacterBox key={`${index}-${ch.id}`} character={ch} />
            ))}
          </Flex>
        )}
      </GridItem>
    </Grid>
  )
}

export default Information
