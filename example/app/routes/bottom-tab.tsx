import {
  HomeOutline,
  IdentificationOutline,
} from '@fruits-chain/icons-react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import Home from '~/pages/bottom-tab/home'
import UserCenter from '~/pages/bottom-tab/user-center'

export type BottomTabParamList = {
  Home: undefined
  UserCenter: undefined
}

const Tab = createBottomTabNavigator<BottomTabParamList>()
const TabBarIconHome = ({ color, size }: { color: string; size: number }) => (
  <HomeOutline size={size} color={color} />
)
const TabBarIconUser = ({ color, size }: { color: string; size: number }) => (
  <IdentificationOutline size={size} color={color} />
)

const BottomTab: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: '首页',
          headerShown: false,
          tabBarIcon: TabBarIconHome,
        }}
        component={Home}
      />
      <Tab.Screen
        name="UserCenter"
        options={{
          tabBarLabel: '我的',
          headerShown: false,
          tabBarIcon: TabBarIconUser,
        }}
        component={UserCenter}
      />
    </Tab.Navigator>
  )
}

export default BottomTab
