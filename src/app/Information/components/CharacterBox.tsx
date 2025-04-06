import FastImage from "@/components/ui/FastImage"
import { Character } from "@/constants/types"
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Popover,
  Portal,
} from "@chakra-ui/react"
import { FaRegEnvelopeOpen } from "react-icons/fa"

type CharacterBoxProps = {
  character: Character
}
const CharacterBox = ({ character }: CharacterBoxProps) => {
  return (
    <Popover.Root
      key={character.id}
      lazyMount
      unmountOnExit
      positioning={{ placement: "right-start" }}
    >
      <Popover.Trigger asChild>
        <Box>
          <FastImage
            id={character.id}
            src={character.image}
            alt={character.name}
            style={{ borderRadius: "15px" }}
          />
        </Box>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow />
            <Popover.Body>
              <Flex direction={"column"} gap="4">
                <Flex
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <FastImage
                    id={character.id}
                    src={character.image}
                    alt={character.name}
                    style={{ borderRadius: "50px", width: 50 }}
                  />
                  <Box>
                    <Link href={`/Characters/${character.id}`}>
                      <IconButton
                        aria-label="Open character page"
                        rounded="full"
                        size="sm"
                        variant="ghost"
                      >
                        <FaRegEnvelopeOpen />
                      </IconButton>
                    </Link>
                  </Box>
                </Flex>
                <Box>
                  <Heading>Character name: {character.name}</Heading>
                </Box>
              </Flex>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}

export default CharacterBox
