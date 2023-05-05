import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas'

describe('Tests in 09-promesas.test', () => {
  test('getHeroeByIdAsync needs to return a hero', (done) => {
    const id = 1
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
        done()
      }).catch(error => {
        expect(error).toBeFalsy()
        done()
      })
  })

  test('getHeroeByIdAsync needs to return an error', (done) => {
    const id = 100
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBeFalsy()
        done()
      }).catch(error => {
        expect(error).toBeTruthy()
        done()
      })
  })
})
