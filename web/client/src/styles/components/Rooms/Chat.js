import styled from 'styled-components'

const Chat = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: end;

  nav {
    overflow-y: scroll;
    
    scrollbar-color: dimgray;

    ::-webkit-scrollbar { background-color: transparent }
    ::-webkit-scrollbar-thumb { background-color: dimgray }


  }
`

export default Chat
