import { act, renderHook } from '@testing-library/react'
import { Provider } from 'react-redux'
import { useUiStore } from '../../src/Hooks'
import { uiSlice } from '../../src/store'
import { configureStore } from '@reduxjs/toolkit'

const getMockStore = (initialState) => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer
    },
    preloadedState: {
      ui: { ...initialState }
    }
  })
}

describe('Tests in useUiStore', () => {
  test('should return defauilt values', () => {
    const mockStore = getMockStore({ isDateModalOpen: false })
    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })
    expect(result.current).toEqual({
      isDateModalOpen: false,
      openDateModal: expect.any(Function),
      closeDateModal: expect.any(Function)
    })
  })

  test('openDateModal should set isDateModalOpen to true', () => {
    const mockStore = getMockStore({ isDateModalOpen: false })
    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })
    const { openDateModal } = result.current
    act(() => {
      openDateModal()
    })
    expect(result.current.isDateModalOpen).toBeTruthy()
  })

  test('closeDateModal should set isDateModalOpen to false', () => {
    const mockStore = getMockStore({ isDateModalOpen: true })
    const { result } = renderHook(() => useUiStore(), {
      wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
    })
    const { closeDateModal } = result.current
    act(() => {
      closeDateModal()
    })
    expect(result.current.isDateModalOpen).toBeFalsy()
  })
})
