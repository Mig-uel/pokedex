import {
  useGetPokemonQuery,
  useGetRandomPokemonQuery,
} from './api/pokeapi/pokeAPI.slice'

/* ---- Components ---- */
import Layout from './components/layout/layout.component'
import RandomPokemon from './components/random-pokemon/random-pokemon.component'

/* ---- Styles ---- */
import { GlobalStyle } from './App.styles'
import Loader from './components/loader/loader.component'

const App = () => {
  const { isLoading: isAllPokemonLoading } = useGetPokemonQuery()
  const { isLoading: isRandomPokemonLoading } = useGetRandomPokemonQuery()
  console.log('Pokemons', isAllPokemonLoading)
  console.log('Random Pokemon', isRandomPokemonLoading)

  return (
    <>
      <GlobalStyle />

      {isRandomPokemonLoading || isAllPokemonLoading ? (
        <Loader />
      ) : (
        <Layout>
          <RandomPokemon />
          <section>
            <h1>Work in progress.</h1>
          </section>
        </Layout>
      )}
    </>
  )
}

export default App
