/**
 * title: 图标按钮
 * desc: renderLeftIcon 的 color、size 会结合文案的字体颜色、大小动态计算。
 */

import React, { memo } from 'react'

import {
  Button,
  CellGroup,
  Space,
  Icon,
} from '@fruits-chain/react-native-xiaoshu'

const ButtonIcon: React.FC = () => {
  return (
    <CellGroup title="图标按钮" bodyPaddingHorizontal>
      <Space>
        <Button
          type="primary"
          renderLeftIcon={(color, size) => (
            <Icon.ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
        <Button
          type="primary"
          renderLeftIcon={(color, size) => (
            <Icon.ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
          danger
        />
        <Button
          type="hazy"
          renderLeftIcon={(color, size) => (
            <Icon.ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
        <Button
          type="outline"
          renderLeftIcon={(color, size) => (
            <Icon.ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
        <Button
          type="ghost"
          renderLeftIcon={(color, size) => (
            <Icon.ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
        <Button
          type="link"
          renderLeftIcon={(color, size) => (
            <Icon.ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
        <Button
          color="#690"
          type="hazy"
          renderLeftIcon={(color, size) => (
            <Icon.ArrowLeftOutline color={color} size={size} />
          )}
          text="ArrowLeftOutline"
        />
      </Space>
    </CellGroup>
  )
}

export default memo(ButtonIcon)
