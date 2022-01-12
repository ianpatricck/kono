import styled from 'styled-components'

const SendMessageForm = styled.form`
  display: flex;
  justify-content: center;

  div {
    display: flex;
    width: 75%;
    justify-content: space-between;
  }

  input {
    background-color: ${(props) => props.theme.backgroundMessageArea};
    border: none;
    width: 75%;
    resize: none; 
    font-size: 15pt;
    color: white;
    padding: 1em;
    border-radius: 20px 0 0 20px;
    font-family: 'Andika';
  }

  button {
    width: 25%;
    border: none;
    background-color: ${(props) => props.theme.buttonSendMessageBgColor};
    color: white;
    border-radius: 0 20px 20px 0; 
    font-size: 15pt;

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.buttonSendMessageBgColorHover};
    }
  }
`

export default SendMessageForm
