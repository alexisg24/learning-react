import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'
import { Loading } from './components/Loading'
import { PokemonList } from './components/PokemonList'

const PokemonApp = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPokemons())
  }, [])
  const { isLoading, page, pokemons } = useSelector((state) => state.pokemons)
  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      {!isLoading ? null : <Loading />}
      <PokemonList pokemons={pokemons} />
      <hr />
      <button onClick={() => dispatch(getPokemons(page))}>Next</button>
    </>

  )
}

export { PokemonApp }
