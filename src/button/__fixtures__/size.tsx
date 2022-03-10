/**
 * title: 按钮尺寸
 * desc: xl、l、m、s、xs
 */

import React, { memo } from 'react'

import { Button, Card, Space } from '@fruits-chain/react-native-xiaoshu'

const ButtonSize: React.FC = () => {
  return (
    <Card title="按钮尺寸" square>
      <Space tail>
        <Button type="primary" size="xl" text="xl" />
        <Button type="primary" size="l" text="l" />
        <Button type="primary" size="m" text="m" />
        <Button type="primary" size="s" text="s" />
        <Button type="primary" size="xs" text="xs" />
      </Space>
      <Space direction="horizontal">
        <Button type="primary" size="xl" text="xl" />
        <Button type="primary" size="l" text="l" />
        <Button type="primary" size="m" text="m" />
        <Button type="primary" size="s" text="s" />
        <Button type="primary" size="xs" text="xs" />
      </Space>
      <Space>
        <Button round size="xs" text="round" />
        <Button round size="s" text="round" />
        <Button round text="round" />
        <Button round size="l" text="round" />
        <Button round size="xl" text="round" />
        <Button square text="square" />
      </Space>
    </Card>
  )
}

export default memo(ButtonSize)
