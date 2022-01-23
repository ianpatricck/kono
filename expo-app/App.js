import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home'
import Room from './screens/Room'

import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { useFonts } from 'expo-font'

const Stack = createNativeStackNavigator()

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Andika': require('./fonts/Andika.ttf'),
    'M Plus': require('./fonts/MPlus.ttf'),
    'Russo One': require('./fonts/RussoOne.ttf'),
  })

  if (!fontsLoaded) {
    return <></>
  } else {
      return (
        <ThemeProvider theme={theme}>
            <NavigationContainer initialRouteName="Home">
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Room" component={Room} />
              </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
      );
  }
}

