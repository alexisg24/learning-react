import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import { AboutPage } from '../AboutPage'

const RoutesPath = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/about' element={<AboutPage />} />
      {/* <Route path='/*' element={<AboutPage />} /> */}
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}

export { RoutesPath }
