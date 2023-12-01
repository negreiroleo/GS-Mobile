import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/welcome'
import SignIn from '../pages/signIn'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component={Welcome}
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name="Signin" 
        component={SignIn} 
        options={{headerShown: false}}
      />
    
    
    </Stack.Navigator>

  )
}