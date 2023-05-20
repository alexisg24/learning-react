import { TodoList } from './components/TodoList'
import { TodoForm } from './components/TodoForm'
import { useTodos } from '../hooks'

const TodoApp = () => {
  const { todos, handleSubmit, handleDelete, handleToggle, todoCounter, todoPending } = useTodos()
  return (
    <>
      <h1>TodoApp: {todoCounter}. <span>Pending: {todoPending}</span></h1>

      <div className='row mt-3'>

        <div className='col-7'>
          <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
        </div>

        <div className='col-5'>
          <h4>Add TODO</h4>
          <hr />
          <TodoForm handleSubmit={handleSubmit} />
        </div>

      </div>
    </>
  )
}

export { TodoApp }
