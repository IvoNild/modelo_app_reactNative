import {
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  ScrollView,
  StyleSheet,
  StatusBar
} from 'react-native'
import { useHeaderHeight } from '@react-navigation/elements'

export default function Form({ children, headerAvailable = true, padding }) {
  const headerHeight = headerAvailable ? useHeaderHeight() + 10 : 10

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          backgroundColor: '#fff'
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            padding: 20,
            paddingTop: headerAvailable
              ? padding
              : Platform.OS === 'android'
              ? StatusBar.currentHeight + padding * 2
              : padding * 2,
            alignContent: 'center'
          }}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {}
})
