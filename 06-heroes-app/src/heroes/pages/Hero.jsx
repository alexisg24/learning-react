import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroByID } from '../helpers'
import { useMemo } from 'react'

const HeroPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const hero = useMemo(() => getHeroByID(id), [id])
  const url = useMemo(() => `/assets/heroes/${id}.jpg`, [id])
  const handleNavitageBack = () => {
    return navigate(-1)
  }

  if (!hero) {
    return (<Navigate to='/marvel' />)
  }
  return (
    <section className='row mt-5 animate__animated animate__fadeInLeftBig'>
      <div className='col-4'>
        <img
          src={url}
          alt={hero.superhero}
          className='img-thumbnail'
        />
      </div>
      <div className='col-8'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b> {hero.publisher}</li>
          <li className='list-group-item'><b>First Appearance:</b> {hero.first_appearance}</li>
        </ul>

        {
        (hero.characters !== hero.alter_ego) &&
        (
          <>
            <h5 className='mt-3'>Characters</h5>
            <p>{hero.characters}</p>
          </>
        )
        }
        <button
          className='btn btn-outline-primary'
          onClick={handleNavitageBack}
        >Back
        </button>
      </div>
    </section>
  )
}

export { HeroPage }
