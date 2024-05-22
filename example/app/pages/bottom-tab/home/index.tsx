import type { TokensType } from '@fruits-chain/react-native-xiaoshu'
import { Blank } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { LocalLangSwitch } from '~/app.context'
import useStyle from '~/hooks/useStyle'
import Layout from '~/layouts/layout'
import type { BottomTabScreenProps } from '~/routes'

type ScreenProps = BottomTabScreenProps<'Home'>

const Home: React.FC<ScreenProps> = ({ navigation }) => {
  const Styles = useStyle(styleCreator)

  return (
    <Layout.Page headerShown={false}>
      <Blank top>
        <Text style={Styles.title}>小暑</Text>
        <Text style={Styles.demo}>🌈 轻量、可靠的 React Native 组件库</Text>
        <LocalLangSwitch />

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

        <Text
          style={Styles.demo}
          onPress={() => {
            navigation.navigate('Benchmark')
          }}>
          Benchmark
        </Text>
      </Blank>
    </Layout.Page>
  )
}

const styleCreator = (t: TokensType) => {
  return StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: t.gray_8,
    },

    demo: {
      marginTop: 20,
      fontSize: 16,
      color: t.gray_7,
    },
  })
}

export default Home
