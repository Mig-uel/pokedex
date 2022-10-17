/* ---- Styles ---- */
import { RandomPokemonContainer } from './random-pokemon.styles'

import { useGetRandomPokemonQuery } from '../../api/pokeapi/pokeAPI.slice'

const RandomPokemon = () => {
  const { data: randomPokemon, isLoading: isRandomLoading } =
    useGetRandomPokemonQuery()
  console.log('Random Pokemon', randomPokemon)
  console.log('isRandomLoading', isRandomLoading)

  return <RandomPokemonContainer></RandomPokemonContainer>
}

export default RandomPokemon
