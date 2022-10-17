import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background: ${(props) => props.background};
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
`

export const RandomPokemonContainer = styled.div`
  text-align: center;
`

export const SpriteContainer = styled.img`
  width: 150px;
`

export const NameContainer = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => {
    if (props.background === 'white') return '#000'
    else if (props.background === 'black') return '#fff'
    else if (props.background === 'yellow') return '#000'
    else return '#fff'
  }};
`

export const ViewMoreButton = styled.div`
  position: absolute;
  bottom: 30px;

  color: ${(props) => props.background};

  text-align: center;

  background: ${(props) => props.buttonColor};
  border-radius: 50px;

  padding: 20px;

  display: flex;
  align-items: center;
  gap: 10px;
`
