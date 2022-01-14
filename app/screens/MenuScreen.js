import { StyleSheet, Text, View } from 'react-native';

export default function MenuScreen({ route }) {
  
  const { username } = route.params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Menu Screen</Text>

      <Text>{ username }</Text>
    </View>
  )
}

