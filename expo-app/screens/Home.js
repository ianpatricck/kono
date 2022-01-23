import { useState } from 'react'
import { View, Text, Animated } from 'react-native'

import GlobalWrapper from '../styles/GlobalWrapper'

import {
  HomeDisplay,
  Title,
  FormView,
  UserInput,
  SignInButton,
  SignInText,
  ErrorMessageText
} from '../styles/Home'

export default function Home() {

  const [username, setUsername] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [errorMessageInitialPos, setErrorMessageInitialPos] = useState(new Animated.Value(40))

  const submitUsername = () => {
    if (username === '' || username === undefined) {

      setErrorMessage('Empty username')

      Animated.timing(errorMessageInitialPos, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: false
      }).start()
    
    } else {
      console.log("ok")
    }
  }

  return (
    <GlobalWrapper>
      <HomeDisplay>
        <Title>Kono</Title>
    
        <FormView>
          <UserInput 
            placeholder="Username" 
            placeholderTextColor="gray" 
            onChange={(e) => setUsername(e.target.value)} />

          <SignInButton onPress={submitUsername}>
            <SignInText>Enter</SignInText>
          </SignInButton>
        </FormView>

        {errorMessage ? (
          
          <Animated.View style={{ marginLeft: errorMessageInitialPos }}>
            <ErrorMessageText>{errorMessage}</ErrorMessageText>
          </Animated.View>
        
        ) : null }

      </HomeDisplay>
    </GlobalWrapper>
  )
}
