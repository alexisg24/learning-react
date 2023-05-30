import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/HeroCard'
import { getHeroesByName } from '../helpers'

const SearchPage = () => {
  const navitage = useNavigate()
  const { search } = useLocation()
  const { hero = '' } = queryString.parse(search)
  const { searchText, onInputChange } = useForm({ searchText: hero })
  const heroes = getHeroesByName(hero)

  const onSearchSubmit = (event) => {
    event.preventDefault()
    if (searchText.trim().length <= 1) return
    navitage(`?hero=${searchText.toLowerCase().trim()}`, { replace: true })
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className='row'>
        <section className='col-5'>
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </section>
        <section className='col-7'>
          <h4>Result</h4>
          <hr />
          {
            (hero === '')
              ? (
                <article className='alert alert-primary'>
                  Search a Hero
                </article>
                )
              : (heroes.length === 0) && (
                <article className='alert alert-danger'>
                  No Hero with <b>{hero}</b>
                </article>
                )
          }

          {
            heroes.map(hero => (<HeroCard key={hero.id} {...hero} />))
          }
        </section>
      </div>
    </>
  )
}

export { SearchPage }
