import React, { useState } from 'react'
import { Text } from 'react-native'
import { Space, Button, Popup } from '@fruits-chain/react-native-xiaoshu'

import Layout from '~/layouts/layout'

const Issues101 = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

  return (
    <Layout.Page>
      <Space>
        <Button
          type="primary"
          text="默认 Popup"
          onPress={() => {
            setVisible1(true)
          }}
        />
      </Space>

      <Popup visible={visible1} position="bottom" safeAreaInsetBottom round>
        <Popup.Header
          title="Popup-1"
          onClose={() => {
            setVisible1(false)
          }}
        />
        <Text>再打开一个 popup</Text>

        <Button
          type="primary"
          text="再打开一个"
          onPress={() => {
            setVisible2(true)
          }}
        />
      </Popup>

      <Popup visible={visible2} position="bottom" safeAreaInsetBottom round>
        <Popup.Header
          title="Popup-2"
          onClose={() => {
            setVisible2(false)
          }}
        />
        <Text>第二个</Text>
      </Popup>
    </Layout.Page>
  )
}

export default Issues101
