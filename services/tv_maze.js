import fetch from 'isomorphic-unfetch'

const BASE_URL = 'https://api.tvmaze.com'

export const searchShows = async query => {
  const res = await fetch(`${BASE_URL}/search/shows?q=${query}`)
  return await res.json()
}

export const getShowById = async id => {
  const res = await fetch(`${BASE_URL}/shows/${id}`)
  return await res.json()
}
