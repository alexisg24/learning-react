import { Link } from 'react-router-dom'

/* eslint-disable camelcase */
const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  const heroImageUrl = `/assets/heroes/${id}.jpg`
  // const charactersByHero = (<p className='card-text'>{characters}</p>)
  return (
    <section className='col animate__animated animate__fadeIn'>
      <article className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImageUrl} className='card-img' alt={superhero} />
          </div>

          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alter_ego}</p>
              {/* {(characters !== alter_ego) && charactersByHero} */}
              <p className='card-text'>{(characters !== alter_ego) ? characters : null}</p>
              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More info</Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export { HeroCard }
