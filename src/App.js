/* ---- Components ---- */
import Layout from './components/layout/layout.component'
import RandomPokemon from './components/random-pokemon/random-pokemon.component'

/* ---- Styles ---- */
import { GlobalStyle } from './App.styles'

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Layout>
        <RandomPokemon />
        <section></section>
      </Layout>
    </>
  )
}

export default App
