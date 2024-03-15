import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

import Layout from '~/layouts/layout'
import type * as Routes from '~/routes'

type DemoFullProps = Routes.RootStackScreenProps<'DemoFull'>

const DemoFull: React.FC<DemoFullProps> = () => {
  return (
    <Layout.FullPage filled>
      <Image
        source={{ uri: 'https://img.yzcdn.cn/vant/cat.jpeg' }}
        style={{ width: '100%', height: 100 }}
      />

      <ScrollView>
        <Text>
          全屏，没有状态栏，可以配合头部是图片的布局，个人中心、个人主页居多，或者头部导航动态渐变透明度，需要每个页面手动维护导航栏
        </Text>

        <View style={{ height: 800 }} />

        <Text>底部底部底部底部底部底部</Text>
      </ScrollView>
    </Layout.FullPage>
  )
}

export default DemoFull
