import {
  useGetPokemonsQuery,
  useGetRandomPokemonQuery,
} from './api/pokeapi/pokeAPI.slice'

/* ---- Components ---- */
import Layout from './components/layout/layout.component'
import RandomPokemon from './components/random-pokemon/random-pokemon.component'

/* ---- Styles ---- */
import { GlobalStyle } from './App.styles'
import Loader from './components/loader/loader.component'
import Pokemons from './components/pokemons/pokemons.component'

const App = () => {
  const { isLoading: isAllPokemonLoading } = useGetPokemonsQuery()
  const { isLoading: isRandomPokemonLoading } = useGetRandomPokemonQuery()

  return (
    <>
      <GlobalStyle />

      {isRandomPokemonLoading || isAllPokemonLoading ? (
        <Loader />
      ) : (
        <Layout>
          <RandomPokemon />
          <Pokemons />
        </Layout>
      )}
    </>
  )
}

export default App
