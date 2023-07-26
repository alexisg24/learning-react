import { authSlice, clearErrorMessage, onLogin, onLogout } from '../../../src/store/auth/authSlice'
import { authenticatedState, initialState, notAuthenticatedState } from '../../fixtures/authStates'
import { testUserCredentials } from '../../fixtures/testUser'

describe('Tests in authSlice', () => {
  test('should return default values', () => {
    const values = authSlice.getInitialState()
    expect(values).toEqual(initialState)
  })

  test('should login user', () => {
    const sliceValues = authSlice.getInitialState()
    const res = authSlice.reducer(sliceValues, onLogin(testUserCredentials))
    expect(res.status).toBe('authenticated')
    expect(res.user).toEqual(testUserCredentials)
    expect(res.errorMessage).toBeFalsy()
  })

  test('should log out user', () => {
    const res = authSlice.reducer(authenticatedState, onLogout())
    expect(res).toEqual(notAuthenticatedState)
  })

  test('should log out user with errorMessage', () => {
    const errorMessage = 'Not valid credentials'
    const res = authSlice.reducer(authenticatedState, onLogout(errorMessage))
    expect(res).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage
    })
  })

  test('should clear the errorMessage', () => {
    const errorMessage = 'Not valid credentials'
    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage))
    const newState = authSlice.reducer(state, clearErrorMessage())
    expect(newState.errorMessage).toBeFalsy()
  })
})
