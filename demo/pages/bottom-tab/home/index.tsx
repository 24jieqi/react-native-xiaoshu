import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-xiaoshu'
import Layout from '@/layouts/layout'
import type { BottomTabScreenProps } from '@/routes'

type ScreenProps = BottomTabScreenProps<'Home'>

const Home: React.FC<ScreenProps> = ({ navigation }) => {
  const themeVar = useTheme()

  return (
    <Layout.Page
      headerShown={false}
      headerBackgroundColor={themeVar.background_color_1}
    >
      <Text>Home</Text>

      <View style={Styles.page}>
        <Text style={Styles.title}>react-native-xiaoshu UI 组件库</Text>

        <Text
          style={Styles.demo}
          onPress={() => {
            navigation.navigate('DemoHome')
          }}
        >
          GO DEMO
        </Text>

        <Text
          style={Styles.demo}
          onPress={() => {
            navigation.navigate('CustomHeaderRed')
          }}
        >
          自定义 header 红色
        </Text>

        <Text
          style={Styles.demo}
          onPress={() => {
            navigation.navigate('CustomHeaderPrimary')
          }}
        >
          自定义 header 主题色
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
