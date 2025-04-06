import { gql } from "@apollo/client"

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page, filter: { name: "rick" }) {
      info {
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`

export const GET_CHARACTER_BY_SLUG = gql`
  query GetCharacterBySlug($id: ID!) {
    character(id: $id) {
      id
      name
      image
      type
      episode {
        id
        name
      }
    }
  }
`
