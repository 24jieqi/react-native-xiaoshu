import React from 'react'
import { Text, Image } from 'react-native'

import Layout from '~/layouts/layout'
import type { BottomTabScreenProps } from '~/routes'

type ScreenProps = BottomTabScreenProps<'UserCenter'>

const UserCenter: React.FC<ScreenProps> = () => {
  return (
    <Layout.FullPage filled>
      <Image
        source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
        style={{ width: '100%', height: 200 }}
      />

      <Text>UserCenter</Text>
    </Layout.FullPage>
  )
}

export default UserCenter
