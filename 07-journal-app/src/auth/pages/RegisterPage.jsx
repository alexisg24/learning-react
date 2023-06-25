import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useState } from 'react'
import { startCreatingUserWithEmailPassword } from '../../store/auth'
import { useDispatch } from 'react-redux'
const formData = {
  displayName: '',
  email: '',
  password: ''
}

const formValidation = {
  displayName: [(value) => value.length >= 1, 'Name is required'],
  email: [(value) => value.includes('@'), 'Email needs to be valid'],
  password: [(value) => value.length >= 6, 'Password is required and must be at least 6 characters']
}
const RegisterPage = () => {
  const dispatch = useDispatch()
  const [formSubmited, setFormSubmited] = useState(false)
  const {
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid
  } = useForm(formData, formValidation)

  const onSubmit = (event) => {
    event.preventDefault()
    setFormSubmited(true)
    if (!isFormValid) return true
    dispatch(startCreatingUserWithEmailPassword({ email, password, displayName }))
  }

  return (
    <AuthLayout title='Register'>
      <h1>FormValid {isFormValid ? 'true' : 'false'}</h1>
      <form onSubmit={onSubmit}>
        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Full Name'
              type='text'
              placeholder='Jonh Doe'
              fullWidth onChange={onInputChange}
              value={displayName}
              name='displayName'
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='mail@google.com'
              fullWidth onChange={onInputChange}
              value={email}
              name='email'
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='Password'
              fullWidth
              onChange={onInputChange}
              value={password}
              name='password'
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant='contained' fullWidth type='submit'>Create Account</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Typography sx={{ mr: 1 }}>Do you have an account?</Typography>
          <Link component={RouterLink} color='inherit' to='/auth/login'>
            Login
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export { RegisterPage }
