/**
 * title: 基础用法
 * desc: 可以传入一个 buttons 按钮数组，也可以嵌套子元素。
 */

import React from 'react'
import { ScrollView, View } from 'react-native'
import {
  ButtonBar,
  Button,
  Space,
  Field,
} from '@fruits-chain/react-native-xiaoshu'
import { PlusOutline } from '@fruits-chain/icons-react-native'

const BasicButtonBar: React.FC = () => {
  return (
    <>
      <ScrollView>
        <Space head gap={100}>
          <View style={{ backgroundColor: '#fff', paddingVertical: 12 }}>
            <ButtonBar
              safeAreaInsetBottom={false}
              buttons={[
                {
                  text: '注意有分割线',
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
          </View>

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

          <ButtonBar
            blankSize="l"
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

          <Field.TextInput
            title="keyboardShowNotRender"
            placeholder="按钮隐藏"
          />

          <ButtonBar
            blankSize="s"
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

      <ButtonBar alone keyboardShowNotRender>
        <Button
          text="新增数据"
          type="primary"
          renderLeftIcon={(color, size) => (
            <PlusOutline color={color} size={size} />
          )}
        />
      </ButtonBar>
    </>
  )
}

export default BasicButtonBar
