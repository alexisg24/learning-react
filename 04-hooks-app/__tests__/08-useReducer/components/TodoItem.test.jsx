import { fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../../src/08-useReducer/components/TodoItem'

describe('tests in <TodoItem />', () => {
  const todo = { id: 1, description: 'Test todo', done: false }
  const handleDeleteMock = jest.fn()
  const handleToggleMock = jest.fn()
  beforeAll(jest.clearAllMocks)

  test('should show the Pending Todo', () => {
    render(<TodoItem
      {...todo}
      handleDelete={handleDeleteMock}
      handleToggle={handleToggleMock}
           />)
    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between align-items-center')

    const spanElement = screen.getByLabelText('spanElement')
    expect(spanElement.className).not.toBe('text-decoration-line-through')

    const todoText = screen.getByText(todo.description)
    expect(todoText).toBeTruthy()

    const deleteButton = screen.getByRole('button')
    expect(deleteButton).toBeTruthy()
  })

  test('should render the completed Todo', () => {
    todo.done = true
    render(<TodoItem
      {...todo}
      handleDelete={handleDeleteMock}
      handleToggle={handleToggleMock}
           />)

    const spanElement = screen.getByLabelText('spanElement')
    expect(spanElement.className).toBe('text-decoration-line-through')

    const todoText = screen.getByText(todo.description)
    expect(todoText.className).toBe('text-decoration-line-through')
  })

  test('span should call handleToggle with click event', () => {
    render(<TodoItem
      {...todo}
      handleDelete={handleDeleteMock}
      handleToggle={handleToggleMock}
           />)
    const spanElement = screen.getByLabelText('spanElement')
    fireEvent.click(spanElement)
    expect(handleToggleMock).toHaveBeenCalledWith(todo.id)
  })

  test('button should call handleDelete event', () => {
    render(<TodoItem
      {...todo}
      handleDelete={handleDeleteMock}
      handleToggle={handleToggleMock}
           />)
    const deleteButton = screen.getByRole('button')
    expect(deleteButton).toBeTruthy()
    fireEvent.click(deleteButton)
    expect(handleToggleMock).toHaveBeenCalledWith(todo.id)
  })
})
