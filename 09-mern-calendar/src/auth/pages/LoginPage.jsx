import { useEffect } from 'react'
import { useAuthStore, useForm } from '../../Hooks'
import './LoginPage.css'
import Swal from 'sweetalert2/dist/sweetalert2.js'

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

const registerFormFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
  registerPassword2: ''
}

export const LoginPage = () => {
  const { startLogin, startRegister, errorMessage } = useAuthStore()
  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields)
  const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange: onRegisterInputChange } = useForm(registerFormFields)

  const loginSubmit = (event) => {
    event.preventDefault()
    startLogin({ email: loginEmail, password: loginPassword })
  }

  const registerSubmit = (event) => {
    event.preventDefault()
    if (registerPassword !== registerPassword2) {
      Swal.fire({
        title: 'Register Error!',
        text: 'Passwords must be equals',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
      return true
    }
    startRegister({ name: registerName, email: registerEmail, password: registerPassword })
  }

  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire({
        title: 'Authentication Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }, [errorMessage])
  return (
    <div className='container login-container'>
      <div className='row'>
        <div className='col-md-6 login-form-1'>
          <h3>Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className='form-group mb-2'>
              <input
                type='text'
                className='form-control'
                placeholder='Email'
                name='loginEmail'
                value={loginEmail}
                onChange={onLoginInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                name='loginPassword'
                value={loginPassword}
                onChange={onLoginInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='submit'
                className='btnSubmit'
                value='Login'
              />
            </div>
          </form>
        </div>

        <div className='col-md-6 login-form-2'>
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className='form-group mb-2'>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                name='registerName'
                value={registerName}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='email'
                className='form-control'
                placeholder='email'
                name='registerEmail'
                value={registerEmail}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className='form-group mb-2'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                name='registerPassword'
                value={registerPassword}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className='form-group mb-2'>
              <input
                type='password'
                className='form-control'
                placeholder='Repeat password'
                name='registerPassword2'
                value={registerPassword2}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className='form-group mb-2'>
              <input
                type='submit'
                className='btnSubmit'
                value='Create Account'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
