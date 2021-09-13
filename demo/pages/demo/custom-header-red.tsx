import React from 'react'
import { Text } from 'react-native'
import { useTheme } from 'react-native-xiaoshu'

import Layout from '@/layouts/layout'
import type { RootStackScreenProps } from '@/routes'

type ScreenProps = RootStackScreenProps<'CustomHeaderRed'>

const CustomHeaderRed: React.FC<ScreenProps> = ({ navigation }) => {
  const themeVar = useTheme()

  return (
    <Layout.Page
      title="CustomHeaderRed"
      barStyle="light-content"
      headerBackgroundColor={themeVar.error}
      headerTintColor="#fff">
      <Text
        onPress={() => {
          navigation.navigate('CustomHeaderPrimary')
        }}>
        GO Primary
      </Text>
    </Layout.Page>
  )
}

export default CustomHeaderRed
