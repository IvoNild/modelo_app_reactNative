import { TextInput, StyleSheet, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function InputText({
  placeholder,
  on_change_text,
  input_value,
  icon
}) {
  return (
    <View style={styles.inputContainer}>
      <FontAwesome5 style={styles.icon} name={icon} />
      <TextInput
        placeholder={placeholder}
        onChangeText={on_change_text}
        value={input_value}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#cacaca',
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 10
  },
  icon: {
    width: 50,
    color: '#7d7d7d',
    padding: 15,
    fontSize: 18
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingEnd: 20,
    color: '#7d7d7d'
  }
})
