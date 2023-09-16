import { NavigationContainer } from '@react-navigation/native'
import NativeStack from './stack.routes'

export default function Routes() {
  return (
    <NavigationContainer>
      <NativeStack />
    </NavigationContainer>
  )
}
