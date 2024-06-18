import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import RecoverPassword from '../screens/RecoverPassword';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
    
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="RecoverPassword" component={RecoverPassword} options={{ headerShown: false }}/>
        <Stack.Screen
            name="App"
            component={AppNavigator}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
