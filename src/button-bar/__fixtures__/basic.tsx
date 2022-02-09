/**
 * title: 基础用法
 * desc: 可以传入一个 buttons 按钮数组，也可以嵌套子元素。
 */

import React from 'react'
import { ScrollView } from 'react-native'
import {
  ButtonBar,
  Button,
  Icon,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const BasicButtonBar: React.FC = () => {
  return (
    <>
      <ScrollView>
        <Space>
          <ButtonBar
            safeAreaInsetBottom={false}
            buttons={[
              {
                text: '主要按钮1',
                type: 'primary',
                onPress: () => {
                  console.log('??')
                },
              },
              {
                text: '次要按钮2',
                type: 'hazy',
                onPress: () => {
                  console.log('??')
                },
              },
              {
                text: '次要按钮3',
                type: 'hazy',
                onPress: () => {
                  console.log('??')
                },
              },
              {
                text: '次要按钮4',
                type: 'primary',
                onPress: () => {
                  console.log('??')
                },
              },
              {
                text: '次要按钮5',
                type: 'primary',
                onPress: () => {
                  console.log('??')
                },
              },
            ]}
          />

          <ButtonBar
            safeAreaInsetBottom={false}
            buttons={[
              {
                text: '主要按钮1',
                type: 'primary',
                onPress: () => {
                  console.log('??')
                },
              },
              {
                text: '次要按钮2',
                type: 'hazy',
                onPress: () => {
                  console.log('??')
                },
              },
              {
                text: '次要按钮3次要按钮3',
                type: 'hazy',
                onPress: () => {
                  console.log('??')
                },
              },
            ]}
          />
        </Space>
      </ScrollView>

      <ButtonBar alone>
        <Button
          text="新增数据"
          type="primary"
          renderLeftIcon={(color, size) => (
            <Icon.PlusOutline color={color} size={size} />
          )}
        />
      </ButtonBar>
    </>
  )
}

export default BasicButtonBar
