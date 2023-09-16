import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()
import NewUser from '../screens/home/newUser'
import Home from '../screens/home'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function BottomTab() {
  return (
    <Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#2687e2'
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          )
        }}
        name="home"
        component={Home}
      />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="plus" color={color} size={size} />
          )
        }}
        name="newUser"
        component={NewUser}
      />
    </Navigator>
  )
}
