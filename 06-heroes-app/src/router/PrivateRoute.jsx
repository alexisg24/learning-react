import { useContext, useEffect } from 'react'
import { AuthContext } from '../auth'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext)
  const { pathname, search } = useLocation()
  const lastPath = pathname + search
  useEffect(() => {
    window.localStorage.setItem('lastPath', JSON.stringify(lastPath))
  }, [lastPath, search])

  return (logged)
    ? children
    : <Navigate to='/login' />
}

export { PrivateRoute }
