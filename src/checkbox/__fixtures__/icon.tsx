/**
 * title: 图标
 * description: 复选框选择图标，可以独立使用，`active` 属性控制激活状态，`activeColor` 修改激活状态的颜色，`size` 修改图标大小。
 */

import React, { useState } from 'react'
import { Checkbox, Card, Space } from '@fruits-chain/react-native-xiaoshu'

const CheckboxIcon: React.FC = () => {
  const [active, setActive] = useState(false)

  return (
    <Card title="仅图标">
      <Space>
        <Checkbox.Icon
          active={active}
          onPress={() => {
            setActive(s => !s)
          }}
        />
        <Checkbox.Icon active activeColor="#098" />
        <Checkbox.Icon active size={48} />
        <Checkbox.Icon
          disabled
          onPress={() => {
            console.log('+')
          }}
        />
        <Checkbox.Icon disabled active />
        <Checkbox.Icon disabled active activeColor="#098" />
      </Space>
    </Card>
  )
}

export default CheckboxIcon
