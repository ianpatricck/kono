import styled from 'styled-components'

const HomeDisplay = styled.form`
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

  input::placeholder {
    color: white;
  }

  button {
    background-color: ${(props) => props.theme.buttonSuccessBgColor};
    color: ${(props) => props.theme.buttonSuccessColor};
    font-family: Arial;
    font-size: 18px;
    width: 40%; 
    border: none;
    padding: 13px;
    margin: 2%;
    border-radius: 5px;

    &:hover {
      background-color: ${(props) => props.theme.buttonSuccessBgColorHover};
      cursor: pointer;
    }
  } 
`

export default HomeDisplay
