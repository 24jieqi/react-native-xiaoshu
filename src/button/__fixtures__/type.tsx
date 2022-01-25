/**
 * title: 按钮类型
 * desc: 按钮有五种类型：主按钮（默认）、朦胧按钮、边框按钮、幽灵按钮和链接按钮。
 */

import React, { memo } from 'react'

import { Button, CellGroup, Space } from '@fruits-chain/react-native-xiaoshu'

const onPress = () => {
  console.log('点击按钮')
}

const ButtonType: React.FC = () => {
  return (
    <CellGroup title="按钮类型" bodyPaddingHorizontal>
      <Space tail>
        <Button type="primary" text="primary" onPress={onPress} />
        <Button type="hazy" text="hazy" onPress={onPress} />
        <Button type="outline" text="outline" onPress={onPress} />
        <Button type="ghost" text="ghost" onPress={onPress} />
        <Button type="link" text="link" onPress={onPress} />
      </Space>
      <Space direction="horizontal" wrap>
        <Button type="primary" text="primary" onPress={onPress} />
        <Button type="hazy" text="hazy" onPress={onPress} />
        <Button type="outline" text="outline" onPress={onPress} />
        <Button type="ghost" text="ghost" onPress={onPress} />
        <Button type="link" text="link" onPress={onPress} />
      </Space>
    </CellGroup>
  )
}

export default memo(ButtonType)
