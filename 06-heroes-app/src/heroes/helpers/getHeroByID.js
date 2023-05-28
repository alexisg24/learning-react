import { heroes } from '../data/heroes'
export const getHeroByID = (id) => heroes.find(hero => hero.id === id)
