/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'

import {
  Progress,
  ProgressPage,
  Button,
} from '@fruits-chain/react-native-xiaoshu'

const BasicProgress: React.FC = () => {
  const [state, setState] = useState({
    loading: true,
    percentage: 0,
  })

  useEffect(() => {
    setTimeout(() => {
      setState(s => ({
        ...s,
        loading: false,
      }))
    }, 1000)
  }, [])

  return (
    <ProgressPage loading={state.loading}>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={{ paddingHorizontal: 30 }}>
          <View style={{ height: 20 }} />

          <View>
            <Text>基础用法</Text>
          </View>

          <View style={{ height: 20 }} />

          <Progress percentage={state.percentage} animated />

          <View style={{ height: 20 }} />

          <Button
            round
            type="primary"
            text="数值++"
            onPress={() => {
              setState(s => {
                const p = s.percentage + 10

                return {
                  ...s,
                  percentage: p > 100 ? 0 : p,
                }
              })
            }}
          />

          <View style={{ height: 20 }} />

          <View>
            <Text>线条粗细</Text>
          </View>

          <View style={{ height: 20 }} />

          <Progress
            percentage={40}
            color="#f30"
            strokeWidth={10}
            trackColor="#ddd"
            textColor="#000"
          />

          <View style={{ height: 20 }} />

          <View>
            <Text>置灰</Text>
          </View>

          <View style={{ height: 20 }} />

          <Progress percentage={40} inactive />

          <View style={{ height: 20 }} />

          <View>
            <Text>样式定制</Text>
          </View>

          <View style={{ height: 20 }} />

          <Progress percentage={60} pivotText="自定义的内容" />

          <View style={{ height: 20 }} />

          <Progress percentage={80} showPivot={false} />

          <View style={{ height: 20 }} />

          <Progress
            percentage={40}
            color="#f30"
            strokeWidth={10}
            trackColor="#ddd"
            textColor="#000"
            inactive
          />
        </View>
      </ScrollView>
    </ProgressPage>
  )
}

export default BasicProgress
