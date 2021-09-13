import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '@/pages/bottom-tab/home'
import UserCenter from '@/pages/bottom-tab/user-center'

import { sceneContainerStyle } from './config'

export type BottomTabParamList = {
  Home: undefined
  UserCenter: undefined
}

const Tab = createBottomTabNavigator<BottomTabParamList>()

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={sceneContainerStyle}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: '首页',
          headerShown: false,
          // tabBarIcon: ({ color, size }) => {
          //   return <Icon name="home" size={size} color={color} />;
          // },
        }}
        component={Home}
      />
      <Tab.Screen
        name="UserCenter"
        options={{
          title: '我的',
          headerShown: false,
          // tabBarIcon: ({ color, size }) => {
          //   return <Icon name="user" size={size} color={color} />;
          // },
        }}
        component={UserCenter}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
