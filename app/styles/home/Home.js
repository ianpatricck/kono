import styled from 'styled-components/native'

const HomeDisplay = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Title = styled.Text`
  font-size: 25px;
  color: white;
  font-family: 'RussoOne';
`

const UserForm = styled.View`
  margin: 5%;
  width: 100%;
  display: flex;
  align-items: center;
`

const SetUsernameInput = styled.TextInput`
  border: 1px solid white;
  border-radius: 4px;
  padding: 15px;
  margin: 15px;
  font-size: 20px;
  font-family: 'MPlus';
  width: 75%;
  color: white;
`

const LoginButtonContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.buttonSuccessBgColor};
  width: 30%; 
  border: none;
  padding: 13px;
  margin: 2%;
  border-radius: 5px;
`

const LoginButtonText = styled.Text`
  color: ${(props) => props.theme.buttonSuccessColor};
  font-size: 18px;
  text-align: center;
  font-family: 'MPlus';
`

const Error = styled.Text`
  margin-top: 15px;
  padding: 5px;
  background-color: ${(props) => props.theme.errorBackground};
  border-radius: 2px;
  color: white;
  font-size: 15px;
  font-weight: bold;
`

export { 
  HomeDisplay, 
  Title,
  UserForm, 
  SetUsernameInput,
  LoginButtonContainer,
  LoginButtonText,
  Error
}
