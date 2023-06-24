import { useState } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis'

const TodoApp = () => {
  // const { isLoading, data = [] } = useGetTodosQuery()
  const [todoId, setTodoId] = useState(1)
  const { isLoading, data = {} } = useGetTodoQuery(todoId)

  const prevClick = () => {
    if (todoId <= 1) return true
    setTodoId(prev => prev - 1)
  }

  const nextClick = () => {
    setTodoId(prev => prev + 1)
  }
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      <ul>
        {/* {data.map(({ id, title, completed }) => (
          <li key={id}><strong>{completed ? 'Completed' : 'Uncompleted'}</strong>. {title}</li>
        ))} */}
      </ul>
      <pre>{JSON.stringify(data)}</pre>
      <button onClick={() => prevClick()}>Prev Todo</button>
      <button onClick={() => nextClick()}>Next Todo</button>
    </>
  )
}

export { TodoApp }
