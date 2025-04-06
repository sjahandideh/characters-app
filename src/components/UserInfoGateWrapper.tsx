"use client"

import { useAccess } from "./AccessWrapper"
import UserInfoForm from "./UserInfoForm"

const UserInfoGateWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isBlocked } = useAccess()

  if (isBlocked)
    return <UserInfoForm headingText="Signup to proceed" submitText="Signup" />

  return <>{children}</>
}

export default UserInfoGateWrapper
