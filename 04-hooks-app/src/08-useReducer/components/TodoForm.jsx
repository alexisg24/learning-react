import { useForm } from '../../hooks/useForm'

const TodoForm = ({ handleSubmit }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const submitEvent = (event) => {
    event.preventDefault()
    if (description.length <= 1) return
    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }
    handleSubmit(newTodo)
    onResetForm()
  }
  return (
    <>
      <form
        onSubmit={submitEvent}
      >
        <input
          type='text'
          placeholder='Add TODO'
          className='form-control'
          name='description'
          onChange={onInputChange}
          value={description}
        />

        <button
          type='submit'
          className='btn btn-outline-primary mt-2'
        >Add TODO
        </button>
      </form>
    </>
  )
}

export { TodoForm }
