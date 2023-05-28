import { heroes } from '../data/heroes'

const getHeroesByPublisher = (publisher) => {
  const res = heroes.filter(hero => hero.publisher === publisher)
  if (res.length <= 0) throw new Error(`Invalid publisher ${publisher}`)
  return res
}

export { getHeroesByPublisher }
