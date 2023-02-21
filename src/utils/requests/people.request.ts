import { BASE_API_URL } from '../constants'
import { PeopleResponse } from '../types'

export const fetchPeople = async (page = 1): Promise<PeopleResponse> => {
  const res = await fetch(`${BASE_API_URL}people/?page=${page}`)
  return res.json()
}
