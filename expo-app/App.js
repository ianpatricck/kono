import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home'
import Room from './screens/Room'

import { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'

const Stack = createNativeStackNavigator()

export default function App() {
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

