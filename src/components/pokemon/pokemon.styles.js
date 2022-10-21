import styled from 'styled-components'

export const PokemonContainer = styled.div`
  background: #ecf0f1;

  height: 300px;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 100%;
  gap: 10px;

  h2 {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media only screen and (min-width: 700px) {
    width: 330px;
  }
  @media only screen and (min-width: 750px) {
    width: 350px;
  }
`

export const PokemonImage = styled.img`
  width: 150px;
`
