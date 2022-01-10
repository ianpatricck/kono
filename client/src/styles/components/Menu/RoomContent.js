import styled from 'styled-components'

const RoomContent  = styled.div` 
  display: grid;
  grid-template-areas: "1 2";
  width: 100%;
  height: 100%;

  @media (min-width: 550px) {
    width: 80%;
  } 

  @media (min-width: 800px) {
    grid-template-areas: "1 2 3";
    width: 60%;
  }

`

export default RoomContent
