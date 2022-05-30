/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import type { PopupPosition } from '@fruits-chain/react-native-xiaoshu'
import {
  Popup,
  Button,
  Card,
  Space,
  ButtonBar,
  Field,
} from '@fruits-chain/react-native-xiaoshu'

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
  const [pageVisible, setPageVisible] = useState(false)

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

        <Card title="弹出层当做一个页面" square>
          <Button
            text="显示弹出层"
            onPress={() => {
              setPageVisible(true)
            }}
          />

          <Popup.Page visible={pageVisible} round>
            <Popup.Header
              title="独立页面"
              onClose={() => {
                setPageVisible(false)
              }}
            />

            <ScrollView>
              <Space tail>
                <View style={{ height: 200, backgroundColor: '#f09' }} />
                <Field.TextInput
                  title="文案棒"
                  placeholder="请输入"
                  divider={false}
                />
                <View style={{ height: 200, backgroundColor: '#876' }} />
                <Field.TextInput
                  title="文案秒"
                  placeholder="请输入"
                  divider={false}
                />
                <View style={{ height: 200, backgroundColor: '#123' }} />
                <Field.TextInput
                  title="文案雅"
                  placeholder="请输入"
                  divider={false}
                />
                <View style={{ height: 200, backgroundColor: '#678' }} />
                <Field.TextInput
                  title="文案水"
                  placeholder="请输入"
                  divider={false}
                />
                <View style={{ height: 200, backgroundColor: '#321' }} />
              </Space>
            </ScrollView>

            <ButtonBar alone>
              <Button text="确定" />
            </ButtonBar>
          </Popup.Page>
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
