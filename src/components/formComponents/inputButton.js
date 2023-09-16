import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function InputButton({ text, on_press, button_color }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: button_color }]}
      onPress={on_press}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
