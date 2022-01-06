import styled from 'styled-components'

const RoomStyle = styled.div`
  
  header {
    display: flex;
    flex-direction: row;
    height: 10vh;
    background-color: ${(props) => props.theme.backgroundRoomNavbar};
    overflow-x: scroll;
    
    scrollbar-color: ${(props) => props.theme.background} transparent;

    ::-webkit-scrollbar { background-color: transparent }
    ::-webkit-scrollbar-thumb { background-color: dimgray }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      margin: 10px;
      width: 90px;

      color: white;
      font-family: 'M PLUS';
      font-weight: bold;

      &:hover {
        cursor: default;
      }
    }
  }
`

export default RoomStyle
