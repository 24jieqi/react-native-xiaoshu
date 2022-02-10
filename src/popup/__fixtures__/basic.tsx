/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import type { PopupPosition } from '@fruits-chain/react-native-xiaoshu'
import { Popup, Button, Card, Space } from '@fruits-chain/react-native-xiaoshu'

const Styles = StyleSheet.create({
  hint: {
    fontSize: 12,
    color: '#666',
  },
  card: {
    height: 140,
    width: 140,
    backgroundColor: '#f30',
  },
})

const BasicPopup: React.FC = () => {
  const [state, setState] = useState<{
    show: boolean
    position: PopupPosition
  }>({
    show: false,
    position: 'left',
  })

  return (
    <ScrollView>
      <Space head>
        <Popup.Header title="弹窗头部" />

        <Popup.Header
          title="弹窗头部"
          leftExtra={<Text>左侧内容</Text>}
          rightExtra={<Text>右侧内容</Text>}
        />

        <Card title="基础用法" square>
          <Button
            type="primary"
            text="展示弹出层"
            onPress={() => {
              setState(s => ({
                ...s,
                show: true,
                position: 'center',
              }))
            }}
          />
        </Card>

        <Card title="不同的位置" square>
          <Space>
            <Text>
              弹出位置
              <Text style={Styles.hint}>共用一个弹层，切换不同位置会闪烁</Text>
            </Text>

            <Button
              type="primary"
              text="顶部弹出"
              onPress={() => {
                setState(s => ({
                  ...s,
                  show: true,
                  position: 'top',
                }))
              }}
            />

            <Button
              type="primary"
              text="底部弹出"
              onPress={() => {
                setState(s => ({
                  ...s,
                  show: true,
                  position: 'bottom',
                }))
              }}
            />

            <Button
              type="primary"
              text="左侧弹出"
              onPress={() => {
                setState(s => ({
                  ...s,
                  show: true,
                  position: 'left',
                }))
              }}
            />

            <Button
              type="primary"
              text="右侧弹出"
              onPress={() => {
                setState(s => ({
                  ...s,
                  show: true,
                  position: 'right',
                }))
              }}
            />
          </Space>
        </Card>
      </Space>

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
          title="这里是一个标题"
          onClose={() => {
            setState(s => ({
              ...s,
              show: false,
            }))
          }}
        />

        <View style={Styles.card}>
          <Text>内容</Text>
          {/* <Button
            type="success"
            text="关闭弹出"
            onPress={() => {
              setState(s => ({
                ...s,
                show: false,
              }))
            }}
          /> */}
        </View>
      </Popup>
    </ScrollView>
  )
}

export default BasicPopup
