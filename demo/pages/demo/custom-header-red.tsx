import React from 'react'
import { Text } from 'react-native'

import { useThemeTokens } from '@fruits-chain/react-native-xiaoshu'

import Layout from '@/layouts/layout'
import type { RootStackScreenProps } from '@/routes'

type ScreenProps = RootStackScreenProps<'CustomHeaderRed'>

const CustomHeaderRed: React.FC<ScreenProps> = ({ navigation }) => {
  const TOKENS = useThemeTokens()

  return (
    <Layout.Page
      title="CustomHeaderRed"
      barStyle="light-content"
      headerBackgroundColor={TOKENS.red_6}
      headerTintColor={TOKENS.white}>
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
