import { render, screen } from '@testing-library/react'
import { FirstApp } from '../FirstApp'

describe('Tests in <FirstApp />', () => {
  const title = 'Hola soy goku'
  const subtitle = 'Este es un subtitulo'

  test('Needs to match with snapshot', () => {
    const { container } = render(<FirstApp title={title} />)
    expect(container).toMatchSnapshot()
  })

  test('Needs to show the exact title', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByText(title)).toBeTruthy()
  })

  test('Needs to show the title in h1', () => {
    render(<FirstApp title={title} />)
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
  })

  test('Needs to show the subtitle title used in props', () => {
    render(<FirstApp title={title} subTitle={subtitle} />)
    expect(screen.getAllByText(subtitle).length).toBe(2)
  })
})
