import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../CounterApp'

describe('Tests in <CounterApp />', () => {
  const initialValue = 100
  test('Should match with the snapshot', () => {
    const { container } = render(<CounterApp value={initialValue} />)
    expect(container).toMatchSnapshot()
  })

  test('Initial Value should be 100', () => {
    render(<CounterApp value={initialValue} />)
    expect(screen.getByText(initialValue)).toBeTruthy()
    expect(screen.getByRole('heading', { level: 2 }).innerHTML)
      .toContain(initialValue.toString())
  })

  test('+1 Button should increment inital value', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('101')).toBeTruthy()
  })

  test('-1 Button should decrement value', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('99')).toBeTruthy()
  })

  test('Reset Button should works', () => {
    render(<CounterApp value={initialValue} />)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    // fireEvent.click(screen.getByText('Reset'))
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }))
    expect(screen.getByText(initialValue)).toBeTruthy()
  })
})
