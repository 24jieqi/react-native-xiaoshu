/**
 * title: 按钮类型
 * desc: 按钮有五种类型：主按钮（默认）、朦胧按钮、边框按钮、幽灵按钮和链接按钮。
 */

import React, { memo } from 'react'

import {
  Button,
  Card,
  Space,
  Divider,
} from '@fruits-chain/react-native-xiaoshu'

const onPress = () => {
  console.log('点击按钮')
}

const ButtonType: React.FC = () => {
  return (
    <Card title="按钮类型" square>
      <Space>
        <Space>
          <Button type="primary" text="primary" onPress={onPress} />
          <Button type="hazy" text="hazy" onPress={onPress} />
          <Button type="outline" text="outline" onPress={onPress} />
          <Button type="ghost" text="ghost" onPress={onPress} />
          <Button type="link" text="link" onPress={onPress} />
        </Space>

        <Divider />

        <Space direction="horizontal" wrap>
          <Button type="primary" text="primary" onPress={onPress} />
          <Button type="hazy" text="hazy" onPress={onPress} />
          <Button type="outline" text="outline" onPress={onPress} />
          <Button type="ghost" text="ghost" onPress={onPress} />
          <Button type="link" text="link" onPress={onPress} />
        </Space>
      </Space>
    </Card>
  )
}

export default memo(ButtonType)
