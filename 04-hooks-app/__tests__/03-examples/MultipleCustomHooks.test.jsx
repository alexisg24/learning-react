import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'
import { useFetch } from '../../src/hooks/useFetch'
import { useCounter } from '../../src/hooks/useCounter'
jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('tests in <MultipleCustomHooks />', () => {
  const increment = jest.fn()
  useCounter.mockReturnValue({ counter: 1, increment })

  beforeEach(jest.clearAllMocks)

  test('should return default component', () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })
    render(<MultipleCustomHooks />)
    expect(screen.getByText('BreakingBad Quotes')).toBeTruthy()
    expect(screen.getByText('Loading...')).toBeTruthy()
    const nextButton = screen.getByRole('button', { name: 'Next Quote' })
    expect(nextButton.disabled).toBeTruthy()
  })

  test('should show a quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hello World' }],
      isLoading: false,
      hasError: null
    })
    render(<MultipleCustomHooks />)
    expect(screen.getByText('Hello World')).toBeTruthy()
    expect(screen.getByText('Fernando')).toBeTruthy()
    const nextButton = screen.getByRole('button', { name: 'Next Quote' })
    expect(nextButton.disabled).toBeFalsy()
  })

  test('needs to call increment function', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hello World' }],
      isLoading: false,
      hasError: null
    })
    render(<MultipleCustomHooks />)
    const nextButton = screen.getByRole('button', { name: 'Next Quote' })
    fireEvent.click(nextButton)
    expect(increment).toHaveBeenCalled()
  })
})
