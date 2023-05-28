import { HeroCard } from './HeroCard'
import { getHeroesByPublisher } from '../helpers'

const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <div className='row row-cols-q row-cols-md-3 g-3'>
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  )
}

export { HeroesList }
