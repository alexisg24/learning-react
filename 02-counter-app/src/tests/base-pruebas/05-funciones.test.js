import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe('Pruebas en 05-funciones', () => {
  test('getUser needs to return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }
    const user = getUser()

    expect(testUser).toEqual(user)
  })

  test('getUsuarioActivo debe retornar un objeto', () => {
    const name = 'Alexis'
    const activeUser = getUsuarioActivo(name)
    expect(activeUser).toStrictEqual({ uid: 'ABC567', username: name })
  })
})
