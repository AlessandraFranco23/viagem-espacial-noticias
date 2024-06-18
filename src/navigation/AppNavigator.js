import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Theme from '../screens/Theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

function AppNavigator() {
  return (
    // <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Theme"
          component={Theme}
          options={{
            tabBarLabel: 'Theme',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="theme-light-dark" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default AppNavigator;
