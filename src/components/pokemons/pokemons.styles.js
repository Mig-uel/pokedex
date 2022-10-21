import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 50px 0;
  position: relative;
`

export const ContainerTitle = styled.h1`
  /* width: fit-content; */
  text-align: center;
`

export const PokemonsContainer = styled.div`
  margin-top: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  @media only screen and (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
