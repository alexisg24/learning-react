import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startEmailAndPasswordSignIn, startGoogleSignIn } from '../../store/auth'
import { useMemo } from 'react'

const LoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const { email, password, onInputChange } = useForm({
    email: 'john@doe.com',
    password: '123456'
  })

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(startEmailAndPasswordSignIn({ email, password }))
  }

  const onGoogleSignIn = (event) => {
    console.log('Google sign in')
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Email' type='email' placeholder='mail@google.com' fullWidth onChange={onInputChange} value={email} name='email' />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField label='Password' type='password' placeholder='Password' fullWidth onChange={onInputChange} value={password} name='password' />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={errorMessage ? '' : 'none'}>
              <Alert severity='error'>{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth type='submit' disabled={isAuthenticating}>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Link component={RouterLink} color='inherit' to='/auth/register'>
            Create an Account
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export { LoginPage }
