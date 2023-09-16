// import Routes from './src/routes'

import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default function App() {
  // return <Routes />
  return (
    <View styles={styles.container}>
      <Text>Meu primeiro App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
