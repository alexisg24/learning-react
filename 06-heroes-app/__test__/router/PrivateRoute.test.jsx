import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { PrivateRoute } from '../../src/router/PrivateRoute'
import { MemoryRouter } from 'react-router-dom'

describe('tests in PrivateRoute', () => {
  test('should return children if user is authenticated', () => {
    const contextValue = {
      logged: true,
      user: { id: 1, name: 'Alexis' }
    }
    // eslint-disable-next-line no-undef
    Storage.prototype.setItem = jest.fn()
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            <p>Hello World</p>
          </PrivateRoute>
        </MemoryRouter>

      </AuthContext.Provider>
    )
    expect(screen.getByText('Hello World')).toBeTruthy()
    // eslint-disable-next-line no-undef
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
  })
})
