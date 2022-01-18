import styled from 'styled-components'

const SendingMessageContainer= styled.div`

  display: flex;
  flex-direction: column; 
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: row;
    padding: 5px 5px 5px 10px;
    
    span {
      font-family: 'M PLUS';
      margin: 5px;
      font-size: 20px;
    }

    span#my_user {
      color: ${(props) => props.theme.colors.clAuthor};
    }

    span#other_user {
      color: ${(props) => props.theme.colors.clUsername};
    }

    small {
      font-family: 'M PLUS';
      color: ${(props) => props.theme.colors.clGray};
    }
  }

  p {
    font-family: 'Andika';
    padding: 15px;
    background-color: ${(props) => props.theme.colors.bgDark};
    color: white;
    font-size: 20px;
  }

  @media (min-width: 550px) {
    display: flex;
    align-items: center;

    p {
      border-radius: 30px;
    }

    div, p {
      width: 75vw;
    } 
  }
`

export default SendingMessageContainer
