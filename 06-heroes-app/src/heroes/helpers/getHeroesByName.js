import { heroes } from '../data/heroes'

export const getHeroesByName = (name = '') => {
  const fixedName = name.toLowerCase().trim()
  if (fixedName.length === 0) return []
  return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
}
