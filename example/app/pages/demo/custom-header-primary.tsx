import { Theme } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { Text } from 'react-native'

import Layout from '~/layouts/layout'
import type { RootStackScreenProps } from '~/routes'

type ScreenProps = RootStackScreenProps<'CustomHeaderPrimary'>

const CustomHeaderPrimary: React.FC<ScreenProps> = ({ navigation }) => {
  const TOKENS = Theme.useThemeTokens()

  return (
    <Layout.Page
      title="CustomHeaderPrimary"
      barStyle="light-content"
      headerBackgroundColor={TOKENS.brand_6}
      headerTintColor={TOKENS.white}>
      <Text
        onPress={() => {
          navigation.navigate('CustomHeaderRed')
        }}
        style={{
          color: TOKENS.black,
        }}>
        GO Red
      </Text>
    </Layout.Page>
  )
}

export default CustomHeaderPrimary
