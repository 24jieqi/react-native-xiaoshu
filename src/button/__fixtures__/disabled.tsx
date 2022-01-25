/**
 * title: 禁用按钮
 * desc: 行动点不可用的时候，一般需要文案解释。
 */

import React, { memo } from 'react'

import { Button, CellGroup, Space } from '@fruits-chain/react-native-xiaoshu'

const ButtonDisabled: React.FC = () => {
  return (
    <CellGroup title="禁用按钮" bodyPaddingHorizontal>
      <Space tail>
        <Button type="primary" text="primary" disabled />
        <Button type="hazy" text="hazy" disabled />
        <Button type="outline" text="outline" disabled />
        <Button type="ghost" text="ghost" disabled />
        <Button type="link" text="link" disabled />
      </Space>
      <Space direction="horizontal" wrap>
        <Button type="primary" text="primary" disabled />
        <Button type="hazy" text="hazy" disabled />
        <Button type="outline" text="outline" disabled />
        <Button type="ghost" text="ghost" disabled />
        <Button type="link" text="link" disabled />
      </Space>
    </CellGroup>
  )
}

export default memo(ButtonDisabled)
