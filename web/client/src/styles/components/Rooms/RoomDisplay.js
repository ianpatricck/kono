import styled from 'styled-components'

const RoomDisplay = styled.div`
  
  header {
    position: fixed;
    display: flex;
    flex-direction: row;
    height: 10vh;
    width: 100%;
    background-color: ${(props) => props.theme.backgroundRoomNavbar};
    overflow-x: scroll;
    
    scrollbar-color: ${(props) => props.theme.background} transparent;

    ::-webkit-scrollbar { background-color: transparent }
    ::-webkit-scrollbar-thumb { background-color: dimgray }

    button {
      background-color: rgb(50, 60, 120);
      color: rgb(150, 150, 150);
      border: none;
      border-radius: 5px;
      font-family: 'M PLUS';
      font-weight: bold;
      font-size: 10pt;
      height: 50%;
      margin: 10px;
      padding: 5px;

      &:hover {
        cursor: pointer;
        background-color: rgba(50, 60, 120, .5);
        color: rgb(200, 200, 200);
        transition-duration: .5s;
      }
    }

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

export default RoomDisplay
