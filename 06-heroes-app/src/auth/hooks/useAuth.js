import { useReducer } from 'react'
import { authReducer } from '../context'
import { types } from '../types/types'

const init = () => {
  const user = JSON.parse(window.localStorage.getItem('user'))
  return {
    logged: !!user,
    user
  }
}
export const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, {}, init)

  const login = (name = '') => {
    const user = { id: 1, name }
    const action = {
      type: types.LOGIN,
      payload: user
    }
    window.localStorage.setItem('user', JSON.stringify(user))
    dispatch(action)
  }

  const logout = () => {
    window.localStorage.removeItem('user')
    const action = {
      type: types.LOGOUT,
      payload: null
    }
    dispatch(action)
  }

  return { state, login, logout }
}
