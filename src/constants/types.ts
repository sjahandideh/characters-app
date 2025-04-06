export type Character = {
  id: string
  name: string
  image: string
  type?: string
  episode: Episode
}

export type Episode = {
  id: string
  name: string
}
