/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { View } from 'react-native'

import { Card, Space, ElevatorNav } from '@fruits-chain/react-native-xiaoshu'

const BasicTag: React.FC = () => {
  return (
    <ElevatorNav>
      <Space tail head>
        <ElevatorNav.ElevatorNavItem title="基础用法">
          <Card title="基础用法" square>
            <View style={{ height: 220 }} />
          </Card>
        </ElevatorNav.ElevatorNavItem>
        <ElevatorNav.ElevatorNavItem title="基础用法2">
          <Card title="基础用法2" square>
            <View style={{ height: 620 }} />
          </Card>
        </ElevatorNav.ElevatorNavItem>
        <ElevatorNav.ElevatorNavItem title="基础用法3">
          <Card title="基础用法3" square>
            <View style={{ height: 420 }} />
          </Card>
        </ElevatorNav.ElevatorNavItem>
        {/* <ElevatorNav.ElevatorNavItem title="基础用法4">
          <Card title="基础用法3" square>
            <View style={{ height: 420 }} />
          </Card>
        </ElevatorNav.ElevatorNavItem>
        <ElevatorNav.ElevatorNavItem title="基础用法5">
          <Card title="基础用法3" square>
            <View style={{ height: 420 }} />
          </Card>
        </ElevatorNav.ElevatorNavItem> */}
      </Space>
    </ElevatorNav>
  )
}

export default BasicTag
