"use client"

import UserInfoForm from "@/components/UserInfoForm"
import { Flex } from "@chakra-ui/react"
import { useRouter } from "next/navigation"

const ProfilePage = () => {
  const router = useRouter()
  return (
    <Flex>
      <UserInfoForm
        headingText="Edit Profile"
        submitText="Update"
        onHandleSubmitForm={() => router.push("/")}
      />
    </Flex>
  )
}

export default ProfilePage
