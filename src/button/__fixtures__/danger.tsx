/**
 * title: 危险按钮
 * desc: 删除/移动/修改权限等危险操作，一般需要二次确认。
 */

import React, { memo } from 'react'

import { Button, CellGroup, Space } from '@fruits-chain/react-native-xiaoshu'

const onPress = () => {
  console.log('点击按钮')
}

const ButtonDanger: React.FC = () => {
  return (
    <CellGroup title="危险按钮" bodyPaddingHorizontal>
      <Space tail>
        <Button type="primary" text="primary" onPress={onPress} danger />
        <Button type="hazy" text="hazy" onPress={onPress} danger />
        <Button type="outline" text="outline" onPress={onPress} danger />
        <Button type="ghost" text="ghost" onPress={onPress} danger />
        <Button type="link" text="link" onPress={onPress} danger />
      </Space>
      <Space direction="horizontal" wrap>
        <Button type="primary" text="primary" onPress={onPress} danger />
        <Button type="hazy" text="hazy" onPress={onPress} danger />
        <Button type="outline" text="outline" onPress={onPress} danger />
        <Button type="ghost" text="ghost" onPress={onPress} danger />
        <Button type="link" text="link" onPress={onPress} danger />
      </Space>
    </CellGroup>
  )
}

export default memo(ButtonDanger)
