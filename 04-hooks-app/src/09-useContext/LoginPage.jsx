import { useContext } from 'react'
import { UserContext } from './context/UserContext'

const LoginPage = () => {
  const { user, newUser } = useContext(UserContext)
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button
        className='btn btn-primary'
        onClick={() => newUser()}
      >Set User
      </button>
    </>
  )
}

export { LoginPage }
