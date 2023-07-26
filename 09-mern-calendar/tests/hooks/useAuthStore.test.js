import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../../src/store'
import { renderHook } from '@testing-library/react'
import { useAuthStore } from '../../src/Hooks'
import { Provider } from 'react-redux'
import { initialState } from '../fixtures/authStates'

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
  test('should return defauilt values', () => {
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
})
