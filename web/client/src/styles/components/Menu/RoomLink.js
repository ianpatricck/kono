import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RoomLink  = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: ${(props) => props.theme.backgroundRoomLink};
  margin: 5%;
  padding: 2%;
  font-size: 20pt;
  font-family: Andika;
  font-weight: bold;
  border-radius: 15px;
  text-align: center;

  &:hover {
    border-radius: 5px;
    background-color: ${(props) => props.theme.backgroundRoomLinkHover};
    transition-duration: .5s;
  }
`

export default RoomLink
