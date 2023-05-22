import { renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'
import { act } from 'react-dom/test-utils'

describe('Tests in useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current
    expect(counter).toBe(10)
    expect(increment).toEqual(expect.any(Function))
    expect(decrement).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('should return the value of initialValue', () => {
    const initialValue = 100
    const { result } = renderHook(() => useCounter(initialValue))
    const { counter } = result.current
    expect(counter).toBe(100)
  })

  test('should increment the counter', () => {
    const { result } = renderHook(() => useCounter())
    const { increment } = result.current
    act(() => {
      increment()
      increment(2)
    })
    expect(result.current.counter).toBe(13)
  })

  test('should decrement the counter', () => {
    const { result } = renderHook(() => useCounter())
    const { decrement } = result.current
    act(() => {
      decrement()
      decrement(2)
    })
    expect(result.current.counter).toBe(7)
  })

  test('should reset the counter', () => {
    const { result } = renderHook(() => useCounter())
    const { decrement, increment, reset } = result.current
    act(() => {
      increment(5)
      decrement(3)
    })
    expect(result.current.counter).toBe(12)

    act(() => {
      reset()
    })

    expect(result.current.counter).toBe(10)
  })
})
