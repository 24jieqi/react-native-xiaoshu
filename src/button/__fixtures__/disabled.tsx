/**
 * title: 禁用按钮
 * description: 行动点不可用的时候，一般需要文案解释。
 */

import React, { memo } from 'react'

import {
  Button,
  Card,
  Space,
  Divider,
} from '@fruits-chain/react-native-xiaoshu'

const ButtonDisabled: React.FC = () => {
  return (
    <Card title="禁用按钮" square>
      <Space>
        <Space tail>
          <Button type="primary" text="primary" disabled />
          <Button type="hazy" text="hazy" disabled />
          <Button type="outline" text="outline" disabled />
          <Button type="ghost" text="ghost" disabled />
          <Button type="link" text="link" disabled />
        </Space>

        <Divider>·</Divider>

        <Space direction="horizontal" wrap>
          <Button type="primary" text="primary" disabled />
          <Button type="hazy" text="hazy" disabled />
          <Button type="outline" text="outline" disabled />
          <Button type="ghost" text="ghost" disabled />
          <Button type="link" text="link" disabled />
        </Space>
      </Space>
    </Card>
  )
}

export default memo(ButtonDisabled)
