import styled from 'styled-components'

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  input {
    border: none;
    border: .1rem solid white;
    border-radius: 4px;
    color: white;
    padding: 15px;
    margin: 15px;
    font-size: 15pt; 
  }

  button {
    background-color: #23c19d;
    color: white;
    font-family: Arial;
    font-size: 18px;
    width: 40%; 
    border: none;
    padding: 13px;
    margin: 2%;
    border-radius: 5px;

    &:hover {
      background-color: #23a69d;
      cursor: pointer;
    }
  } 
`

export default UserForm
