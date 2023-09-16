import { StyleSheet, View, Text } from 'react-native'
import { useState } from 'react'

import Form from '../../components/formComponents/form'
import InputText from '../../components/formComponents/inputText'
import InputPassword from '../../components/formComponents/inputPassword'
import InputButton from '../../components/formComponents/inputButton'

export default function Login({ navigation }) {
  const [value, setValue] = useState()

  return (
    <Form headerAvailable padding={'70%'}>
      <InputText
        icon="user"
        placeholder="Nome"
        on_change_text={value => {
          setValue(value)
        }}
        input_value={value}
      />
      <InputPassword
        icon="lock"
        placeholder="Palavra-passe"
        on_change_text={value => {
          setValue(value)
        }}
        input_value={value}
      />

      <InputButton
        text="ENTRAR"
        on_press={() => {
          navigation.navigate('bottomTab')
        }}
        button_color="#2687e2"
      />
    </Form>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
