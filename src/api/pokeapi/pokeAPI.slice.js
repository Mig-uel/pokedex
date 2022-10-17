import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokeAPI = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),

  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => 'pokemon-species',
    }),

    getRandomPokemon: builder.query({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const req = await fetchWithBQ('pokemon-species')
        if (req.error) return { error: req.error }

        const randomId = Math.floor(Math.random() * req.data.count)
        const res = await fetchWithBQ(`pokemon-species/${randomId}`)

        return res.data ? { data: res.data } : { error: res.error }
      },
    }),
  }),
})

export const { useGetPokemonQuery, useGetRandomPokemonQuery } = pokeAPI
