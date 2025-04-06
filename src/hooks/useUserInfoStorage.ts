"use client"

type User = {
  username: string
  jobTitle: string
}

const EMPTY_USER = {
  username: "",
  jobTitle: "",
}

export const useUserInfoStorage = () => {
  const loadUserInfo = (): User => {
    if (typeof sessionStorage === "undefined") return EMPTY_USER

    const data = sessionStorage.getItem("user")
    if (!data) return EMPTY_USER

    return JSON.parse(data)
  }

  const saveUserInfo = (formData: { username: string; jobTitle: string }) => {
    // -- can be in useEffect
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        username: formData.username,
        jobTitle: formData.jobTitle,
      })
    )

    sessionStorage.setItem("access_granted", "yes")
  }

  return {
    saveUserInfo,
    loadUserInfo,
  }
}
