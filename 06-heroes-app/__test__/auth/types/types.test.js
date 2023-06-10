import { types } from '../../../src/auth/types/types'

describe('tests in types.js', () => {
  test('should return correct types.js', () => {
    expect(types).toEqual({
      LOGIN: '[Auth] Login',
      LOGOUT: '[Auth] Logout'
    })
  })
})
