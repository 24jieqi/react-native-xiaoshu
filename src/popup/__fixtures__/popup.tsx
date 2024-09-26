/**
 * title: Popup
 * description: 通过 `position` 控制弹出层出现的动画。`Popup` 组件已经嵌套在 `Portal` 组件内，可以随意放置位置都会在根节点渲染，`Popup.PopupComponent` 则未被嵌套，需要结合业务自行安排。
 */

import React, { useState } from 'react'
import { Text } from 'react-native'

import type { PopupPosition } from '@fruits-chain/react-native-xiaoshu'
import {
  Space,
  Popup,
  Card,
  Button,
  TextInput,
} from '@fruits-chain/react-native-xiaoshu'

const positions: PopupPosition[] = ['center', 'left', 'right', 'top', 'bottom']

const BasicPopupPopup: React.FC = () => {
  const [state, setState] = useState<{
    show: boolean
    position: PopupPosition
    show2: boolean
    show3: boolean
  }>({
    show: false,
    position: 'left',
    show2: false,
    show3: false,
  })
  return (
    <>
      <Card title="基础用法" square>
        <Space>
          {positions.map(p => {
            return (
              <Button
                key={p}
                type="primary"
                text={`弹出位置:${p}`}
                onPress={() => {
                  setState(s => ({
                    ...s,
                    show: true,
                    position: p,
                  }))
                }}
              />
            )
          })}

          <Button
            type="primary"
            text="destroyOnClosed"
            onPress={() => {
              setState(s => ({
                ...s,
                show2: true,
              }))
            }}
          />

          <Button
            type="primary"
            text="overlayBackgroundColor"
            onPress={() => {
              setState(s => ({
                ...s,
                show3: true,
              }))
            }}
          />
        </Space>
      </Card>

      <Popup
        safeAreaInsetBottom={state.position !== 'top'}
        safeAreaInsetTop={state.position !== 'bottom'}
        visible={state.show}
        position={state.position}
        onPressOverlay={() => {
          setState(s => ({
            ...s,
            show: false,
          }))
        }}
        onRequestClose={() => {
          setState(s => ({
            ...s,
            show: false,
          }))
          return true
        }}
        round>
        <Popup.Header
          title="某一个标题"
          onClose={() => {
            setState(s => ({
              ...s,
              show: false,
            }))
          }}
        />

        <Card>
          <Text>内容</Text>
        </Card>
      </Popup>

      <Popup
        destroyOnClosed
        visible={state.show2}
        round
        position="bottom"
        safeAreaInsetBottom
        onPressOverlay={() => {
          setState(s => ({
            ...s,
            show2: false,
          }))
        }}>
        <Popup.Header title="每次打开都是新的子元素" />
        <TextInput
          placeholder="请输入及价格"
          addonAfter="元/kg"
          addonBefore="采购价"
        />
        <Popup.KeyboardShim />
      </Popup>

      <Popup
        overlayBackgroundColor="#098"
        visible={state.show3}
        round
        position="bottom"
        safeAreaInsetBottom
        onPressOverlay={() => {
          setState(s => ({
            ...s,
            show3: false,
          }))
        }}>
        <Popup.Header title="自定义 Overlay 颜色" />
      </Popup>
    </>
  )
}

export default BasicPopupPopup
