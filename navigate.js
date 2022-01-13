import Main from './components/main'
import ShowArticleForm from './components/showArticleForm'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator()

export default function MainStack() {

  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: 'Новостная лента',
            headerStyle: { backgroundColor: "#ff6633", height: 40 },
            headerTitleStyle: { fontWeight: 'bold' }
          }} />

        <Stack.Screen
          name="ShowArticleForm"
          component={ShowArticleForm}
          options={{
            title: 'Статья',
            headerStyle: { backgroundColor: "#ffcc66", height: 40 },
            headerTitleStyle: { fontWeight: 'bold' }
          }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}
