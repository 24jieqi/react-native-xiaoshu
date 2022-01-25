/**
 * title: 细边框
 * desc: 适用于小按钮。
 */

import React, { memo } from 'react'

import { Button, CellGroup, Space } from '@fruits-chain/react-native-xiaoshu'

const onPress = () => {
  console.log('点击按钮')
}

const ButtonHairline: React.FC = () => {
  return (
    <CellGroup title="细边框" bodyPaddingHorizontal>
      <Space tail>
        <Button type="outline" text="outline" onPress={onPress} hairline />
        <Button type="ghost" text="ghost" onPress={onPress} hairline />
        <Button
          type="outline"
          text="outline"
          onPress={onPress}
          danger
          hairline
        />
        <Button type="ghost" text="ghost" onPress={onPress} danger hairline />
      </Space>

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
          text="outline"
          size="xs"
          onPress={onPress}
          danger
          hairline
        />
        <Button
          type="ghost"
          text="ghost"
          size="xs"
          onPress={onPress}
          danger
          hairline
        />
      </Space>
    </CellGroup>
  )
}

export default memo(ButtonHairline)
