import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native'

import { Overlay, Button } from 'react-native-xiaoshu'

const BasicOverlay: React.FC = () => {
  const [state, setState] = useState<Record<'normal' | 'inset', boolean>>({
    normal: false,
    inset: false,
  })

  return (
    <ScrollView>
      <Text>单独使用图标</Text>

      <Button
        text="显示遮罩层 Android 返回关闭"
        type="primary"
        onPress={() => {
          setState(s => ({
            ...s,
            normal: true,
          }))
        }}
      />

      <Overlay
        visible={state.normal}
        onPress={() => {
          setState(s => ({
            ...s,
            normal: false,
          }))
        }}
        onRequestClose={() => {
          console.log('???')
          setState(s => ({
            ...s,
            normal: false,
          }))
          return true
        }}
      />

      <View style={{ height: 20 }} />

      <Text>嵌入内容</Text>

      <Button
        text="嵌入内容"
        type="primary"
        onPress={() => {
          setState(s => ({
            ...s,
            inset: true,
          }))
        }}
      />

      <Overlay
        visible={state.inset}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={() => {
          setState(s => ({
            ...s,
            inset: false,
          }))
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log('????====')
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 200,
              height: 300,
              zIndex: 4,
              borderRadius: 4,
            }}
          />
        </TouchableWithoutFeedback>
      </Overlay>
    </ScrollView>
  )
}

export default BasicOverlay
