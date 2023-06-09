import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth'

const handleActive = ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`

export const Navbar = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = (e) => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>

      <Link
        className='navbar-brand'
        to='/'
      >
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>

          <NavLink
            className={handleActive}
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            className={handleActive}
            to='/dc'
          >
            DC
          </NavLink>
          <NavLink
            className={handleActive}
            to='/search'
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-info'>
            {user?.name}
          </span>
          <button className='nav-item nav-link btn' onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}
