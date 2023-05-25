import { render, screen } from '@testing-library/react'
import { HomePage } from '../../src/09-useContext/HomePage'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe('Tests in <HomePage />', () => {
  const user = { id: 1, name: 'Alexis' }

  test('should render the component without the user', () => {
    const { container } = render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    )
    expect(container).toMatchSnapshot()

    const preTag = screen.getByLabelText('pre-selector')
    expect(preTag.innerHTML).toBe('null')
  })

  test('should render the component with the user', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    )
    const h1Tag = screen.getByRole('heading', { level: 1 })
    expect(h1Tag.innerHTML).toContain(user.name)
    const preTag = screen.getByLabelText('pre-selector')
    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3))
  })
})
