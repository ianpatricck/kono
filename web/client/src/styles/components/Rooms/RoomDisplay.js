import styled from 'styled-components'

const RoomDisplay = styled.div`
  
  header {
    position: fixed;
    display: flex;
    flex-direction: row;
    height: 10vh;
    width: 100%;
    background-color: ${(props) => props.theme.colors.bgDark};
    overflow-x: scroll;
    
    scrollbar-color: ${(props) => props.theme.colors.bgPrimary} transparent;

    ::-webkit-scrollbar { background-color: transparent }
    ::-webkit-scrollbar-thumb { background-color: dimgray }

    button {
      background-color: ${(props) => props.theme.colors.bgPrimary};
      color: ${(props) => props.theme.colors.clPrimary};
      border: none;
      border-radius: 5px;
      font-family: 'M PLUS';
      font-weight: bold;
      font-size: 15pt;
      height: 50%;
      margin: 10px;
      padding: 5px;

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.hvBgPrimary};
        color: ${(props) => props.theme.colors.hvClLight};
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
