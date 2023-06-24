const PokemonList = ({ pokemons }) => {
  return (
    <ul>
      {
       pokemons.map(({ name, url }) => (
         <li key={name}>{name}, {url}</li>
       ))
      }
    </ul>
  )
}

export { PokemonList }
