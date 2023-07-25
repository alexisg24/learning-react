import { useAuthStore } from '../../Hooks'

export const Navbar = () => {
  const { user, startLogout } = useAuthStore()
  const handleClick = () => {
    startLogout()
  }
  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4'>
      <span className='navbar-brand'>
        <i className='fas fa-calendar-alt' />
        &nbsp;
        {user.name}
      </span>

      <button className='btn btn-outline-danger' onClick={handleClick}>
        <i className='fas fa-sign-out-alt' />
        <span>
          &nbsp;
          Exit
        </span>
      </button>
    </div>
  )
}
