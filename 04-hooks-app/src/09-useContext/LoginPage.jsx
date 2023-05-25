import { useContext } from 'react'
import { UserContext } from './context/UserContext'

const LoginPage = () => {
  const { user, newUser } = useContext(UserContext)
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label='user-info'>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button
        className='btn btn-primary'
        aria-label='newUser-button'
        onClick={() => newUser()}
      >Set User
      </button>
    </>
  )
}

export { LoginPage }
