import { useGetPokemonsQuery } from '../../api/pokeapi/pokeAPI.slice'
import { useState, useEffect } from 'react'

import Pokemon from '../pokemon/pokemon.component'

import { Container, ContainerTitle, PokemonsContainer } from './pokemons.styles'

const Pokemons = () => {
  const { data: pokemonsData } = useGetPokemonsQuery()
  const [next, setNext] = useState(null)

  // TODO: Infinite scroll

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return
    setNext(pokemonsData.next)
    console.log(next)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container>
      <ContainerTitle>All Pokemons</ContainerTitle>
      <PokemonsContainer>
        {pokemonsData.results.map((pokemon, index) => (
          <Pokemon key={index} url={pokemon.url} />
        ))}
      </PokemonsContainer>
    </Container>
  )
}

export default Pokemons
