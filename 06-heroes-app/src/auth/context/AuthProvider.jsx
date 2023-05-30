import { useAuth } from '../hooks/useAuth'
import { AuthContext } from './AuthContext'
const AuthProvider = ({ children }) => {
  const { state, login, logout } = useAuth()
  return (
    <AuthContext.Provider value={{ login, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
