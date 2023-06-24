import { pokemonAPi } from '../../../api/pokemonApi'
import { setPokemons, startLoadingPokemons } from './pokemonSlice'

const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())

    // TODO: make http req
    const { data } = await pokemonAPi.get(`pokemon?limit=10&offset=${page * 10}`)
    const payload = {
      page: page + 1,
      pokemons: data.results
    }
    dispatch(setPokemons(payload))
  }
}

export { getPokemons }
