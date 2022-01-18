import styled from 'styled-components'

const MenuDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;

  h1 {
    color: ${(props) => props.theme.colors.clGray};
    font-size: 25pt;
    font-family: M Plus;
    font-weight: bold;
    margin-bottom: 10vh;
    letter-spacing: 10px;
  }
`

export default MenuDisplay
