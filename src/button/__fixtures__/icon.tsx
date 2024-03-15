/**
 * title: 图标按钮
 * description: renderLeftIcon 的 color、size 会结合文案的字体颜色、大小动态计算。
 */

import React, { memo } from 'react'

import { Button, Card, Space } from '@fruits-chain/react-native-xiaoshu'
import { ArrowLeftOutline } from '@fruits-chain/icons-react-native'

const ButtonIcon: React.FC = () => {
  return (
    <Card title="图标按钮" square>
      <Space>
        <Button
          type="primary"
          renderLeftIcon={(color, size) => (
            <ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
        <Button
          type="primary"
          renderLeftIcon={(color, size) => (
            <ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
          danger
        />
        <Button
          type="hazy"
          renderLeftIcon={(color, size) => (
            <ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
        <Button
          type="outline"
          renderLeftIcon={(color, size) => (
            <ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
        <Button
          type="ghost"
          renderLeftIcon={(color, size) => (
            <ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
        <Button
          type="link"
          renderLeftIcon={(color, size) => (
            <ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
        <Button
          color="#690"
          type="hazy"
          renderLeftIcon={(color, size) => (
            <ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
      </Space>
    </Card>
  )
}

export default memo(ButtonIcon)
