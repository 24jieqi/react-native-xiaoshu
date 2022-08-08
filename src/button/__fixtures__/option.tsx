/**
 * title: 选项按钮
 * desc: 简化版按钮，适合用于选择场景，和 Checkbox 组件有相似的作用。
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

const ButtonOption: React.FC = () => {
  return (
    <Card title="选项按钮" square>
      <Space>
        <Space>
          <Button.Option text="Option" onPress={onPress} />
          <Button.Option text="Option" onPress={onPress} active />
        </Space>

        <Divider />

        <Space direction="horizontal" wrap>
          <Button.Option text="最小" onPress={onPress} />
          <Button.Option text="Option" onPress={onPress} active />
          <Button.Option
            text="Option"
            onPress={onPress}
            active
            activeHighlight={false}
          />
          <Button.Option text="Option" onPress={onPress} badge={1} active />
          <Button.Option
            text="Option"
            onPress={onPress}
            badge={1}
            active
            activeHighlight={false}
          />
        </Space>
      </Space>
    </Card>
  )
}

export default memo(ButtonOption)
