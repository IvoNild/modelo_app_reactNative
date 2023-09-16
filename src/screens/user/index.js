import { StyleSheet, View, Text } from 'react-native'

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
