import { StyleSheet, View, Text } from 'react-native'
import { useState } from 'react'

import Input_Text from '../../components/formComponents/inputText'
import Form_container from '../../components/formComponents/form'

export default function NewUser({ navigation }) {
  const [value, setValue] = useState()

  return (
    <Form_container headerAvailable padding={130}>
      <Input_Text
        placeholder="Nome"
        on_change_text={value => {
          setValue(value)
        }}
        input_value={value}
      />
      <Input_Text
        placeholder="Nome"
        on_change_text={value => {
          setValue(value)
        }}
        input_value={value}
      />
      <Input_Text
        placeholder="Nome"
        on_change_text={value => {
          setValue(value)
        }}
        input_value={value}
      />
      <Input_Text
        placeholder="Nome"
        on_change_text={value => {
          setValue(value)
        }}
        input_value={value}
      />
      <Input_Text
        placeholder="Nome"
        on_change_text={value => {
          setValue(value)
        }}
        input_value={value}
      />
      <Input_Text
        placeholder="Nome"
        on_change_text={value => {
          setValue(value)
        }}
        input_value={value}
      />
      <Input_Text
        placeholder="Nome"
        on_change_text={value => {
          setValue(value)
        }}
        input_value={value}
      />
    </Form_container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
