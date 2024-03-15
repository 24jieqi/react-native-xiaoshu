/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { Text, View } from 'react-native'

// import React, { forwardRef, useRef, useState, useImperativeHandle } from 'react'
// import { Text, View, ScrollView } from 'react-native'
// import {
//   KeyboardAwareScrollView,
//   KeyboardAwareScrollViewProps,
// } from 'react-native-keyboard-aware-scroll-view'

import {
  Card,
  Space,
  ElevatorNav,
  Button,
  TextInput,
} from '@fruits-chain/react-native-xiaoshu'

// const CustomKeyboardAwareScrollView = forwardRef<
//   ScrollView,
//   KeyboardAwareScrollViewProps
// >((props, ref) => {
//   const ScrollViewRef = useRef<ScrollView>()

//   useImperativeHandle(ref, () => {
//     return ScrollViewRef.current
//   })

//   return (
//     <KeyboardAwareScrollView
//       {...props}
//       extraScrollHeight={60}
//       innerRef={ref => {
//         props.innerRef?.(ref)
//         ScrollViewRef.current = ref as any
//       }}
//     />
//   )
// })

const BasicTag: React.FC = () => {
  const [more1, setMore1] = useState(false)
  const [more2, setMore2] = useState(false)

  return (
    <>
      <Space direction="horizontal">
        <Button
          text={`${more1 ? '减少' : '新增'}一个 Anchor（可能会报错）`}
          size="s"
          onPress={() => {
            setMore1(s => !s)
          }}
        />
        <Button
          text={`${more2 ? '减少' : '新增'}一个非 Anchor`}
          size="s"
          onPress={() => {
            setMore2(s => !s)
          }}
        />
      </Space>

      <ElevatorNav
        triggerOffset={500}
        // scrollComponent={CustomKeyboardAwareScrollView as any}>
      >
        <Space tail head>
          <View style={{ height: 500, backgroundColor: '#f09' }}>
            <Text>其他非锚点区域</Text>
          </View>

          <ElevatorNav.Anchor title="基础用法">
            <Card title="基础用法" square>
              <View style={{ height: 220, backgroundColor: '#098' }} />
            </Card>
          </ElevatorNav.Anchor>

          {more2 ? (
            <View style={{ height: 500, backgroundColor: '#f76' }}>
              <Text>其他非锚点区域</Text>
            </View>
          ) : null}

          <ElevatorNav.Anchor title="基础用法2">
            <Card title="基础用法2" square>
              <View style={{ height: 520, backgroundColor: '#123' }} />
            </Card>
          </ElevatorNav.Anchor>

          {more1 ? (
            <ElevatorNav.Anchor title="基础用法more">
              <Card title="基础用法more" square>
                <View style={{ height: 620, backgroundColor: '#6787' }} />
              </Card>
            </ElevatorNav.Anchor>
          ) : null}

          <ElevatorNav.Anchor title="基础用法3">
            <Card title="基础用法3" square>
              <View style={{ height: 420, backgroundColor: '#fa7' }} />
            </Card>
          </ElevatorNav.Anchor>

          <TextInput placeholder="请输入什么" />

          <View style={{ height: 500, backgroundColor: '#ac6' }}>
            <Text>其他非锚点区域</Text>
          </View>
        </Space>
      </ElevatorNav>
    </>
  )
}

export default BasicTag
