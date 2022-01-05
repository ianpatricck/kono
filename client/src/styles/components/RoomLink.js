import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RoomLink  = styled(Link)`
  text-decoration: none;
  color: white;
  background-image: linear-gradient(to right, hsl(262, 28%, 60%), hsl(262, 10%, 60%));
  padding: 3%;
  margin: 2%;
  padding: 2%;
  font-size: 20pt;
  font-family: Andika;
  font-weight: bold;
  border-radius: 15px;

  &:hover {
    border-radius: 5px;
    background-image: linear-gradient(to right, hsl(262, 40%, 60%), hsl(262, 20%, 60%));
    transition-duration: .5s;
  }
`

export default RoomLink
