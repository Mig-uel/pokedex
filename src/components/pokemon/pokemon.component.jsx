import Loader from '../loader/loader.component'

import { useGetPokemonQuery } from '../../api/pokeapi/pokeAPI.slice'

import { PokemonContainer, PokemonImage } from './pokemon.styles'

import { BsArrowRightCircleFill } from 'react-icons/bs'

const Pokemon = ({ url }) => {
  const { data: pokemonData, isLoading } = useGetPokemonQuery(url.split('/')[6])

  // console.log(pokemonData)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <PokemonContainer>
          <PokemonImage
            src={pokemonData.sprites.other['official-artwork'].front_default}
            alt={pokemonData.name}
          />
          <h2>
            {pokemonData.name} <BsArrowRightCircleFill />
          </h2>
        </PokemonContainer>
      )}
    </>
  )
}

export default Pokemon
