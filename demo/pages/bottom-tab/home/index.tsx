import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Layout from '@/layouts/layout'
import type { BottomTabScreenProps } from '@/routes'
import { sceneContainerStyle } from '@/routes/config'

type ScreenProps = BottomTabScreenProps<'Home'>

const Home: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Layout.Page
      headerShown={false}
      headerBackgroundColor={sceneContainerStyle.backgroundColor as string}>
      <View style={Styles.page}>
        <Text style={Styles.title}>小暑</Text>
        <Text>🌈 轻量、可靠的 React Native 组件库</Text>

        <Text
          style={Styles.demo}
          onPress={() => {
            navigation.navigate('DemoHome')
          }}>
          查看所有组件 DEMO
        </Text>

        <Text
          style={Styles.demo}
          onPress={() => {
            navigation.navigate('CustomHeaderRed')
          }}>
          自定义 header 红色 Header
        </Text>

        <Text
          style={Styles.demo}
          onPress={() => {
            navigation.navigate('CustomHeaderPrimary')
          }}>
          自定义 header 主题色 Header
        </Text>

        <Text
          style={Styles.demo}
          onPress={() => {
            navigation.navigate('PopupTextInput')
          }}>
          弹出层中有输入框
        </Text>
      </View>
    </Layout.Page>
  )
}

const Styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  demo: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
})

export default Home
