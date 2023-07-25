import { useDispatch, useSelector } from 'react-redux'
import { calendarApi } from '../api'
import { clearErrorMessage, onChecking, onClearCalendar, onLogin, onLogout } from '../store'

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post('/auth', { email, password })
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      dispatch(onLogout('Credenciales Incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startRegister = async ({ name, email, password }) => {
    try {
      const { data } = await calendarApi.post('/auth/new', { name, email, password })
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      const { response: { data } } = error
      if (!data?.errors) {
        dispatch(onLogout(data?.msg || 'Failed to Register'))
      } else {
        const { errors } = data
        const errorsMsg = Object.values(errors)
        dispatch(onLogout(errorsMsg[0]?.msg || 'Failed to Register'))
      }
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const checkAuthToken = async () => {
    const token = window.localStorage.getItem('token')
    if (!token) return dispatch(onLogout())

    try {
      const { data } = await calendarApi.get('/auth/renew')
      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('token-init-date', new Date().getTime())
      dispatch(onLogin({ name: data.name, uid: data.uid }))
    } catch (error) {
      window.localStorage.clear()
      dispatch(onLogout('Session Expired'))
    }
  }

  const startLogout = async () => {
    dispatch(onChecking())
    window.localStorage.clear()
    dispatch(onClearCalendar())
    setTimeout(() => {
      dispatch(onLogout())
    }, 200)
  }
  return {
    // props
    status,
    user,
    errorMessage,
    // methods
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout
  }
}
