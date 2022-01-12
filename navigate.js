import Main from './components/main'
import fullInfo from './components/fullInfo'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator()
 
export default function MainStack() {

  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="main"
          component={Main}
          options={{ title: 'Новостная лента' }} />

        <Stack.Screen
          name="fullInfo"
          component={fullInfo}
          options={{ title: 'Статья' }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}
