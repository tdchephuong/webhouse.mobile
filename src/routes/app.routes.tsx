import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        showLabel: false
    }}>
      <Tab.Screen name="Home" component = {Home}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default AppRoutes
