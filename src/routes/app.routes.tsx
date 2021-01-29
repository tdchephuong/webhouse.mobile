import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
// import Settings from '../screens/app/Settings'
// import Chat from '../screens/app/Chat'
// import History from '../screens/app/History'

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
