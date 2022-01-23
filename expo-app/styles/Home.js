import styled from 'styled-components/native'

const HomeDisplay = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
`

const Title = styled.Text`
  color: ${(props) => props.theme.colors.clPrimary};
  font-family: 'Russo One';
  font-size: 30;
`

const FormView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const UserInput = styled.TextInput`
  border: 1px solid black;
  border-radius: 4px;
  width: 50%;
  color: white;
  padding: 15px;
  margin: 15px;
  font-size: 15px;
  background-color: ${(props) => props.theme.colors.bgGray};
`

const SignInButton = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bgSecondary};
  width: 40%; 
  border: none;
  padding: 13px;
  margin: 2%;
  border-radius: 5px;

`
const SignInText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

export {
  HomeDisplay,
  Title,
  FormView,
  UserInput,
  SignInButton,
  SignInText
}

