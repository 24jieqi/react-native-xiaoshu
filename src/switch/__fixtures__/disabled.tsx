/**
 * title: 不可用
 * description: Switch 失效状态。
 */

import React, { useState } from 'react'

import { Switch, Space, Button } from '@fruits-chain/react-native-xiaoshu'

const BasicSwitchDisabled: React.FC = () => {
  const [state, setState] = useState(false)
  const [loading, setLoading] = useState(false)
  const [lazy, setLazy] = useState(false)

  return (
    <Space direction="vertical">
      <Switch disabled={state} />
      <Switch disabled={state} loading={loading} />
      <Button
        text="Toggle disabled"
        onPress={() => {
          setState(s => !s)
        }}
      />
      <Switch
        loading={loading}
        value={lazy}
        onChange={setLazy}
        inactiveChildren="异步切换0"
        activeChildren="异步切换1"
        beforeChange={() =>
          new Promise<boolean>(resolve => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
              resolve(true)
            }, 2000)
          })
        }
      />
    </Space>
  )
}

export default BasicSwitchDisabled
