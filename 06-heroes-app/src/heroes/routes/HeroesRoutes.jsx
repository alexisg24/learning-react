import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/NavBar'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <section className='container'>
        <Routes>
          <Route path='/marvel' element={<MarvelPage />} />
          <Route path='/dc' element={<DcPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/hero' element={<HeroPage />} />
          <Route path='*' element={<Navigate to='/marvel' />} />
        </Routes>
      </section>
    </>
  )
}

export { HeroesRoutes }
