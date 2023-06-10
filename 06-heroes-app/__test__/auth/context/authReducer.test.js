import { authReducer } from '../../../src/auth/context/authReducer'
import { types } from '../../../src/auth/types/types'

describe('Tests in authReducer', () => {
  const initialState = { logged: false, user: null }

  test('should return initial state', () => {
    const reducerValue = authReducer(initialState)
    expect(reducerValue).toBe(initialState)
  })

  test('should login user', () => {
    const action = {
      type: types.LOGIN,
      payload: { id: 1, name: 'Alexis' }
    }
    const reducerValue = authReducer(initialState, action)
    expect(reducerValue).toEqual({ logged: true, user: action.payload })
  })

  test('should logout user', () => {
    const loggedState = { logged: true, user: { id: 1, name: 'Alexis' } }
    const action = {
      type: types.LOGOUT
    }
    const reducerValue = authReducer(loggedState, action)
    expect(reducerValue).toEqual({ logged: false, user: null })
  })
})
