import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 0;
  position: absolute;
  z-index: 1;
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
