import { useGetRandomPokemonQuery } from '../../api/pokeapi/pokeAPI.slice'

/* ---- Styles ---- */
import { Container, ImageContainer, Image } from './header.styles'

const Header = () => {
  const { data: randomPokemonData } = useGetRandomPokemonQuery()

  return (
    <Container background={randomPokemonData?.color.name}>
      <ImageContainer>
        <Image
          src='https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?width=640&crop=smart&auto=webp&s=5fc89334e792e2c9b294d1d328bf522cdede4cdf'
          alt='Pokemon Logo'
        />
      </ImageContainer>
    </Container>
  )
}

export default Header
