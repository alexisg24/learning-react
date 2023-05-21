import { Link, NavLink } from 'react-router-dom'

const AppMenu = () => {
  const handleActive = ({ isActive }) => `nav-link ${isActive ? 'active' : ''}`
  return (
    <>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark rounded-3'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>ContextApp</Link>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>

              <NavLink
                to='/'
                className={handleActive}
              >
                Home
              </NavLink>

              <NavLink
                to='/about'
                className={handleActive}
              >
                About
              </NavLink>

              <NavLink
                to='/login'
                className={handleActive}
              >
                Login
              </NavLink>

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export { AppMenu }
