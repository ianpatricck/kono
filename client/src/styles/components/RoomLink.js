import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RoomLink  = styled(Link)`
  text-decoration: none;
  color: white;
  background-image: ${(props) => props.theme.backgroundRoomLink};
  padding: 3%;
  margin: 2%;
  padding: 2%;
  font-size: 20pt;
  font-family: Andika;
  font-weight: bold;
  border-radius: 15px;

  &:hover {
    border-radius: 5px;
    background-image: ${(props) => props.theme.backgroundRoomLinkHover};
    transition-duration: .5s;
  }
`

export default RoomLink
