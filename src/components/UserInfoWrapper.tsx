// context/AccessContext.tsx
"use client"

import { useUserInfoStorage } from "@/hooks/useUserInfoStorage"
import { createContext, useContext, useEffect, useState } from "react"

type UserInfo = {
  username: string
  jobTitle: string
}
const UserInfoContext = createContext<{
  userInfo: UserInfo
  setUserInfo: (user: UserInfo) => void
}>({
  userInfo: { username: "", jobTitle: "" },
  setUserInfo: ({}) => {},
})

export function UserInfoWrapper({ children }: { children: React.ReactNode }) {
  const { loadUserInfo } = useUserInfoStorage()
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    jobTitle: "",
  })

  useEffect(() => {
    setUserInfo(loadUserInfo)
  }, [])

  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  )
}

export const useUserInfo = () => useContext(UserInfoContext)
