import React from 'react'
import { Text } from 'react-native'

import { useThemeTokens } from '@fruits-chain/react-native-xiaoshu'

import Layout from '@/layouts/layout'
import type { RootStackScreenProps } from '@/routes'

type ScreenProps = RootStackScreenProps<'CustomHeaderPrimary'>

const CustomHeaderPrimary: React.FC<ScreenProps> = ({ navigation }) => {
  const TOKENS = useThemeTokens()

  return (
    <Layout.Page
      title="CustomHeaderPrimary"
      barStyle="light-content"
      headerBackgroundColor={TOKENS.brand_6}
      headerTintColor={TOKENS.white}>
      <Text
        onPress={() => {
          navigation.navigate('CustomHeaderRed')
        }}>
        GO Red
      </Text>
    </Layout.Page>
  )
}

export default CustomHeaderPrimary
