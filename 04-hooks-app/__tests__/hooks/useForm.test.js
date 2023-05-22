import { renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'
import { act } from 'react-dom/test-utils'

describe('Tests in useForm Hook', () => {
  const initialForm = {
    name: 'Alexis',
    email: 'alexis@test.com'
  }

  test('formState should return empty object', () => {
    const { result } = renderHook(() => useForm())
    const { formState } = result.current
    expect(formState).toEqual({})
  })

  test('should return default object', () => {
    const { result } = renderHook(() => useForm(initialForm))
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    })
  })

  test('name should change when type in the form', () => {
    const newValue = 'Fernando'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange } = result.current
    act(() => onInputChange({ target: { name: 'name', value: newValue } }))
    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)
  })

  test('Form should change and then reset to initial value', () => {
    const newValue = 'Fernando'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onResetForm } = result.current
    act(() => onInputChange({ target: { name: 'name', value: newValue } }))
    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)

    act(() => onResetForm())
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    })
  })
})
