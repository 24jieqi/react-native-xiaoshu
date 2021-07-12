import React from 'react'
import { View, Text } from 'react-native'
import Layout from '@/layouts/layout'
import type { BottomTabScreenProps } from '@/routes'

type ScreenProps = BottomTabScreenProps<'Home'>

const Home: React.FC<ScreenProps> = ({ navigation }) => {
  return (
    <Layout.Page showHeader={false}>
      <Text>Home</Text>

      <View>
        <Text
          onPress={() => {
            navigation.navigate('DemoHome')
          }}>
          GO DEMO
        </Text>
      </View>
    </Layout.Page>
  )
}

export default Home
