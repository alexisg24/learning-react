import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/Login'
import { HeroesRoutes } from '../heroes'

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}

export { AppRouter }
