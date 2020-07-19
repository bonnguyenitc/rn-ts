import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import ROUTE_NAME from './RouterName';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      lazy
    >
      <Tab.Screen
        name={ROUTE_NAME.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) =>
            <Icon name='home' color={color} size={focused ? 20 : 18} />
        }}
      />
      <Tab.Screen
        name={ROUTE_NAME.Account}
        component={LoginScreen}
        options={{
          tabBarIcon: ({ focused, color }) =>
            <Icon name='user' color={color} size={focused ? 20 : 18} />
        }}
      />
    </Tab.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTE_NAME.Main}
        headerMode="none"
      >
        <Stack.Screen
          name={ROUTE_NAME.Main}
          component={Tabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator