import {
  Button,
  Divider,
  Space,
  Field,
} from '@fruits-chain/react-native-xiaoshu'
import React, { useLayoutEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

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

type ButtonType = 'primary' | 'custom' | 'native'

const Buttons: React.FC<{ type: ButtonType; loading: boolean }> = ({
  type,
  loading,
}) => {
  return (
    <Space>
      {new Array(mockData).fill(0).map((_, i) => {
        switch (type) {
          case 'native':
            return (
              <TouchableOpacity
                key={i}
                activeOpacity={0.6}
                style={[STYLES.button, loading ? STYLES.buttonLoading : null]}
                disabled={loading}>
                {loading ? <ActivityIndicator color="#fff" /> : null}
                <Text
                  style={[
                    STYLES.buttonText,
                    loading ? STYLES.buttonTextLoading : null,
                  ]}>
                  {i}
                </Text>
              </TouchableOpacity>
            )

          case 'custom':
            return (
              <Button
                key={i}
                theme={{ button_primary_color: '#098' }}
                loading={loading}>
                {i}
              </Button>
            )

          default:
            return (
              <Button key={i} loading={loading}>
                {i}
              </Button>
            )
        }
      })}
    </Space>
  )
}

const list: ButtonType[] = ['primary', 'custom', 'native']

const Benchmark: React.FC<ScreenProps> = () => {
  const [type, setType] = useState<ButtonType | undefined>(undefined)
  const [loading, setLoading] = useState(false)
  const options = list.map(o => ({
    value: o,
    label: o,
  }))

  return (
    <Layout.Page title="Benchmark">
      <Space>
        <Field.Switch title="loading" value={loading} onChange={setLoading} />
        <Field.ButtonOption
          title="type"
          deselect={false}
          options={options}
          value={type}
          onChange={setType}
        />

        <Button
          onPress={() => {
            setType(undefined)
          }}>
          clean type
        </Button>
      </Space>

      <Divider>render {mockData} button</Divider>

      <TimedRender key={`${loading.toString()}_${type}`}>
        {type ? <Buttons type={type} loading={loading} /> : null}
      </TimedRender>
    </Layout.Page>
  )
}

const STYLES = StyleSheet.create({
  time: { color: 'green', marginTop: 12, fontSize: 18 },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f30',
    height: 44,
    borderRadius: 4,
    flexDirection: 'row',
  },
  buttonLoading: {
    opacity: 0.4,
  },
  buttonText: {
    color: '#fff',
  },
  buttonTextLoading: {
    marginLeft: 4,
  },
})

export default Benchmark
