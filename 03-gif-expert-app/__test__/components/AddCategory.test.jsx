import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Tests in AddCategory', () => {
  test('text box needs to change', () => {
    render(<AddCategory onNewCategory={() => {}} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'Saitama' } })
    expect(input.value).toBe('Saitama')
  })

  test('need to call onNewCategory if the input has new value', () => {
    const inputValue = 'Saitama'
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)
    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    expect(input.value).toBe('')
  })

  test('onNewCategory should not been called', () => {
    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    expect(onNewCategory).not.toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(0)
  })
})
