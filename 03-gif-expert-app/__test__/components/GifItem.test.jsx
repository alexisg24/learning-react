import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'
const props = {
  title: 'My Title',
  url: 'https://media1.giphy.com/media/hWdPJwIDnKGvSj6dAC/giphy.gif?cid=ecf05e47b167d0f998d7eb99ddc37eb339a2b96f811be067&ep=v1_gifs_gifId&rid=giphy.gif&ct=s'
}
describe('Tests in GifItem.jsx', () => {
  test('should match with the snapshot', () => {
    const { container } = render(<GifItem {...props} />)
    expect(container).toMatchSnapshot()
  })

  test('should show the img with url and alt', () => {
    render(<GifItem {...props} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(props.url)
    expect(alt).toBe(props.title)
  })

  test('Title need to be a text', () => {
    render(<GifItem {...props} />)
    expect(screen.getByText(props.title)).toBeTruthy()
  })
})
