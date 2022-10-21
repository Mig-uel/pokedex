import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  background: ${(props) => {
    if (props.background === 'white') return '#ECF0F1'
    else if (props.background === 'gray') return '#95A5A6'
    else if (props.background === 'blue') return '#3498DB'
    else if (props.background === 'green') return '#27AE60'
    else if (props.background === 'red') return '#C0392B'
    else if (props.background === 'purple') return '#8E44AD'
    else if (props.background === 'yellow') return '#F1C40F'
    else return props.background
  }};
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  /* gap: 10px; */

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`

export const RandomPokemonContainer = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  justify-content: center;
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

  color: ${(props) => {
    if (props.background === 'white') return '#ECF0F1'
    else if (props.background === 'gray') return '#95A5A6'
    else if (props.background === 'blue') return '#3498DB'
    else if (props.background === 'green') return '#27AE60'
    else if (props.background === 'red') return '#C0392B'
    else if (props.background === 'purple') return '#8E44AD'
    else if (props.background === 'yellow') return '#F1C40F'
    else return props.background
  }};

  text-align: center;

  background: ${(props) => props.buttonColor};
  border-radius: 50px;

  padding: 20px;

  display: flex;
  align-items: center;
  gap: 10px;
`
