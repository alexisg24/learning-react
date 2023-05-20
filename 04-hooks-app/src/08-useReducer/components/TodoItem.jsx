const TodoItem = ({ id, description, done, handleDelete, handleToggle }) => {
  return (
    <>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        <span
          className={`${(done) ? 'text-decoration-line-through' : ''}`}
          onClick={() => handleToggle(id)}
        >{description}
        </span>
        <button
          className='btn btn-outline-danger'
          onClick={() => handleDelete(id)}
        >Delete
        </button>
      </li>
    </>
  )
}

export { TodoItem }
