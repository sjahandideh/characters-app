"use client"

import { Box, Heading, IconButton, Link } from "@chakra-ui/react"
import { FaEdit } from "react-icons/fa"
import { useUserInfo } from "../UserInfoWrapper"

const MainSidebar = () => {
  const { userInfo } = useUserInfo()

  return (
    <>
      <Heading>Characters of Rick and Morty</Heading>
      <Box marginTop="1rem" display="flex" alignItems="center">
        <Link href="/Profile">
          <IconButton
            marginRight="5px"
            aria-label="Edit User Info"
            rounded="full"
            size="md"
            variant="ghost"
          >
            <FaEdit />
          </IconButton>
        </Link>
        <Heading size="md" display="inline">
          {userInfo.username}
        </Heading>
      </Box>
    </>
  )
}

export default MainSidebar
