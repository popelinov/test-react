export interface Person {
  name: string
  height: string
  mass: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}

export interface PeopleResponse {
  count: number
  next: string | null
  previous: string | null
  results: Person[]
}
