import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { useFonts } from 'expo-font'

import {
  HomeScreen,
  MenuScreen,
  RoomScreen
} from './screens'

const Stack = createNativeStackNavigator()

export default function App() { 

  const [loaded] = useFonts({
    RussoOne: require('./fonts/RussoOne-Regular.ttf'),
    MPlus: require('./fonts/MPlus.ttf'),
    Andika: require('./fonts/Andika-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={ theme }>
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="Menu" component={MenuScreen} /> 
            <Stack.Screen name="Room" component={RoomScreen} /> 
          </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  )
}

