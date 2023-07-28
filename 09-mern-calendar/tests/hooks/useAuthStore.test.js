import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../../src/store'
import { act, renderHook, waitFor } from '@testing-library/react'
import { useAuthStore } from '../../src/Hooks'
import { Provider } from 'react-redux'
import { initialState, notAuthenticatedState } from '../fixtures/authStates'
import { testUserCredentials } from '../fixtures/testUser'
import { calendarApi } from '../../src/api'

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      auth: authSlice.reducer
    },
    preloadedState: {
      auth: { ...initialState }
    }
  })
}

describe('Tests in useAuthStore', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  test('should return default values', () => {
    const mockStore = getMockStore({ ...initialState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })
    expect(result.current).toEqual({
      // props
      status: 'checking',
      user: {},
      errorMessage: undefined,
      // methods
      startLogin: expect.any(Function),
      startRegister: expect.any(Function),
      checkAuthToken: expect.any(Function),
      startLogout: expect.any(Function)
    })
  })

  test('startLogin should login correctly', async () => {
    const mockStore = getMockStore({ ...notAuthenticatedState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })

    await act(async () => {
      await result.current.startLogin(testUserCredentials)
    })

    const { errorMessage, status, user } = result.current
    expect({ errorMessage, status, user }).toEqual({
      status: 'authenticated',
      user: { name: 'Test User', uid: expect.any(String) },
      errorMessage: undefined
    })

    expect(window.localStorage.getItem('token')).toEqual(expect.any(String))
    expect(window.localStorage.getItem('token-init-date')).toEqual(expect.any(String))
  })

  test('startLogin should fail the auth', async () => {
    const mockStore = getMockStore({ ...notAuthenticatedState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })

    await act(async () => {
      await result.current.startLogin({ email: 'fail@mail.com', password: '12398389' })
    })

    const { errorMessage, status, user } = result.current
    expect({ errorMessage, status, user }).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: expect.any(String)
    })
    expect(window.localStorage.getItem('token')).toBe(null)
    expect(window.localStorage.getItem('token-init-date')).toBe(null)
    await waitFor(() => {
      expect(result.current.errorMessage).toBe(undefined)
    })
  })

  test('startRegister should create a new user', async () => {
    const newUser = { email: 'foo@bar.com', password: '1234567', name: 'foo user' }
    const mockStore = getMockStore({ ...notAuthenticatedState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })

    const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
      data: {
        ok: true,
        uid: '123424sda332s32',
        name: 'Foo',
        token: 'someToken'
      }
    })

    await act(async () => {
      await result.current.startRegister(newUser)
    })

    const { errorMessage, status, user } = result.current
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: { name: expect.any(String), uid: expect.any(String) }
    })

    spy.mockRestore()
  })

  test('startRegister should fail', async () => {
    const mockStore = getMockStore({ ...notAuthenticatedState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })

    await act(async () => {
      await result.current.startRegister(testUserCredentials)
    })

    const { errorMessage, status, user } = result.current
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: expect.any(String),
      status: 'not-authenticated',
      user: {}
    })
  })

  test('checkAuthToken should fail if token not exist', async () => {
    const mockStore = getMockStore({ ...initialState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })

    await act(async () => {
      await result.current.checkAuthToken()
    })

    const { errorMessage, status, user } = result.current
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'not-authenticated',
      user: {}
    })
  })

  test('checkAuthToken should authenticate a user if token exist', async () => {
    const { data } = await calendarApi.post('/auth', testUserCredentials)
    window.localStorage.setItem('token', data.token)
    const mockStore = getMockStore({ ...initialState })
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })

    await act(async () => {
      await result.current.checkAuthToken()
    })
    const { errorMessage, status, user } = result.current
    expect({ errorMessage, status, user }).toEqual({
      errorMessage: undefined,
      status: 'authenticated',
      user: {
        name: expect.any(String),
        uid: expect.any(String)
      }
    })
  })
})
