/**
 * title: 间距大小
 * description: 组件 `gap` 属性内置三个不同大小的间距，也可以采用具体的间距数值。
 */

import React from 'react'

import { Blank, Card, Space, Button } from '@fruits-chain/react-native-xiaoshu'

const BasicSpaceSize: React.FC = () => {
  return (
    <Blank top>
      <Space>
        <Card title="间距:s">
          <Space>
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>

        <Card title="间距:m">
          <Space gap="m">
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>

        <Card title="间距:l">
          <Space gap="l">
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>

        <Card title="间距:自定义">
          <Space direction="horizontal" gap={24}>
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>
      </Space>
    </Blank>
  )
}

export default BasicSpaceSize
