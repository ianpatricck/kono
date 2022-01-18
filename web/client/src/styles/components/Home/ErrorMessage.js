import styled, { keyframes } from 'styled-components'

const slipToLeft = keyframes`
  from {
    margin-left: 35px;
  } to {
    margin-left: 0;
  }
`

const ErrorMessage = styled.span`
  margin-top: 15px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.bgDanger};
  border-radius: 1px;
  color: white;
  font-size: 15pt;
  font-family: Andika;
  font-weight: bold;
  animation: ${slipToLeft} .5s;
`

export default ErrorMessage
