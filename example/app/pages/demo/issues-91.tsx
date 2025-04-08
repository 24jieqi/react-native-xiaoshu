import { Cell, Dialog } from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { TouchableHighlight, View, Text, Pressable } from 'react-native'

import Layout from '~/layouts/layout'

const ViewWrapper: React.FC<React.PropsWithChildren> = ({
  children,
  ...restProps
}) => {
  // eslint-disable-next-line no-console
  console.log('restProps => ', restProps)
  return <View>{children}</View>
}

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

      <TouchableHighlight
        underlayColor="#f5f5f5"
        style={{ backgroundColor: '#eee' }}
        onPress={() => {}}>
        <ViewWrapper>
          <Text>43</Text>
        </ViewWrapper>
      </TouchableHighlight>

      <Pressable
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#098' : '#890',
        })}>
        <ViewWrapper>
          <Text>43</Text>
        </ViewWrapper>
      </Pressable>
    </Layout.Page>
  )
}

export default Issues91
