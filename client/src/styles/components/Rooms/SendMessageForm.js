import styled from 'styled-components'

const SendMessageForm = styled.form`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;

  textarea {
    background-color: transparent;
    border: none;
    width: 75%;
  }

  button {
    width: 25%;
    background-color: gray;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`

export default SendMessageForm
