import styled from 'styled-components'

export const RandomPokemonContainer = styled.div`
  height: 100vh;
  width: 100%;

  background-color: ${(props) => props.background};
  position: absolute;
  z-index: -1;

  top: 0;

  display: flex;
  flex-direction: column;

  align-content: center;
`
export const LoadingContainer = styled.div`
  position: relative;

  top: 50%;
  left: 50%;
`
