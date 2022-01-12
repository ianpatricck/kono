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
  padding: 5px;
  background-color: ${(props) => props.theme.errorBackground};
  border-radius: 2px;
  color: white;
  font-size: 15pt;
  font-family: M Plus;
  font-weight: bold;
  animation: ${slipToLeft} .5s;
`

export default ErrorMessage
