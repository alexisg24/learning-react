import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth/authSlice'
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from '../../fixtures/authFixtures'

describe('Tests in authSlice', () => {
  test('should return initialState and named auth', () => {
    expect(authSlice.name).toBe('auth')
    const state = authSlice.reducer(initialState, {})
    expect(state).toEqual(initialState)
  })

  test('should authenticate', () => {
    const state = authSlice.reducer(initialState, login(demoUser))
    expect(state).toEqual({
      status: 'authenticated', // checking, authenticated
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null
    })
  })

  test('should logout', () => {
    const state = authSlice.reducer(authenticatedState, logout())
    expect(state).toEqual(notAuthenticatedState)
  })

  test('should logout with errorMessage', () => {
    const errorMsg = 'Session Expired'
    const state = authSlice.reducer(authenticatedState, logout({ errorMessage: errorMsg }))
    expect(state).toEqual({
      status: 'not-authenticated', // checking, authenticated
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMsg
    })
  })

  test('should change checking state', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials())
    expect(state.status).toBe('checking')
  })
})
