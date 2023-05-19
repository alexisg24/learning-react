import { useReducer } from 'react'
import { todoReducer } from './todoReducer'
const initialState = [
  { id: 1, description: 'Recolectar Piedra del Alma', done: false }
]
const TodoApp = () => {
  const [todo, dispatch] = useReducer(todoReducer, initialState)
  return (
    <>
      <h1>TodoApp</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  )
}

export { TodoApp }
