"use client"

import { ReactNode } from "react"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { RICK_AND_MORTY_GQL_URL } from "@/constants/urls"

const client = new ApolloClient({
  uri: RICK_AND_MORTY_GQL_URL,
  cache: new InMemoryCache(),
})

export default function ApolloWrapper({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
