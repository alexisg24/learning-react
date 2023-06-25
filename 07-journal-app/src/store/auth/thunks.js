import { registerWithEmailAndPassword, signInWithEmailPassword, signInWithGoogle, signOutFn } from '../../firebase/providers'
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
    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }))
    dispatch(login(result))
  }
}

const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await registerWithEmailAndPassword({ email, password, displayName })
    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }))
    dispatch(login(result))
  }
}

const startEmailAndPasswordSignIn = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
    const result = await signInWithEmailPassword({ email, password })
    if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }))
    dispatch(login(result))
  }
}

const startLogout = () => {
  return async (dispatch) => {
    await signOutFn()
    dispatch(logout())
  }
}

export { checkingAuth, startGoogleSignIn, startCreatingUserWithEmailPassword, startEmailAndPasswordSignIn, startLogout }
