import { render, screen } from '@testing-library/react'
import { AppRouter } from '../../src/router/AppRouter'
import { useAuthStore } from '../../src/Hooks/useAuthStore'
import { MemoryRouter } from 'react-router-dom'

jest.mock('../../src/Hooks/useAuthStore')
jest.mock('../../src/calendar', () => ({
  CalendarPage: () => <h1>CalendarPage</h1>
}))
const mockCheckAuthToken = jest.fn()

beforeEach(() => jest.resetAllMocks())
describe('Tests in <AppRouter />', () => {
  test('should return loading screen and call checkAuthToken', () => {
    useAuthStore.mockReturnValue({ status: 'checking', checkAuthToken: mockCheckAuthToken })
    render(<AppRouter />)
    expect(screen.getByText('Loading...')).toBeTruthy()
    expect(mockCheckAuthToken).toHaveBeenCalled()
  })

  test('should return login screen if the user is not authenticated', () => {
    useAuthStore.mockReturnValue({ status: 'not-authenticated', checkAuthToken: mockCheckAuthToken })
    const { container } = render(
      <MemoryRouter initialEntries={['/test']}>
        <AppRouter />
      </MemoryRouter>
    )
    expect(screen.getByText('Ingreso')).toBeTruthy()
    expect(screen.getByText('Registro')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  test('should return calendar screen if the user is not authenticated', () => {
    useAuthStore.mockReturnValue({ status: 'authenticated', checkAuthToken: mockCheckAuthToken })
    const { container } = render(
      <MemoryRouter initialEntries={['/test']}>
        <AppRouter />
      </MemoryRouter>
    )
    expect(screen.getByText('CalendarPage')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
