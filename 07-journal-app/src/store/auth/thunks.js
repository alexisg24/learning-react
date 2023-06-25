import { registerWithEmailAndPassword, signInWithGoogle } from '../../firebase/providers'
import { checkingCredentials, login, logout } from './authSlice'

const checkingAuth = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWithGoogle()
    if (!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))
  }
}

const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await registerWithEmailAndPassword({ email, password, displayName })
    console.log(result)
    if (!result.ok) return dispatch(logout(result.errorMessage))
    dispatch(login(result))
  }
}

export { checkingAuth, startGoogleSignIn, startCreatingUserWithEmailPassword }
