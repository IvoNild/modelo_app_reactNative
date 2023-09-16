import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../screens/login'
import Profile from '../screens/user'
import BottomTab from './tab.routes'
const { Screen, Navigator } = createNativeStackNavigator()

export default function NativeStack() {
  return (
    <Navigator
      initialRouteName="login
    "
    >
      <Screen name="login" component={Login} />
      <Screen
        options={{
          headerShown: false
        }}
        name="bottomTab"
        component={BottomTab}
      />
      <Screen name="profile" component={Profile} />
    </Navigator>
  )
}
