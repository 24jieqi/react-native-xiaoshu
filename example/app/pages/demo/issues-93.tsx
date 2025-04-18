import { Tabs } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { Text } from 'react-native'

import Layout from '~/layouts/layout'

const Issues93 = () => {
  return (
    <Layout.Page>
      <Tabs
        theme={{
          tab_bar_text_font_weight: '400',
          tab_bar_active_text_font_weight: '900',
        }}>
        <Tabs.TabPane key="1" tab="第一个">
          <Text>1</Text>
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="第二个">
          <Text>2</Text>
        </Tabs.TabPane>
      </Tabs>
    </Layout.Page>
  )
}

export default Issues93
