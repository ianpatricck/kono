import styled from 'styled-components'

const Chat = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: end;

  nav {
    overflow-y: auto;
    display: flex;
    flex-direction: column-reverse;

    scrollbar-color: dimgray;

    ::-webkit-scrollbar { background-color: transparent }
    ::-webkit-scrollbar-thumb { background-color: dimgray }
  }

  main {
    display: flex;
    flex-direction: column;
  }
`

export default Chat
