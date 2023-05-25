import { fireEvent, render, screen } from '@testing-library/react'
import { LoginPage } from '../../src/09-useContext/LoginPage'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe('Tests in <LoginPage />', () => {
  const newUserMock = jest.fn()
  beforeAll(jest.resetAllMocks)
  test('should render the component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null, newUser: newUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )
    const preTag = screen.getByLabelText('user-info')
    expect(preTag.innerHTML).toBe('null')
  })

  test('should call the setUser when button got clicked', () => {
    render(
      <UserContext.Provider value={{ user: null, newUser: newUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )
    const button = screen.getByLabelText('newUser-button')
    fireEvent.click(button)
    expect(newUserMock).toHaveBeenCalledTimes(1)
    /*
    If we have arguments in our function we can use
    expect(newUserMock).toHaveBeenCalledWith(...args)
     */
  })
})
