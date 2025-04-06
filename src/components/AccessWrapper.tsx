"use client"

import { createContext, useContext, useEffect, useState } from "react"

const AccessContext = createContext<{
  isBlocked: boolean
  grantAccess: () => void
}>({
  isBlocked: true,
  grantAccess: () => {},
})

export function AccessWrapper({ children }: { children: React.ReactNode }) {
  const [isBlocked, setIsBlocked] = useState<boolean>(false)

  useEffect(() => {
    // -- this is to make sure sessionStorage is available
    const isAccessGranted = sessionStorage?.getItem("access_granted") !== "yes"
    setIsBlocked(isAccessGranted)
  }, [])

  const grantAccess = () => {
    sessionStorage?.setItem("access_granted", "yes")
    setIsBlocked(false)
  }

  return (
    <AccessContext.Provider value={{ isBlocked, grantAccess }}>
      {children}
    </AccessContext.Provider>
  )
}

export const useAccess = () => useContext(AccessContext)
