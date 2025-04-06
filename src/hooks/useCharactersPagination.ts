import { GET_CHARACTERS } from "@/constants/queries"
import { useQuery } from "@apollo/client"
import { useState } from "react"

export const useCharactersPagination = (startPage: number = 1) => {
  const [page, setPage] = useState<number>(startPage)

  const { data, loading, error, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page },
    notifyOnNetworkStatusChange: true,
  })

  const nextPage = data?.characters?.info.next
  const prevPage = data?.characters?.info.prev

  const loadNextPage = () => {
    if (!nextPage) return

    setPage(nextPage)
    fetchMore({ variables: { page: data?.characters?.info.next } })
  }

  const loadPrevPage = () => {
    if (!prevPage) return

    setPage(prevPage)
    fetchMore({ variables: { page: prevPage } })
  }

  return {
    characters: data?.characters?.results || [],
    loading,
    error,
    loadNextPage,
    loadPrevPage,
    hasNextPage: !!nextPage,
    hasPrevPage: !!prevPage,
  }
}
