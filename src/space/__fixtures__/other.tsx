/**
 * title: 其他
 * description: 其他属性。
 */

import React from 'react'

import { Blank, Card, Space, Button } from '@fruits-chain/react-native-xiaoshu'

const BasicSpaceOther: React.FC = () => {
  return (
    <Blank top>
      <Space>
        <Card title="上下外边距" bodyPadding={false}>
          <Space head tail>
            <Button text="Button" />
            <Button text="Button" />
          </Space>
        </Card>

        <Card title="主轴对齐方式">
          <Space direction="horizontal" justify="center">
            <Button text="Button" size="xl" />
            <Button text="Button" size="m" />
            <Button text="Button" size="xs" />
          </Space>
        </Card>

        <Card title="交叉轴对齐方式">
          <Space direction="horizontal" align="center">
            <Button text="Button" size="xl" />
            <Button text="Button" size="m" />
            <Button text="Button" size="xs" />
          </Space>
        </Card>
      </Space>
    </Blank>
  )
}

export default BasicSpaceOther
