import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/welcome';
import SignIn from '../pages/signIn';
import HomePage from '../pages/homepage';
import Form from '../pages/form';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Welcome" 
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="SignIn"
        component={SignIn} 
        options={{ headerShown: false }}
      />

      <Stack.Screen 
        name="HomePage"
        component={HomePage} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Form"
        component={Form} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
