import React from 'react'
import { Text } from 'react-native'
import { useTheme } from 'react-native-xiaoshu'

import Layout from '@/layouts/layout'
import type { RootStackScreenProps } from '@/routes'

type ScreenProps = RootStackScreenProps<'CustomHeaderPrimary'>

const CustomHeaderPrimary: React.FC<ScreenProps> = ({ navigation }) => {
  const themeVar = useTheme()

  return (
    <Layout.Page
      title="CustomHeaderPrimary"
      barStyle="light-content"
      headerBackgroundColor={themeVar.primary}
      headerTintColor="#fff"
    >
      <Text
        onPress={() => {
          navigation.navigate('CustomHeaderRed')
        }}
      >
        GO Red
      </Text>
    </Layout.Page>
  )
}

export default CustomHeaderPrimary
