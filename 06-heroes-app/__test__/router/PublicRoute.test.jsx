import { render, screen } from '@testing-library/react'
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from '../../src/auth'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Tests in PublicRoute', () => {
  test('should return children if user is not authenticated', () => {
    const contextValue = {
      logged: false
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <p>Hello World</p>
        </PublicRoute>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Hello World')).toBeTruthy()
  })

  test('should return navigate if user is authenticated', () => {
    const contextValue = {
      logged: true,
      user: { id: 1, name: 'Alexis' }
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>

          <Routes>
            <Route
              path='/login' element={
                <PublicRoute>
                  <p>Hello World</p>
                </PublicRoute>
                }
            />

            <Route path='/marvel' element={<h1>Marvel Page</h1>} />
          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Marvel Page')).toBeTruthy()
  })
})
