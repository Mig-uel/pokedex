import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 0;
  position: fixed;
  z-index: 1;

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

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`

export const ImageContainer = styled.div`
  width: 150px;

  @media only screen and (min-width: 600px) {
    width: 250px;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`
