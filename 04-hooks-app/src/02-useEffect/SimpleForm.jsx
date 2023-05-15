import { useEffect, useState } from 'react'
import { Message } from './Message'

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Alexis',
    email: 'alexis@gmail.com'
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  // useEffect(() => {
  //   console.log('useEffect')
  // }, [])

  // useEffect(() => {
  //   console.log('Cambio el form')
  // }, [formState])

  // useEffect(() => {
  //   console.log('Cambio el email en el form')
  // }, [email])

  return (
    <>
      <h1>formulario Simple</h1>
      <hr />
      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input
        type='email'
        className='form-control mt-2'
        placeholder='example@example.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      {
        (username === 'Alexis2') &&
          <Message />
      }
    </>
  )
}

export { SimpleForm }
