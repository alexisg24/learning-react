import { useState } from 'react'
import { UserContext } from './UserContext'

const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  const newUser = () => {
    setUser({ id: 1, name: 'User', email: 'user@example.com' })
  }
  return (
    <UserContext.Provider value={{ user, newUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider }
