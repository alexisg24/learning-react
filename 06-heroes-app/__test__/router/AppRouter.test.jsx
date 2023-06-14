import { render, screen } from '@testing-library/react'
import { AppRouter } from '../../src/router/AppRouter'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'

describe('tests in AppRouter', () => {
  test('should return login if user is not authenticated', () => {
    const contextValue = {
      logged: false
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('LoginPage')).toBeTruthy()
  })

  test('should return marvel component if user is authenticated', () => {
    const contextValue = {
      logged: true,
      user: { id: 1, name: 'Alexis' }
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)
  })
})
