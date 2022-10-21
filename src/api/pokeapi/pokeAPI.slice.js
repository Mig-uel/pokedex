import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

function setMetaThemeColor(color) {
  if (color === 'white') {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute('content', `#ECF0F1`)
  } else if (color === 'gray') {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute('content', `#95A5A6`)
  } else if (color === 'blue') {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute('content', `#3498DB`)
  } else if (color === 'green') {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute('content', `#27AE60`)
  } else if (color === 'red') {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute('content', `#C0392B`)
  } else if (color === 'purple') {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute('content', `#8E44AD`)
  } else if (color === 'yellow') {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute('content', `#F1C40F`)
  } else {
    document
      .querySelector("meta[name='theme-color']")
      .setAttribute('content', `${color}`)
  }
}

export const pokeAPI = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => 'pokemon-species',
    }),

    getRandomPokemon: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const req = await fetchWithBQ('pokemon-species')
        if (req.error) return { error: req.error }

        const randomId = Math.floor(Math.random() * req.data.count)

        const res = await fetchWithBQ(`pokemon/${randomId}`)
        const pokemonColor = await fetchWithBQ(`pokemon-species/${randomId}`)

        /* ---- TODO: use setThemeColor function ---- */
        setMetaThemeColor(pokemonColor?.data.color.name)

        return res.data && pokemonColor.data
          ? { data: { ...res.data, ...pokemonColor.data } }
          : { error: res.error }
      },
    }),

    getPokemon: builder.query({
      query: (url) => `pokemon/${url}`,
    }),
  }),
})

export const {
  useGetPokemonsQuery,
  useGetRandomPokemonQuery,
  useGetPokemonQuery,
} = pokeAPI
