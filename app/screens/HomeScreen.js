import { useState } from 'react'
import { Text, Animated, View } from 'react-native';

import Wrapper from '../styles/Wrapper'

import {
  UserLogin,
  Title,
  UserForm,
  SetUsernameInput,
  LoginButtonContainer,
  LoginButtonText,
  Error

} from '../styles/home'

function ShowErrorMessage({ error }) {

  const [marginLeftAnim, setMarginLeftAnim] = useState(new Animated.Value(35))

  Animated.timing(marginLeftAnim, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: false
  }).start()

  return (
    <View>
      <Animated.View style={{ marginLeft: marginLeftAnim }}>    
        <Error>{error}</Error>
      </Animated.View>
    </View>
  )
}

export default function HomeScreen({ navigation }) {

  const [fontLoaded, setFontLoaded] = useState(false)

  const [username, setUsername] = useState("")
  const [error, setError] = useState("") 

  const submitUsername = () => {  
    if (username === "") {
      return setError("Empty username")
    }
 
    navigation.push('Menu', { username: username })
  }

  return (
    <Wrapper>
      <UserLogin>
    
      <Title>Kono chat</Title>

          <UserForm>
            <SetUsernameInput
              placeholder="Username"
              placeholderTextColor="darkgray"
              value={username}
              onChangeText={setUsername}
            />

            <LoginButtonContainer onPress={submitUsername}>
              <LoginButtonText>Enter</LoginButtonText>
            </LoginButtonContainer>
          </UserForm>

          { error ? <ShowErrorMessage error={error} /> : null }

      </UserLogin>
    </Wrapper>
  )
}

