import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/* ---- RTK Query ---- */
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { pokeAPI } from './api/pokeapi/pokeAPI.slice'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ApiProvider api={pokeAPI}>
      <App />
    </ApiProvider>
  </React.StrictMode>
)
