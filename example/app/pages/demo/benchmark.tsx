import { Button, Divider, Space } from '@fruits-chain/react-native-xiaoshu'
import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text } from 'react-native'

import Layout from '~/layouts/layout'
import type { RootStackScreenProps } from '~/routes'

type ScreenProps = RootStackScreenProps<'Benchmark'>

const TimedRender: React.FC<React.PropsWithChildren> = props => {
  const [start] = useState(Date.now())
  const [end, setEnd] = useState(0)

  useLayoutEffect(() => {
    setEnd(Date.now())
  }, [])

  return (
    <>
      {!!end && <Text style={STYLES.time}>Took {end - start}ms</Text>}
      {props.children}
    </>
  )
}

const mockData = 1000

type ButtonType = 'primary' | 'ghost' | 'hazy'

const Buttons: React.FC<{ type: ButtonType }> = ({ type }) => {
  return new Array(mockData).fill(0).map((_, i) => {
    return (
      <Button key={i} type={type}>
        {i}
      </Button>
    )
  })
}

const list: ButtonType[] = ['primary', 'ghost', 'hazy']

const Benchmark: React.FC<ScreenProps> = () => {
  const [type, setType] = useState<ButtonType | undefined>(undefined)

  return (
    <Layout.Page title="Benchmark" barStyle="light-content">
      <Space>
        {list.map(item => {
          return (
            <Button
              key={item}
              onPress={() => {
                setType(item)
              }}>
              {item}
            </Button>
          )
        })}

        <Button
          onPress={() => {
            setType(undefined)
          }}>
          clean
        </Button>
      </Space>

      <Divider />

      <TimedRender key={type}>
        {type ? <Buttons type={type} /> : null}
      </TimedRender>
    </Layout.Page>
  )
}

const STYLES = StyleSheet.create({
  time: { color: 'green', marginTop: 12, fontSize: 18 },
})

export default Benchmark
