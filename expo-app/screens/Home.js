import { View, Text } from 'react-native'

import GlobalWrapper from '../styles/GlobalWrapper'

import {
  HomeDisplay,
  Title,
  FormView,
  UserInput,
  SignInButton,
  SignInText
} from '../styles/Home'

export default function Home() {
  return (
    <GlobalWrapper>
      <HomeDisplay>
        <Title>Kono</Title>
    
        <FormView>
          <UserInput placeholder="Username" placeholderTextColor="gray" />  
          <SignInButton onPress={console.log('hello')}>
            <SignInText>Enter</SignInText>
          </SignInButton>
        </FormView>
      </HomeDisplay>
    </GlobalWrapper>
  )
}
