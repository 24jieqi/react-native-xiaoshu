/**
 * title: 细边框
 * description: 适用于小按钮，一像素（StyleSheet.hairlineWidth）边框。
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

const ButtonHairline: React.FC = () => {
  return (
    <Card title="细边框" square>
      <Space>
        <Space>
          <Button type="outline" text="outline" onPress={onPress} hairline />
          <Button type="ghost" text="ghost" onPress={onPress} hairline />
          <Button
            type="outline"
            text="outline & danger"
            onPress={onPress}
            danger
            hairline
          />
          <Button
            type="ghost"
            text="ghost & danger"
            onPress={onPress}
            danger
            hairline
          />
        </Space>

        <Divider>·</Divider>

        <Space direction="horizontal">
          <Button
            type="outline"
            text="outline"
            size="xs"
            onPress={onPress}
            hairline
          />
          <Button
            type="ghost"
            text="ghost"
            size="xs"
            onPress={onPress}
            hairline
          />
          <Button
            type="outline"
            text="outline & danger"
            size="xs"
            onPress={onPress}
            danger
            hairline
          />
          <Button
            type="ghost"
            text="ghost & danger"
            size="xs"
            onPress={onPress}
            danger
            hairline
          />
        </Space>
      </Space>
    </Card>
  )
}

export default memo(ButtonHairline)
