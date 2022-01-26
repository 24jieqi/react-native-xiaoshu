/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'

import { Overlay, Button, CellGroup } from '@fruits-chain/react-native-xiaoshu'

const BasicOverlay: React.FC = () => {
  const [state, setState] = useState<Record<'normal' | 'inset', boolean>>({
    normal: false,
    inset: false,
  })

  return (
    <>
      <CellGroup title="简单使用" bodyPaddingHorizontal>
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
      </CellGroup>

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

      <CellGroup title="嵌入内容" bodyPaddingHorizontal>
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
      </CellGroup>

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
    </>
  )
}

export default BasicOverlay
