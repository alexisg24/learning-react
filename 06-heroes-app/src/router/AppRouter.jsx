import { Navigate, Route, Routes } from 'react-router-dom'
import MarvelPage from '../heroes/pages/Marvel'
import { DcPage } from '../heroes/pages/DC'
import { LoginPage } from '../auth/pages/Login'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/marvel' element={<MarvelPage />} />
      <Route path='/dc' element={<DcPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<Navigate to='/marvel' />} />
    </Routes>
  )
}

export { AppRouter }
