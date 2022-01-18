import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RoomLink  = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.clPrimary};
  background-color: ${(props) => props.theme.colors.bgGray};
  margin: 5%;
  padding: 2%;
  font-size: 20pt;
  font-family: Andika;
  font-weight: bold;
  border: .1rem solid black;
  border-radius: 5px;
  text-align: center;
  letter-spacing: 3px;

  &:hover {
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.hvBgGray};
    transition-duration: .5s;
  }
`

export default RoomLink
