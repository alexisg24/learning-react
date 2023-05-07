import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp'

describe('Testing in 08-imp-exp.test', () => {
  test('getHeroByID needs to return a hero by id', () => {
    const id = 1
    const hero = getHeroeById(id)
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
  })

  test('getHeroByID needs to return a undefined if not exist', () => {
    const id = 100
    const hero = getHeroeById(id)
    expect(hero).toBeFalsy()
  })

  test('Task 1, return an array with DC or Marvel Heroes', () => {
    const testLab = (company) => {
      return getHeroesByOwner(company)
    }

    expect(testLab('DC').length).toBe(3)
    // expect(testLab('Marvel').length).toBe(2)
  })
})
