import { todoReducer } from '../../../src/08-useReducer/todoReducer'

describe('tests in todoReducer', () => {
  const initialState = [{ id: 1, description: 'Demo Todo', done: false }]
  test('should return initialState', () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toBe(initialState)
  })

  test('should add a Todo', () => {
    const action = {
      type: 'ADD',
      payload: { id: 2, description: 'Demo Todo 2', done: false }
    }

    const newState = todoReducer(initialState, action)
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('should remove a Todo', () => {
    const initialValue = [...initialState, { id: 2, description: 'Demo Todo 2', done: false }]
    const action = {
      type: 'DELETE',
      payload: 2
    }
    const newState = todoReducer(initialValue, action)
    expect(newState.length).toBe(1)
    expect(newState).toEqual(initialState)
  })

  test('should togle a Todo', () => {
    const action = {
      type: 'TOGGLE',
      payload: 1
    }
    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBeTruthy()

    const newState2 = todoReducer(newState, action)
    expect(newState2[0].done).toBeFalsy()
  })
})
