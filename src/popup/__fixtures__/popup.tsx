/**
 * title: Popup
 * desc: 通过 `position` 控制弹出层出现的动画。`Popup` 组件已经嵌套在 `Portal` 组件内，可以随意放置位置都会在根节点渲染，`Popup.PopupComponent` 则未被嵌套，需要结合业务自行安排。
 */

import React, { useState } from 'react'
import { Text } from 'react-native'

import type { PopupPosition } from '@fruits-chain/react-native-xiaoshu'
import {
  Blank,
  Space,
  Popup,
  Card,
  Button,
} from '@fruits-chain/react-native-xiaoshu'

const positions: PopupPosition[] = ['center', 'left', 'right', 'top', 'bottom']

const BasicPopupPopup: React.FC = () => {
  const [state, setState] = useState<{
    show: boolean
    position: PopupPosition
  }>({
    show: false,
    position: 'left',
  })
  return (
    <Blank top>
      <Card title="基础用法">
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
        </Space>
      </Card>

      <Popup
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
    </Blank>
  )
}

export default BasicPopupPopup
