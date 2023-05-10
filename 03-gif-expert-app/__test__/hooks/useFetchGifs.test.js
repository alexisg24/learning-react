import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Tests in useFetchGifs Hook', () => {
  const category = 'One Punch'
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs(category))
    const { images, isLoading } = result.current
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('should return images array and isLoading with false value', async () => {
    const { result } = renderHook(() => useFetchGifs(category))
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))
    const { images, isLoading } = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
