/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React, { useState, useEffect, useCallback, memo, useRef } from 'react'
import { ScrollView } from 'react-native'

import {
  Progress,
  Button,
  Card,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const TestRender = () => {
  const index = useRef(0)
  useEffect(() => {
    index.current += 1
    console.log('TestRender => ', index.current)

    return () => {
      console.log('dddd')
    }
  }, [])

  return <Button text="测试按钮" />
}

const TestRenderMemo = memo(TestRender)

const BasicProgress: React.FC = () => {
  const [state, setState] = useState({
    loading: true,
    percentage: 0,
    fail: true,
  })

  const onPressReload = useCallback(() => {
    setState(s => ({
      ...s,
      loading: true,
    }))

    setTimeout(() => {
      setState(s => ({
        ...s,
        fail: false,
        loading: false,
      }))
    }, 1000)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setState(s => ({
        ...s,
        loading: false,
      }))
    }, 100)
  }, [])

  return (
    <Progress.Page
      loading={state.loading}
      fail={state.fail}
      onPressReload={onPressReload}
      syncRenderChildren>
      <ScrollView>
        <Space tail head>
          <TestRenderMemo />
          <TestRenderMemo />
          <TestRenderMemo />
          <TestRenderMemo />
          <TestRenderMemo />
          <TestRenderMemo />
          <TestRenderMemo />
          <TestRenderMemo />
          <Card title="基础用法" square>
            <Space gap={20} tail head>
              <Progress percentage={state.percentage} animated />
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
            </Space>
          </Card>

          <Card title="线条粗细" square>
            <Progress
              percentage={40}
              color="#f30"
              strokeWidth={10}
              trackColor="#ddd"
              textColor="#000"
            />
          </Card>

          <Card title="置灰" square>
            <Progress percentage={40} inactive />
          </Card>

          <Card title="样式定制" square>
            <Space gap={20} tail head>
              <Progress percentage={60} pivotText="自定义的内容" />
              <Progress percentage={80} showPivot={false} />
              <Progress
                percentage={40}
                color="#f30"
                strokeWidth={10}
                trackColor="#ddd"
                textColor="#000"
                inactive
              />
            </Space>
          </Card>
        </Space>
      </ScrollView>
    </Progress.Page>
  )
}

export default BasicProgress
