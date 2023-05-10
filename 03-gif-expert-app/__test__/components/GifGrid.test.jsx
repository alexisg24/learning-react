import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'
jest.mock('../../src/hooks/useFetchGifs')

describe('Tests in <GifGrid />', () => {
  const category = 'One Punch'
  test('Loading shold be rendered in first load', () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true })
    render(<GifGrid category={category} />)
    expect(screen.getByText('Loading...')).toBeTruthy()
    expect(screen.getByText(category)).toBeTruthy()
  })

  test('<GifGrid /> needs to show items when useFetchGifs load', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Saitama',
        url: 'http://example.com'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'http://example2.com'
      }
    ]
    useFetchGifs.mockReturnValue({ images: gifs, isLoading: false })
    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
