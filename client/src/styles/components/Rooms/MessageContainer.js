import styled from 'styled-components'

const SendingMessageContainer= styled.div`

  display: flex;
  flex-direction: column; 
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: row;
    padding: 5px 5px 5px 10px;
    background-color: ${(props) => props.theme.messageBgColor};

    
    span {
      font-family: 'M PLUS';
      margin: 2px;
      background-color: transparent;
    }

    span#my_user {
      color: ${(props) => props.theme.authorUsernameMessageColor};
    }

    span#other_user {
      color: ${(props) => props.theme.defaultUsernameMessageColor};
    }

    small {
      font-family: 'M PLUS';
      margin: 3px;
      color: ${(props) => props.theme.timeMessageColor};
      background-color: transparent;
    }
  }

  p {
    font-family: 'Andika';
    padding: 0px 0 5px 10px;
    background-color: ${(props) => props.theme.messageBgColor};
    color: ${(props) => props.theme.messageColor};
  }

  @media (min-width: 550px) {
    display: flex;
    align-items: center;

    div { 
      padding: 5px 5px 5px 10px; 
      border-radius: 30px 0 0 0;
    }
    
    p {
      border-radius: 0 0 50px 0;
    }

    div, p {
      width: 75vw;
    } 
  }

`

export default SendingMessageContainer
