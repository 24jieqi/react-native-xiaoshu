/**
 * title: 软键盘垫片
 * description: 适用于底部弹出层、内部有输入框，且布局不适合是独立页面的场景，针对 `iOS` 自动监听软键盘弹出、收齐。独立页面可以使用 `keyboard-aware-scroll-view` 实现，参考 `demo/pages/demo/popup-text-input.tsx`。
 */

import React, { useState } from 'react'
import { Keyboard, ScrollView, Text } from 'react-native'

import {
  Blank,
  Popup,
  Button,
  TextInput,
  ButtonBar,
} from '@fruits-chain/react-native-xiaoshu'

const BasicPopupKeyboardShim: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState<string[]>([])

  return (
    <Blank top>
      <Button
        onPress={() => {
          setVisible(true)
        }}
        text="底部弹出、内部有输入框"
      />

      <Popup
        visible={visible}
        position="bottom"
        round
        onClose={() => {
          Keyboard.dismiss()
        }}>
        <Popup.Header
          title="底部弹出、内部有输入框"
          onClose={() => {
            setVisible(false)
          }}
        />
        <Blank>
          <Text>某些有趣的</Text>
          <TextInput
            bordered
            placeholder="请输入备注"
            onChangeText={text => {
              setData(
                text ? new Array(20).fill(0).map((_, i) => `${text}-${i}`) : [],
              )
            }}
          />
        </Blank>

        <ScrollView style={{ maxHeight: 200 }}>
          {data.map(item => {
            return (
              <Text
                key={item}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                }}>
                {item}
              </Text>
            )
          })}
        </ScrollView>

        {/* 放置操作按钮和内容之间，ButtonBar 在 Android 端监听软键盘出现会隐藏，为了保持一致的交互 */}
        <Popup.KeyboardShim />

        <ButtonBar alone>
          <Button text="保存" />
        </ButtonBar>
      </Popup>
    </Blank>
  )
}

export default BasicPopupKeyboardShim
