import { getHeroeById } from './08-imp-exp.js'
export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id)
      return p1 ? resolve(p1) : reject(new Error('No se pudo encontrar el héroe'))
    }, 1000)
  })
}
