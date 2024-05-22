import { Theme } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { Text } from 'react-native'

import Layout from '~/layouts/layout'
import type { RootStackScreenProps } from '~/routes'

type ScreenProps = RootStackScreenProps<'CustomHeaderRed'>

const CustomHeaderRed: React.FC<ScreenProps> = ({ navigation }) => {
  const TOKENS = Theme.useThemeTokens()

  return (
    <Layout.Page
      title="CustomHeaderRed"
      barStyle="light-content"
      headerBackgroundColor={TOKENS.red_6}
      headerTintColor={TOKENS.white}>
      <Text
        onPress={() => {
          navigation.navigate('CustomHeaderPrimary')
        }}
        style={{
          color: TOKENS.black,
        }}>
        GO Primary
      </Text>
    </Layout.Page>
  )
}

export default CustomHeaderRed
