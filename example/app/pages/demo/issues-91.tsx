import { Cell, Dialog } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'

import Layout from '~/layouts/layout'

const Issues91 = () => {
  return (
    <Layout.Page>
      <Cell
        title="点击"
        onPress={() => {
          Dialog.confirm({
            title: 'Cell',
            message: '哈哈',
          })
        }}
      />
    </Layout.Page>
  )
}

export default Issues91
