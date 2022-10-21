/* ---- Styles ---- */
import {
  Container,
  RandomPokemonContainer,
  SpriteContainer,
  NameContainer,
  ViewMoreButton,
} from './random-pokemon.styles'

import { BsArrowDownCircleFill } from 'react-icons/bs'

/* ---- RTK Query ---- */
import { useGetRandomPokemonQuery } from '../../api/pokeapi/pokeAPI.slice'

const RandomPokemon = () => {
  const { data: randomPokemonData, isLoading: isRandomLoading } =
    useGetRandomPokemonQuery()

  const colors = {}

  if (
    randomPokemonData?.color.name === 'black' ||
    randomPokemonData?.color.name === 'blue'
  ) {
    colors.buttonColor = '#fff'
  } else colors.buttonColor = '#000'

  const randomPokemonSnippet = !isRandomLoading && (
    <Container background={randomPokemonData?.color.name}>
      <RandomPokemonContainer>
        <SpriteContainer
          src={
            randomPokemonData.sprites.other['official-artwork'].front_default
          }
          alt={randomPokemonData.name}
        />
        <NameContainer background={randomPokemonData.color.name}>
          {randomPokemonData.name}
        </NameContainer>
      </RandomPokemonContainer>
      <ViewMoreButton
        background={randomPokemonData?.color.name}
        buttonColor={colors.buttonColor}
      >
        <BsArrowDownCircleFill /> View All Pokemon
      </ViewMoreButton>
    </Container>
  )

  return <>{isRandomLoading ? <></> : randomPokemonSnippet}</>
}

export default RandomPokemon
