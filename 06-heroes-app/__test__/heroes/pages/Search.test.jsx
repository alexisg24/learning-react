import { fireEvent, render, screen } from '@testing-library/react'
import { SearchPage } from '../../../src/heroes/pages/Search'
import { MemoryRouter } from 'react-router-dom'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('tests in Search', () => {
  beforeAll(jest.resetAllMocks)
  test('should return the component with default values', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot()
  })

  test('should return Batman and input of queryString', () => {
    const query = 'batman'
    render(
      <MemoryRouter initialEntries={[`/search?hero=${query}`]}>
        <SearchPage />
      </MemoryRouter>
    )
    const inputValue = screen.getByRole('textbox')
    expect(inputValue.value).toBe(query)

    const heroImg = screen.getByRole('img')
    expect(heroImg.src).toContain(query)

    expect(() => screen.getByLabelText('search-hero').toThrow()).toBeTruthy()
    expect(() => screen.getByLabelText('hero-not-found').toThrow()).toBeTruthy()
  })

  test('should return error if hero not found', () => {
    const query = '2313321'
    render(
      <MemoryRouter initialEntries={[`/search?hero=${query}`]}>
        <SearchPage />
      </MemoryRouter>
    )
    expect(screen.getByLabelText('hero-not-found')).toBeTruthy()
  })

  test('should call navigate to new screen', () => {
    const query = 'batman'
    render(
      <MemoryRouter>
        <SearchPage />
      </MemoryRouter>
    )
    const inputElement = screen.getByRole('textbox')
    fireEvent.input(inputElement, { target: { value: query } })
    const formButton = screen.getByRole('button')
    fireEvent.click(formButton)
    expect(mockedUseNavigate).toHaveBeenCalledWith(`?hero=${query}`, { replace: true })
  })
})
