import type { BottomTabNavigationProp as BottomTabNavigationPropOriginal } from '@react-navigation/bottom-tabs'
import type { CompositeNavigationProp } from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native'
import type {
  StackScreenProps,
  StackNavigationProp,
} from '@react-navigation/stack'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import BackArrow from '~/components/back-arrow'
import { useThemeDark } from '~/contexts/theme'
import Benchmark from '~/pages/demo/benchmark'
import CustomHeaderPrimary from '~/pages/demo/custom-header-primary'
import CustomHeaderRed from '~/pages/demo/custom-header-red'
import Issues85 from '~/pages/demo/issues-85'
import Issues91 from '~/pages/demo/issues-91'
import Issues93 from '~/pages/demo/issues-93'
import PopupComment from '~/pages/demo/popup-comment'
import PopupTextInput from '~/pages/demo/popup-text-input'

import type { BottomTabParamList } from './bottom-tab'
import TabsView from './bottom-tab'
import { buildHeaderTitleStyle, darkTheme, lightTheme } from './config'
import type { DemoPaths } from './demo-config'
import { demoConfigs } from './demo-config'

/** 当前所有 Stack 路由的参数 */
export type RootStackParamList = {
  Index: undefined
  CustomHeaderRed: undefined
  CustomHeaderPrimary: undefined
  PopupTextInput: undefined
  PopupComment: undefined
  Benchmark: undefined
  Issues85: undefined
  Issues91: undefined
  Issues93: undefined
} & Record<DemoPaths, undefined>

/** Stack 路由的 props */
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>

/** BottomTab 路由的 navigation prop */
export type BottomTabNavigationProp<T extends keyof BottomTabParamList> =
  CompositeNavigationProp<
    BottomTabNavigationPropOriginal<BottomTabParamList, T>,
    StackNavigationProp<RootStackParamList>
  >

/** BottomTab 路由的 props */
export type BottomTabScreenProps<T extends keyof BottomTabParamList> = {
  navigation: BottomTabNavigationProp<T>
}

const Stack = createStackNavigator<RootStackParamList>()

const NestingNavigators: React.FC = () => {
  const isThemeDark = useThemeDark()

  return (
    <NavigationContainer theme={isThemeDark ? darkTheme : lightTheme}>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // cardStyle: sceneContainerStyle,
          headerTitleAlign: 'center',
          headerTitleStyle: buildHeaderTitleStyle(),
          headerBackTitleVisible: false,
          headerLeft: props => BackArrow(props),
          // 默认所有页面都应该用 Layout.Page 包裹
          // headerTintColor: '#11151A',
        }}>
        <Stack.Screen
          name="Index"
          component={TabsView}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="CustomHeaderRed" component={CustomHeaderRed} />

        <Stack.Screen
          name="CustomHeaderPrimary"
          component={CustomHeaderPrimary}
        />

        <Stack.Screen name="PopupTextInput" component={PopupTextInput} />
        <Stack.Screen name="PopupComment" component={PopupComment} />

        <Stack.Screen
          name="Benchmark"
          component={Benchmark}
          // options={{
          //   cardStyle: {
          //     backgroundColor: '#fff',
          //   },
          // }}
        />
        <Stack.Screen name="Issues85" component={Issues85} />
        <Stack.Screen name="Issues91" component={Issues91} />
        <Stack.Screen name="Issues93" component={Issues93} />

        {demoConfigs.map(({ Page, path }) => (
          <Stack.Screen key={path} name={path} component={Page} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NestingNavigators
