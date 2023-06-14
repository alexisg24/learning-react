import { fireEvent, render, screen } from '@testing-library/react'
import { AuthContext } from '../../../src/auth'
import { Navbar } from '../../../src/heroes/components/NavBar'
import { MemoryRouter } from 'react-router-dom'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('tests in Navbar', () => {
  const contextValue = {
    logged: true,
    user: {
      name: 'Alexis',
      id: 1
    },
    logout: jest.fn()
  }

  beforeAll(() => jest.clearAllMocks())
  test('should return logged user name', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText(contextValue.user.name)).toBeTruthy()
  })

  test('should call logout and navigate whenn user clicks on logout button', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    const logoutBtn = screen.getByText('Logout')
    fireEvent.click(logoutBtn)
    expect(contextValue.logout).toHaveBeenCalled()
    expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true })
  })
})
