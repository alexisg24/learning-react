import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* login and register */}
        <Route path='/auth/*' element={<AuthRoutes />} />

        {/* JournalApp */}
        <Route path='/*' element={<JournalRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRouter }
