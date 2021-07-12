import React from 'react'
import type { CompositeNavigationProp } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import type {
  StackScreenProps,
  StackNavigationProp,
} from '@react-navigation/stack'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import type { BottomTabNavigationProp as BottomTabNavigationPropOriginal } from '@react-navigation/bottom-tabs'

// import ListView from '@/pages/list/list';
// import DetailsView from '@/pages/details/details';

import type { BottomTabParamList } from './bottom-tab'
import TabsView from './bottom-tab'
import type { DemoPaths } from './demo-config'
import { demoConfigs } from './demo-config'

/** 当前所有 Stack 路由的参数 */
type RootStackParamList = {
  Home: undefined
  // List: undefined;
  // Details: {
  //   id: number;
  // };
} & Record<DemoPaths, undefined>

/** Stack 路由的 props */
export type RootStackScreenProps<
  T extends keyof RootStackParamList
> = StackScreenProps<RootStackParamList, T>

/** BottomTab 路由的 navigation prop */
export type BottomTabNavigationProp<
  T extends keyof BottomTabParamList
> = CompositeNavigationProp<
  BottomTabNavigationPropOriginal<BottomTabParamList, T>,
  StackNavigationProp<RootStackParamList>
>

/** BottomTab 路由的 props */
export type BottomTabScreenProps<T extends keyof BottomTabParamList> = {
  navigation: BottomTabNavigationProp<T>
}

const Stack = createStackNavigator<RootStackParamList>()

const NestingNavigators: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <Stack.Screen name="Home" component={TabsView} />

        {/* <Stack.Screen name="List" component={ListView} /> */}

        {/* <Stack.Screen name="Details" component={DetailsView} /> */}

        {demoConfigs.map(dc => (
          <Stack.Screen key={dc.path} name={dc.path} component={dc.page} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NestingNavigators
