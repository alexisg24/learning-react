import { render } from '@testing-library/react'
import { FirstApp } from '../FirstApp'

describe('Tests in <FirstApp />', () => {
  // test('Needs to match with the snapshot', () => {
  //   const title = 'Hola, soy Goku'
  //   const { container } = render(<FirstApp title={title} />)
  //   expect(container).toMatchSnapshot()
  // })

  test('Needs to show title in h1', () => {
    const title = 'Hola, soy Goku'
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
    expect(getByText(title)).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toContain(title)
    expect(getByTestId('test-title').innerHTML).toContain(title)
  })

  test('needs to show subTitle by props', () => {
    const title = 'Hola, soy Goku'
    const subTitle = 'This is a subTitle'
    const { getAllByText } = render(
      <FirstApp
        title={title}
        subTitle={subTitle}
      />
    )
    expect(getAllByText(subTitle).length).toBe(2)
  })
})
