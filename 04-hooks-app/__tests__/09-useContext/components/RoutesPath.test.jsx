import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RoutesPath } from '../../../src/09-useContext/components/RoutesPath'
import { UserContext } from '../../../src/09-useContext/context/UserContext'

describe('Tests in <RoutesPath />', () => {
  test('Should render HomePage', () => {
    render(
      <MemoryRouter>
        <UserContext.Provider value={{ name: null }}>
          <RoutesPath />
        </UserContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText('HomePage')).toBeTruthy()
  })

  test('Should render LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <UserContext.Provider value={{ name: null }}>
          <RoutesPath />
        </UserContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText('LoginPage')).toBeTruthy()
  })
})
